var preVid = document.getElementById('precomp')

var volLevel = document.getElementById('volume-slider')
volLevel.onchange = function (e) {
    console.log('preVid.volume', preVid.volume)
    console.log('volLevel.value', volLevel.value)
	//preVid.muted = false
    preVid.volume = volLevel.value
    //if (volLevel.value === 0) preVid.volume = true
}       

document.onload = function(e){
	//preVid.muted = true
    preVid.volume = 0
}


