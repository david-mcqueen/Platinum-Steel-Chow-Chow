import SpeedUpPowerup from "./SpeedUpPowerup";
import SlowDownPowerup from "./SlowDownPowerUp";
import ShrinkPortalPowerUp from "./ShrinkPortalPowerUp";
import IPowerUp from "./IPowerUp";

class PowerupManager {

    private powerupKeyMappings = {
        1: SpeedUpPowerup.instance,
        2: SlowDownPowerup.instance,
        3: ShrinkPortalPowerUp.instance
    }

    private readonly sumProbs: number = 0;

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

}

export default PowerupManager;