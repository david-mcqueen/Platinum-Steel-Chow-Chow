class CameraHint extends Phaser.GameObjects.Rectangle {
    public StartDeg: number;
    public EndDeg: number;
    public goToBounds: boolean; // For the cross over between -180 deg and +180 deg
}

export default CameraHint;