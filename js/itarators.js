// console.log(arr)
// console.log(arr.length)
/*for(var i=0;i<arr.length;i++){
    
    console.log(arr[i])
}

// for of loop 
for(var i of arr){
    console.log(i)
    
}*/
function cars(values ){
    let index=0;
    return{
        next: function(){
            if(index <values.length)
                return{
                    value: values[index++],
                    done: false
                }
            
                else
                {
                    return{
                        done:true
                    }
                }
                
            }
            
        }
    }

var newcars=cars(arr)
console.log(newcars.next())
var arr=["Usman","Ali","wiqi","Umer","Abubakar"]



