import IGameConfig from "../IGameConfig";
import AlignGrid from "../../../toolbox/js/classes/util/AlignGrid";
import IGridConfig from "../../../toolbox/js/classes/IGridConfig";
import { emitter } from "../main";
import Constants from "../../../toolbox/js/Constants";
import PowerupType from "../enums/PowerupType";
import IPowerUp from "./powerups/IPowerUp";
import SpeedUpPowerup from "./powerups/SpeedUpPowerup";

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

        emitter.off(Constants.INVENTORY_CHANGED).on(Constants.INVENTORY_CHANGED, this.dislpayInventory);
    }

    private addHotBar = () => {

        for (let index = 1; index <= 9; index++) {
            // const hotbarButton = this.scene.add.rectangle(0, 0, 75, 75, 0xff0000, 0.75).setScrollFactor(0).setOrigin(0, 0);
            this.drawButton(index - 1, `${index}`, new SpeedUpPowerup())
        }
        this.drawButton(9, `0`);
    }
    
    private drawButton = (indexPosition: number, labelString: string, powerUp?: IPowerUp) => {
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

        if (powerUp){
            this.addPowerUpImg(indexPosition, powerUp)
        }
    }

    private dislpayInventory = (inventory: {[key: string] : number}) => {
        console.log("displaying invetory");
        console.log(inventory);

    }

    private addPowerUpImg = (index: number, powerUp: IPowerUp) => {
        const orb = this.scene.add.image(24, 24, 'powerup')
            .setTint(powerUp.displayColorTint.topLeft, powerUp.displayColorTint.topRight, powerUp.displayColorTint.bottomLeft, powerUp.displayColorTint.bottomRight);

        orb.setScrollFactor(0).setOrigin(0, 0);
        this.grid.placeAtIndex(index, orb);
        orb.x += 8;
        orb.y += 8;
        // orb.setVisible(false);
    }
}

export default HotBarManager;