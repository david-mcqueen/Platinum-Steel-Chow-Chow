import IGameConfig from "../IGameConfig";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import IGridConfig from "../../../toolbox/js/classes/IGridConfig";

class HotBarManager extends Phaser.GameObjects.Container {
    private gameConfig: IGameConfig;
    private hotButtons: Phaser.GameObjects.Group;
    private grid: AlignGrid;

    constructor(scene: Phaser.Scene, gameConfig: IGameConfig, hotbarStart_X: number, hotbarStart_Y: number){
        super(scene);
        
        this.gameConfig = gameConfig;

        this.addHotBar(hotbarStart_X, hotbarStart_Y);
    }

    private addHotBar = (hotbarStart_X: number, hotbarStart_Y: number) => {

        for (let index = 0; index <= 9; index++) {
            const rectHead = this.scene.add.rectangle(hotbarStart_X + (index * 50), hotbarStart_Y, 50, 50, 0xff0000, 0.75).setScrollFactor(0).setOrigin(0, 0);
            rectHead.setDepth(10000);
        }

    }
}

export default HotBarManager;