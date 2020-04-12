import titleImg from '../../../toolbox/images/title.png';

import greenToggleBack from '../../../toolbox/images/ui/toggles/green.png';
import sfxOffIcon from '../../../toolbox/images/ui/icons/sfx_off.png';
import sfxOnIcon from '../../../toolbox/images/ui/icons/sfx_on.png';
import musicOnIcon from '../../../toolbox/images/ui/icons/music_on.png';
import musicOffIcon from '../../../toolbox/images/ui/icons/music_off.png';

import Align from '../../../toolbox/js/classes/util/align';
import AlignGrid from '../../../toolbox/js/classes/util/AlignGrid';

import buttonOrangeRoundImg from '../../../toolbox/images/ui/buttons/round/orange.png';
import buttonGreenRoundImg from '../../../toolbox/images/ui/buttons/round/green.png';
import FlatButton from '../../../toolbox/js/classes/ui/FlatButton';
import Constants from '../../../toolbox/js/Constants';
import { emitter, model } from '../main';
import IMediaManagerConfig from '../../../toolbox/js/classes/IMediaManagerConfig';
import MediaManager from '../../../toolbox/js/classes/util/MediaManager';

import backgroundSoundmp3 from '../../audio/random-race.mp3';
import backgroundSoundogg from '../../audio/random-race.ogg';
import SoundButtons from '../../../toolbox/js/classes/ui/SoundButtons';

class SceneTitle extends Phaser.Scene {
    private grid: AlignGrid;
    private mediaManager: MediaManager;
    private soundButtons: SoundButtons;

    constructor(){
        super({key: 'SceneTitle'});
    }

    preload() {
        this.load.image('title', titleImg);
        this.load.image(`buttonGreenRound`, buttonGreenRoundImg);
        this.load.image(`buttonOrangeRound`, buttonOrangeRoundImg);
        this.load.audio('background', [backgroundSoundmp3, backgroundSoundogg]);

        this.load.image("toggleBack", greenToggleBack);
        this.load.image("sfxOff", sfxOffIcon);
        this.load.image("sfxOn", sfxOnIcon);
        this.load.image("musicOn", musicOnIcon);
        this.load.image("musicOff", musicOffIcon);
    }

    create() {
        console.log('SceneTitle create');
        this.grid = new AlignGrid({rows: 11, columns: 11, scene: this}, this.game.config);
        this.soundButtons = new SoundButtons({scene: this, gameConfig: this.game.config}, model);
        
        const title = this.add.image(0, 0, 'title');
        Align.scaleToGameW(title, 0.8, this.game.config);
        this.grid.placeAtIndex(38, title);

        const btnStart = new FlatButton({
            scene: this,
            key: "buttonGreenRound",
            text: "Start!",
            x: 240,
            y: 100,
            event: Constants.START_GAME,
            params: 'start_game'
        }, model);

        this.grid.placeAtIndex(93, btnStart);

        const mediaConfig: IMediaManagerConfig = {
            scene: this
        };
        this.mediaManager = new MediaManager(mediaConfig, model);
        this.mediaManager.setBackgroundMusic('background');

        emitter.off(Constants.START_GAME).on(Constants.START_GAME, this.startGame);

    }

    update() {

    }

    private startGame = (params: any) => {
        console.log(params);
        this.scene.start('SceneMain')
    }
}

export default SceneTitle;