/*function fun1(){
var x=document.getElementById("us");
alert(x.options[x.selectedIndex].value);
}*/
function fun1(){
    var x=document.getElementById("us");
    if((x.options[x.selectedIndex].value)=="BMW") 
    {
        alert("Correct option");
     }  
    else {
    alert("Wrong option")
    }

}

