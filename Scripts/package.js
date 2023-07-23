// let Premium_btn = document.getElementById("Premium_btn");

// Premium_btn.addEventListener("click", () => {
//   location.replace("./payment.html");
// });

// let Basic_btn = document.getElementById("Basic_btn");

// Basic_btn.addEventListener("click", () => {
//   location.replace("./payment.html");
// });



// 

   // Get the button and pop-up elements
   const button = document.getElementById("p-details");
   const popup = document.querySelector('.popup');
   const closeButton = document.querySelector('.close-button');
   
   const body_parent = document.querySelector(".row");

   const body = document.querySelector(".body-parent");

   let food = document.querySelector("#food");
   let hotel = document.querySelector("#hotel");

   let dark_details = document.querySelector("#dark_details");
   let side_details = document.querySelector("#side_details");

   


   // Show the pop-up when the button is clicked
   button.addEventListener('click', () => {
    hotel.innerText = "3 Star Hotel";
    food.innerText = "Paid Food"
    body.style.backgroundColor = "rgb(215, 222, 229) "
     popup.style.display = 'block';
    //  body_parent.style.display ="none";
    body_parent.setAttribute("z-index","-1");
    popup.style.zIndex="9";

   });

   // Hide the pop-up when the close button is clicked
   closeButton.addEventListener('click', () => {
    body.style.backgroundColor = "";
     popup.style.display = 'none';
     body_parent.style.display ="flex"
   });

   dark_details.addEventListener('click', () => {
    hotel.innerText = "4 Star Hotel";
    food.innerText = "Free Food";
    body.style.backgroundColor = "rgb(215, 222, 229) "
     popup.style.display = 'block';
    //  body_parent.style.display ="none";
    body_parent.setAttribute("z-index","-1");
    popup.style.zIndex="9";

   });

   side_details.addEventListener('click', () => {
    hotel.innerText = "5 Star Hotel";
    food.innerText = "Free Food";
    body.style.backgroundColor = "rgb(215, 222, 229) "
     popup.style.display = 'block';
    //  body_parent.style.display ="none";
    body_parent.setAttribute("z-index","-1");
    popup.style.zIndex="9";

   });




  //  package_slogan

  let package_slogan = document.getElementById("package_slogan");

  let str = `Explore the World with Wanderlust Adventures!`;


  function display(){

    let i=0;
    let slogan_text ="";

 
    
    let int = setInterval(()=>{
      slogan_text+= str[i];
      //  console.log(str[i]);
       package_slogan.innerText = slogan_text;
      //  package_slogan.className = "text-white"
       i++
       if(i == str.length){
        i=0
        slogan_text="";
        clearInterval(int)
       }
     },200)
  }

display();

setInterval(display,11000)


// card

let first_card = document.querySelector(".first-card");
let dark_card = document.querySelector(".dark_card");
let side_card = document.querySelector(".side-card");

let plan_price_end = document.querySelector(".plan-price-end");

let screenWidth = window.screen.width;

if(screenWidth<900){
  first_card.style.position= "static";
  dark_card.style.position= "static";
  side_card.position= "static";
}else{
  first_card.style.position= "relative";
  dark_card.style.position= "absolute";
  side_card.position= "relative";
  first_card.style.left ="-5%";
  side_card.style.right ="-3%"
  plan_price_end.style.float = "right";
}

if(screenWidth>=600){



first_card.addEventListener("mouseover",()=>{
  // dark_card .style.position = "static";
  dark_card .style.zIndex ="-1";
  side_card.style.zIndex ="-2";
  // side_card.style.right ="9%"
  // first_card.style.left ="9%";

  // first_card.style.width ="350px";
})

first_card.addEventListener("mouseout",()=>{
  dark_card .style.position = "absolute";
  dark_card .style.zIndex ="2";
  side_card.style.zIndex ="1";
  side_card.style.position = "relative";
  first_card.style.left ="-5%";
  side_card.style.right ="-3%"

  first_card.style.width ="300px";

})



side_card.addEventListener("mouseover",()=>{
first_card.style.zIndex -"-1";
  dark_card.style.zIndex="1";
  side_card.style.zIndex="2";
  side_card.style.width ="350px";
  plan_price_end.style.float = "left"
});


side_card.addEventListener("mouseout",()=>{
// first_card.style.zIndex -"1";
  dark_card.style.zIndex="1";
  side_card.style.zIndex="-1";
  side_card.style.width ="350px";
  plan_price_end.style.float = "right"
})


}

