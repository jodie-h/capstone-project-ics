function switchLevel () {
	
}
function createPlayer () {
    if (current_level == 1) {
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.placeOnTile(mySprite, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
}
let mySprite: Sprite = null
let current_level = 0
current_level = 1
mySprite = sprites.create(assets.image`even smaller`, SpriteKind.Player)
controller.moveSprite(mySprite)
