// modified
// let userPresent=localStorage.getItem("users");
//check if user is logged in and making user icon reappear
let userIcon = document.getElementById('usericon')
let signupBtn = document.getElementById('signup')
let mSignupBtn = document.getElementById('mobile-signup')
let logoutBtn = document.getElementById('logout')
let mLogoutBtn = document.getElementById('mobile-logout')

let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
let userData = JSON.parse(localStorage.getItem("user-data")) || [];

let currentUser;
let currentUserIndex;

if(loginStatus == true) {
  // console.log("Hello")
  
  logoutBtn.style.display = 'inline'
  mLogoutBtn.style.display = 'inline'
  signupBtn.style.display = 'none'
  mSignupBtn.style.display = 'none'
  userIcon.style.display = "inline";

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
    signupBtn.style.display = 'inline'    
    mSignupBtn.style.display = 'inline'    
    logoutBtn.style.display = 'none'
    mLogoutBtn.style.display = 'none'
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

mLogoutBtn.addEventListener("click", (e) => {

    localStorage.setItem("isLoggedIn", false);
  
    let newData = userData[currentUserIndex];
    delete newData.loggedIn;
  
    userData[currentUserIndex] = newData;
    localStorage.setItem("user-data", JSON.stringify(userData));
  
    window.location.reload();
  })


signupBtn.addEventListener('click', () => {window.location.href='./signup.html'})
mSignupBtn.addEventListener('click', () => {window.location.href='./signup.html'})




// if(userPresent){
//     let user1=document.querySelector("#userUpdated");
//     user1.innerText=userPresent;

//     let signupLink=document.getElementById("signup");
//     signupLink.innerText="Log out";

//     signupLink.addEventListener("click",()=>{
//         localStorage.removeItem("users");
//         window.location.href="./index.html";
//         // location.reload();
//     })
// }
// modified

const baseURL = `https://cw-wwbackend.onrender.com`
const citiesURL = `${baseURL}/cities`
const emailListURL = `${baseURL}/emails`


people = document.getElementById('people')

async function populateDestinations() {
    const response = await fetch(citiesURL)
    const data = await response.json()

    console.log(data)

    const locations = document.getElementById('locations')

    let location = (el) => {
        let option = document.createElement('option')
        option.value = el
        option.innerHTML = el
        return option

    }

    data.forEach(element => {
        let newOption = location(element.city)
        locations.append(newOption)
    });
}

populateDestinations()


let bookNowBtn = document.getElementById('bookNow')

bookNowBtn.addEventListener('click', () => {
    let obj = {
        destination: locations.value,
        date_of_journey: startdate.innerText,
        people: people.value
    }
    console.log(obj)
    localStorage.setItem('booking-detail', JSON.stringify(obj))
    window.location.href = './package.html'
})


//testimonial 

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autplayHoverPause: true,

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper pagination",
    }
})


// newsletter section

const subscribeBtn = document.getElementById('subscribe')
const emailField = document.getElementById('email')

subscribeBtn.addEventListener('click', () => {
    let email = emailField.value
    let obj = {
        email: email
    }

    fetch(emailListURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    })

    console.log(email)
})


