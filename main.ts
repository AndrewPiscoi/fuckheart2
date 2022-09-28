basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("G F G A D F E D ", 120)
    music.setBuiltInSpeakerEnabled(true)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
})
