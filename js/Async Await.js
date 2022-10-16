/*promise in js*/
/*function prom(){
    return new Promise((resolve,reject)=>{
        var coffee=true;
        if(coffee){
            console.log("we serve Only Black Coffee" + coffee)
        resolve();
        }
        else{
            console.log("WE did not have Coffee")
        reject();
        }
    })
}
prom().then(()=>{console.log("Usman :Thanks for my coffee")}).catch(()=>{
    console.log("Usman to waiter:Chla ja Bhosri wla");
})*/
                    // async 
                    
async function fun1(){
    return "Chla ja bhori wla ";
}
console.log(fun1())