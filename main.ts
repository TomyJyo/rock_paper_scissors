input.onButtonPressed(Button.A, function () {
    customEditor.addMemo("グー：1")
    int_Me = 1
})
input.onButtonPressed(Button.AB, function () {
    customEditor.addMemo("パー：3")
    int_Me = 3
})
input.onButtonPressed(Button.B, function () {
    customEditor.addMemo("チョキ：2")
    int_Me = 2
})
/**
 * チョキ
 * 
 * グー
 * 
 * 　　　　　パー
 */
let int_MyCon = 0
let int_Me = 0
customEditor.addMemo("「ジャンケン」ゲーム")
customEditor.addMemo("マイコンと対戦")
customEditor.addMemo("グー：ﾎﾞﾀﾝA、チョキ：ﾎﾞﾀﾝB、パー：ﾎﾞﾀﾝA+B")
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . # . #
        # # . # .
        # # . . .
        . . # # #
        . . # # #
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
int_Me = 0
customEditor.addMemo("連続して手を出さなかった回数をｶｳﾝﾄ")
let int_Count = 0
music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.rest(music.beat(BeatFraction.Half))
music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.rest(music.beat(BeatFraction.Half))
music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.rest(music.beat(BeatFraction.Half))
music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
basic.showString("GO")
basic.forever(function () {
    if (int_Count >= 3) {
        customEditor.addMemo("3回以上、手を出さなかったらｹﾞｰﾑｵｰﾊﾞｰ")
        customEditor.addMemo("ﾎﾞﾀﾝA+B で再スタート")
        game.gameOver()
    }
    basic.pause(1000)
    customEditor.addMemo("「ジャン、ケン、ポン」のタイミングを合わせる音")
    basic.clearScreen()
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    customEditor.addMemo("3つ目の音に合わせてボタンを押す")
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    basic.pause(1000)
    customEditor.addMemo("グー：1、チョキ：2、パー：3")
    int_MyCon = randint(1, 3)
    if (int_Me == 1) {
        if (int_MyCon == 1) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . . # #
                . . . # #
                `)
            basic.pause(2000)
        } else if (int_MyCon == 2) {
            basic.showLeds(`
                . # . . .
                # . # . .
                . . . . .
                . . . # #
                . . . # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
        } else if (int_MyCon == 3) {
            basic.showLeds(`
                # # # . .
                # # # . .
                . . . . .
                . . . # #
                . . . # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
        }
    } else if (int_Me == 2) {
        if (int_MyCon == 1) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . # . #
                . . . # .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
        } else if (int_MyCon == 2) {
            basic.showLeds(`
                . # . . .
                # . # . .
                . . . . .
                . . # . #
                . . . # .
                `)
            basic.pause(1000)
        } else if (int_MyCon == 3) {
            basic.showLeds(`
                # # # . .
                # # # . .
                . . . . .
                . . # . #
                . . . # .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
        }
    } else if (int_Me == 3) {
        if (int_MyCon == 1) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . # # #
                . . # # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
        } else if (int_MyCon == 2) {
            basic.showLeds(`
                . # . . .
                # . # . .
                . . . . .
                . . # # #
                . . # # #
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
        } else if (int_MyCon == 3) {
            basic.showLeds(`
                # # # . .
                # # # . .
                . . . . .
                . . # # #
                . . # # #
                `)
            basic.pause(1000)
        }
        int_Count = 0
    } else {
        customEditor.addMemo("手を出さなかった場合")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
        customEditor.addMemo("ｹﾞｰﾑｵｰﾊﾞｰまでのｶｳﾝﾄﾀﾞｳﾝ")
        basic.showNumber(3 - int_Count)
        int_Count += 1
    }
    int_Me = 0
})
