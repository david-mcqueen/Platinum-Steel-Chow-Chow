import PowerupType from "../../enums/PowerupType";
import Orb from "./Orb";

interface IPowerUp {
    type: PowerupType;
    displayColorTint: {topLeft: number, topRight: number, bottomLeft: number, bottomRight: number};
    quantity: number;
    activate: () => void;
    powerupsOnMap: Orb[];

    increaseQuantity: () => void;

    addPowerupToMap: (orb: Orb) => void;

    createOrb: (scene: Phaser.Scene) => Orb;

    orb?: Orb;
    occuranceProbability: number;
}

export default IPowerUp;