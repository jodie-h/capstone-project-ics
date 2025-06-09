namespace SpriteKind {
    export const lever = SpriteKind.create()
    export const wall = SpriteKind.create()
}
function switchLevel () {
    if (current_level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    }
    createPlayer()
    createLever()
    createDiamonds()
}
function createLever () {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        lever = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . 1 1 1 1 . 
            . . . . . . . . . . 1 1 . . . . 
            . . . . . . . . . 1 1 . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . d d d d d d d d . . . . 
            . . . . d d d d d d d d . . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.lever)
        tiles.placeOnTile(lever, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = jump_speed
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.lever, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        disappearingTile = sprites.create(img`
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d 6 b 1 d d d d d d b 
            1 d d d d d d 6 1 d d d d d d b 
            1 d d d d d d 6 1 d d d d d d b 
            1 d d 6 d d d b 1 d d d d d d b 
            1 6 6 d d d d d 1 d d d d d d d 
            b b 6 b b b 6 b 6 b 6 b b b d e 
            d 1 1 1 1 d b 6 6 6 1 1 1 1 1 b 
            1 d d d d d d e 6 1 d d d d d b 
            1 d d d d d d e e d d d d d d b 
            1 d d d d d d e b d d d d d b b 
            1 d d d d d d b 1 d d d b d d b 
            1 d d d d d d b 1 d d d b d d b 
            1 d d d d d d d 1 d d b d d d d 
            b b b b b b d e d b b b b b b e 
            `, SpriteKind.wall)
        tiles.placeOnTile(lever, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        sprites.destroyAllSpritesOfKind(SpriteKind.wall)
    }
})
function createDiamonds () {
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        diamonds = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 4 2 4 2 4 2 4 f . . . 
            . . . f 2 2 4 2 2 2 4 2 2 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 4 f . 
            . . f 2 4 2 4 2 2 2 4 2 4 2 f . 
            . . . f 2 4 4 2 2 2 4 4 2 f . . 
            . . . . f 2 2 4 2 4 2 2 f . . . 
            . . . . . f 2 4 2 4 2 f . . . . 
            . . . . . . f 2 4 2 f . . . . . 
            . . . . . . . f 2 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(diamonds, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    mySprite.ay = gravity
}
function setVariable () {
    jump_speed = -150
    gravity = 500
}
function createPlayer () {
    if (current_level == 1) {
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.placeOnTile(mySprite, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        mySprite.ay = gravity
    }
}
let gravity = 0
let diamonds: Sprite = null
let disappearingTile: Sprite = null
let jump_speed = 0
let lever: Sprite = null
let mySprite: Sprite = null
let current_level = 0
scene.setBackgroundColor(12)
current_level = 1
mySprite = sprites.create(assets.image`even smaller`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
setVariable()
switchLevel()
