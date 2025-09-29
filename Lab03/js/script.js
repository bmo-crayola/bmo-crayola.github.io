document.querySelector("button").addEventListener("click", feedback1);

shuffleQ1Options();

function shuffleQ1Options(){
    let options = ["Linux", "IOS", "Windows"];
    options = _.shuffle(options);

    for(let i of options ) {
        let inputElement = document.createElement("input")
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i
        console.log(inputElement);

        let labelElement = document.createElement("label")
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q1Options").append(labelElement);
    }
}

function feedback1(){
    let score = 0;

    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    if(userAnswer1 == "Windows"){
        document.querySelector("#feedback1").textContent="Correct!";
        document.querySelector("#feedback1").style.color="green";
        document.querySelector("#icon1").src = "img/check.png";
        score++;
    } else {
        document.querySelector("#feedback1").textContent="Wrong!";
        document.querySelector("#feedback1").style.color="red";
        document.querySelector("#icon1").src = "img/cross.png";
    } 

    let userAnswer2 = document.querySelector("#textSize").value;
    if(userAnswer2 == "16"){
        document.querySelector("#feedback2").textContent="Correct!";
        document.querySelector("#feedback2").style.color="green";
        document.querySelector("#icon2").src = "img/check.png";
        score++;
    } else {
        document.querySelector("#feedback2").textContent="Wrong!";
        document.querySelector("#feedback2").style.color="red";
        document.querySelector("#icon2").src = "img/cross.png";
    }

    let userAnswer3 = document.querySelector("#q3").value;
    if(userAnswer3 == "templeOS"){
        document.querySelector("#feedback3").textContent="Correct!";
        document.querySelector("#feedback3").style.color="green";
        document.querySelector("#icon3").src = "img/check.png";
        score++;
    } else {
        document.querySelector("#feedback3").textContent="Wrong!";
        document.querySelector("#feedback3").style.color="red";
        document.querySelector("#icon3").src = "img/cross.png";
    }

    let userAnswer4 = document.querySelector("#q4").value;
    if(userAnswer4 == "RTX 5060 TI"){
        document.querySelector("#feedback4").textContent="Correct!";
        document.querySelector("#feedback4").style.color="green";
        document.querySelector("#icon4").src = "img/check.png";
        score++;
    } else {
        document.querySelector("#feedback4").textContent="Wrong!";
        document.querySelector("#feedback4").style.color="red";
        document.querySelector("#icon4").src = "img/cross.png";
    }

    if(document.querySelector("#q5a").checked && document.querySelector("#q5b").checked && !document.querySelector("#q5c").checked){
        document.querySelector("#feedback5").textContent="Correct!";
        document.querySelector("#feedback5").style.color="green";
        document.querySelector("#icon5").src = "img/check.png";
        score++;
    } else {
        document.querySelector("#feedback5").textContent="Wrong!";
        document.querySelector("#feedback5").style.color="red";
        document.querySelector("#icon5").src = "img/cross.png";
    }

    document.querySelector("#scoreDisplay").textContent = score * 20;
    if (score >= 4) {
        document.querySelector("#congrats").textContent = "Congratulaitons! You got " + score * 20 + " points!";
        document.querySelector("#congrats").style.color = "darkGreen";
    }

    document.getElementById("attempts").innerHTML = localStorage.clickcount;
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("attempts").innerHTML = localStorage.clickcount;

}   