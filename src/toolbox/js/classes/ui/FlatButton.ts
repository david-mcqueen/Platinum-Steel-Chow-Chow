import IFlatButtonConfig from "../IFlatButtonConfig";
import Model from "../ModelController/Model";

class FlatButton extends Phaser.GameObjects.Container {
    private config: IFlatButtonConfig;
    private back: Phaser.GameObjects.Image;
    private text1: Phaser.GameObjects.Text;
    private emitter: Phaser.Events.EventEmitter;

    constructor(config: IFlatButtonConfig, model: Model) {
        super(config.scene);
        this.config = config;

        this.emitter = model.emitter;

        if (!config.scene){
            console.error("Missing scene");
            return;
        }

        if(!config.key){
            console.error("Missing key");
            return;
        }

        this.scene = config.scene;
        this.back = this.scene.add.image(0, 0, config.key);
        this.add(this.back);

        if (config.text){
            if(config.textConfig){
                this.text1 = this.scene.add.text(0, 0, config.text, config.textConfig);
            }else {
                this.text1 = this.scene.add.text(0, 0, config.text);
            }
            this.text1.setOrigin(0.5, 0.5);
            this.add(this.text1);
        }

        if(config.x){
            this.x = config.x;
        }
        if (config.y){
            this.y = config.y;
        }
        
        this.scene.add.existing(this);

        if (config.event){
            this.back.setInteractive();
            this.back.on('pointerdown', this.pressed)
        }

        if (!model.isMobile){
            this.back.on('pointerover', this.mouseOver);
            this.back.on('pointerout', this.mouseOut);
        }

    }

    private mouseOver = () => {
        this.y -= 5;
    }

    private mouseOut = () => {
        this.y += 5;
    }

    private pressed = () => {
        if(this.config.params){
            this.emitter.emit(this.config.event, this.config.params)
        }
        else{
            this.emitter.emit(this.config.event);
        }
    }
}

export default FlatButton;