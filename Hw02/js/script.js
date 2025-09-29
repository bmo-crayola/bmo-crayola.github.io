// Global variables
let morseDictionary = {
    "A": "*-",
    "B": "-***",
    "C": "-*-*",
    "D": "-**",
    "E": "*",
    "F": "**-*",
    "G": "--*",
    "H": "****",
    "I": "**",
    "J": "*---",
    "K": "-*-",
    "L": "*-**",
    "M": "--",
    "N": "-*",
    "O": "---",
    "P": "*--*",    
};

let words = ["HI", "CAP", "PIE", "EEEE"];
let currWord = words[Math.floor(Math.random() * words.length)]; 
console.log(currWord);
let currMorse = toMorse();
console.log(currMorse);

// Event listeners
document.querySelector("#checkBtn").addEventListener("click", checkAnswer);
document.querySelector("#giveUpBtn").addEventListener("click", giveUp)

document.querySelector("#wordToGuess").textContent = currWord;

function checkAnswer() {
    let morseInput = document.querySelector("#morseInput").value;
    if (morseInput == currMorse) {
        document.querySelector("#result").textContent="Correct!";
        document.querySelector("#result").style.color="green";
        document.querySelector("#wordToGuess").style.color="green";
        document.querySelector("#resultImg").src = "img/check.png";
    } else {
        document.querySelector("#result").textContent="Wrong, try again!";
        document.querySelector("#result").style.color="red";
        document.querySelector("#wordToGuess").style.color="red";
        document.querySelector("#resultImg").src = "img/cross.png";
    }
}

function giveUp() {
    document.querySelector("#checkBtn").style.display = "none";
    // document.querySelector("#giveUpBtn").style.display = "none";

    document.querySelector("#result").textContent = "Morse Code: " + currMorse;
    document.querySelector("#result").style.color = "red";
    document.querySelector("#result").style.transform = "scale(1.33)"
    document.querySelector("#resultImg").src = "img/cross.png";
}

function toMorse() {
    let morseWord = "";
    for (let i of currWord) {
        if (morseDictionary[i]) {
            morseWord += morseDictionary[i]
        }
    }
    return morseWord;
}