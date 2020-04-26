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
    private _quantity = 0;

    set quantity(val: number) {
        this._quantity = val;
    }

    displayColorTint = { 
        topLeft: 0x000000, 
        topRight: 0x000000,
        bottomLeft: 0xff0000,
        bottomRight: 0xff0000
    };

    activate = () => {
        console.log("activate");
    };
}

export default SpeedUpPowerup;