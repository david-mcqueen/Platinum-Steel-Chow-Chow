import PlayerPart from "./PlayerPart";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import TravelDirection from "../enums/TravelDirection";
import { game, emitter } from "../main";
import IGridConfig from "../../../toolbox/js/classes/IGridConfig";
import Food from "./Food";
import Constants from "../../../toolbox/js/Constants";

class Player extends Phaser.GameObjects.Container {
    private parts: Phaser.GameObjects.Group; // The grid id of each part
    private grid: AlignGrid;
    private gridConfig: IGridConfig;
    private gameConfig: Phaser.Core.Config;
    private addTailPiece: boolean;
    private _isDead: boolean = false;

    get isDead(): boolean {
        return this._isDead;
    }

    get head(): PlayerPart {
        return this.parts.getFirstAlive();
    }

    get currentPlayersHeadPosition(): number {
        return this.head.gridIndex;
    }

    get fullPosition(): number[] {
        // Return an array with the current index of all parts
        return this.parts.children.getArray().map( (part: PlayerPart) => {
            return part.gridIndex;
        });
    }

    get positionWithoutHead(): number[] {
        const fullPosition = this.fullPosition;
        fullPosition.shift()
        return fullPosition;
    }

    constructor(startIndex: number, length: number, scene: Phaser.Scene, grid: AlignGrid, gridConfig: IGridConfig, gameConfig: Phaser.Core.Config) {
        super(scene);

        this.scene = scene;
        this.parts = this.scene.add.group();
        this.grid = grid;
        this.gridConfig = gridConfig;
        this.gameConfig = gameConfig;

        const rectHead = this.scene.add.rectangle(0, 0, 20, 20, 0xffffff) as PlayerPart;
        // Align.scaleToGameW(rectHead, 0.04, gameConfig)
        grid.placeAtIndex(startIndex, rectHead);
        
        rectHead.gridIndex = startIndex;
        rectHead.directionOfTravel = TravelDirection.RIGHT;
        this.parts.add(rectHead);


        for (let index = 1; index < length; index++) {
            const rectTail = this.scene.add.rectangle(0, 0, 20, 20, 0xffffff) as PlayerPart;
            // Align.scaleToGameW(rectTail, 0.04, gameConfig)
            const positionTail = startIndex - index;
            rectTail.gridIndex = positionTail;
            this.grid.placeAtIndex(startIndex - index, rectTail);  // Head is on  the right, tail left so - the index

            this.parts.add(rectTail);       
        }
    }

    private addPendingTailPieces = () => {

        if (!this.addTailPiece){
            return;
        }

        this.addTailPiece = false;
        const lastChild = this.parts.getChildren()[this.parts.getLength() - 1] as PlayerPart;

        const rectTail = this.scene.add.rectangle(0, 0, 20, 20, 0xffffff) as PlayerPart;
        // Align.scaleToGameW(rectTail, 0.04, this.gameConfig)
        rectTail.gridIndex = lastChild.gridIndex; // the position of what we are going to follow
        rectTail.directionOfTravel = lastChild.directionOfTravel;

        // Calculate the starting position by going int eh opposite direction of current travel
        rectTail.directionOfTravel = this.getOpposingDirection(lastChild.directionOfTravel)
        rectTail.gridIndex = this.getNextGridPosition(rectTail);
        rectTail.directionOfTravel = this.getOpposingDirection(rectTail.directionOfTravel);// Besure to reset travel direction

        this.grid.placeAtIndex(rectTail.gridIndex, rectTail);
        this.parts.add(rectTail);
    }


    private getOpposingDirection = (direction: TravelDirection): TravelDirection => {
        switch (direction) {
            case TravelDirection.UP:
                return TravelDirection.DOWN;
            case TravelDirection.DOWN:
                return TravelDirection.UP;
            case TravelDirection.LEFT:
                return TravelDirection.RIGHT;
            case TravelDirection.RIGHT:
                return TravelDirection.LEFT;
        }
    }

    public queuePieceAddition = () => {
        this.addTailPiece = true;
    }

    public setTravelDirection = (direction: TravelDirection)  => {
        const head = this.parts.getFirstAlive(); 

        // Check we cant turn back on ourselves
        if(this.getOpposingDirection(head.directionOfTravel) !== direction){
            head.nextTravelDirection = direction;
        }
    }

    public movePlayer = () => {
        // Always start with the head
        let previousPart: PlayerPart = this.parts.getFirstAlive();

        this.parts.children.iterate((child: PlayerPart) => {
            // Should we be changing direction?
            child.directionOfTravel = child.nextTravelDirection || child.directionOfTravel || previousPart.directionOfTravel;
            
            const nextPosition = this.getNextGridPosition(child)
            this.grid.placeAtIndex(nextPosition, child);
            child.gridIndex = nextPosition;
            
            // See if the part in front of us is going a different way, and follow them
            child.nextTravelDirection = previousPart.directionOfTravel;

            // So any other parts can follow us
            previousPart = child;
        });

        // After we have moved, add tail pieces
        this.addPendingTailPieces();
    }

    public kill = (callback: any) => {
        this._isDead = true;
        this.scene.tweens.add({
            targets: this.parts.getChildren(),
            duration: 1000,
            y: game.config.height,
            angle: -270,
            onComplete: callback,
            completeDelay: 1000
        })
    }

    private getNextGridPosition = (part: PlayerPart): number => {
        const rows = this.gridConfig.rows;
        const columns = this.gridConfig.columns;

        switch (part.directionOfTravel){
            case TravelDirection.RIGHT:{
                let nextPosition =  part.gridIndex + 1;
                if (Math.floor(nextPosition / columns) > Math.floor(part.gridIndex / columns)){
                    nextPosition -= columns;
                }
                return nextPosition;
            }
            case TravelDirection.DOWN: {
                let nextPosition =  part.gridIndex + rows;

                if (Math.floor(nextPosition / rows) >= rows){
                    nextPosition -= rows * columns;
                }
                return nextPosition;
            }
            case TravelDirection.UP: {
                let nextPosition =  part.gridIndex - rows;

                if (Math.floor(nextPosition / rows) < 0){
                    nextPosition += rows * columns;
                }
                return nextPosition;
            }
            case TravelDirection.LEFT: {
                let nextPosition =  part.gridIndex - 1;
                if (Math.floor(nextPosition / columns) < Math.floor(part.gridIndex / columns)){
                    nextPosition += columns;
                }
                return nextPosition;
            }
        }
    }

    public checkPlayerCollision = (foodTarget: Food) => {
        const headIndex = this.currentPlayersHeadPosition;

        this.checkPlayerCollisionWithFood(headIndex, foodTarget);
        this.checkPlayerCollisionWithSelfSnake(headIndex, this.positionWithoutHead)
    }

    // Check if the player has collided with food, and eat it if necessary
    private checkPlayerCollisionWithFood = (headIndex: number, foodTarget: Food) => {
        if (foodTarget && headIndex > -1){
            if (headIndex == foodTarget.gridIndex){
                // OM NOM NOM NOM
                this.queuePieceAddition();
                
                emitter.emit(Constants.FOOD_EATEN, foodTarget)
                emitter.emit(Constants.UP_POINTS, 1);
            }
        }
    }

    private checkPlayerCollisionWithSelfSnake = (headIndex: number, snake: number[])  => {
        if(snake.indexOf(headIndex) > -1){
            // uh oh! We dead.
            // Fire an event or sumin
            // this.scene.camera.shake(250);
            this.kill(() => {
                // Have finished animating the player
                this.scene.scene.start("SceneOver");
            });
        }
    }
}

export default Player;