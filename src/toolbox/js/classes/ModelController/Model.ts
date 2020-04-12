import Constants from "../../Constants";

class Model {
    private _emitter: Phaser.Events.EventEmitter;

    private _score: number;
    private _isMobile: boolean;
    private _soundOn: boolean;
    private _musicOn: boolean;
    private _gameOver: boolean;

    get emitter() {
        return this._emitter;
    }

    set gameOver(val: boolean){
        this._gameOver = val;
    }

    get gameOver() {
        return this._gameOver;
    }

    set musicOn(val: boolean){
        this._musicOn = val;
        this._emitter.emit(Constants.MUSIC_CHANGED);
    }

    get musicOn(){
        return this._musicOn;
    }

    set soundOn(val: boolean){
        this._soundOn = val;
    }

    get soundOn() {
        return this._soundOn;
    }

    set score(val: number){
        this._score = val;
        this._emitter.emit(Constants.SCORE_UPDATED);
    }

    get score(): number {
        return this._score;
    }

    get isMobile(): boolean {
        return this._isMobile;
    }

    constructor(isMobile: boolean, emitter: Phaser.Events.EventEmitter) {
        this._emitter = emitter;

        this._score = 0;
        this._isMobile = isMobile;
        this._soundOn = true;
        this._musicOn = true;
    }
}

export default Model;