function Person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye;
};
Person.prototype.Nationality = "india";
Person.prototype.name = function(){
    return this.firstName+" "+this.lastName;
};
var myfather = new Person("giri babu","mamidala",50,"black");
// console.log(myfather.firstName);
// console.log(myfather.lastName);
// console.log(myfather.age);
// console.log(myfather.eyecolor);
// console.log(myfather.Nationality);
// console.log(myfather.name());
// console.log(myfather.name() +"Age: "+myfather.age);
document.getElementById("demo1").innerHTML =myfather.name() +"Age: "+myfather.age;