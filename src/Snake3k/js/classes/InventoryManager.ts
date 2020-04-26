import PowerupType from "../enums/PowerupType";
import IPowerUp from "./powerups/IPowerUp";
import { emitter } from "../main";
import Constants from "../../../toolbox/js/Constants";

class InventoryManager extends Phaser.GameObjects.Container{

    private _inventory: {[key: string] : number} = {};


    constructor(scene: Phaser.Scene){
        super(scene);
    }

    public addInventoryItem(item: IPowerUp) {
        this._inventory[item.type] = (this._inventory[item.type] ? this._inventory[item.type] : 0) + 1;
        emitter.emit(Constants.INVENTORY_CHANGED, this._inventory);
    }

}

export default InventoryManager;