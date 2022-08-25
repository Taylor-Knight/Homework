const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      return console.log("Error!");
    }
  };
  
  const getComputerChoice = () => {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return console.log("It's a tie!");
    } else {
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          return console.log("Computer Won!");
        } else {
          return console.log("User won!");
        }
      }
      if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          return console.log("Computer Won!");
        } else {
          return console.log("User won!");
        }
      }
  
      if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          return console.log("Computer Won!");
        } else {
          return console.log("User won!");
        }
      }
  
      if (userChoice === "bomb") {
        return console.log("User won!");
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You threw " + userChoice);
    console.log("The Computer threw " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  console.log(playGame());