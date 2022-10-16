function validate(){
    var name=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;
    var age=document.getElementById("age").value;
    var mob=document.getElementById("phone").value;
    if(age.trim() ==""||pass.trim()==""||name.trim()==""|| mob.trim()==""){
        alert("Aby Form Fill kr")
        return false;
    }
    else if(name=="Usman" && pass=="123456" && mob=="03018531368"){
        alert("Succsful login")
        return true;
    }
    else if(pass !="123456"){
        alert("worng password")
        return false;
    }
    else if(mob !="03018531368"){
        alert("wrong Mobile number")
        return false;
    }
    else if(age<13){
    alert("You are underage")
    return false;
    }
    else{
        alert("Wrong Password or USER Name")
        return false;
    }
}