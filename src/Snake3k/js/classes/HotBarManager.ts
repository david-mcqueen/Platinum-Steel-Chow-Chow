import IGameConfig from "../IGameConfig";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import IGridConfig from "../../../toolbox/js/classes/IGridConfig";

class HotBarManager extends Phaser.GameObjects.Container {
    private gameConfig: IGameConfig;
    private gridConfig: IGridConfig;
    private hotButtons: Phaser.GameObjects.Group;
    private buttonSize: number;
    private grid: AlignGrid;

    constructor(scene: Phaser.Scene, gameConfig: IGameConfig){
        super(scene);
        
        this.gameConfig = gameConfig;
        this.buttonSize = 40;

        this.gridConfig = {
            height: this.buttonSize,
            width: 450,
            scene: scene,
            columns: 10,
            rows: 1
        }

        this.gridConfig.gridOffset ={
            x: (this.gameConfig.viewableArea.width / 2) - (this.gridConfig.width / 2) - (this.buttonSize / 2),
            y: this.gameConfig.viewableArea.height - 75
        }

        this.grid = new AlignGrid(this.gridConfig);

        this.addHotBar();
    }

    private addHotBar = () => {

        for (let index = 1; index <= 9; index++) {
            // const hotbarButton = this.scene.add.rectangle(0, 0, 75, 75, 0xff0000, 0.75).setScrollFactor(0).setOrigin(0, 0);
            this.drawButton(index - 1, `${index}`)
        }
        this.drawButton(9, `0`);
    }
    
    private drawButton = (indexPosition: number, labelString: string) => {
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(3, 0x7B9095, 0.8);
        graphics.beginPath();
    
        const hotbarButton = graphics.strokeRect(0, 0, 40, 40);
        graphics.strokePath();
    
        hotbarButton.setScrollFactor(0);            
    
        hotbarButton.setDepth(10000);
        this.grid.placeAtIndex(indexPosition, hotbarButton);
    
        const label = this.scene.add.text(0, 0, `${labelString}`)
        label.setScrollFactor(0).setOrigin(0, 0).setDepth(10000);
        this.grid.placeAtIndex(indexPosition, label);

    }
}

export default HotBarManager;