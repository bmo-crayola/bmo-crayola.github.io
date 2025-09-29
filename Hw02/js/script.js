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

let gameMode = 0;

// Event listeners
document.querySelector("#EngToMorse").addEventListener("click", EngToMorse);
document.querySelector("#MorseToEng").addEventListener("click", MorseToEng);

document.querySelector("#checkBtn").addEventListener("click", checkAnswer);
document.querySelector("#giveUpBtn").addEventListener("click", giveUp)


function EngToMorse() {
    document.querySelector("#wordToGuess").textContent = currWord;
    document.querySelector("#prompt").textContent = "Type the Morse code for the word above using - and *";

    document.querySelector("#EngToMorse").style.display = "none";
    document.querySelector("#MorseToEng").style.display = "none";

    document.querySelector("#checkBtn").removeAttribute("hidden");
    document.querySelector("#giveUpBtn").removeAttribute("hidden");
    document.querySelector("#morseInput").removeAttribute("hidden");
    document.querySelector("#morseInput").placeholder = "Enter Morse code here (NO SPACES!)";
}

function MorseToEng() {
    document.querySelector("#wordToGuess").textContent = currMorse;
    document.querySelector("#prompt").textContent = "Type the English code for the word above using ABC";

    document.querySelector("#EngToMorse").style.display = "none";
    document.querySelector("#MorseToEng").style.display = "none";

    document.querySelector("#checkBtn").removeAttribute("hidden");
    document.querySelector("#giveUpBtn").removeAttribute("hidden");
    document.querySelector("#morseInput").removeAttribute("hidden");
    document.querySelector("#morseInput").placeholder = "Enter English letterse here (ALL UPPERCASE!)"

    gameMode = 1;
}


function checkAnswer() {
    let morseInput = document.querySelector("#morseInput").value;
    if (gameMode == 0) {
        if (morseInput == currMorse) {
            document.querySelector("#result").textContent="Correct!";
            document.querySelector("#result").style.color="green";
            document.querySelector("#wordToGuess").style.color="green";
            document.querySelector("#resultImg").src = "img/check.png";
            document.querySelector("#resultImg").style.width = "5%"
        } else {
            document.querySelector("#result").textContent="Wrong, try again!";
            document.querySelector("#result").style.color="red";
            document.querySelector("#wordToGuess").style.color="red";
            document.querySelector("#resultImg").src = "img/cross.png";
            document.querySelector("#resultImg").style.width = "5%"
        }
    } else if (gameMode == 1) {
        if (morseInput == currWord) {
            document.querySelector("#result").textContent="Correct!";
            document.querySelector("#result").style.color="green";
            document.querySelector("#wordToGuess").style.color="green";
            document.querySelector("#resultImg").src = "img/check.png";
            document.querySelector("#resultImg").style.width = "5%"
        } else {
            document.querySelector("#result").textContent="Wrong, try again!";
            document.querySelector("#result").style.color="red";
            document.querySelector("#wordToGuess").style.color="red";
            document.querySelector("#resultImg").src = "img/cross.png";
            document.querySelector("#resultImg").style.width = "5%"
        }
    }
}

function giveUp() {
    document.querySelector("#checkBtn").style.display = "none";
    // document.querySelector("#giveUpBtn").style.display = "none";
    if (gameMode = 0) {
        document.querySelector("#result").textContent = "Morse Code: " + currMorse;
    } else if (gameMode = 1) {
        document.querySelector("#result").textContent = "English: " + currWord;
    }
    document.querySelector("#result").style.color = "red";
    document.querySelector("#result").style.transform = "scale(1.33)"
    document.querySelector("#resultImg").src = "img/cross.png";
    document.querySelector("#resultImg").style.width = "5%"
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