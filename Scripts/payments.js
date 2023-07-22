$(document).ready(function(){
    //Menu Toggle Script
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // For highlighting activated tabs
    $("#tab1").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light"); 
        $("#tab1").addClass("text-primary");
        $("#tab1").removeClass("bg-light");
    });
    $("#tab2").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab2").addClass("text-primary");
        $("#tab2").removeClass("bg-light");
    });
    $("#tab3").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab3").addClass("text-primary");
        $("#tab3").removeClass("bg-light");
    });
    $("#tab4").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab4").addClass("text-primary");
        $("#tab4").removeClass("bg-light");
    });
    $("#tab5").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab5").addClass("text-primary");
        $("#tab5").removeClass("bg-light");
    });
    $("#tab6").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab6").addClass("text-primary");
        $("#tab6").removeClass("bg-light");
    });

})


let pay_first_card = document.querySelector("#pay_first_card");
let pay_second_card = document.querySelector("#pay_second_card");
let pay_third_card = document.querySelector("#pay_third_card");

let card1 =  document.querySelector("#tab4");
let card2 =  document.querySelector("#tab5");
let card3 =  document.querySelector("#tab6");

let pay_amount = document.querySelector("#pay_amount");

card1.addEventListener("click",()=>{
pay_amount.innerText = pay_first_card.innerText;
});


card2.addEventListener("click",()=>{
pay_amount.innerText = pay_second_card.innerText;
});

card3.addEventListener("click",()=>{
pay_amount.innerText = pay_third_card.innerText;
});




// card2.addEventListener('click', myFunction, false);


