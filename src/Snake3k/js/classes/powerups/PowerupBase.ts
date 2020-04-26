import PowerupType from "../../enums/PowerupType";

class PowerupBase {
    private readonly _type: PowerupType;

    constructor(type: PowerupType){
        this._type = type;
    }

    get type(): PowerupType {
        return this._type;
    }
}


export default PowerupBase;