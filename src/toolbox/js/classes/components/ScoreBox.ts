import Constants from "../../Constants";
import Model from "../ModelController/Model";

export interface IScoreboxConfig {
    scene: Phaser.Scene,
    x? :number,
    y?: number,
    originX?: number,
    originY?: number
};

class ScoreBox extends Phaser.GameObjects.Container {
    private text1: Phaser.GameObjects.Text;
    private model: Model;

    constructor(config: IScoreboxConfig, model: Model) {
        super(config.scene);
        this.model = model;
        this.scene = config.scene;
        
        this.text1 = this.scene.add.text(config.x || 0 , config.y || 0, "SCORE:0");
        
        this.text1.setOrigin(config.originX || 0.5, config.originY || 0.5);
        this.text1.setScrollFactor(0).setFontSize(12);
        // this.add(this.text1);

        // this.scene.add.existing(this);
        this.text1.depth = 1001;

        model.emitter.off(Constants.SCORE_UPDATED).on(Constants.SCORE_UPDATED, this.scoreUpdated);
    }

    private scoreUpdated = () => {
        if(this.text1 && !this.model.gameOver){
            this.text1.setText(`SCORE:${this.model.score}`);
        }
    }
}

export default ScoreBox;