import PowerupType from "../../enums/PowerupType";
import IPowerUp from "./IPowerUp";
import { emitter } from "../../main";
import Constants from "../../../../toolbox/js/Constants";
import TintGradients from "./TintGradients";

class SpeedUpPowerup implements IPowerUp {

    private readonly boundHotKey: string = Constants.HOTKEY_1;

    // Singleton
    private static _instance: SpeedUpPowerup;

    public static get instance(): SpeedUpPowerup {

        if(!SpeedUpPowerup._instance){
            SpeedUpPowerup._instance = new SpeedUpPowerup();
        }

        return SpeedUpPowerup._instance;
    }
    
    private constructor() {
        this.type = PowerupType.SPEEDUP;

        emitter.off(this.boundHotKey).on(this.boundHotKey, this.activate)
    }

    public createImg = (scene: Phaser.Scene) : Phaser.GameObjects.Image  => {
        this.orb = scene.add.image(24, 24, 'powerup')
            .setTint(this.displayColorTint.topLeft, this.displayColorTint.topRight, this.displayColorTint.bottomLeft, this.displayColorTint.bottomRight);

        return this.orb;
    }

    // TODO:- Make a manager of a sort which each powerup adds its bound key to and then only 1 can be bound?

    public readonly type: PowerupType;
    public orb?: Phaser.GameObjects.Image;

    public readonly occuranceProbability: number = 80;

    private _quantity = 0;

    public get quantity() {
        return this._quantity;
    }

    increaseQuantity = () => {
        this._quantity++;
        this.updateHotbarVisibility();
    }

    displayColorTint = TintGradients.RED;

    activate = () => {
        if (this._quantity > 0){
            
            emitter.emit(Constants.POWERUP_SPEED_UP_ACTIVATED);
            
            this._quantity--;
            this.updateHotbarVisibility();
        }
    };

    private updateHotbarVisibility = () => {
        this.orb.setVisible(this._quantity > 0)
    }
}

export default SpeedUpPowerup;