var preVid = document.getElementById('precomp')

var volLevel = document.getElementById('volume-slider')
volLevel.onchange = function (e) {
	volLevel.volume= 0
    console.log('preVid.volume', preVid.volume)
    console.log('volLevel.value', volLevel.value)
    preVid.volume = volLevel.value
}       

document.onload = function(e){
    preVid.volume = 0
}


