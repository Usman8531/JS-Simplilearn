function submit(){
    var mob=document.getElementById("mobile").value;
    var regex=/^[301-350]\d$/;




    if(mob.trim()==""){
        alert("Enter Your Mobile Number")
    return false;
}
else if ((regex.test(mob)))
{
    alert("Mobile is Successfuly Added")
return true;
}
else{
    alert("You Entered a wrong Mobile Number")
    return false;
    }
}