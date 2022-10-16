// callback is function in which a function is passed as an argument in another function 
/*function one(){
    setTimeout(function(){
console.log("This is function one");
two();
    },2000)
}
function two (){
    console.log("This is function two ")
}
function three (){
    console.log("This is function onthree ")
}
one();

three();*/

// cAll Back Function 

function person(friend, person2){
    setTimeout(function(){
        console.log("My friend name is " +friend);
        person2();
    },2000)

}

function person2(){
    console.log("My name is Muhammad Usman")
}
person("Sheda",person2);