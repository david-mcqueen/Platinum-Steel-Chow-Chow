import * as Phaser from 'phaser';
import SceneMain from './scenes/SceneMain';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',

    type: Phaser.AUTO,

    scale: {
        width: 480,
        height: 640,
    },

    parent: 'div-phaser-game',
    scene: [ SceneMain]
};

export const game = new Phaser.Game(gameConfig);