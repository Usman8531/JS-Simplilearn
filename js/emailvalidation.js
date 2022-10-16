function val(){
var mail=document.getElementById("email").value;
var regex=/^([A-Z a-z 0-9 \. _]+)@([A-Z a-z]+).([a-z A-Z]{2,6})$/;
 if(mail.trim()==""){
    alert("Enter Email")
    return false;
   }
   else if((regex.test(mail))){
      alert("Successfully login")
      return true;
   }
   else {
      alert("worng Email")
      return false;
}

}