import IGridConfig from "../../../toolbox/js/classes/IGridConfig";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import Player from "../classes/Player";
import TravelDirection from "../enums/TravelDirection";
import Align from "../../../toolbox/js/classes/util/align";
import Food from "../classes/Food";

class SceneMain extends Phaser.Scene {
    private grid: AlignGrid;
    private player: Player;
    private previousTime: number = 0;
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

    private gameSpeed: number = 500; // ms between moving the player

    private gridConfig: IGridConfig;
    private shouldAddFood: boolean = false;

    private food: Food;

    constructor(){
        super('SceneMain');
    }

    preload(){

    }

    create(){
        this.gridConfig = {
            rows: 25,
            columns: 25,
            scene: this
        };
        this.grid = new AlignGrid(this.gridConfig, this.game.config);
        // this.grid.debug();
        
        this.player = new Player(90, 5, this, this.grid, this.game.config);
        this.previousTime = this.game.getTime();
        
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.shouldAddFood = true;
    }

    update(time: number, delta: number) {

        // Only move if we have hit the epoch 
        if(Math.floor(time) - this.gameSpeed > this.previousTime) {
            console.log("updating");
            this.previousTime = Math.floor(time);
            this.player.movePlayer();
            
            this.checkPlayerCollision();

            this.addPendingFood();
        }

        // User can tell it to change direction whenever they want
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

        // DEBUG:- Add tail piece
        if(this.cursorKeys.space.isDown){
            this.player.queuePieceAddition();
        }

        // DEBUG:- Add food piece
        if(this.cursorKeys.shift.isDown){
            this.shouldAddFood = true;
        }
    }

    private checkPlayerCollision = () => {
        const head = this.player.head;

        if (this.food && head){
            if (head.gridIndex == this.food.gridIndex){
                // OM NOM NOM NOM
                this.removeFoodItem(this.food);
                this.player.queuePieceAddition();
                this.shouldAddFood = true;
            }
        }
    }


    // Can be made generic
    private removeFoodItem = (food :Food) => {
        food.destroy();
    }

    private addPendingFood = () => {
        if (!this.shouldAddFood){
            return;
        }
        this.shouldAddFood = false;
        const placement = Math.floor(Math.random() * (this.gridConfig.rows * this.gridConfig.columns));
        const food = this.add.rectangle(0, 0, 100, 100, 0xffffff) as Food;
        
        Align.scaleToGameW(food, 0.02, this.game.config);
        this.grid.placeAtIndex(placement, food);
        food.gridIndex = placement;
        this.food = food;
    }

}


export default SceneMain;