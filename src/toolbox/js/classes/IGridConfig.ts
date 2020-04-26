interface IGridConfig {
    scene: Phaser.Scene,
    height: number,
    width: number,
    rows?: number,
    columns?: number,
    gridOffset?:  {
        x: number,
        y: number
    }
}

export default IGridConfig;