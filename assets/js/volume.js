var preVid = document.getElementById('precomp')

document.onload = function(e){
    preVid.volume = 0
}

var volLevel = document.getElementById('volume-slider')
volLevel.onchange = function (e) {
    console.log('preVid.volume', preVid.volume)
    console.log('volLevel.value', volLevel.value)
    preVid.volume = volLevel.value
}       
