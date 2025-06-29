input.onSound(DetectedSound.Loud, function () {
    zoombit.toggleHeadlight(HeadlightChannel.All)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (zoombit.isLineDetectedOn(LinePosition.Center)) {
        zoombit.move(MotorDirection.Forward, 128)
    } else if (zoombit.isLineDetectedOn(LinePosition.Left1)) {
        zoombit.setMotorsSpeed(50, 100)
    } else if (zoombit.isLineDetectedOn(LinePosition.Right1)) {
        zoombit.setMotorsSpeed(100, 50)
    } else if (zoombit.isLineDetectedOn(LinePosition.Left2)) {
        zoombit.setMotorsSpeed(0, 100)
    } else if (zoombit.isLineDetectedOn(LinePosition.Right2)) {
        zoombit.setMotorsSpeed(100, 0)
    } else {
    	
    }
})
