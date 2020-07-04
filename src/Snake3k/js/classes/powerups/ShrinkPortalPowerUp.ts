import PowerupType from "../../enums/PowerupType";
import IPowerUp from "./IPowerUp";
import { emitter } from "../../main";
import Constants from "../../../../toolbox/js/Constants";
import TintGradients from "./TintGradients";
import Orb from "./Orb";

class ShrinkPortalPowerUp implements IPowerUp {

    private readonly boundHotKey: string = Constants.HOTKEY_3;

    // Singleton
    private static _instance: ShrinkPortalPowerUp;

    public static get instance(): ShrinkPortalPowerUp {

        if(!ShrinkPortalPowerUp._instance){
            ShrinkPortalPowerUp._instance = new ShrinkPortalPowerUp();
        }

        return ShrinkPortalPowerUp._instance;
    }
    
    private constructor() {
        this.type = PowerupType.SHIRNKPORTAL;

        emitter.off(this.boundHotKey).on(this.boundHotKey, this.activate)
    }

    private _powerupsOnMap: Orb[] = [];

    public get powerupsOnMap() : Orb[] {

        // Perform a cleanup to make sure any destroyed objects are not kept around
        const activePowerups = this._powerupsOnMap.filter((orb: Orb) => {
            return orb.active
        })

        this._powerupsOnMap = activePowerups;

        return [...this._powerupsOnMap];
    }

    public addPowerupToMap = (orb: Orb): void => {
        this._powerupsOnMap.push(orb)
    }

    public createOrb = (scene: Phaser.Scene) : Orb  => {
        return (scene.add.image(24, 24, 'powerup')
            .setTint(this.displayColorTint.topLeft, this.displayColorTint.topRight, this.displayColorTint.bottomLeft, this.displayColorTint.bottomRight) as unknown) as Orb
    }

    // TODO:- Make a manager of a sort which each powerup adds its bound key to and then only 1 can be bound?

    public readonly type: PowerupType;
    public orb?: Orb;

    public readonly occuranceProbability: number = 5;0

    private _quantity = 0;

    public get quantity() {
        return this._quantity;
    }

    increaseQuantity = () => {
        this._quantity++;
        this.updateHotbarVisibility();
    }

    displayColorTint = TintGradients.PINK;

    activate = () => {
        if (this._quantity > 0){
            
            emitter.emit(Constants.POWERUP_SHRINK_PORTAL_ACTIVATED);
            
            this._quantity--;
            this.updateHotbarVisibility();
        }
    };

    private updateHotbarVisibility = () => {
        this.orb.visible = (this._quantity > 0)
    }
}

export default ShrinkPortalPowerUp;