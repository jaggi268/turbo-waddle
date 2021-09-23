var flag = 0;
document.querySelector(".button-reset").addEventListener("mouseover", function (event) {
    event.target.style = {backgroundColor: "#9FE8DF",
        color: "#014845",
        fontWeight: 600}
})
document.querySelector("#input1").addEventListener("keyup", function (event) {
    var bill = event.target.value;
    document.querySelector(".button-reset").style.backgroundColor = "#26C2AD";
    document.querySelector(".button-reset").style.color = "#065E62";
});
for (var i = 1; i <= 5; i++) {
    document
        .querySelector("#button-" + i)
        .addEventListener("click", function (event) {
            event.target.classList.add("button-selected");
            document.querySelector(".button-reset").style.backgroundColor = "#26C2AD";
            document.querySelector(".button-reset").style.color = "#065E62";
            // setTimeout(function(){event.target.classList.remove("button-selected")},1000);
        });
}
// document.querySelector("#input2").addEventListener("keyup", function (event) {
//     var custom_percent = event.target.value;
//     // percent(custom_percent);
// });
document.querySelector("#input3").addEventListener("keyup", function (event) {
    var people = event.target.value;
    document.querySelector(".button-reset").style.backgroundColor = "#26C2AD";
    document.querySelector(".button-reset").style.color = "#065E62";
    // division(custom_percent);
    extract();
});
document.querySelector("#reset").addEventListener("click", function (event) {
    document.querySelector(".button-reset").style.backgroundColor = "#0D686D";
    document.querySelector(".warning").style.visibility = "hidden";
    document.querySelector(".tip-amount").innerHTML = "$0.00";
    document.querySelector(".total-amount").innerHTML = "$0.00";
    document.querySelector("#input1").value = "";
    document.querySelector("#input2").value = "";
    document.querySelector("#input3").value = "";
    for (let i = 0; i < 5; i++) {
        document
            .querySelector(".button-selected")
            .classList.remove("button-selected");
    }
});

function extract() {
    var bill = document.querySelector("#input1").value;
    var people = document.querySelector("#input3").value;
    var percent;
    for (var i = 1; i <= 5; i++) {
        var boole = document
            .querySelector("#button-" + i)
            .classList.contains("button-selected");
        if (boole == true) {
            percent = document.querySelector(".button-selected").value;
            flag = 1;
        }
    }
    if (flag == 0) {
        percent = document.querySelector("#input2").value;
    }
    if (people == 0) {
        document.querySelector(".warning").style.visibility = "visible";
        document.querySelector(".tip-amount").innerHTML = "$0.00";
        document.querySelector(".total-amount").innerHTML = "$0.00";
    } else {
        document.querySelector(".warning").style.visibility = "hidden";
        var tip = Number((((percent / 100) * bill) / people).toFixed(2));
        document.querySelector(".tip-amount").innerHTML = "$" + tip;
        var total = Number(tip) + Number(bill / people);
        document.querySelector(".total-amount").innerHTML = "$" + total.toFixed(2);
    }
}