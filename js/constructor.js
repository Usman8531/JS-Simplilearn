function rect1(lenght,width){
    this.lenght=lenght;
    this.width=width;
    this.area=function(){
        return lenght*width;
    }
this.perimeter=function(){
    return 2*lenght+2*width;
}

}
let r1=new rect1(5,10);
document.write("<h1>"+"this is width of the rectangle"+r1.width+"<\h1>");
document.write("<h1>"+"this is length of the rectangle"+r1.lenght+"<\h1>");
document.write("<h1>"+"this is area of the rectangle"+r1.area()+"<\h1>");
// var r2=new rect1(5,10);
document.write("<h1>"+"this is perimeter of the rectangle"+r1.perimeter()+"<\h1>");
let r2=new rect1(3,6);
document.write("<h1>"+"this is width of the rectangle2 \n"+r2.width+"<\h1>");
document.write("<h1>"+"this is length of the rectangle2 \n"+r2.lenght+"<\h1>");
document.write("<h1>"+"this is area of the rectangle2 \n"+r2.area()+"<\h1>");
// var r2=new rect1(5,10);
document.write("<h1>"+"this is perimeter of the rectangle2 \n"+r2.perimeter()+"<\h1>");