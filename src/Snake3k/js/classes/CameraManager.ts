import CameraHint from "./CameraHint";

interface IScoreboxConfig {
    scene: Phaser.Scene
}

class CameraManager extends Phaser.GameObjects.Container {
    
    private cameraHints: Phaser.GameObjects.Group;
    private camera: Phaser.Cameras.Scene2D.Camera;

    constructor(config: IScoreboxConfig, camera: Phaser.Cameras.Scene2D.Camera){
        super(config.scene)

        this.scene = config.scene;
        this.camera = camera;

        // Add camera hints before we start moving the camera around with 'follow'
        this.cameraHints = this.scene.add.group();
        this.addCameraHints();
    }

    private addCameraHints = () => {

        const hints = [
        { // TR Corner Horizontal
            x: 400,
            y: 0,
            width: 100,
            height: 5,
            alpha: 0.5,
            startDeg: -60,
            endDeg: -30
        },
        { // TR Corner Vertical
            x: 495,
            y: 0,
            width: 5,
            height: 100,
            alpha: 0.5,
            startDeg: -60,
            endDeg: -30
        },
        { // Right
            x: 495,
            y: 150,
            width: 5,
            height: 200,
            alpha: 0.5,
            startDeg: -30,
            endDeg: 30
        },
        { // BR Corner Horizontal
            x: 400,
            y: 495,
            width: 100,
            height: 5,
            alpha: 0.5,
            startDeg: 30,
            endDeg: 60
        },
        { // BR Corner Vertical
            x: 495,
            y: 400,
            width: 5,
            height: 100,
            alpha: 0.5,
            startDeg: 30,
            endDeg: 60
        },
        { // Bottom
            x: 150,
            y: 495,
            width: 200,
            height: 5,
            alpha: 0.5,
            startDeg: 60,
            endDeg: 120
        },
        { // BL Corner Horizontal
            x: 0,
            y: 495,
            width: 100,
            height: 5,
            alpha: 0.5,
            startDeg: 120,
            endDeg: 150
        },
        { // BL Corner Vertical
            x: 0,
            y: 400,
            width: 5,
            height: 100,
            alpha: 0.5,
            startDeg: 120,
            endDeg: 150
        },
        { // Left
            x: 0,
            y: 150,
            width: 5,
            height: 200,
            alpha: 0.5,
            startDeg: 150, // TODO:- 
            endDeg: -150, // TODO:- 
            bounds: true
        },
        {
            // TL Corner Horizontal
            x: 0,
            y: 0,
            width: 100,
            height: 5,
            alpha: 0.5,
            startDeg: -150,
            endDeg: -120
        },{
            // TL Corner Vertical
            x: 0,
            y: 0,
            width: 5,
            height: 100,
            alpha: 0.5,
            startDeg: -150,
            endDeg: -120
        },
        { // Top
            x: 150,
            y: 0,
            width: 200,
            height: 5,
            alpha: 0.5,
            startDeg: -120,
            endDeg: -60
        }];

        hints.forEach(hint => {
            const hintRect = this.scene.add.rectangle(hint.x, hint.y, hint.width, hint.height, 0x36ff14, 0.75).setScrollFactor(0).setOrigin(0, 0) as CameraHint;
            hintRect.StartDeg = hint.startDeg;
            hintRect.EndDeg = hint.endDeg;
            hintRect.goToBounds = hint.bounds;
            hintRect.setVisible(false);
            this.cameraHints.add(hintRect);
        });
    }

    // TODO:- Make generic
    private objectInCameraViewport = (obj: any): boolean => {
        const x = this.camera.midPoint.x - 250;
        const width = this.camera.midPoint.x + 250;
        
        const y = this.camera.midPoint.y - 250;
        const height = this.camera.midPoint.y + 250;

        const bounds = new Phaser.Geom.Rectangle(x, y, width, height);
        return bounds.contains(obj.x, obj.y);
    }

    private showCameraHints = (show: boolean) => {
        this.cameraHints.children.iterate((part: CameraHint) => {
            part.fillColor = 0x36ff14; // Green
            part.setVisible(show);
        });
    }

    private highlightCameraHint = (angle: number) => {
        this.cameraHints.children.iterate((child: CameraHint) => {
            if ((angle > child.StartDeg && angle < child.EndDeg) || (child.goToBounds && (angle < child.EndDeg || angle > child.StartDeg))){
                child.setVisible(true);
            }else {
                child.setVisible(false);
            }
        })
    }

    private getAngleToTarget = (head: Phaser.GameObjects.Shape, target: Phaser.GameObjects.Shape): number => {
        const angleRadian = Phaser.Math.Angle.Between(head.x, head.y, target.x, target.y);
        let angleDeg = angleRadian * 180 / Math.PI

        return angleDeg;
    }

    public updateHints = (playerHead: Phaser.GameObjects.Shape, target: Phaser.GameObjects.Shape) => {
        
        if (!this.objectInCameraViewport(target)){  
            this.highlightCameraHint(this.getAngleToTarget(playerHead, target));
        }else {
            this.showCameraHints(false);
        }
    }
}

export default CameraManager;