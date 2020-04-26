import PowerupType from "../../enums/PowerupType";

interface IPowerUp {
    type: PowerupType;
    activate: () => void;
}

export default IPowerUp;