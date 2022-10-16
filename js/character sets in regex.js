//include character at the start of the regex
/*var regex=/[abc]usman/;
var str1="I am Muhammad ausman"
var output=regex.test(str1);
console.log(output);

// exculde character from the strat of the regex 
var regex=/[^abc]usman/;
var str1="I am Muhammad usman"
var output=regex.test(str1);
console.log(output);*/
function employ(){
    var box= document.getElementById("eid").value;
    var check=/[DE]245[10-99]/;
    if(check.test(box)){
        alert("Valid Employ ID")
    }
    else
    {
        alert("InValid Employee ID")
    }
}