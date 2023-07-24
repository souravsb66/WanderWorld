let baseUrl = `https://cw-wwbackend.onrender.com`;

let citiesUrl = `${baseUrl}/cities`;

let mainSection = document.querySelector("#ln-location-cards");

let citiesData = [];

let searchInp = document.querySelector("#ln-city-search");

//search functionality
searchInp.addEventListener("input", (e) => {
  
  let str = searchInp.value.toLowerCase();
  let newData = citiesData.filter((ele) => {
    if(ele.city.toLowerCase().includes(str)) {
      return ele;
    }
  })

  mainSection.innerHTML = "";
  appendData(newData);
})

//sort functionality
let sortByName = document.querySelector("#ln-city-sort");
sortByName.addEventListener("change", (e) => {
  let str = sortByName.value;

  if(str === "") {
    appendData(citiesData);
  }   
  else {
    if(str === "atoz") {
      let sortedData = citiesData.sort((a,b) => {
        if(b.city > a.city) {
          return -1
        }
        else {
          return 1;
        }
      });
      appendData(sortedData);
    }
    else if(str === "ztoa") {
      let sortedData = citiesData.sort((a,b) => {
        if(a.city > b.city) {
          return -1
        }
        else {
          return 1;
        }
      });
      appendData(sortedData);
    }
  }
})

//Navbar responsiveness component

const menuBtn = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')
const backBtn = document.getElementById('back')
// const searchBtn = document.getElementById('searchBtn')
// const searchBar = document.getElementById('searchBar')
const cancelSearch = document.getElementById('cancelSearch')

// let header = document.querySelector('header')

menuBtn.addEventListener('click', () => {
    sidebar.style.left = '0px'
})

backBtn.addEventListener('click', () => {
    sidebar.style.left = '-10000px'
})

// searchBtn.addEventListener('click', () => {
//     searchBar.style.display = 'flex'
// })

cancelSearch.addEventListener('click', () => {
    searchBar.style.display = 'none' 
})

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
  // console.log("Hey");
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

// let obj = {
//   email: "sourav66@ymail.com",
//   name: "Sourav",
//   password: "test123",
//   type: "admin",
//   username: "sourav66",
//   // loggedIn: true
// };

// let userData = JSON.parse(localStorage.getItem("user-data")) || [];
// userData.push(obj);

// localStorage.setItem("user-data", JSON.stringify(userData));


async function fetchData() {

  let res = await fetch(citiesUrl);
  let data = await res.json();

  document.querySelector(".gooey").style.display = "none";
  // console.log(data);
  citiesData = data;
  
  appendData(data);
  
}

function appendData(data) {

    mainSection.innerHTML = "";
    let cardList = document.createElement("div");
    cardList.className = "ln-card-list";

    mainSection.append(cardList);

    data.forEach((item) => {
        let card = createCityCards(item);
        cardList.append(card);
    })
}

//Function to create city cards
function createCityCards(item) {
  
  let card = document.createElement("div");
  card.className = "ln-cards";
  
  let cardImg = document.createElement("div");
  cardImg.className = "ln-card-image";
  
  let img = document.createElement("img");
    img.src = item.images[0];
    img.alt = item.city;

    cardImg.append(img);

    let cardBody = document.createElement("div");
    cardBody.className = "ln-card-body";

    //City details
    let cityDetails = document.createElement("div");
    cityDetails.className = "ln-card-city-details";
    
    let city = document.createElement("h3");
    city.innerText = item.city;
    city.className = "ln-card-city";
    
    let state = document.createElement("p");
    state.innerText = item.state;
    state.className = "ln-card-state";
    
    let population = document.createElement("p");
    population.innerText = `Population - ${item.population}`;
    population.className = "ln-card-population"

    cityDetails.append(city, state, population);

    //City tourist attractions
    let cityAttractions = document.createElement("div");
    cityAttractions.className = "ln-card-city-attractions";
    
    let attractions = document.createElement("h3");
    attractions.innerText = "Tourist Attractions";
    attractions.className = "ln-card-attractions";
    
    let attractions_list = document.createElement("ul");
    attractions_list.className = "ln-card-attractions-list"

    item.attractions.forEach((ele,index) => { 
      
      if(index < 3) {
        let li = document.createElement("li");
            li.innerText = ele;
            li.className = "ln-card-attractions-list-items"
            attractions_list.append(li);
        }
    })

    cityAttractions.append(attractions, attractions_list);

    //City activities
    let cityActivities = document.createElement("div");
    cityActivities.className = "ln-card-city-activities";
    
    let activities = document.createElement("h3");
    activities.innerText = "City Activities";
    activities.className = "ln-card-activities";
    
    let activities_list = document.createElement("ul");
    activities_list.className = "ln-card-activities-list"
    
    item.activities.forEach((ele,index) => {
        if(index < 3) {
          let li = document.createElement("li");
          li.innerText = ele;
          li.className = "ln-card-activities-list-items"
          activities_list.append(li);
        }
      })
      
      cityActivities.append(activities, activities_list);
      
      //Card buttons
    let cardBtns = document.createElement("div");
    cardBtns.className = "ln-card-btns";

    let book = document.createElement("button");
    book.innerText = "Book Now";
    book.className = "ln-card-btn";
    
    //checking added for login before booking
    book.addEventListener("click", (e) => {
      if(loginStatus == true) {
        window.location.href = "./package.html"
      }
      else {
        window.location.href = "./login.html"
      }
    })

    let moreDetails = document.createElement("button");
    moreDetails.innerText = "More Details";
    moreDetails.className = "ln-card-btn";
    
    moreDetails.addEventListener("click", (e) => {
      e.preventDefault();
      let url = `./locationDetails.html?id=${item.id}`
        window.location.href = url;
    })

    cardBtns.append(book, moreDetails);

    cardBody.append(cityDetails, cityAttractions, cityActivities, cardBtns);

    card.append(cardImg, cardBody);
    // console.log(card);

    return card;
  }
  
// appendCityCards(locationData);
  fetchData();