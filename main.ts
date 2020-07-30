input.onButtonPressed(Button.A, function () {
    if (posX > 0) {
        led.unplot(posX, 4)
        posX += -1
        led.plot(posX, 4)
    } else {
        posX = 4
    }
})
input.onButtonPressed(Button.B, function () {
    if (posX < 4) {
        led.unplot(posX, 4)
        posX += 1
        led.plot(posX, 4)
    } else {
        posX = 4
    }
})
let posX = 0
posX = 0
let posY = 0
led.plot(posX, 4)
basic.forever(function () {
	
})
