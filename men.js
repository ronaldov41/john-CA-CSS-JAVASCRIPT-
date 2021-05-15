$(document).ready(function(){

    //iterate through each textboxes and add keyup
    //handler to trigger sum event
    $(".txt").each(function() {

        $(this).keyup(function(){
            calculateSum();
        });
    });

});

function calculateSum() {

    var sum = 0;
    //iterate through each textboxes and add the values
    $(".txt").each(function() {

        //add only if the value is number
        if(!isNaN(this.value) && this.value.length!=0) {
            sum += parseFloat(this.value);
        }

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $("#sum").html(sum.toFixed(2));
}

function starter() {
    var chicken, borcoli, vegrtar, result;

    chicken = Number(document.getElementById("chicken").value);
    borcoli = Number(document.getElementById("borcoli").value);
    vegrtar = Number(document.getElementById("vegrtar").value);

    result = chicken + borcoli + vegrtar ;
    document.getElementById("answer").value = result;
}

function menu() {
    var handi, burger, pizza, result2;
    handi = Number(document.getElementById("handi").value);
    burger = Number(document.getElementById("burger").value);
    pizza = Number(document.getElementById("pizza").value);

    result2 = handi + burger + pizza;
    document.getElementById("answer2").value = result2;
}

function dessert() {
    var biscuits, quantity, ice, result3;
    biscuits = Number(document.getElementById("biscuits").value);
    quantity = Number(document.getElementById("quantity").value);
    ice = Number(document.getElementById("ice").value);

    result3 = biscuits + quantity + ice;
    document.getElementById("answer3").value = result3;
}
function drinks() {
    var juice, coffee, tea, result4;
    juice = Number(document.getElementById("juice").value);
    coffee = Number(document.getElementById("coffee").value);
    tea = Number(document.getElementById("tea").value);

    result4 = juice + coffee + tea;
    document.getElementById("answer4").value = result4;
}
function add() {
    result 
}
