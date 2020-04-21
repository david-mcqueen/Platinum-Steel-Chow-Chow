import IGridConfig from "../IGridConfig";

class AlignGrid {
    private config: IGridConfig;
    private scene: Phaser.Scene;
    private cw: number;
    private ch: number;
    private graphics: Phaser.GameObjects.Graphics;

    constructor(config: IGridConfig, gameConfig: Phaser.Core.Config) {
        this.config = config;

        if(!config.scene){
            console.error("No scene provided");
            return;
        }
        if(!config.rows){
            config.rows = 5;
        }
        if(!config.columns){
            config.columns = 5;
        }
        if(!config.height){
            config.height = +gameConfig.height;
        }
        if(!config.width){
            config.width = +gameConfig.width;
        }

        this.scene = config.scene;

        // cells width
        this.cw = config.width / config.columns;
        // cells height
        this.ch = config.height / config.rows;
    }

    public debug = () => {
        this.show();
        this.showNumbers()
    }

    private show = () => {
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(2, 0xff0000);
        for (let index = 0; index < this.config.width; index+= this.cw) {
            this.graphics.moveTo(index, 0);
            this.graphics.lineTo(index, this.config.height);
        }

        for (let index = 0; index < this.config.height; index+= this.ch) {
            this.graphics.moveTo(0, index);
            this.graphics.lineTo(this.config.width, index);
        }

        this.graphics.strokePath();
    }

    private showNumbers = () => {
        let count = 0;
        for (let index = 0; index < this.config.rows; index++) {
            for (let index = 0; index < this.config.columns; index++) {
                const numText = this.scene.add.text(0, 0, count.toString(), {color: '#ff0000'} );
                numText.setOrigin(0.5, 0.5);
                this.placeAtIndex(count, numText);
                count++;
            } 
        }
    }

    // Place an object in the middle of the defined cell
    public placeAt = (x: number, y: number, obj: any): void => {
        // calc the position based upon the cellwidth & celheight
        const x2 = (this.cw * x) + (this.cw / 2);
        const y2 = (this.ch * y) + (this.ch / 2);

        obj.x = x2;
        obj.y = y2;
    }

    // Places the object at the given index, counting left to right top to bottom
    public placeAtIndex = (index: number, obj: any): void => {
        const y = Math.floor(index / this.config.columns);
        const x = index - (y * this.config.columns);

        this.placeAt(x, y, obj);
    }

    public getCoordinatesOfIndex(index: number): {x:number, y: number} {
        // We get the col & row
        const y = Math.floor(index / this.config.columns);
        const x = index - (y * this.config.columns);

        // Now get the coordinates
        const x2 = (this.cw * x) + (this.cw / 2);
        const y2 = (this.ch * y) + (this.ch / 2);

        return {
            x: x2,
            y: y2
        }
        
    }

    
}

export default AlignGrid;