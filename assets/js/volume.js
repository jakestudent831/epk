var preVid = document.getElementById('precomp')
console.log('Hello')

document.onload = function(e){
    console.log('e', e)
    preVid.volume = 0
}

/*
var volLevel = document.getElementById('volume-slider')
volLevel.onchange = function (e) {
    preVid.volume = volLevel.value
}       
*/
