var price, sum = 0;

function cart(pr) {
    price = pr.textContent;
    sum += 1 * price;
    document.getElementById("res").innerHTML = sum + " Leaves";
    
}

function notif(it) {
    it = it.textContent;
    alert("1 " + "'" + it  + "' has been added to your cart!");
}

function del() {
    sum = 0;
    document.getElementById("res").innerHTML = "0 Leaves";
}

function buy() {
    if(sum == 0) alert("You have not bought anything :(");
    else {
        alert("You have just paid " + sum + " Leaves!\nThanks for your purchase!\nYour order is on its way to you! :)");
        sum = 0;
        document.getElementById("res").innerHTML = "0 Leaves";
    }
}