function* generator(){
    let i=0;
    var ar=["Honda","BMW","Audi","Mercedes","TATA"]
    while(i<ar.length){
        yield ar[i]
        i++;
    }
}
let gen=generator();
console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())