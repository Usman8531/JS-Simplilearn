class student{
    constructor(name,age,rollno){
        this.name=name;
        this.age=age;
        this.rollno=rollno;
    }
    org(){
        return("I am " +this.name+"From Pakisatn")
    }
    dob(){
        return("My Date of Birth is"+(this.age-2022))
    }
}
class student1 extends student{
    constructor(name,rollno,age,language,region){
        super(name,rollno,age);
        this.language=language;
        this.region=region;
    }

}
var saim=new student1("Saim",19, 2521306,"javaScript","Faisalbad")
var mirza=new student("Muhammad Usman",19,2521340);
mirza.dob();
mirza.org();
console.log(mirza);
console.log(saim)