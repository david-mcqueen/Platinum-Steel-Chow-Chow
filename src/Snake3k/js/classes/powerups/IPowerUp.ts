import PowerupType from "../../enums/PowerupType";

interface IPowerUp {
    type: PowerupType;
    displayColorTint: {topLeft: number, topRight: number, bottomLeft: number, bottomRight: number};
    quantity: number;
    activate: () => void;
}

export default IPowerUp;