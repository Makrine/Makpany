var x;
function calculate(n, dt) {
    clearInterval(x);
    if(!n){
    var name = document.getElementById("name").value;
    var until_date = new Date(document.getElementById("input_date").value).getTime();
}
    else{name=n; until_date=new Date(dt).getTime();}
    x = setInterval(function() {
    var today = new Date().getTime();
    var d = until_date - today;
    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hr = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById("until").innerHTML = "Until";
    document.getElementById("date_name").innerHTML = name;
    document.getElementById("day").innerHTML = days + "d";
    document.getElementById("hrs").innerHTML = hr + "h";
    document.getElementById("min").innerHTML = min + "m";
    document.getElementById("sec").innerHTML = sec + "s";
    document.getElementById("is_left").innerHTML = "is left!";

    if(d < 0) {
    clearInterval(x);
    document.getElementById("res").innerHTML = "DONE";
    }           
}, 1000);

}