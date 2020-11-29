function myfunction(){
  var x = document.forms["myform"]["fname"].value;
  if(x==""){
      alert("Name must be filled out");
      return false;
  }
}
function function1(){
    var x,text;
    x = document.getElementById("num").value;
    if(isNaN(x) || x < 0 || x > 10 || x == "") {
        text = "input is invalid";
    }
    else {
        text = "input is okay";
    }
    document.getElementById("demo").innerHTML=text;
}