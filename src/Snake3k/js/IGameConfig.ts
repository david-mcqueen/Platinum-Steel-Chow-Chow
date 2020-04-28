interface IGameConfig {
    playableArea: { // This is everwhere - the map as a whole
        width: number,
        height: number,
        grid: {
            cellHeight: number, // the pixel cell each grid cell should be
            cellWidth: number,

            width: number, // The number of cels
            height: number
        }
    },
    viewableArea: { // This is the size of the camera
        width: number,
        height: number
    },
    gameSpeed: number,
    powerUps: {
        gameSpeedModifier: number, // How much powerups should modify the player speed
        powerupDuration: number, // How long powerups should last
    }
    portalModifier: {
        max: number,
        min: number
    },
    cameraHints: {
        hintAreaPct: number
    },
    deptLevels: {
        portal: number,
        hotbar: number,
        player: number,
        cameraHints: number,
    }

}

export default IGameConfig;