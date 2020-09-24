radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2 && InputP1 == receivedNumber || receivedNumber == 0 && InputP1 == 1 || receivedNumber == 1 && InputP1 == 2) {
        basic.showString("loss")
    }
    if (receivedNumber == 2 && InputP1 == 1 || receivedNumber == 0 && InputP1 == 2 || receivedNumber == 1 && InputP1 == receivedNumber) {
        basic.showString("win")
        score += 1
    }
    if (receivedNumber == 2 && InputP1 == 2 || receivedNumber == 0 && InputP1 == receivedNumber || receivedNumber == 1 && InputP1 == 1) {
        basic.showString("draw")
    } else {
        basic.showString("error")
    }
})
input.onButtonPressed(Button.A, function () {
    InputP1 = 0
    basic.showString("" + (InputP1))
    radio.sendNumber(InputP1)
})
input.onButtonPressed(Button.AB, function () {
    InputP1 = 1
    basic.showString("" + (InputP1))
    radio.sendString("" + (InputP1))
})
input.onButtonPressed(Button.B, function () {
    InputP1 = 2
    basic.showString("" + (InputP1))
    radio.sendString("" + (InputP1))
})
let score = 0
let InputP1 = 0
radio.setGroup(255)
