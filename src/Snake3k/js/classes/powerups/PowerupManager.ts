import SpeedUpPowerup from "./SpeedUpPowerup";
import SlowDownPowerup from "./SlowDownPowerUp";
import ShrinkPortalPowerUp from "./ShrinkPortalPowerUp";
import IPowerUp from "./IPowerUp";

class PowerupManager {

    private static _instance: PowerupManager;

    public static get instance(): PowerupManager {
        if (!this._instance){
            PowerupManager._instance = new PowerupManager();
        }

        return PowerupManager._instance;
    }

    private constructor() {
        for (let key of Object.keys(this.powerupKeyMappings)) {
            let powerup = this.powerupKeyMappings[key] as IPowerUp;
            this.sumProbs += powerup.occuranceProbability;
        }
    }


    private powerupKeyMappings: {[key: number] : IPowerUp } = {
        1: SpeedUpPowerup.instance,
        2: SlowDownPowerup.instance,
        3: ShrinkPortalPowerUp.instance
    }

    private readonly sumProbs: number = 0;


    public getPowerupForKey (key: number): IPowerUp | undefined {
        return this.powerupKeyMappings[key];
    }

    // Determine which powerup should be displayed
    public getPowerupForPlayArea () : IPowerUp {
        // https://stackoverflow.com/a/38086831

        const rand = Math.random() * this.sumProbs;
        let sum = 0;
        for (let key of Object.keys(this.powerupKeyMappings)) {
            let powerup = this.powerupKeyMappings[key] as IPowerUp;

            // Loop until the random number is less than our cumulative pobability
            if(rand <= (sum = sum + powerup.occuranceProbability)){
                return powerup
            }
          }
    }

    public checkPlayerCollisionWithPowerups = (headIndex: number) => {

        for (let key of Object.keys(this.powerupKeyMappings)) {
            let powerup = this.powerupKeyMappings[key] as IPowerUp;

            for(let orb of powerup.powerupsOnMap){

                if(orb.gridIndex === headIndex){
                    // TODO:- Animate or summin when the user picks it up
                    // when picked up, display a label above it as to what it was

                    // TODO:- show a numeric count next to each to show how many the user has to use
                    orb.destroy();
                    orb.setActive(false);

                    powerup.increaseQuantity();

                }
            }
        }
    }

}

export default PowerupManager;