import IMediaManagerConfig from "../IMediaManagerConfig";
import Constants from "../../Constants";
import Model from "../ModelController/Model";

class MediaManager {
    private screen: Phaser.Scene;
    private background_title: Phaser.Sound.BaseSound;
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
        if(this.background_title){
            if(this.model.musicOn){
                this.background_title.play();
            } else {
                this.background_title.stop();
            }
        }
    }

    public setBackgroundMusic = (key: string) => {
        this.background_title = this.screen.sound.add(key, {volume: 0.5, loop: true});
        this.musicChanged();
    }

    public stop = () => {
        this.background_title.stop();
    }
}

export default MediaManager;