class Align {
    static scaleToGameW(obj: any, pct: number, gameConfig: Phaser.Core.Config){
        obj.displayWidth = +gameConfig.width * pct;
        obj.scaleY = obj.scaleX;
    }

    static center(obj: any, gameConfig: Phaser.Core.Config)
    {
        this.centerH(obj, gameConfig);
        this.centerV(obj, gameConfig);
    }

    static centerH(obj: any, gameConfig: Phaser.Core.Config)
    {
        obj.x = +gameConfig.width / 2;
    }

    static centerV(obj: any, gameConfig: Phaser.Core.Config)
    {
        obj.x = +gameConfig.width / 2;
    }
}

export default Align;