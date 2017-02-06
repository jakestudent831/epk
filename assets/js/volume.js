var preVid = document.getElementById('precomp')
console.log('Hello')

document.onload = function(e){
    console.log('test')
    console.log('e', e)
    preVid.volume = 0
}

document.getElementById('reveal').onclick = function (e) {
    console.log('click e', e)
}

/*
var volLevel = document.getElementById('volume-slider')
volLevel.onchange = function (e) {
    preVid.volume = volLevel.value
}       
*/
