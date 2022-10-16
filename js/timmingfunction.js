/*function fun1(){
    alert("HI Here I am Executed !")
}
function start(){
    setTimeout(fun1,2000);
}
*/
/*
var start=()=>{
    setTimeout(function(){
        alert("How are you Man")
    },3000)
}*/
                    

                                                    /*clearTimeout*/
var id=0;
function fun1(){
    alert("HI Here I am Executed !")
}
function start(){
  id=  setTimeout(fun1,2000);
}
function Stop(){
    clearTimeout(id)
}
/*setInterval*/
var id=0;
function fun1(){
    alert("HI Here I am Executed !")
}
function start(){
  id=  setInterval(fun1,5000);
}
function Stop(){
    clearTimeout(id)
}