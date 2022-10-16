/*let complete=(true)
let prom=new Promise(function(resolve,reject){
if(complete){
    resolve("I am successful");
}
else{
    reject("I am Fail");
    
}
});
console.log(prom);

*/

function prom(a,b) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching data Please Wait");
        var c=a/b;
        setTimeout(function(){
            if (a,b) {
                resolve("your Answer is " +c);
            }
            else {
                reject("Fail to calculate");
    
            }
        },2000)
    });
}
// let onfulfilment= 
// let onrejection = 
prom(9,2).then((result) =>{
    console.log(result);
    }).catch((error ) => {
        console.log(error );
        });;