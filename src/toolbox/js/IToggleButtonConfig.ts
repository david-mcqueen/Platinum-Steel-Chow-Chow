interface IToggleButtonConfig {
    scene: Phaser.Scene,
    backKey: string,
    onIcon: string,
    offIcon: string,
    value: boolean,
    gameConfig: Phaser.Core.Config,
    event?: string,
    x? :number,
    y?: number,
}

export default IToggleButtonConfig;