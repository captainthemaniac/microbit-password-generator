// If logo is long pressed, the number of length will be reset to 8 again.
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    nooflength = 8
})
// On button A pressed, it will add 1, gradually everytime you do so.
input.onButtonPressed(Button.A, function () {
    nooflength += 1
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("DEBUG MODE! SIKE!")
})
// On button B pressed, it will generate the password out. You could add more queries in according to your favor.
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < nooflength; index++) {
        letter = randint(0, 87)
        if (letter == 0) {
            basic.showString("A")
        } else if (letter == 1) {
            basic.showString("0")
        } else if (letter == 2) {
            basic.showString("A")
        } else if (letter == 3) {
            basic.showString("B")
        } else if (letter == 4) {
            basic.showString("C")
        } else if (letter == 5) {
            basic.showString("D")
        } else if (letter == 6) {
            basic.showString("E")
        } else if (letter == 7) {
            basic.showString("F")
        } else if (letter == 8) {
            basic.showString("G")
        } else if (letter == 9) {
            basic.showString("H")
        } else if (letter == 10) {
            basic.showString("I")
        } else if (letter == 11) {
            basic.showString("J")
        } else if (letter == 12) {
            basic.showString("K")
        } else if (letter == 13) {
            basic.showString("L")
        } else if (letter == 14) {
            basic.showString("M")
        } else if (letter == 15) {
            basic.showString("N")
        } else if (letter == 16) {
            basic.showString("O")
        } else if (letter == 17) {
            basic.showString("P")
        } else if (letter == 18) {
            basic.showString("Q")
        } else if (letter == 19) {
            basic.showString("R")
        } else if (letter == 20) {
            basic.showString("S")
        } else if (letter == 21) {
            basic.showString("T")
        } else if (letter == 22) {
            basic.showString("U")
        } else if (letter == 23) {
            basic.showString("V")
        } else if (letter == 24) {
            basic.showString("W")
        } else if (letter == 25) {
            basic.showString("X")
        } else if (letter == 26) {
            basic.showString("Y")
        } else if (letter == 27) {
            basic.showString("Z")
        } else if (letter == 28) {
            basic.showString("a")
        } else if (letter == 29) {
            basic.showString("b")
        } else if (letter == 30) {
            basic.showString("c")
        } else if (letter == 31) {
            basic.showString("d")
        } else if (letter == 32) {
            basic.showString("e")
        } else if (letter == 33) {
            basic.showString("f")
        } else if (letter == 34) {
            basic.showString("g")
        } else if (letter == 35) {
            basic.showString("h")
        } else if (letter == 36) {
            basic.showString("i")
        } else if (letter == 37) {
            basic.showString("j")
        } else if (letter == 38) {
            basic.showString("k")
        } else if (letter == 39) {
            basic.showString("l")
        } else if (letter == 40) {
            basic.showString("m")
        } else if (letter == 41) {
            basic.showString("n")
        } else if (letter == 42) {
            basic.showString("o")
        } else if (letter == 43) {
            basic.showString("p")
        } else if (letter == 44) {
            basic.showString("q")
        } else if (letter == 45) {
            basic.showString("r")
        } else if (letter == 46) {
            basic.showString("s")
        } else if (letter == 47) {
            basic.showString("t")
        } else if (letter == 48) {
            basic.showString("u")
        } else if (letter == 49) {
            basic.showString("v")
        } else if (letter == 50) {
            basic.showString("w")
        } else if (letter == 51) {
            basic.showString("x")
        } else if (letter == 52) {
            basic.showString("y")
        } else if (letter == 53) {
            basic.showString("z")
        } else if (letter == 54) {
            basic.showString("1")
        } else if (letter == 55) {
            basic.showString("2")
        } else if (letter == 56) {
            basic.showString("3")
        } else if (letter == 57) {
            basic.showString("4")
        } else if (letter == 58) {
            basic.showString("5")
        } else if (letter == 59) {
            basic.showString("6")
        } else if (letter == 60) {
            basic.showString("7")
        } else if (letter == 61) {
            basic.showString("8")
        } else if (letter == 61) {
            basic.showString("9")
        } else if (letter == 62) {
            basic.showString("%")
        } else if (letter == 63) {
            basic.showString("&")
        } else if (letter == 64) {
            basic.showString("*")
        } else if (letter == 65) {
            basic.showString("(")
        } else if (letter == 66) {
            basic.showString(")")
        } else if (letter == 67) {
            basic.showString("-")
        } else if (letter == 68) {
            basic.showString("_")
        } else if (letter == 69) {
            basic.showString("+")
        } else if (letter == 70) {
            basic.showString("=")
        } else if (letter == 71) {
            basic.showString("{")
        } else if (letter == 72) {
            basic.showString("}")
        } else if (letter == 73) {
            basic.showString("[")
        } else if (letter == 74) {
            basic.showString("]")
        } else if (letter == 75) {
            basic.showString("/")
        } else if (letter == 76) {
            basic.showString(":")
        } else if (letter == 77) {
            basic.showString(";")
        } else if (letter == 78) {
            basic.showString("<")
        } else if (letter == 79) {
            basic.showString(">")
        } else if (letter == 80) {
            basic.showString(",")
        } else if (letter == 81) {
            basic.showString(".")
        } else if (letter == 82) {
            basic.showString("'")
        } else if (letter == 83) {
            basic.showString("\"")
        } else if (letter == 84) {
            basic.showString("?")
        } else if (letter == 85) {
            basic.showString("^")
        } else if (letter == 86) {
            basic.showString("@")
        } else {
            basic.showString("$")
        }
        basic.pause(1000)
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
// I start the generator at 8 letters, as this length is the least most websites asked for.
let letter = 0
let nooflength = 0
nooflength = 8
