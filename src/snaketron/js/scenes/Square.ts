export class Square extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
    
    private didCreate: boolean = false;

    constructor() {
        super({
            active: false,
            visible: false,
            key: 'Game',
        });
    }

    public create() {
        this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
        this.physics.add.existing(this.square);
        this.square.body.setVelocityX(100);

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        
        this.input.keyboard.on('keydown_P', () => {
            const throwSquare = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
            const physicsImage = this.physics.add.existing(throwSquare);
            throwSquare.body.setVelocityY(-100)
        })

        this.didCreate = true;
    }

    public update() {
        if (!this.didCreate){
            return;
        }

        if (this.cursorKeys.up.isDown) {
            this.square.body.setVelocityY(-100);
            this.square.body.setVelocityX(0);
        } else if (this.cursorKeys.down.isDown) {
            this.square.body.setVelocityY(100);
            this.square.body.setVelocityX(0);
        }

        if (this.cursorKeys.right.isDown) {
            this.square.body.setVelocityX(100);
            this.square.body.setVelocityY(0);
        } else if (this.cursorKeys.left.isDown) {
            this.square.body.setVelocityX(-100);
            this.square.body.setVelocityY(0);
        }

        this.physics.world.wrap(this.square, 50);
    }
}