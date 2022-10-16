/*const Employ = {
    post: function () {
        return " A SOftware Developer";
    },
    changename: function (name) {
        this.name = name;
    },
    changerole: function (role) {
        this.role = role;
    },
}/*
var E1 = Object.create(Employ);
E1.name = "Muhammad Usman";
 E1.role="Developer";
E1.changename("Mirza");
console.log(E1)
*//*
var E1=Object.create(Employ,{
    name:{value:"Muhammad Usman",writable: true},
    role:{value:"Programmer",writable:true},
})
E1.changename("Mirza Usman");
E1.changerole("Nakama");
console.log(E1);*/

function Employ(name,id , salary){
    this.name=name;
    this.salary=salary;
    this.id=id;
}
Employ.prototype.post=function(){
return (this.name +" "+ "is a content Creator")
}
var Usman=new Employ("Usman",2521340,"$"+10000);
console.log(Usman);

function Programmer(name,id,salary,language){
    Employ.call(this,name,id ,salary)
        this.language=language;
    Programmer.prototype=Object.create(Employ.prototype);
    Programmer.prototype.constructor=Programmer;
}
var Sir= new Programmer("Saim",2521306,"$"+100000,"javaScript");
console.log(Sir)