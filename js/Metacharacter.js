/*let regex=/usman/g;
let str1="usman is learnig JavaScript. But usman is too slow to learn";
let output=regex.exec(str1);
console.log(output);
// .
let regex=/u.man/g;
let str1="usman is learnig JavaScript. But usman is too slow to learn";
let output=regex.exec(str1);
console.log(output);

let regex=/U*n/;
let str1="Usman is learnig JavaScript. But Usman is too slow to learn";
let output=regex.exec(str1);
console.log(output);
        // ^ character in front 
let str1="Usman is learnig JavaScript. But Usman is too slow to learn";
let output=regex.exec(str1);
console.log(output);*/

// $ to find at at word of the string
/*let regex=/my$/;
let str1="Usman is learnig JavaScript. But Usman is too slow to learn my";
let output=regex.exec(str1);
console.log(output);
*/

// ? Optional character in word 

let regex=/Us?ma?n/;
let str1="Umn is learnig JavaScript. But is too slow to learn my";
let output=regex.exec(str1);
console.log(output);
var b=str1.indexOf(output);
console.log(b);