import * as Phaser from 'phaser';
import SceneTitle from './scenes/SceneTitle';
import SceneMain from './scenes/SceneMain';
import SceneOver from './scenes/SceneOver';
import Model from '../../toolbox/js/classes/ModelController/Model';
import Controller from '../../toolbox/js/classes/ModelController/Controller';

let isMobile = navigator.userAgent.indexOf(`Mobile`);
if (isMobile == -1){
    isMobile = navigator.userAgent.indexOf(`Tablet`);
}

console.log("hello")

const gameConfig_Desktop: Phaser.Types.Core.GameConfig = {
    title: 'Snake3k',
    type: Phaser.AUTO,
    scale: {
        width: 1000,
        height: 1000,
    },
    transparent: true,
    backgroundColor: '#000000',
    parent: 'div-phaser-game',
    scene: [SceneTitle, SceneMain, SceneOver]
};

const gameConfig_Mobile: Phaser.Types.Core.GameConfig = {
    title: 'Snake3k',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    parent: 'div-phaser-game',
    scene: [SceneTitle, SceneMain, SceneOver]
}

export const emitter = new Phaser.Events.EventEmitter();
export const model = new Model(isMobile > -1, emitter);
export const controller = new Controller(model);
export const game = new Phaser.Game(isMobile > -1 ? gameConfig_Mobile : gameConfig_Desktop);