function switchLevel () {
    if (current_level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    }
    createPlayer()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function createPlayer () {
    if (current_level == 1) {
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.placeOnTile(mySprite, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
}
let mySprite: Sprite = null
let current_level = 0
scene.setBackgroundColor(12)
current_level = 1
mySprite = sprites.create(assets.image`even smaller`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
switchLevel()
