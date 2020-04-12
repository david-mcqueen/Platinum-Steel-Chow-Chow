import TravelDirection from "../enums/TravelDirection";

class PlayerPart extends Phaser.GameObjects.Rectangle {
    public directionOfTravel: TravelDirection;
    public nextTravelDirection: TravelDirection;
    public gridIndex: number;
}

export default PlayerPart;