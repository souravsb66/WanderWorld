let submit = document.querySelector("#signin-btn");
let input = document.querySelector("#user-inp");
let password = document.querySelector("#user-pwd");
let form = document.querySelector("#login-form");

let errorDiv = document.querySelector("#google-auth");
let errorMsg = document.querySelector("#message");

let userData = JSON.parse(localStorage.getItem("user-data")) || [];

submit.addEventListener("click", (e) => {
    
    e.preventDefault();
    let enteredInput = input.value;
    let enteredPwd = password.value;
    let resIndex;
    let res = userData.filter((ele,i) => {
        if(enteredInput === ele.username || enteredInput === ele.email) {
            
            // console.log(enteredInput)
            if(enteredPwd === ele.password) {
                // console.log(enteredPwd);
                resIndex = i;
                return ele;
            }
        }
    })

    // console.log(res, resIndex);

    if(res.length > 0) {
        errorDiv.innerHTML = "";
        
        // Check if any user is already logged in
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            // User is already logged in, so log them out
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user-data");
        }


        let success = document.createElement("h2");
        success.innerText = "Logged In Succesfully.";
        success.style.color = "green"

        errorDiv.append(success);

        localStorage.setItem("isLoggedIn", true);

        let newData = userData[resIndex];
        newData.loggedIn = "true";
        userData[resIndex] = newData;

        localStorage.setItem("user-data", JSON.stringify(userData));

        // modified
        // let loggedUser=userData[resIndex].name;
        // localStorage.setItem("users",loggedUser);

        setTimeout(()=> {
            window.location.replace("./index.html");
        },500)

        // if(newData.type === "user") {

        //     // console.log(newData)
        //     // console.log(newData.type)
        //     // console.log(typeof newData.type)

        //     setTimeout(()=> {
        //         window.location.replace("./index.html")
        //     },500)
        // }
        // else if(newData.type === "admin") {

        //     // console.log(newData)
        //     // console.log(newData.type)
        //     // console.log(typeof newData.type)

        //     setTimeout(()=> {
        //         window.location.replace("./admin.html")
        //     },500)
        // }

    }
    else {
        errorMsg.style.display = "block";
        setTimeout(() => {
            errorMsg.style.display = "none";
        },4000)
    }
    form.reset()
})