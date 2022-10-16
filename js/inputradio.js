/*function fun1(){
    var x=document.getElementById("btn1");
    var y =document.getElementById("btn2");
if(x.checked==true){
    alert("You selected " +x.value);
}
else if(y.checked==true){
    
    alert("You selected " +y.value);
}
else{
    alert("You did not Selected any option");
}
}*/
function fun1(){
    var x=document.getElementById("btn1");
    var y =document.getElementById("btn2");
if(x.checked==true){
    alert("Wrong Answer Correct Option is" +y.value);
}
else if(y.checked==true){
    
    alert("Correct Answer " +y.value);
}
else{
    alert("You did not Selected any option");
}
}