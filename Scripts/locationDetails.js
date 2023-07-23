let baseUrl = `https://cw-wwbackend.onrender.com`;

let citiesUrl = `${baseUrl}/cities`;

let mainSection = document.querySelector("#ld-main-section");

// console.log(window.location.search);

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

let keyValues = window.location.search;

const urlParams = new URLSearchParams(keyValues);

let cityId = urlParams.get('id');

let cityData = [];

async function fetchData() {
  let res = await fetch(`${citiesUrl}/${cityId}`);
  let data = await res.json();

  document.querySelector(".gooey").style.display = "none";
  document.querySelector("#ld-main-section").style.display = "block";

  cityData = data;

  let imgDiv = document.querySelector(".ld-city-image-div");
  
  let img = document.createElement("img");
  img.src = cityData.images[0];
  img.className = "ld-city-image";
  
  imgDiv.append(img);
  
  document.querySelector("#ld-city-details-state").innerText = cityData.state;
  
  document.querySelector("#ld-city-details-population").innerText = cityData.population;
  
  document.querySelector("#ld-city-detials-weather").innerText = cityData.weather;
  
  document.querySelector("#ld-city-detials-language").innerText = cityData.languages.join(", ");
  
  let cityMapDiv = document.querySelector(".ld-city-map");
  
  let mapImg = document.createElement("img");
  mapImg.src = cityData.mapImg;
  mapImg.className = "ld-city-map-image";
  
  cityMapDiv.append(mapImg);
  
  document.querySelector(".ld-city-name").innerText = cityData.city;
  
  document.querySelector(".ld-city-about").innerText = `"${cityData.blog}"`;
  
  let attractionsDiv = document.querySelector("#ld-city-attractions");
  
  for(let index = 1; index < cityData.images.length; index++) {
    let img = document.createElement("img");
    img.src = cityData.images[index];
    attractionsDiv.append(img);
  }
  
  //appending city activities
  for(let index = 0; index < cityData.activities.length; index++) {
    let li = document.createElement("li");
    
    let icon = document.createElement("i")
    icon.style.marginRight = "5px"
    icon.classList.add("fa", "fa-check");
    icon.setAttribute( "aria-hidden","true");
  
    // console.log(icon)
    
    li.append(icon);
    // li.innerText += cityData.activities[index];
  
    li.innerHTML = `${li.innerHTML} ${cityData.activities[index]}`
  
    // console.log(li)
    
    document.querySelector("#ld-city-activities-list").append(li);
  }
  
  //appending city foods
  for(let index = 0; index < cityData.food.length; index++) {
    let li = document.createElement("li");
  
    let icon = document.createElement("i")
    icon.style.marginRight = "5px"
    icon.classList.add("fa", "fa-cutlery");
    icon.setAttribute( "aria-hidden","true");
  
    // console.log(icon)
    
    li.append(icon);
  
    li.innerHTML = `${li.innerHTML} ${cityData.food[index]}`
    
    document.querySelector("#ld-city-food-list").append(li);
  }

}

fetchData();

// let res = locationData.filter((ele) => {
//     if(ele.city === city) {
//         return ele;
//     }
// })
// console.log(res);



//appending data to html

//city image
