let name = document.querySelector("#name-inp");
let username = document.querySelector("#username-inp");
let email = document.querySelector("#email-inp");
let password = document.querySelector("#pwd-inp");
let checkbox = document.querySelector("#checkbox");

//labels
let nameLabel = document.querySelector("#name-label > h4");
let usernameLabel = document.querySelector("#username-label > h4");
let emailLabel = document.querySelector("#email-label > h4");
let pwdLabel = document.querySelector("#pwd-label > h4");

let errorMsg = document.querySelector("#checkbox-msg");

let errorDiv = document.querySelector("#google-auth");

let submit = document.querySelector("#account-btn");

let userData = JSON.parse(localStorage.getItem("user-data")) || [];

submit.addEventListener("click", (e) => {

    e.preventDefault();

    let errorList = document.createElement("ul");

    let dataCount = 0;

    if(name.value.length < 1) {

        let error = document.createElement("li");
        error.innerText = "Name can't be blank";
        errorList.append(error);

        let errorImg = document.createElement("img");
        errorImg.src = "https://img.icons8.com/color/48/cancel--v1.png";
        errorImg.classList.add("error-img");

        let text = nameLabel.innerText;

        nameLabel.append(errorImg);

        console.log(nameLabel);
        setTimeout(()=> {
            nameLabel.innerText = text;
        },4000);
    }
    else {
        dataCount++;
    }

    if(username.value.length < 1) {

        let error = document.createElement("li");
        error.innerText = "Username can't be blank";

        errorList.append(error);

        let errorImg = document.createElement("img");
        errorImg.src = "https://img.icons8.com/color/48/cancel--v1.png";
        errorImg.classList.add("error-img");

        let text = usernameLabel.innerText;

        usernameLabel.append(errorImg);

        console.log(usernameLabel)
        setTimeout(()=> {
            usernameLabel.innerText = text;
        },4000);
    }
    else {
        dataCount++;
    }

    if(email.value.length < 1) {

        let error = document.createElement("li");
        error.innerText = "Email can't be blank";

        errorList.append(error);

        let errorImg = document.createElement("img");
        errorImg.src = "https://img.icons8.com/color/48/cancel--v1.png";
        errorImg.classList.add("error-img");

        let text = emailLabel.innerText;

        emailLabel.append(errorImg);

        console.log(emailLabel, errorImg)
        setTimeout(()=> {
            emailLabel.innerText = text;
        },4000);
    }
    else {
        dataCount++;
    }

    if(password.value.length < 1) {
        let error = document.createElement("li");
        error.innerText = "Password can't be blank";

        errorList.append(error);
        
        let errorImg = document.createElement("img");
        errorImg.src = "https://img.icons8.com/color/48/cancel--v1.png";
        errorImg.classList.add("error-img");

        let text = pwdLabel.innerText;

        pwdLabel.append(errorImg);
        setTimeout(()=> {
            pwdLabel.innerText = text;
        },4000);
    }
    else {
        dataCount++;
    }

    if(checkbox.checked === false) {
        errorMsg.style.display = "block";
        setTimeout(() => {
            errorMsg.style.display = "none";
        },4000)
    }
    else {
        dataCount++;
    }
    if(dataCount === 5) {
        let obj = {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
            type: "user"
        }
    
        userData.push(obj);
    
        // console.log(userData);
        localStorage.setItem("user-data", JSON.stringify(userData));

        errorDiv.innerHTML = "";
        let success = document.createElement("h2");
        success.innerText = "Signed Up Succesfully. You can log in now.";
        success.style.color = "green";

        errorDiv.append(success);
        setTimeout(()=> {
            window.location.replace("./login.html")
        },2000)
    }
    else {
        // console.log(errorList);
        errorDiv.innerHTML = "";
        errorDiv.append(errorList);

        setTimeout(() => {
            document.location.reload();
        },4000)
    }
})