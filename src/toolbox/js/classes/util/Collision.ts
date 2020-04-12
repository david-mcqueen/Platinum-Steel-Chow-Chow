class Collision {
    public static checkCollide(obj1: Phaser.GameObjects.Sprite, obj2: Phaser.GameObjects.Sprite){
        const distX = Math.abs(obj1.x - obj2.x);
        const distY = Math.abs(obj1.y - obj2.y);

        return (distX < obj1.width/2) && (distY < obj1.height / 2);
    }
}

export default Collision;