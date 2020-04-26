import CameraHint from "./CameraHint";
import IGameConfig from "../IGameConfig";

interface IScoreboxConfig {
    scene: Phaser.Scene
}

class CameraManager extends Phaser.GameObjects.Container {
    
    private cameraHints: Phaser.GameObjects.Group;
    private camera: Phaser.Cameras.Scene2D.Camera;
    private gameConfig: IGameConfig

    constructor(config: IScoreboxConfig, camera: Phaser.Cameras.Scene2D.Camera, gameConfig: IGameConfig){
        super(config.scene)

        this.scene = config.scene;
        this.camera = camera;
        this.gameConfig = gameConfig;

        // Add camera hints before we start moving the camera around with 'follow'
        this.cameraHints = this.scene.add.group();
        this.addCameraHints();
    }

    private addCameraHints = () => {

        const cornerVerticalPartHeight = this.gameConfig.viewableArea.height * 0.25;
        const cornerHorizontalPartWidth = this.gameConfig.viewableArea.width * 0.25;
        const sideHeight = this.gameConfig.viewableArea.height * 0.4;
        const sideWidth = this.gameConfig.viewableArea.width * 0.4;

        const hints = [
        { // TR Corner Horizontal
            x: this.gameConfig.viewableArea.width * 0.75,
            y: 0,
            width: cornerHorizontalPartWidth,
            height: 5,
            alpha: 0.5,
            startDeg: -60,
            endDeg: -30
        },
        { // TR Corner Vertical
            x: this.gameConfig.viewableArea.width - 5,
            y: 0,
            width: 5,
            height: cornerVerticalPartHeight,
            alpha: 0.5,
            startDeg: -60,
            endDeg: -30
        },
        { // Right
            x: this.gameConfig.viewableArea.width - 5,
            y: (this.gameConfig.viewableArea.height - sideHeight) / 2,
            width: 5,
            height: sideHeight,
            alpha: 0.5,
            startDeg: -30,
            endDeg: 30
        },
        { // BR Corner Horizontal
            x: this.gameConfig.viewableArea.width * 0.75,
            y: this.gameConfig.viewableArea.height - 5,
            width: cornerHorizontalPartWidth,
            height: 5,
            alpha: 0.5,
            startDeg: 30,
            endDeg: 60
        },
        { // BR Corner Vertical
            x: this.gameConfig.viewableArea.width - 5,
            y: this.gameConfig.viewableArea.height * 0.75,
            width: 5,
            height: cornerVerticalPartHeight,
            alpha: 0.5,
            startDeg: 30,
            endDeg: 60
        },
        { // Bottom
            x: (this.gameConfig.viewableArea.width - sideWidth) / 2,
            y: this.gameConfig.viewableArea.height - 5,
            width: sideWidth,
            height: 5,
            alpha: 0.5,
            startDeg: 60,
            endDeg: 120
        },
        { // BL Corner Horizontal
            x: 0,
            y: this.gameConfig.viewableArea.height - 5,
            width: cornerHorizontalPartWidth,
            height: 5,
            alpha: 0.5,
            startDeg: 120,
            endDeg: 150
        },
        { // BL Corner Vertical
            x: 0,
            y: this.gameConfig.viewableArea.height * 0.75,
            width: 5,
            height: cornerVerticalPartHeight,
            alpha: 0.5,
            startDeg: 120,
            endDeg: 150
        },
        { // Left
            x: 0,
            y: (this.gameConfig.viewableArea.height - sideHeight) / 2,
            width: 5,
            height: sideHeight,
            alpha: 0.5,
            startDeg: 150,
            endDeg: -150,
            bounds: true
        },
        {
            // TL Corner Horizontal
            x: 0,
            y: 0,
            width: cornerHorizontalPartWidth,
            height: 5,
            alpha: 0.5,
            startDeg: -150,
            endDeg: -120
        },{
            // TL Corner Vertical
            x: 0,
            y: 0,
            width: 5,
            height: cornerVerticalPartHeight,
            alpha: 0.5,
            startDeg: -150,
            endDeg: -120
        },
        { // Top
            x: (this.gameConfig.viewableArea.width - sideWidth) / 2,
            y: 0,
            width: sideWidth,
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
            hintRect.setDepth(10000);
            this.cameraHints.add(hintRect);
        });
    }

    // TODO:- Make generic
    private objectInCameraViewport = (obj: any): boolean => {
        const hintAreaPct = 0.65; // The area which doesn't show hints for.
        const x = this.camera.midPoint.x - (this.gameConfig.viewableArea.width * hintAreaPct);
        const width = this.camera.midPoint.x + (this.gameConfig.viewableArea.width * hintAreaPct);
        
        const y = this.camera.midPoint.y - (this.gameConfig.viewableArea.height * hintAreaPct);
        const height = this.camera.midPoint.y + (this.gameConfig.viewableArea.height * hintAreaPct);

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