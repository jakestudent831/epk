var preVid = document.getElementById('precomp')

document.onload = function(e){
    preVid.volume = 0
}

var volLevel = document.getElementById('volume-slider')
volLevel.onchange = function (e) {
    preVid.volume = volLevel.value
}       
