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
        backgroundRepeat: number
    },
    viewableArea: { // This is the size of the camera
        width: number,
        height: number
    },
    gameSpeed: number,
    powerUps: {
        gameSpeedModifier: number, // How much powerups should modify the player speed
        powerupDuration: number, // How long powerups should last
        portal: {
            shirnk: number,
            grow: number,
        },
        occuranceProbability: number,
        visibleDuration: number // How long they are on the map to be picked up
    }
    portalModifier: {
        max: number,
        min: number
    },
    cameraHints: {
        hintAreaPadding: number // Pixels each side to not show hints for
    },
    deptLevels: {
        portal: number,
        hotbar: number,
        player: number,
        cameraHints: number,
    }

}

export default IGameConfig;