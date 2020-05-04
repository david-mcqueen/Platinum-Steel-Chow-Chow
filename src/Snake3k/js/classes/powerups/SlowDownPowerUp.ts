import PowerupType from "../../enums/PowerupType";
import IPowerUp from "./IPowerUp";
import { emitter } from "../../main";
import Constants from "../../../../toolbox/js/Constants";
import TintGradients from "./TintGradients";
import Orb from "./Orb";

class SlowDownPowerup implements IPowerUp {

    private readonly boundHotKey: string = Constants.HOTKEY_2;

    // Singleton
    private static _instance: SlowDownPowerup;

    public static get instance(): SlowDownPowerup {

        if(!SlowDownPowerup._instance){
            SlowDownPowerup._instance = new SlowDownPowerup();
        }

        return SlowDownPowerup._instance;
    }
    
    private constructor() {
        this.type = PowerupType.SPEEDUP;

        emitter.off(this.boundHotKey).on(this.boundHotKey, this.activate)
    }

    private _powerupsOnMap: Orb[] = [];

    public get powerupsOnMap() : Orb[] {

        // Perform a cleanup to make sure any destroyed objects are not kept around
        const activePowerups = this._powerupsOnMap.filter((orb: Orb) => {
            return orb.active
        })

        this._powerupsOnMap = activePowerups;

        return [...this._powerupsOnMap];
    }

    public addPowerupToMap = (orb: Orb): void => {
        this._powerupsOnMap.push(orb)
    }

    public createOrb = (scene: Phaser.Scene) : Orb  => {
        return (scene.add.image(24, 24, 'powerup')
            .setTint(this.displayColorTint.topLeft, this.displayColorTint.topRight, this.displayColorTint.bottomLeft, this.displayColorTint.bottomRight) as unknown) as Orb

    }

    // TODO:- Make a manager of a sort which each powerup adds its bound key to and then only 1 can be bound?

    public readonly type: PowerupType;
    public orb?: Orb;

    public readonly occuranceProbability: number = 80;

    private _quantity = 0;

    public get quantity() {
        return this._quantity;
    }

    increaseQuantity = () => {
        this._quantity++;
        this.updateHotbarVisibility();
    }

    displayColorTint = TintGradients.BLUE;

    activate = () => {
        if (this._quantity > 0){
            
            emitter.emit(Constants.POWERUP_SLOW_DOWN_ACTIVATED);

            this._quantity--;
            this.updateHotbarVisibility();
        }
    };

    private updateHotbarVisibility = () => {
        this.orb.visible = (this._quantity > 0)
    }
}

export default SlowDownPowerup;