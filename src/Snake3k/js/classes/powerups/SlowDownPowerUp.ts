import PowerupType from "../../enums/PowerupType";
import IPowerUp from "./IPowerUp";
import { emitter } from "../../main";
import Constants from "../../../../toolbox/js/Constants";
import TintGradients from "./TintGradients";

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

    // TODO:- Make a manager of a sort which each powerup adds its bound key to and then only 1 can be bound?

    public readonly type: PowerupType;
    public orb?: Phaser.GameObjects.Image;

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
        this.orb.setVisible(this._quantity > 0)
    }
}

export default SlowDownPowerup;