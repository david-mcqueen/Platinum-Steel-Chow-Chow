import IToggleButtonConfig from "../../IToggleButtonConfig";
import Align from "../util/align";

class ToggleButton extends Phaser.GameObjects.Container {
    private config: IToggleButtonConfig;
    private back: Phaser.GameObjects.Image;
    private onIcon: Phaser.GameObjects.Image;
    private offIcon: Phaser.GameObjects.Image;
    private value: boolean;
    private event?: string;
    private emitter: Phaser.Events.EventEmitter;

    constructor(config: IToggleButtonConfig, emitter: Phaser.Events.EventEmitter) {
        super(config.scene);
        this.config = config;
        this.scene = config.scene;
        this.emitter = emitter;

        this.back = this.scene.add.image(0, 0, config.backKey);
        this.onIcon = this.scene.add.image(0, 0, config.onIcon);
        this.offIcon = this.scene.add.image(0, 0, config.offIcon);

        Align.scaleToGameW(this.back, 0.1, config.gameConfig);
        Align.scaleToGameW(this.onIcon, 0.05, config.gameConfig);
        Align.scaleToGameW(this.offIcon, 0.05, config.gameConfig);

        this.add(this.back);
        this.add(this.onIcon);
        this.add(this.offIcon);

        this.value = config.value;

        if (config.event) {
            this.event = config.event;
        }

        this.setIcons();

        this.back.setInteractive();
        this.back.on('pointerdown', this.toggle);

        if(config.x){
            this.x = config.x;
        }
        if (config.y){
            this.y = config.y;
        }

        this.setSize(this.back.displayWidth, this.back.displayHeight);
        
        this.scene.add.existing(this);
    }

    public toggle = () => {
        this.value = !this.value;
        this.setIcons();

        if (this.event){
            this.emitter.emit(this.event, this.value);
        }
    }

    private setIcons = () => {
        this.onIcon.visible = this.value;
        this.offIcon.visible = !this.value;
    }
}

export default ToggleButton;