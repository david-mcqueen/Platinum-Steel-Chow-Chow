import IGridConfig from "../../../toolbox/js/classes/IGridConfig";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import Player from "../classes/Player";
import TravelDirection from "../enums/TravelDirection";
import Align from "../../../toolbox/js/classes/util/align";
import Food from "../classes/Food";
import ScoreBox from "../../../toolbox/js/classes/components/ScoreBox";
import { model, emitter } from "../main";
import Constants from "../../../toolbox/js/Constants";

class SceneMain extends Phaser.Scene {
    private grid: AlignGrid;
    private player: Player;
    private previousTime: number = 0;
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
    private scoreBox: ScoreBox;

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
        // Grid
        this.gridConfig = {
            rows: 25,
            columns: 25,
            scene: this
        };
        this.grid = new AlignGrid(this.gridConfig, this.game.config);
        
        // Score Box
        this.scoreBox = new ScoreBox({scene: this}, model);
        this.grid.placeAtIndex(22, this.scoreBox);
        
        // Player
        this.player = new Player(90, 5, this, this.grid, this.game.config);
        this.previousTime = this.game.getTime();
        
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.shouldAddFood = true;
        
        // this.grid.debug();
    }

    update(time: number, delta: number) {
        if (this.player.isDead){
            return;
        }

        // Only move if we have hit the epoch 
        if(Math.floor(time) - this.gameSpeed > this.previousTime) {

            this.previousTime = Math.floor(time);
            this.player.movePlayer();
            
            this.checkPlayerCollision();

            this.addPendingFood();
        }

        // User can tell it to change direction whenever they want
        if(this.cursorKeys.up.isDown){
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
        const headIndex = this.player.currentPlayersHeadPosition;

        this.checkPlayerCollisionWithFood(headIndex);
        this.checkPlayerCollisionWithSelfSnake(headIndex, this.player.positionWithoutHead)
    }

    // Check if the player has collided with food, and eat it if necessary
    private checkPlayerCollisionWithFood = (headIndex: number) => {
        if (this.food && headIndex > -1){
            if (headIndex == this.food.gridIndex){
                // OM NOM NOM NOM
                this.removeFoodItem(this.food);
                this.player.queuePieceAddition();
                this.shouldAddFood = true;
                emitter.emit(Constants.UP_POINTS, 1);
            }
        }
    }

    private checkPlayerCollisionWithSelfSnake = (headIndex: number, snake: number[])  => {
        if(snake.indexOf(headIndex) > -1){
            // uh oh! We dead.
            this.player.kill(() => {
                // Have finished animating the player
                this.scene.start("SceneOver");
            });
        }
    }


    // Can be made generic
    private removeFoodItem = (food :Food) => {
        food.destroy();
    }

    private getRandomIndex = (): number => {
        let placement = Math.floor(Math.random() * (this.gridConfig.rows * this.gridConfig.columns));

        const occupiedSpace = this.player.fullPosition;

        // Keep going until we find an available index
        // TODO:- What if there are NO available squares? There will be a better way to do this to consciously look instead
        // of recursively drilling until we hit something. TODO:- 
        if (occupiedSpace.indexOf(placement) > -1){
            return this.getRandomIndex();
        }

        return placement;
    }

    private addPendingFood = () => {
        if (!this.shouldAddFood){
            return;
        }
        this.shouldAddFood = false;
        const food = this.add.rectangle(0, 0, 100, 100, 0xffffff) as Food;
        
        const placement = this.getRandomIndex();
        
        Align.scaleToGameW(food, 0.02, this.game.config);
        this.grid.placeAtIndex(placement, food);
        food.gridIndex = placement;
        this.food = food;
    }

}


export default SceneMain;