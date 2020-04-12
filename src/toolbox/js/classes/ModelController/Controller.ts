import Constants from "../../Constants";
import Model from "./Model";

class Controller{
    private model: Model;
    private emitter: Phaser.Events.EventEmitter;

    constructor(model: Model) {
        this.model = model;
        this.emitter = model.emitter;
        this.emitter.on(Constants.SET_SCORE, this.setScore);
        this.emitter.on(Constants.UP_POINTS, this.upPoints);
        this.emitter.on(Constants.TOGGLE_MUSIC, this.toggleMusic);
        this.emitter.on(Constants.TOGGLE_SFX, this.toggleSfx);
    }

    setScore = (score: number) => {
        this.model.score = score;
    }

    upPoints = (points: number) => {
        const newScore =  this.model.score + points;
        this.model.score = newScore;
    }

    toggleMusic = (val: boolean) => {
        this.model.musicOn = val;
    }

    toggleSfx = (val: boolean) => {
        this.model.soundOn = val;
    }
}

export default Controller;