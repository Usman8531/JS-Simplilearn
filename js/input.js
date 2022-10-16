function fun1(){
    var x=document.getElementById("uname").value;
    var y =document.getElementById("pas").value;
    if(y=="12345678"){
        alert("Correct Password Login");
    }
    else
   {
    alert("Wrong password");
    return;
   }
   alert("Your Name is "+x+ "Your Password "+ y);
}