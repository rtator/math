function change_level () {
    if (level == 1) {
        _1 = randint(5, 10)
        _2 = randint(5, 10)
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
function test () {
    game.splash("test")
    for (let index = 0; index < 4; index++) {
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
    game.over(true)
}
let player_answer = 0
let answer = 0
let _2 = 0
let _1 = 0
let level = 0
scene.setBackgroundColor(9)
level = 1
change_level()
