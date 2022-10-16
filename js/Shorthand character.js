// /d in js to add number 
// here d stands for digit 
/*let regex=/\d8531/;
let str1="My Phone Number is 03018531368";
var output=regex.exec(str1);
console.log(output);
*/
// Captital D is opposite to this one just for characters
/*
let regex=/\D+8531/;
let str1="My Phone Number is 0301a&%#@&*^%8531368";
var output=regex.exec(str1);
console.log(output);
*/
//w is return the compelete value for the word before the Entered nuumber before encountering space or symbol
/*let regex=/\w+ber/;
let str1="My Phone Number is 0301a&%#@&*^%8531368";
var output=regex.exec(str1);
console.log(output);

//W it is used to remove the cahrecter from the specific characters
let regex=/\W+ber/;
let str1="My Phone num%#&*(&%#@%$^&&*ber is 0301a&%#@&*^%8531368";
var output=regex.exec(str1);
console.log(output);

//Space before the Word and charecter
let regex=/\sPhone/;
let str1="My                   Phone Number is 0301a&%#@&*^%8531368";
var output=regex.exec(str1);
console.log(output);*/

//Inverse of space

let regex=/\SPhone/;
let str1="My &%^$%$%Phone Number is 0301a&%#@&*^%8531368";
var output=regex.exec(str1);
console.log(output);