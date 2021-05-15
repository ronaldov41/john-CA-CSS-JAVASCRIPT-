$(document).ready(function () {

    $(".txt1").change(function () {
 
             
  
         var classmenu = $(".txt1").size();
            //alert(classmenu);
            var totalsum=0;
            var finalsum=0;
            for (var i = 0; i < classmenu; i++) {
                var quantity = $(".txt1:eq("+i+")").val();
                var prize = $(".menu1:eq("+i+")").val();
                 
                if(quantity==0){
                    quantity=0;
                }
                totalsum=parseInt(quantity)*parseInt(prize);
                finalsum += totalsum;
               // alert(quantity+" *"+ prize+"="+ totalsum);
            }

            $(".starter_sum").html(finalsum);



    });

     $(".txt2").change(function () {
 
             
  
         var classmenu = $(".txt2").size();
            //alert(classmenu);
            var totalsum=0;
            var finalsum=0;
            for (var i = 0; i < classmenu; i++) {
                var quantity = $(".txt2:eq("+i+")").val();
                var prize = $(".menu2:eq("+i+")").val();
                 
                if(quantity==0){
                    quantity=0;
                }
                totalsum=parseInt(quantity)*parseInt(prize);
                finalsum += totalsum;
               // alert(quantity+" *"+ prize+"="+ totalsum);
            }

            $(".menu_sum").html(finalsum);



    });

     $(".txt3").change(function () {
 
             
  
         var classmenu = $(".txt3").size();
            //alert(classmenu);
            var totalsum=0;
            var finalsum=0;
            for (var i = 0; i < classmenu; i++) {
                var quantity = $(".txt3:eq("+i+")").val();
                var prize = $(".menu3:eq("+i+")").val();
                 
                if(quantity==0){
                    quantity=0;
                }
                totalsum=parseInt(quantity)*parseInt(prize);
                finalsum += totalsum;
               // alert(quantity+" *"+ prize+"="+ totalsum);
            }

            $(".dessert_sum").html(finalsum);



    });

     $(".txt4").change(function () {
 
             
  
         var classmenu = $(".txt4").size();
            //alert(classmenu);
            var totalsum=0;
            var finalsum=0;
            for (var i = 0; i < classmenu; i++) {
                var quantity = $(".txt4:eq("+i+")").val();
                var prize = $(".menu4:eq("+i+")").val();
                 
                if(quantity==0){
                    quantity=0;
                }
                totalsum=parseInt(quantity)*parseInt(prize);
                finalsum += totalsum;
               // alert(quantity+" *"+ prize+"="+ totalsum);
            }

            $(".drinks_sum").html(finalsum);



    });
    
    $(".menu").each(function () {

        $(this).keyup(function () {
            var sum = 0;
            $(".menu").each(function () {

                if (!isNaN(this.value) && this.value.length != 0) {
                    sum += parseFloat(this.value);
                }

            });
            $(".menu_sum").html(sum.toFixed(2));
        });
    });

    $(".dessert").each(function () {

        $(this).keyup(function () {
            var sum = 0;
            $(".dessert").each(function () {

                if (!isNaN(this.value) && this.value.length != 0) {
                    sum += parseFloat(this.value);
                }

            });
            $(".dessert_sum").html(sum.toFixed(2));
        });
    });

    $(".drinks").each(function () {

        $(this).keyup(function () {
            var sum = 0;
            $(".drinks").each(function () {

                if (!isNaN(this.value) && this.value.length != 0) {
                    sum += parseFloat(this.value);
                }

            });

            $(".drinks_sum").html(sum.toFixed(2));

        });
    });
});

function calculateSum() {


}

// ***********************//
$(document).ready(function () {

   

});

function menu() {


}

// ************ dessert ***********//

$(document).ready(function () {

   

});



// ***********************//

$(document).ready(function () {
    
 


});



var drink
function sum() {
    var chicken, borcoli, vegrtar, result;
    var handi, burger, pizza;
    var biscuits, desserts, ice;
    var juice, coffee, tea, Vagetarian, Nonvagitarian;

    chicken = Number(document.getElementById("chicken").value);
    borcoli = Number(document.getElementById("borcoli").value);
    vegrtar = Number(document.getElementById("vegrtar").value);
    handi = Number(document.getElementById("handi").value);
    burger = Number(document.getElementById("burger").value);
    pizza = Number(document.getElementById("pizza").value);
    biscuits = Number(document.getElementById("biscuits").value);
    desserts = Number(document.getElementById("desserts").value);
    ice = Number(document.getElementById("ice").value);
    juice = Number(document.getElementById("juice").value);
    coffee = Number(document.getElementById("coffee").value);
    tea = Number(document.getElementById("tea").value);
  

    //alert("ASDsadasd");

    result = chicken + borcoli + vegrtar + handi + burger + pizza + biscuits + desserts + ice + juice + coffee + tea ;
    document.getElementById("total").value = result;


    
}var totalCalculation = document.getElementById('add');
totalCalculation.addEventListener('click' , () => {
    var getStarterValue = document.getElementsByClassName('starter_sum')[0];
    var getMenuValue = document.getElementsByClassName('menu_sum')[0];
    var getDessertValue = document.getElementsByClassName('dessert_sum')[0];
    var getDrinksValue = document.getElementsByClassName('drinks_sum')[0];
    var getTotalValue = parseInt(getStarterValue.innerHTML) + parseInt(getMenuValue.innerHTML) + parseInt(getDessertValue.innerHTML) + parseInt(getDrinksValue.innerHTML) ;
    document.getElementById('totals').value = getTotalValue; 
})
