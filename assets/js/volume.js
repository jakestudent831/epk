var preVid = document.getElementById('precomp')

var volLevel = document.getElementById('volume-slider')
volLevel.onchange = function (e) {
	preVid.muted = false
    preVid.volume = volLevel.value
    if (volLevel.value === 0) preVid.volume = true
}       



