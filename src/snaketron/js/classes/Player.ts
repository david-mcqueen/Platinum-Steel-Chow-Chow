import PlayerPart from "./PlayerPart";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import Align from "../../../toolbox/js/classes/util/align";
import TravelDirection from "../enums/TravelDirection";

class Player extends Phaser.GameObjects.Container {
    private parts: Phaser.GameObjects.Group; // The grid id of each part
    private grid: AlignGrid;


    constructor(startIndex: number, length: number, direction: number, scene: Phaser.Scene, grid: AlignGrid, gameConfig: Phaser.Core.Config) {
        super(scene);

        this.scene = scene;
        this.parts = this.scene.add.group();
        this.grid = grid;

        const rectHead = this.scene.add.rectangle(0, 0, 100, 100, 0xffffff) as PlayerPart;
        Align.scaleToGameW(rectHead, 0.05, gameConfig)
        grid.placeAtIndex(startIndex, rectHead);
        
        rectHead.gridIndex = startIndex;
        rectHead.directionOfTravel = TravelDirection.DOWN;
        this.parts.add(rectHead);


        for (let index = 1; index < length; index++) {
            const rectTail = this.scene.add.rectangle(0, 0, 100, 100, 0xffffff) as PlayerPart;
            Align.scaleToGameW(rectTail, 0.05, gameConfig)
            const positionTail = startIndex - index;
            rectTail.gridIndex = positionTail;
            rectTail.directionOfTravel = TravelDirection.DOWN;
            this.grid.placeAtIndex(startIndex - index, rectTail);  // Head is on  the right, tail left so - the index

            this.parts.add(rectTail);
            
        }
    }

    public movePlayer = () => {
        this.parts.children.iterate((child: PlayerPart) => {
            const nextPosition = this.getNextGridPosition(child)
            this.grid.placeAtIndex(nextPosition, child);
            child.gridIndex = nextPosition;
        })
    }

    private getNextGridPosition = (part: PlayerPart): number => {
        const gameHeight = 20;
        const gameWidth = 20;

        switch (part.directionOfTravel){
            case TravelDirection.RIGHT:{
                let nextPosition =  part.gridIndex + 1;
                if (Math.floor(nextPosition / gameWidth) > Math.floor(part.gridIndex / gameWidth)){
                    nextPosition -= gameWidth;
                }
                return nextPosition;
            }
            case TravelDirection.DOWN: {
                let nextPosition =  part.gridIndex + gameHeight;

                if (Math.floor(nextPosition / gameHeight) >= gameHeight){
                    nextPosition -= gameHeight * gameWidth;
                }
                return nextPosition;
            }
            case TravelDirection.UP: {
                let nextPosition =  part.gridIndex - gameHeight;

                if (Math.floor(nextPosition / gameHeight) < 0){
                    nextPosition += gameHeight * gameWidth;
                }
                return nextPosition;
            }
            case TravelDirection.LEFT: {
                let nextPosition =  part.gridIndex - 1;
                if (Math.floor(nextPosition / gameWidth) < Math.floor(part.gridIndex / gameWidth)){
                    nextPosition += gameWidth;
                }
                return nextPosition;
            }
        }
    }
}

export default Player;