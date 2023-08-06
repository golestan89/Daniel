let vvv = 0
if (true) {
    led.plot(0, 0)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
    vvv = 0
    radio.setGroup(1)
    radio.setTransmitSerialNumber(true)
} else {
	
}
basic.forever(function () {
	
})
