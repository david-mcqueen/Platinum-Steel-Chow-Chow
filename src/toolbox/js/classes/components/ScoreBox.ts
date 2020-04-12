import Constants from "../../Constants";
import Model from "../ModelController/Model";

class ScoreBox extends Phaser.GameObjects.Container {
    private text1: Phaser.GameObjects.Text;
    private model: Model;

    constructor(config: any, model: Model) {
        super(config.scene);
        this.model = model;
        this.scene = config.scene;
        this.text1 = this.scene.add.text(0,0,"SCORE:0");
        this.text1.setOrigin(0.5, 0.5);
        this.add(this.text1);

        this.scene.add.existing(this);

        model.emitter.off(Constants.SCORE_UPDATED).on(Constants.SCORE_UPDATED, this.scoreUpdated);
    }

    private scoreUpdated = () => {
        if(this.text1 && !this.model.gameOver){
            this.text1.setText(`SCORE:${this.model.score}`);
        }
    }
}

export default ScoreBox;