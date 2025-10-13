document.querySelector("#zip").addEventListener("change", getZipCode);
document.querySelector("#password").addEventListener("focus", genPassword);
document.querySelector("#username").addEventListener("change", checkName);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#signupForm").addEventListener("submit", function(event) {
    validateForm(event);
});

getStates();


function validateForm(e) {
    let isValid = true;
    let username = document.querySelector("#username").value;
    if (username.length == 0) {
        document.querySelector("#name").textContent = "Username cannot be empty";
        isValid = false;
    }
    if (username.length < 3) {
        document.querySelector("#name").textContent = "Username must be at least 3 characters long";
        isValid = false;
    }
    if (document.querySelector("#name").style.color == "orange" || document.querySelector("#name").style.color == "red") {
        document.querySelector("#name").textContent = "Invalid Username!";
        isValid = false;
    }

    let password = document.querySelector("#password").value;
    let repassword = document.querySelector("#repassword").value;
    if (password.length < 6 || password != repassword) {
        document.querySelector("#pw").textContent = "Password must be at least 6 characters and match";
        isValid = false;
    }
    if (!isValid) {
        e.preventDefault();
    }
}

async function getZipCode() {
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            if (!data) {
                document.querySelector("#zipCorrect").textContent = "Zip code not found";
                document.querySelector("#zipCorrect").style.color = "red";
                document.querySelector("#city").textContent = " ";
                document.querySelector("#longitude").textContent = " ";
                document.querySelector("#latitude").textContent = " ";
            } else {
                document.querySelector("#city").textContent = data.city;
                document.querySelector("#longitude").textContent = data.longitude;
                document.querySelector("#latitude").textContent = data.latitude;
                document.querySelector("#zipCorrect").textContent = "Zip code found";
                document.querySelector("#zipCorrect").style.color = "green";
            }
        } catch(parseError) {
            console.log(parseError);
        } 
    } catch(error) {
        console.log(error);
    }
}

async function getStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.state;
                optionElement.value = i.usps;
                document.querySelector("#state").append(optionElement);
            }

        } catch(parseError) {
            console.log(parseError);
        }
    } catch(error) {
        console.log(error);
    }
    displayCounties();  
}

async function genPassword() {
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);
            document.querySelector("#password").value = data.password;
            document.querySelector("#pw").textContent = data.password;
        } catch(parseError) {
            console.log(parseError);
        }
    } catch(error) {
        console.log(error); 
    }
}

async function checkName() {
    let inputName = document.querySelector("#username").value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + inputName;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            if (data.available == true && inputName.length > 2) {
                document.querySelector("#name").textContent = "Username is available";
                document.querySelector("#name").style.color = "green";
            } else if (data.available == false || inputName.length <= 2) {
                document.querySelector("#name").textContent = "Username is NOT available or too short";
                document.querySelector("#name").style.color = "orange";
            } else {
                document.querySelector("#name").textContent = "Error checking username";
                document.querySelector("#name").style.color = "red";
            }
            console.log(data);
        } catch(parseError) {
            console.log(parseError);
        }
    } catch(error) {
        console.log(error);
    }
}

async function displayCounties() {
    let state = document.querySelector("#state").value;
    let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;
    let response = await fetch(url);
    let data = await response.json();
    let countyList = document.querySelector("#county");
    countyList.innerHTML = "<option> Select County </option>";
    for (let i=0; i < data.length; i++) {
        countyList.innerHTML += `<option> ${data[i].county} </option>`;
    }
    // another possible lop:
    // for (let i of data) {
    //     countyList.innerHTML += `<option>${i.county}</option>`;
    // }

}
