let sensor = 0
cuteBot.stopcar()
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
basic.forever(function () {
    sensor = cuteBot.ultrasonic(cuteBot.SonarUnit.Inches)
    if (sensor < 3) {
        cuteBot.motors(-20, -20)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    } else {
        cuteBot.stopcar()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    }
})
