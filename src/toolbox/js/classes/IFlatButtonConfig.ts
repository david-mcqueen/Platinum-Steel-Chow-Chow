interface IFlatButton {
    scene: Phaser.Scene,
    key: string,
    text: string,
    x? :number,
    y?: number,
    event?: string,
    params?: any,
    textConfig?: {
        color: string,
        fontSize: number
    }
}

export default IFlatButton;