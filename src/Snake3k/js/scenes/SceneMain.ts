import IGridConfig from "../../../toolbox/js/classes/IGridConfig";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import Player from "../classes/Player";
import TravelDirection from "../enums/TravelDirection";
import Food from "../classes/Food";
import ScoreBox from "../../../toolbox/js/classes/components/ScoreBox";
import { model, emitter } from "../main";
import Constants from "../../../toolbox/js/Constants";

import coinSound from '../../audio/coin.wav';

import backgroundImg from '../../images/background.jpg';
import CameraManager from "../classes/CameraManager";
import MediaManager from "../../../toolbox/js/classes/util/MediaManager";
import IMediaManagerConfig from "../../../toolbox/js/classes/IMediaManagerConfig";

import backgroundMainSoundmp3 from '../../audio/background_main.mp3';

class SceneMain extends Phaser.Scene {

    private gridCellHeight: number = 20;
    private gridCellWidth: number = 20;

    private mediaManager: MediaManager;

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

    private portal: Phaser.GameObjects.Arc

    private food: Food;

    private back: Phaser.GameObjects.Image;

    constructor(){
        super('SceneMain');
    }

    preload(){
        this.load.image('background', backgroundImg);
        this.load.audio('coin', [coinSound]);
        this.load.audio('background_main', [backgroundMainSoundmp3]);
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
        
        // CameraManager
        this.cameraManager = new CameraManager({scene: this}, this.cameras.main);

        this.cameras.main.startFollow(this.player.head, true);
        this.cameras.main.setLerp(0.1, 0.1)
        this.cameras.main.setViewport((+this.game.config.width - 500) / 2, (+this.game.config.height - 500) / 2, 500, 500);
        
        // Media Manager
        if (!this.mediaManager){
        const mediaConfig: IMediaManagerConfig = {
            scene: this
        };
        this.mediaManager = new MediaManager(mediaConfig, model);
        this.mediaManager.setBackgroundMusic('background_main');
        }

        this.previousTime = this.game.getTime();
        
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.keyboardInput_H = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        this.shouldAddFood = true;

        emitter.off(Constants.FOOD_EATEN).on(Constants.FOOD_EATEN, this.foodEaten);
        emitter.off(Constants.PORTAL_ACTIVATED).on(Constants.PORTAL_ACTIVATED, this.portalActivated);

        this.addPortal();
        // this.grid.debug();
    }

    private portalActivated = () => {
        // TODO:- TRANSITION
    }

    private graphicsarc: Phaser.GameObjects.Graphics;

    private drawPortalBorder = (x: number, y: number, radius: number) => {

        if (this.graphicsarc){
            this.graphicsarc.destroy();
        }
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xfae400, 0.3);
        graphics.beginPath();

        this.graphicsarc = graphics.arc(x, y, radius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), true);

        this.graphicsarc.setDepth(1000);
        graphics.strokePath();
        this.grid.placeAtIndex(1225, this.graphicsarc)
    }

    private addPortal = () => {
        if (this.portal){
            return;
        }
        this.portal = this.add.circle(0, 0, 100, 0x000000, 1);
        this.portal.setDepth(1000);
        this.grid.placeAtIndex(1225, this.portal);
        this.drawPortalBorder(0, 0, 100);
        
    }

    private growPortal = () => {

        this.portal.radius = this.portal.radius * 1.125;

        this.drawPortalBorder(0, 0, this.portal.radius);
    }

    private foodEaten = (food: Food) => {
        this.removeFoodItem(food);
        this.shouldAddFood = true;

        this.growPortal();
    }

    update(time: number, delta: number) {
        if (this.player.isDead){
            return;
        }

        // Only move if we have hit the epoch 
        if(Math.floor(time) - this.gameSpeed > this.previousTime) {

            this.previousTime = Math.floor(time);
            this.player.movePlayer();
            
            this.player.checkPlayerCollision(this.food, this.player.head, this.portal);

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