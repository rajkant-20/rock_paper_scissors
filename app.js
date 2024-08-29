let userScore = 0;
let compScore = 0;
const usrscr = document.querySelector("#user_score");

const cmpscr = document.querySelector("#comp_score");
console.log(usrscr, cmpscr);

let message = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  ranIdx = Math.floor(Math.random() * 3);
  console.log(options[ranIdx]);
  return options[ranIdx];
};

const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  if (compChoice === userChoice) {
    message.innerText = `It's draw! both are ${compChoice}.`;
    message.style.backgroundColor = "black";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

showWinner = (userWin, userChoice, compChoice) => {
  if (userWin == true) {
    message.innerText = `You win! your ${userChoice} beats ${compChoice}.`;
    message.style.backgroundColor = "green";
    userScore = userScore + 1;
    usrscr.innerText = userScore;
  } else {
    message.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
    message.style.backgroundColor = "red";
    compScore++;
    cmpscr.innerText = compScore;
  }
};
