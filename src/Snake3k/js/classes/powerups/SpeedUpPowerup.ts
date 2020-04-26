import PowerupType from "../../enums/PowerupType";
import IPowerUp from "./IPowerUp";
import PowerupBase from "./PowerupBase";

class SpeedUpPowerup extends PowerupBase implements IPowerUp {

    constructor() {
        super(PowerupType.SPEEDUP);
    }

    activate = () => {
        console.log("activate");
    };
}

export default SpeedUpPowerup;