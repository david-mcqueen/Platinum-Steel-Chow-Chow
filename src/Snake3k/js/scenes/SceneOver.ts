import titleImg from '../../../toolbox/images/title.png';
import AlignGrid from '../../../toolbox/js/classes/util/AlignGrid';
import Align from '../../../toolbox/js/classes/util/Align';

import buttonGreenRoundImg from '../../../toolbox/images/ui/buttons/round/green.png';
import buttonOrangeRoundImg from '../../../toolbox/images/ui/buttons/round/orange.png';
import FlatButton from '../../../toolbox/js/classes/ui/FlatButton';
import Constants from '../../../toolbox/js/Constants';
import { emitter, model } from '../main';

class SceneOver extends Phaser.Scene {
    private grid: AlignGrid;

    constructor(){
        super('SceneOver');
    }

    preload() {
        this.load.image('title', titleImg);
        this.load.image(`buttonGreenRound`, buttonGreenRoundImg);
        this.load.image(`buttonOrangeRound`, buttonOrangeRoundImg);
    }

    create() {
        this.grid = new AlignGrid({rows: 11, columns: 11, scene: this, height: +this.game.config.height, width: +this.game.config.width});
        
        const title = this.add.image(0, 0, 'title');
        Align.scaleToGameW(title, 0.8, this.game.config);
        this.grid.placeAtIndex(38, title);

        const btnStart = new FlatButton({
            scene: this,
            key: "buttonGreenRound",
            text: "Play Again.",
            x: 240,
            y: 100,
            event: Constants.RESTART_GAME,
            params: 'restart_game'
        }, model);

        this.grid.placeAtIndex(93, btnStart);

        emitter.off(Constants.RESTART_GAME).on(Constants.RESTART_GAME, this.restartGame);
        
    }

    private restartGame = (params: any) => {
        console.log(params);
        this.scene.start('SceneMain');
    }

}

export default SceneOver;