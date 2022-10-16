/*var mycar=new Object()
{
mycar.company="Ford";
mycar.name="Reptor";
mycar.color="Black";

}
console.log(mycar)*/

// map in javascript 
/*var mycar=new Map()
{
mycar.set(1,"BMW")
mycar.set(2,"Mercedes")
mycar.set(3,"Honda")
}
console.log(mycar)*/

// use as keys 
/*
var cars= new Map()
let obj={};
let fun=function(){};
{
    cars.set("My Car is ","BMW")
    cars.set(obj,"Honda")
    cars.set(fun,"Mercedes")
}
console.log(cars.get(obj))
console.log(cars.get(fun))*/


/*maps by passing values in Arr*/

var myarr=[[1,"BMW"],[2,"Honda"],[3,"Merecedes"]]

var mycar=new Map(myarr)
for(let [key,value] of myarr){
    console.log(key+" "+value)
}
console.log(mycar.get(2))