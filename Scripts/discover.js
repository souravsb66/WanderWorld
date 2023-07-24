//login logout functionality
let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
let userData = JSON.parse(localStorage.getItem("user-data")) || [];

let userIcon = document.getElementById('usericon')
let signupBtn = document.getElementById("signup");
let logoutBtn = document.getElementById("logout");

let currentUser;
let currentUserIndex;

if(loginStatus == true) {
  // console.log("Hello")
  userIcon.style.display = "inline";
  logoutBtn.style.display = "inline";
  signupBtn.style.display = "none";

  currentUser = userData.filter((ele,i)=> {
    if(ele.loggedIn) {
        currentUserIndex = i;
        return ele;
    }
  })
  // console.log(currentUser);
}
else {
  console.log("Hey");
  userIcon.style.display = "none";
}

logoutBtn.addEventListener("click", (e) => {

  localStorage.setItem("isLoggedIn", false);

  let newData = userData[currentUserIndex];
  delete newData.loggedIn;

  userData[currentUserIndex] = newData;
  localStorage.setItem("user-data", JSON.stringify(userData));

  window.location.reload();
})



let pagiContainer = document.getElementById("pagiContainer");
let cardlist = document.createElement("div");
cardlist.classList.add("cardlist");
let pagination = document.querySelector("#pagination");

let itemPerPage = 9;

async function fetching() {
  let res=await fetch("https://cw-wwbackend.onrender.com/blogs");
  let data=await res.json();
  // console.log(data);


  let length=data.length;
  let total = Math.ceil(length / itemPerPage);
  // display(1);
  fetching2(1);
  pagination.innerHTML="";
  for (let i = 1; i <= total; i++) {
    let pagiButton = document.createElement("button");
    pagiButton.innerText = i;
    pagiButton.classList.add("pagination-button");
    pagiButton.addEventListener("click", function () {
      // display(i);
      fetching2(i);
    });
    pagination.append(pagiButton);
  }
}
fetching();

async function fetching2(page_number){
  try{
    let res=await fetch(`https://cw-wwbackend.onrender.com/blogs?_page=${page_number}&_limit=9`);
    let data=await res.json();
    display(data);
  }
  catch(errr){
    alert("error");
  }

}

function display(data) {
  cardlist.innerHTML = "";

  //Before getting api for manual pagination
  // let start = (page - 1) * itemPerPage;
  // let end = start + itemPerPage;
  // let modifiedArr = arr.slice(start, end);

  data.forEach(function (ele) {
    let card = document.createElement("div");
    card.classList.add("card");

    let imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");
    let image = document.createElement("img");
    image.setAttribute("src", ele.image);

    let cardBody = document.createElement("div");
    cardBody.classList.add("cardBody");
    let title = document.createElement("h1");
    title.classList.add("h1");
    title.innerText = ele.title;

    let location = document.createElement("h4");
    location.classList.add("location");
    location.innerText = ele.tags[0];
    let divLocation = document.createElement("div");
    divLocation.classList.add("divLoc");

    let i = document.createElement("i");
    i.classList.add("fa-location-dot");
    i.classList.add("fa-solid");

    divLocation.append(i, location);

    let description = document.createElement("p");
    description.classList.add("desc");
    description.innerText = ele.article;

    let readMore = document.createElement("a");
    readMore.classList.add("read");

    readMore.addEventListener("click", function () {
      card.classList.toggle('active');
      pagiContainer.classList.toggle('blur');
      pagiContainer.classList.toggle('noblur');

      // pagiContainer.style.filter="blur(2px)";

    })

    cardBody.append(title, divLocation, description);
    imageDiv.append(image);
    card.append(imageDiv, cardBody, readMore);
    cardlist.append(card);
  })
  pagiContainer.innerHTML = "";
  pagiContainer.append(cardlist);
}
