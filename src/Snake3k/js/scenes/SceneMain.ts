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
import powerUpImg from '../../images/circle-24.png';
import CameraManager from "../classes/CameraManager";
import MediaManager from "../../../toolbox/js/classes/util/MediaManager";
import IMediaManagerConfig from "../../../toolbox/js/classes/IMediaManagerConfig";

import backgroundMainSoundmp3 from '../../audio/background_main.mp3';
import Align from "../../../toolbox/js/classes/util/Align"; 
import IGameConfig from "../IGameConfig";
import HotBarManager from "../classes/HotBarManager";
import SpeedUpPowerup from "../classes/powerups/SpeedUpPowerup";
import SlowDownPowerup from "../classes/powerups/SlowDownPowerUp";
import ShrinkPortalPowerUp from "../classes/powerups/ShrinkPortalPowerUp";
import PowerupManager from "../classes/powerups/PowerupManager";
import Orb from "../classes/powerups/Orb";

class SceneMain extends Phaser.Scene {

    private gameConfig: IGameConfig;

    private mediaManager: MediaManager;
    private hotbarManager: HotBarManager;

    private grid: AlignGrid;
    private player: Player;
    private previousTime: number = 0;
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

    private keyboardInput_Hotkey_1: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_2: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_3: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_4: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_5: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_6: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_7: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_8: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_9: Phaser.Input.Keyboard.Key;
    private keyboardInput_Hotkey_0: Phaser.Input.Keyboard.Key;

    private scoreBox: ScoreBox;
    private cameraManager: CameraManager;

    private get middleIndex(): number {
        const cellsWidth = this.gameConfig.playableArea.width / this.gameConfig.playableArea.grid.cellWidth;
        const cellsHeight = this.gameConfig.playableArea.height / this.gameConfig.playableArea.grid.cellHeight;

        const cells = cellsWidth * cellsHeight

        const halfWay = cells / 2;

        // minus half the width to get to the middle
        const mid = halfWay - (cellsWidth / 2);


        return mid;
    }

    private get midIndexCoordinates() : {x: number, y: number} {
        const cellsWidth = this.gameConfig.playableArea.width / this.gameConfig.playableArea.grid.cellWidth;
        const cellsHeight = this.gameConfig.playableArea.height / this.gameConfig.playableArea.grid.cellHeight;
        return {
            x: cellsWidth / 2,
            y: cellsHeight / 2
        }
        
    }

    private gridConfig: IGridConfig;
    private shouldAddFood: boolean = false;

    private portal: Phaser.GameObjects.Arc
    private targetPortalRadius: number;

    private food: Food;

    private back_TL: Phaser.GameObjects.Image;
    private back_TR: Phaser.GameObjects.Image;
    private back_BL: Phaser.GameObjects.Image;
    private back_BR: Phaser.GameObjects.Image;

    constructor(){
        super('SceneMain');
    }

    preload(){
        this.load.image('background', backgroundImg);
        this.load.image('powerup', powerUpImg);
        this.load.audio('coin', [coinSound]);
        this.load.audio('background_main', [backgroundMainSoundmp3]);
        const backgroundSize = 1020;
        const backgroundRepeat = 1; // 1 for single player. 2 for multiplayer
        this.gameConfig = {
            playableArea: {
                width: backgroundSize * backgroundRepeat,
                height: backgroundSize * backgroundRepeat,
                grid: {
                    cellHeight: 20,
                    cellWidth: 20,
    
                    width: (backgroundSize * backgroundRepeat) / 20, // How many cells width & height
                    height: (backgroundSize * backgroundRepeat) / 20
                },
                backgroundRepeat: backgroundRepeat
            },
            viewableArea: {
                width: +this.game.config.width,
                height: +this.game.config.height
            },
            gameSpeed: 95, // ms between moving the player
            powerUps: {
                gameSpeedModifier: 45,
                powerupDuration: 30000, // 30 seconds
                visibleDuration: 15000, // 15 seconds
                portal: {
                    shirnk: 0.8,
                    grow: 1.2
                },
                occuranceProbability: 0.08
            },
            portalModifier: {
                max: 10,
                min: -1
            },
            cameraHints: {
                hintAreaPadding: 100 // pixes each side
            },
            deptLevels: {
                cameraHints: 10000,
                hotbar: 10000,
                player: 1000,
                portal: 2000
            }
        };

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.keyboardInput_Hotkey_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.keyboardInput_Hotkey_2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        this.keyboardInput_Hotkey_3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        this.keyboardInput_Hotkey_4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        this.keyboardInput_Hotkey_5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
        this.keyboardInput_Hotkey_6 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
        this.keyboardInput_Hotkey_7 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
        this.keyboardInput_Hotkey_8 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
        this.keyboardInput_Hotkey_9 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
        this.keyboardInput_Hotkey_0 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
    }

    create(){

        this.addBackground();

        model.score = 0;

        const columns = +this.gameConfig.playableArea.width / this.gameConfig.playableArea.grid.cellWidth;
        const rows = +this.gameConfig.playableArea.height / this.gameConfig.playableArea.grid.cellHeight;

        // Grid
        this.gridConfig = {
            rows: rows,
            columns: columns,
            height: this.gameConfig.playableArea.height,
            width: this.gameConfig.playableArea.width,
            scene: this
        };
        
        this.grid = new AlignGrid(this.gridConfig);
        
        // Score Box
        this.scoreBox = new ScoreBox({scene: this, x: this.gameConfig.viewableArea.width - 25, y: 25, originX: 1, originY: 1}, model); // 1 zoom

        // HotBarManager
        this.hotbarManager = new HotBarManager(this, this.gameConfig);


        // // TODO:- Debugging!
        // setTimeout(() => {
        //     SpeedUpPowerup.instance.increaseQuantity();
        //     SlowDownPowerup.instance.increaseQuantity();
        //     ShrinkPortalPowerUp.instance.increaseQuantity();
        // }, 5000)

        // Player
        this.player = new Player(90, 5, this, this.grid, this.gridConfig, this.gameConfig);

        // Cameras
        this.cameras.main.setBounds(0, 0, +this.gameConfig.playableArea.width, +this.gameConfig.playableArea.height);
        
        // CameraManager
        this.cameraManager = new CameraManager({scene: this}, this.cameras.main, this.gameConfig);

        // Setup the camera follows etc
        // TODO:- Move this into the camera manager
        this.cameras.main.startFollow(this.player.head, true);
        this.cameras.main.setLerp(0.1, 0.1)
        this.cameras.main.setViewport(0, 0, +this.game.config.width, +this.game.config.height);

        // Media Manager
        if (!this.mediaManager){
        const mediaConfig: IMediaManagerConfig = {
            scene: this
        };
        this.mediaManager = new MediaManager(mediaConfig, model);
        this.mediaManager.setBackgroundMusic('background_main');
        }

        this.previousTime = this.game.getTime();

        this.shouldAddFood = true;

        emitter.off(Constants.FOOD_EATEN).on(Constants.FOOD_EATEN, this.foodEaten);
        emitter.off(Constants.PORTAL_ACTIVATED).on(Constants.PORTAL_ACTIVATED, this.portalActivated);

        emitter.off(Constants.POWERUP_SPEED_UP_ACTIVATED).on(Constants.POWERUP_SPEED_UP_ACTIVATED, this.increasePlayerSpeed)
        emitter.off(Constants.POWERUP_SLOW_DOWN_ACTIVATED).on(Constants.POWERUP_SLOW_DOWN_ACTIVATED, this.decreasePlayerSpeed)
        emitter.off(Constants.POWERUP_SHRINK_PORTAL_ACTIVATED).on(Constants.POWERUP_SHRINK_PORTAL_ACTIVATED, this.shrinkPortal);

        
        this.addPortal();
        this.addPendingFood();
        // this.grid.debug();
    }

    private shrinkPortal = () => {
        this.growPortal(this.gameConfig.powerUps.portal.shirnk);
    }

    private increasePlayerSpeed = () => {
        
        this.gameConfig.gameSpeed -= this.gameConfig.powerUps.gameSpeedModifier;

        setTimeout(() => {
            this.gameConfig.gameSpeed += this.gameConfig.powerUps.gameSpeedModifier;
        }, this.gameConfig.powerUps.powerupDuration);
    }

    private decreasePlayerSpeed = () => {
        this.gameConfig.gameSpeed += this.gameConfig.powerUps.gameSpeedModifier;

        setTimeout(() => {
            this.gameConfig.gameSpeed -= this.gameConfig.powerUps.gameSpeedModifier;
        }, this.gameConfig.powerUps.powerupDuration);
    }

    private addBackground = () => {
        this.back_TL = this.add.image(0, 0, 'background');
        Align.scaleToW(this.back_TL, 1, 1024)
        this.back_TL.setOrigin(0, 0);

        if (this.gameConfig.playableArea.backgroundRepeat === 1){
            return;
        }

        this.back_TR = this.add.image(1024, 0, "background");
        Align.scaleToW(this.back_TR, 1, 1024)
        this.back_TR.flipX = true;
        this.back_TR.setOrigin(0, 0);

        this.back_BL = this.add.image(0, 1024, 'background');
        Align.scaleToW(this.back_BL, 1, 1024)
        this.back_BL.flipY = true;
        this.back_BL.setOrigin(0, 0);

        this.back_BR = this.add.image(1024, 1024, 'background');
        Align.scaleToW(this.back_BR, 1, 1024)
        this.back_BR.flipY = true;
        this.back_BR.flipX = true;
        this.back_BR.setOrigin(0, 0);
    }

    private portalActivated = () => {
        // TODO:- TRANSITION
        console.log("activated");
        this.scene.start("SceneOver");
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

        this.graphicsarc.setDepth(this.gameConfig.deptLevels.portal);
        graphics.strokePath();

        const midIndexCoordinates = this.midIndexCoordinates

        this.grid.placeAt(midIndexCoordinates.x, midIndexCoordinates.y, this.graphicsarc);
    }

    private addPortal = () => {
        this.portal = this.add.circle(0, 0, 100, 0x000000, 1);
        this.portal.setDepth(this.gameConfig.deptLevels.portal);
        
        const midIndexCoordinates = this.midIndexCoordinates

        this.grid.placeAt(midIndexCoordinates.x, midIndexCoordinates.y, this.portal);
        this.drawPortalBorder(0, 0, 100);
    }

    private growPortal = (portalGrowAmount?: number) => {

        const portalModifier = this.gameConfig.portalModifier;

        let growAmount = 1 + ((Math.floor(Math.random() * (portalModifier.max - portalModifier.min  + 1)) + portalModifier.min) / 100);

        if (portalGrowAmount){
            growAmount = portalGrowAmount;
        }

        // If we are already growing, we can keep on growing based on the target size
        this.targetPortalRadius = (this.targetPortalRadius ? this.targetPortalRadius : this.portal.radius) * growAmount;

        this.tweens.add({
            targets: this.portal,
            duration: 5000,
            radius: this.targetPortalRadius,
            onUpdate: (tweens: Phaser.Tweens.Tween, target: any) => {
                this.drawPortalBorder(0, 0, target.radius);
            }
        });
    }

    private shouldGrowPortal = () : boolean => {
        // 50% change of growing portal
        return Math.floor(Math.random() * 100) > 50;
    }

    private foodEaten = (food: Food) => {
        this.removeFoodItem(food);
        this.shouldAddFood = true;

        if (this.shouldGrowPortal()){
            this.growPortal();
        }

        this.addPendingFood();
        this.addPowerup();
    }

    update(time: number, delta: number) {
        if (this.player.isDead){
            return;
        }

        // Only move if we have hit the epoch 
        if(Math.floor(time) - this.gameConfig.gameSpeed > this.previousTime) {

            this.previousTime = Math.floor(time);
            this.player.movePlayer();
            
            this.player.checkPlayerCollision(this.food, this.player.head, this.portal);


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

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_1)){
            emitter.emit(Constants.HOTKEY_1);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_2)){
            emitter.emit(Constants.HOTKEY_2);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_3)){
            emitter.emit(Constants.HOTKEY_3);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_4)){
            emitter.emit(Constants.HOTKEY_4);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_5)){
            emitter.emit(Constants.HOTKEY_5);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_6)){
            emitter.emit(Constants.HOTKEY_6);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_7)){
            emitter.emit(Constants.HOTKEY_7);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_8)){
            emitter.emit(Constants.HOTKEY_8);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_9)){
            emitter.emit(Constants.HOTKEY_9);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyboardInput_Hotkey_0)){
            emitter.emit(Constants.HOTKEY_0);
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

    // Can be made generic
    private removeFoodItem = (food :Food) => {
        food.destroy();
    }

    private getRandomIndex = (): number => {
        // Get a random index for the new food
        let placement = Math.floor(Math.random() * (this.gridConfig.rows * this.gridConfig.columns));

        // The space currently occupied by the player
        const occupiedSpace = this.player.fullPosition;
        const placementCoordinates = this.grid.getCoordinatesOfIndex(placement);

        // Keep going until we find an available index
        // TODO:- What if there are NO available squares? There will be a better way to do this to consciously look instead
        // of recursively drilling until we hit something. TODO:- 
        if (this.player.isAreaInPortal(placementCoordinates, this.portal, this.targetPortalRadius)) {
            return this.getRandomIndex();
        } else if (occupiedSpace.indexOf(placement) > -1){
            return this.getRandomIndex();
        }else {
            return placement;
        }
        
    }

    private addPendingFood = () => {
        if (!this.shouldAddFood){
            return;
        }

        this.shouldAddFood = false;
        const food = this.add.rectangle(0, 0, 10, 10, 0xffffff) as Food;
        food.setDepth(this.gameConfig.deptLevels.portal)
        
        const placement = this.getRandomIndex();
        
        this.grid.placeAtIndex(placement, food);
        food.gridIndex = placement;
        this.food = food;
    }

    private addPowerup = () => {
        // SHould a powerup be added?
        const shouldAddPowerUp = Math.random() < this.gameConfig.powerUps.occuranceProbability; // Chance of adding a powerup

        // How many powerups on screen at once? No limit?
        if (shouldAddPowerUp){
            const powerupToAdd = PowerupManager.instance.getPowerupForPlayArea();
            const availablePowerup = powerupToAdd.createOrb(this);

            const placement = this.getRandomIndex();
            this.grid.placeAtIndex(placement, availablePowerup);

            powerupToAdd.addPowerupToMap(availablePowerup);

            setTimeout(() => {
                availablePowerup.setActive(false);
                availablePowerup.setVisible(false);
                availablePowerup.destroy();
            }, this.gameConfig.powerUps.visibleDuration);
        }
    }

}


export default SceneMain;