/* Syntax Errors
function fun1(){
    console.log("Asaslam O Alaikum")
fun1();*/
// Run Time Errors
// ReferenceError In Which the Programm is not completed
/*function fun1(){
    console.log("Asaslam O Alaikum")
}
function fun2(){
    console.log("Asaslam O Alaikum")
}
fun1();
fun4();*/


            // tryandcatch 
/*function fun1(){
console.log("Asslam o alaikum")

}

try{
    fun1();
    // Error Line
    fun2();
console.log("sir You get your coffee from reception")
}catch(error){
console.log(error)
console.log(error.name)
console.log(error.message)
}*//*
function fun1(){
console.log("Asslam o alaikum")

}

try{
    fun1();
    // Error Line
    fun2();
console.log("sir You get your coffee from reception")
}catch(error){
console.log(error)
console.log(error.name)
console.log(error.message)
}
//this line will execute no matter what is it
finally{
    console.log("This line is Executed");
}*/
                                    // threw error
let a=9;
if(a<10){
    throw new Error ("Error is Customizable!")
} 
else{
    console.log("Ok Fine")
}