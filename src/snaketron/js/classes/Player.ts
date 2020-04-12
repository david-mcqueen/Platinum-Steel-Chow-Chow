import PlayerPart from "./PlayerPart";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import Align from "../../../toolbox/js/classes/util/align";

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
        this.parts.add(rectHead);


        for (let index = 1; index < length; index++) {
            const rectTail = this.scene.add.rectangle(0, 0, 100, 100, 0xffffff) as PlayerPart;
            Align.scaleToGameW(rectTail, 0.05, gameConfig)
            const positionTail = startIndex - index;
            rectTail.gridIndex = positionTail;
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

        let nextPosition =  part.gridIndex + 1;
        if (Math.floor(nextPosition / 20) > Math.floor(part.gridIndex / 20)){
            nextPosition = Math.floor(part.gridIndex / 20) * 20;
        }

        return nextPosition;
    }
}

export default Player;