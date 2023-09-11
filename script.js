const lblMessage = document.querySelector(".message");

console.log(lblMessage);
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

let inpGuess = document.querySelector(".guess");
console.log(inpGuess);

let lblStreak = document.querySelector(".streak")

let randomNum = 0

function setRandomNumber() {
    randomNum = Math.floor(Math.random() * 20) + 1;
}

let score = 0
setRandomNumber()
console.log(randomNum)

let streak = 0
let winStreak = []

function checkIfEqual() {
    if (inpGuess.value == randomNum) {
        score++
        streak++
        winStreak.push(streak);
        console.log(winStreak)
        lblStreak.textContent = winStreak.length;
        lblMessage.textContent = "The numbers are equal"
        lblScore.textContent = score
    } else {
        score--
        winStreak = []
        lblStreak.textContent = winStreak.length
        lblMessage.textContent = "Try again"
        lblNumber.textContent = randomNum
        lblScore.textContent = score
    }
}

function tryAgain() {
    lblNumber.textContent = "?"
    inpGuess.value = ""
    setRandomNumber()
    console.log(randomNum)
}

const button = document.querySelector(".check")
button.addEventListener("click", checkIfEqual)

const tryAgainButton = document.querySelector(".again")
tryAgainButton.addEventListener("click", tryAgain)










