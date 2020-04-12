import IMediaManagerConfig from "../IMediaManagerConfig";
import Constants from "../../Constants";
import Model from "../ModelController/Model";

class MediaManager {
    private screen: Phaser.Scene;
    private background: Phaser.Sound.BaseSound;
    private emitter: Phaser.Events.EventEmitter;
    private model: any;

    constructor(config: IMediaManagerConfig, model: Model){
        this.screen = config.scene;
        this.emitter = model.emitter;
        this.model = model;
        this.emitter.on(Constants.PLAY_SOUND, this.playSound);
        this.emitter.on(Constants.MUSIC_CHANGED, this.musicChanged);
    }

    private playSound = (key: string) => {
        if(this.model.soundOn){
            const sound = this.screen.sound.add(key);
            sound.play();
        }
    }

    private musicChanged = () => {
        if(this.background){
            if(this.model.musicOn){
                this.background.play();
            } else {
                this.background.stop();
            }
        }
    }

    public setBackgroundMusic = (key: string) => {
        console.log(this.background);
        this.background = this.screen.sound.add(key, {volume: 0.5, loop: true});
        this.musicChanged();
    }
}

export default MediaManager;