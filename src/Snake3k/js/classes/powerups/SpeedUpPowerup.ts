import PowerupType from "../../enums/PowerupType";
import IPowerUp from "./IPowerUp";
import { emitter } from "../../main";
import Constants from "../../../../toolbox/js/Constants";

class SpeedUpPowerup implements IPowerUp {

    private readonly boundHotKey: string = Constants.HOTKEY_1;

    // Singleton
    private static _instance: SpeedUpPowerup;

    public static get instance(): SpeedUpPowerup {

        if(!SpeedUpPowerup._instance){
            SpeedUpPowerup._instance = new SpeedUpPowerup();
        }

        return SpeedUpPowerup._instance;
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

    displayColorTint = { 
        topLeft: 0x000000, 
        topRight: 0x000000,
        bottomLeft: 0xff0000,
        bottomRight: 0xff0000
    };

    activate = () => {
        if (this._quantity > 0){
            console.log("activate");
            this._quantity--;
            this.updateHotbarVisibility();
        }
    };

    private updateHotbarVisibility = () => {
        this.orb.setVisible(this._quantity > 0)
    }
}

export default SpeedUpPowerup;