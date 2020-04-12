import ToggleButton from "./ToggleButton";
import Constants from "../../Constants";
import Model from "../ModelController/Model";

class SoundButtons extends Phaser.GameObjects.Container {
    private model: any;

    constructor(config: {scene: Phaser.Scene, gameConfig: Phaser.Core.Config}, model: Model){
        super(config.scene);
        this.model = model;
        this.scene = config.scene;

        const musicToggleButton = new ToggleButton({
            gameConfig: config.gameConfig,
            backKey: 'toggleBack',
            offIcon: 'musicOff',
            onIcon: 'musicOn',
            scene: config.scene,
            value: true,
            event: Constants.TOGGLE_MUSIC,
            x: 240,
            y: 450
        }, this.model.emitter);

        const sfxToggleButton = new ToggleButton({
            gameConfig: config.gameConfig,
            backKey: 'toggleBack',
            offIcon: 'sfxOff',
            onIcon: 'sfxOn',
            scene: config.scene,
            value: true,
            event: Constants.TOGGLE_SFX,
            x: 240,
            y: 450
        }, this.model.emitter);

        this.add(musicToggleButton);
        this.add(sfxToggleButton);

        musicToggleButton.y = musicToggleButton.height / 2;
        musicToggleButton.x = musicToggleButton.width / 2;

        sfxToggleButton.x = +config.gameConfig.width - (sfxToggleButton.width / 2);
        sfxToggleButton.y = musicToggleButton.y;

        if(!model.musicOn){
            musicToggleButton.toggle()
        }

        if(!model.soundOn){
            sfxToggleButton.toggle();
        }


        this.scene.add.existing(this);
    }
}

export default SoundButtons;