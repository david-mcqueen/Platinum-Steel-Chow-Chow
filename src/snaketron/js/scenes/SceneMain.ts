import IGridConfig from "../../../toolbox/js/classes/IGridConfig";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import Player from "../classes/Player";
import TravelDirection from "../enums/TravelDirection";
import Align from "../../../toolbox/js/classes/util/align";
import Food from "../classes/Food";
import ScoreBox from "../../../toolbox/js/classes/components/ScoreBox";
import { model, emitter } from "../main";
import Constants from "../../../toolbox/js/Constants";

import backgroundImg from '../../images/background.jpg';
import CameraHint from "../classes/CameraHint";
import CameraManager from "../classes/CameraManager";

class SceneMain extends Phaser.Scene {

    private gridCellHeight: number = 20;
    private gridCellWidth: number = 20;

    private grid: AlignGrid;
    private player: Player;
    private previousTime: number = 0;
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
    private keyboardInput_H: Phaser.Input.Keyboard.Key;
    private scoreBox: ScoreBox;
    private cameraManager: CameraManager;

    private gameSpeed: number = 100; // ms between moving the player

    private gridConfig: IGridConfig;
    private shouldAddFood: boolean = false;

    private food: Food;

    private back: Phaser.GameObjects.Image;

    constructor(){
        super('SceneMain');
    }

    preload(){
        this.load.image('background', backgroundImg);
    }

    create(){
        this.back = this.add.image(0, 0, 'background');
        this.back.setOrigin(0, 0);
        model.score = 0;

        const columns = +this.game.config.width / this.gridCellWidth;
        const rows = +this.game.config.height / this.gridCellHeight;

        // Grid
        this.gridConfig = {
            rows: rows,
            columns: columns,
            scene: this
        };
        
        this.grid = new AlignGrid(this.gridConfig, this.game.config);
        
        // Score Box
        this.scoreBox = new ScoreBox({scene: this, x: 465, y: 25, originX: 1, originY: 1}, model); // 1 zoom

        // Player
        this.player = new Player(90, 5, this, this.grid, this.gridConfig, this.game.config);

        // Cameras
        this.cameras.main.setBounds(0, 0, +this.game.config.width, +this.game.config.height);
        
        // Setup CameraManager
        this.cameraManager = new CameraManager({scene: this}, this.cameras.main);

        this.cameras.main.startFollow(this.player.head, true);
        this.cameras.main.setLerp(0.1, 0.1)
        this.cameras.main.setViewport((+this.game.config.width - 500) / 2, (+this.game.config.height - 500) / 2, 500, 500);
        


        this.previousTime = this.game.getTime();
        
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.keyboardInput_H = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
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
            this.cameraManager.updateHints(this.player.head, this.food);
            
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

        // TODO:- Activate the powerup
        // if (this.keyboardInput_H.isDown){
        //     this.showCameraHints(true);
        // }

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
            this.cameras.main.shake(250);
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
        const food = this.add.rectangle(0, 0, 10, 10, 0xffffff) as Food;
        
        const placement = this.getRandomIndex();
        
        // Align.scaleToGameW(food, 0.02, this.game.config);
        this.grid.placeAtIndex(placement, food);
        food.gridIndex = placement;
        this.food = food;
    }

}


export default SceneMain;