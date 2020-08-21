function change_level () {
    if (level == 1) {
        _1 = randint(5, 10)
        _2 = randint(5, 10)
        answer = _1 * _2
        player_answer = game.askForNumber("" + _1 + " x " + _2)
        if (player_answer == answer) {
            game.showLongText("right!", DialogLayout.Bottom)
        } else {
            game.showLongText("wrong.", DialogLayout.Bottom)
            game.showLongText("the answer was " + answer, DialogLayout.Bottom)
            game.over(false)
        }
    } else if (level == 2) {
        _1 = randint(11, 15)
        _2 = randint(11, 15)
        answer = _1 * _2
        player_answer = game.askForNumber("" + _1 + " x " + _2)
        if (player_answer == answer) {
            game.showLongText("right!", DialogLayout.Bottom)
            if (game.ask("try again?")) {
                change_level()
            } else {
                level += 1
                change_level()
            }
        } else {
            game.showLongText("wrong.", DialogLayout.Bottom)
            change_level()
        }
    } else if (level == 3) {
        _1 = randint(16, 20)
        _2 = randint(16, 20)
        answer = _1 * _2
        player_answer = game.askForNumber("" + _1 + " x " + _2)
        if (player_answer == answer) {
            game.showLongText("right!", DialogLayout.Bottom)
            if (game.ask("try again?")) {
                change_level()
            } else {
                level += 1
                change_level()
            }
        } else {
            game.showLongText("wrong.", DialogLayout.Bottom)
            change_level()
        }
    } else if (level == 4) {
        _1 = randint(21, 25)
        _2 = randint(21, 25)
        answer = _1 * _2
        player_answer = game.askForNumber("" + _1 + " x " + _2)
        if (player_answer == answer) {
            game.showLongText("right!", DialogLayout.Bottom)
            if (game.ask("try again?")) {
                change_level()
            } else {
                level += 1
                change_level()
            }
        } else {
            game.showLongText("wrong.", DialogLayout.Bottom)
            change_level()
        }
    } else if (level == 5) {
        _1 = randint(26, 30)
        _2 = randint(26, 30)
        answer = _1 * _2
        player_answer = game.askForNumber("" + _1 + " x " + _2)
        if (player_answer == answer) {
            game.showLongText("right!", DialogLayout.Bottom)
            if (game.ask("try again?")) {
                change_level()
            } else {
                test()
            }
        } else {
            game.showLongText("wrong.", DialogLayout.Bottom)
            change_level()
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -30
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    level += 1
})
function test () {
    game.splash("test")
    for (let index = 0; index < 10; index++) {
        _1 = randint(5, 30)
        _2 = randint(5, 30)
        answer = _1 * _2
        player_answer = game.askForNumber("" + _1 + " x " + _2)
        if (player_answer == answer) {
            game.showLongText("right!", DialogLayout.Bottom)
            info.changeScoreBy(1)
        } else {
            game.showLongText("wrong.", DialogLayout.Bottom)
        }
    }
    pause(100)
    game.over(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    change_level()
    otherSprite.destroy()
})
let mySprite2: Sprite = null
let player_answer = 0
let answer = 0
let _2 = 0
let _1 = 0
let mySprite: Sprite = null
let level = 0
game.showLongText("nnnnnnnnnnn.", DialogLayout.Bottom)
game.showLongText("hn? wa, what am I am I doing here? I don't remember any thing except...", DialogLayout.Bottom)
game.showLongText("this thing called ...                    math. yes math", DialogLayout.Bottom)
game.showLongText("I love it . the thing is      (sigh) I don't remember how to do it.", DialogLayout.Bottom)
game.showLongText("hn? oooooooooooooooooh.                you can't hide from me any more. ", DialogLayout.Bottom)
game.showLongText("oh! right! I can cast spells if I see a right math question and answer!", DialogLayout.Bottom)
game.showLongText("oh yeah!the monsters will attack us! so do math question when we run into a monster so I can cast a spell.", DialogLayout.Bottom)
color.startFade(color.Black, color.originalPalette, 4000)
scene.setBackgroundColor(9)
level = 1
mySprite = sprites.create(img`
    . . . . 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 
    . 1 1 f 1 1 1 1 f 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 f f 1 1 1 . . 
    1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 
    . . . 1 1 1 1 1 1 . . . 
    . . . 1 1 . . 1 1 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 20
tiles.setTilemap(tiles.createTilemap(hex`100008000000000000000000000000000000000004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040402010101010101010101010101010103`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,myTiles.tile1], TileScale.Sixteen))
forever(function () {
    pause(2000)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f . . . . . . . . . . 
        . . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
        . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
        . . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
        . . . . . . f b d b f d d f b d b f . . . . . . 
        . . . . . . f c d c f 1 1 f c d c f . . . . . . 
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
        . . . . . . f f f c d b 1 b d f f f f . . . . . 
        . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
        . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
        . . . . f b f b f f f f f f b f b f b f . . . . 
        . . . . . . . . . f f f f f f . . . . . . . . . 
        . . . . . . . . . . . f f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite2, myTiles.transparency16)
    mySprite2.setVelocity(50, 0)
    mySprite2.ay = 200
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
})
