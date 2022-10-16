/*function fun1(){
var x=document.getElementsByClassName("cls1");
x[0].style.textTransform= "Uppercase";

}*/
function fun1(){
var x=document.getElementsByClassName("cls1");
for(var i=0;i<x.length;i++){
    x[i].style.textTransform= "Uppercase";
}

}