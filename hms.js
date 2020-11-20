function validateForm() {
    var x = document.forms["prform"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
function validSearch() {
    var y = document.forms["psearch"].value;
    if (y == "") {
        alert("Enter a valid name or Id");
        return false;
    }
}
var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        document.getElementById("timer").innerHTML = t;
    }