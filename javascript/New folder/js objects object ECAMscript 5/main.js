var person = {
    name:"shiva durga teja",
    lname:"mamidala",
    age:24,
    city:"narasaraopet",
    language:"No"
};
//changing the property value
Object.defineProperty(person,"language",{value:"Telugu"});
document.getElementById("demo1").innerHTML=person.language;
Object.defineProperty(person,"language",{enumerable:false});
document.getElementById("demo2").innerHTML=Object.keys(person);
Object.defineProperty(person,"Qualification",{value:"Btech"});
document.getElementById("demo3").innerHTML=person.Qualification;
//Adding getter and setter method
Object.defineProperty(person,"fullname",{
    get : function() {return this.name+" "+this.lname}
});
document.getElementById("demo4").innerHTML=person.fullname;
Object.defineProperty(person, "age1", {
    set : function(value){this.age+=value}
});
person.age1=1;
document.getElementById("demo5").innerHTML= person.age;