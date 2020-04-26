import PowerupType from "../../enums/PowerupType";
import IPowerUp from "./IPowerUp";
import PowerupBase from "./PowerupBase";

class SpeedUpPowerup extends PowerupBase implements IPowerUp {

    constructor() {
        super(PowerupType.SPEEDUP);
    }

    _quantity = 0;

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