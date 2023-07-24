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




let book_btn = document.querySelector(".book_btn");

let pay_btn =document.querySelector(".pay-btn");
let card_pay_btn =document.querySelector(".card_pay-btn");
let card_book_btn =document.querySelector(".card_book_btn");
let card_input =document.querySelector(".card_input");
let expiry=document.querySelector(".expiry");
let cvv=document.querySelector(".cvv");





book_btn.addEventListener("click",()=>{
    setTimeout(() => {
       pay_btn.className =" btn btn-success";
    //    window.location.href="./confo.html";
    pay_btn.value = "Payment Successful"
    }, 2000); 
    setTimeout(() => {
       window.location.href="./confo.html";
    }, 4000); 

    console.log("hi")
});


card_book_btn.addEventListener("click",()=>{

    if(card_input.value.length=="16" && expiry.value.length=="5" && cvv.value.length=="3"){

        setTimeout(() => {
           card_pay_btn.className =" btn btn-success";
        card_pay_btn.value = "Payment Successful";
        }, 2000); 
        setTimeout(() => {
           window.location.href="./confo.html";
        }, 4000); 

    }
    else{
        alert("Enter valid card No")
    }

})


// card2.addEventListener('click', myFunction, false);


// localstorage

// let obj={
//     destination :  "Chala ja ..",
//     people :2,
//     date_of_journey : "2nd may"
// }

// let obj2={
//     name :"Saurabh Boss",
//     email : "BossG@pani.com"
// }

// localStorage.setItem("booking-detail", JSON.stringify(obj));
// localStorage.setItem("user-data", JSON.stringify(obj2));


let destination = document.getElementById("destination")
let no_of_people = document.getElementById("no_of_people")
let duration = document.getElementById("duration");

let destination2 = document.getElementById("destination2")
let no_of_people2 = document.getElementById("no_of_people2")
let duration2 = document.getElementById("duration2");

let destination3 = document.getElementById("destination3")
let no_of_people3 = document.getElementById("no_of_people3")
let duration3 = document.getElementById("duration3");



let data = JSON.parse(localStorage.getItem("booking-detail"));



console.log(data);

destination.innerText=data.destination;
no_of_people.innerText = data.people;
duration.innerText = data.date_of_journey;

destination2.innerText=data.destination;
no_of_people2.innerText = data.people;
duration2.innerText = data.date_of_journey;

destination3.innerText=data.destination;
no_of_people3.innerText = data.people;
duration3.innerText = data.date_of_journey;

// 
// let user_data = JSON.parse(localStorage.getItem("user-data"));
let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
let userData = JSON.parse(localStorage.getItem("user-data")) || [];

let currentUser;
let currentUserIndex;


if(loginStatus == true) {
  currentUser = userData.filter((ele,i)=> {
    if(ele.loggedIn) {
        currentUserIndex = i;
        return ele;
    }
  })
  // console.log(currentUser);
}

let user_data = currentUser[currentUserIndex];

let user_name =document.getElementById("user_name");
let user_email =document.getElementById("user_email");

user_name.innerText = user_data.name;
// user_email.innerText = user_data.email;





// price

let pay_first_card = document.querySelector("#pay_first_card");
let pay_second_card = document.querySelector("#pay_second_card");
let pay_third_card = document.querySelector("#pay_third_card");



let card1 =  document.querySelector("#tab4");
let card2 =  document.querySelector("#tab5");
let card3 =  document.querySelector("#tab6");

let pay_amount = document.querySelector("#pay_amount");

card1.addEventListener("click",()=>{
pay_amount.innerText = pay_first_card.innerText * data.people;
});


card2.addEventListener("click",()=>{
pay_amount.innerText = pay_second_card.innerText* data.people;
});

card3.addEventListener("click",()=>{
pay_amount.innerText = pay_third_card.innerText* data.people;
});

// package



let silver = document.getElementById("tab4");
let gold = document.getElementById("tab5");
let lux = document.getElementById("tab6"); 

// let obj3 = {
//     package_name: "Gold",
// }


// localStorage.setItem("package",JSON.stringify(obj3));

let package_data = JSON.parse(localStorage.getItem("package"));

let pack_name = package_data.package_name;

if(pack_name=="Silver"){
    silver.style.backgroundColor="white";
    gold.style.color ="gray";
    lux.style.color ="gray";
    pay_amount.innerText = pay_first_card.innerText * data.people;
}
else if(pack_name=="Gold"){
    gold.style.backgroundColor="white";
    silver.style.color ="gray";
    lux.style.color ="gray";
    pay_amount.innerText = pay_second_card.innerText* data.people;
}
else{
    lux.style.backgroundColor="white";
    silver.style.color ="gray";
    gold.style.color ="gray";
    pay_amount.innerText = pay_third_card.innerText* data.people;

}