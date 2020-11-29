function myfunction() {
    var inpObj = document.getElementById("num1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } 
    else {
      document.getElementById("demo").innerHTML = "Input OK";
    } 
}
function myfunction1() {
    var inpObj = document.getElementById("num1").validity.rangeOverflow;
    txt = "";
    if (inpObj) {
      txt = "value is too high";
    } 
    else {
      txt = "Input OK";
    }
    document.getElementById("demo").innerHTML=txt;
}