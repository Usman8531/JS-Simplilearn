/*function increase(){
    document.getElementById("img").style.width='400px';
}
function decrease(){
    document.getElementById("img").style.width='200px';
}*/
var length=250;
var additon=2;
var intervalID=0;
function increase(){
    clearInterval(intervalID)
    intervalID=setInterval(zoomin,10)
}
function decrease(){
    clearInterval(intervalID)
    intervalID=setInterval(zoomout,10)
}
function zoomin(){
    if(width<200){
        width=width+additon;
        document.getElementById("img").style.width=width;
        console.log(width)
    }
    else{
        clearInterval(intervalID)
    }
}
function zoomout(){
    if(width>100){
        width=width-additon;
        document.getElementById("img").style.width=width;
        console.log(width)
    }
    else{
        clearInterval(intervalID)
    }
}