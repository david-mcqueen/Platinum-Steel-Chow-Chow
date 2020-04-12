import IGridConfig from "../../../toolbox/js/classes/IGridConfig";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import Player from "../classes/Player";
import TravelDirection from "../enums/TravelDirection";

class SceneMain extends Phaser.Scene {
    private grid: AlignGrid;
    private player: Player;
    private previousTime: number = 0;
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

    private gameSpeed: number = 1000; // ms between moving the player

    constructor(){
        super('SceneMain');
    }

    preload(){

    }

    create(){
        const gridConfig: IGridConfig = {
            rows: 20,
            columns: 20,
            scene: this
        };
        this.grid = new AlignGrid(gridConfig, this.game.config);
        this.grid.debug();

        this.player = new Player(90, 5, 0, this, this.grid, this.game.config);
        this.previousTime = this.game.getTime();

        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    update(time: number, delta: number) {

        // If the last element, then remove it?
        // Need to update the direction of travel every iteration?
        if(Math.floor(time) - this.gameSpeed > this.previousTime) {
            console.log("updating");
            this.previousTime = Math.floor(time);
            this.player.movePlayer();
        }

        if(this.cursorKeys.up.isDown){
            console.log("going up");
            this.player.setTravelDirection(TravelDirection.UP);
        }
        if(this.cursorKeys.down.isDown){
            this.player.setTravelDirection(TravelDirection.DOWN);
        }
        if(this.cursorKeys.left.isDown){
            this.player.setTravelDirection(TravelDirection.LEFT);
        }
        if(this.cursorKeys.right.isDown){
            this.player.setTravelDirection(TravelDirection.RIGHT);
        }
    }

}


export default SceneMain;