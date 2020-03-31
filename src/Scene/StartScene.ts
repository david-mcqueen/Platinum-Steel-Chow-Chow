import { Square } from "./Square";

class StartScene extends Phaser.Scene {
    create () {
        this.game.scene.add('Square', Square, true, { x: 400, y: 300 });
    }
}

export default StartScene;