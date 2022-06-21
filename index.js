
const messgages = document.querySelector("#messages");

const button = document.querySelector("#button");

const input = document.querySelector("#input");
let gameWords = [
    "Spiderman",
    "Lion" + "King",
    "Terminator",
    "Joker",
    "Jurassic" + "Park",
    "Harry" +"Potter",
    "Fight" + "Club",
    "Jaws",
    "Shrek",
    "Transformers",
    "Back" + "To" + "The" + "Future",
    "Psycho",
    "The" + "Matrix",
    "The" + "Avengers"
  ];
let newWords = "";

let randWords = "";

let playGame = false;

const generateWords = () => {
let words = Math.floor(Math.random() * gameWords.length);

let genWords = gameWords[words];
return genWords;
};

const scrambleWords = (arr) => {
for (let i = arr.length - 1; i > 0; i--) {
let temp = arr[i];

let j = Math.floor(Math.random() * (i + 1));

arr[i] = arr[j];
arr[j] = temp;
}
return arr;
};

//setuping the Game

button.addEventListener("click", function () {
if (!playGame) {
playGame = true;

button.innerHTML = "Guess";
document.querySelector("#input").style.display = "block";

newWords = generateWords();

randWords = scrambleWords(newWords.split("")).join("");

messages.innerHTML = `Guess the word: ${randWords}.`;
} else {
let getWords = input.value;

if (getWords === newWords) {
playGame = false;

messages.innerHTML = `Awesome it's correct. It is ${newWords}.`;

document.querySelector("#input").style.display = "none";
button.innerHTML = "Next Word";

input.value = "";
} else {
messages.innerHTML = `Sorry. It is incorrect. Please try again ${randWords}.`;
}
}
});
