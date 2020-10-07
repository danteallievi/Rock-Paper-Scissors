const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const score = document.querySelector(".score");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      score.classList.add("fadeIn");
    });
  };
  // Play Match
  const playMatch = () => {
    // Selectors
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    const resetBtn = document.getElementById("resetBtn");

    // Loop ANIMATION
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    // Computer Options
    const computerOptions = ["Rock", "Paper", "Scissors"];

    // Loop of buttons
    options.forEach((option) => {
      // Button event
      option.addEventListener("click", function () {
        // Computer Choise
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // Score timeout
        setTimeout(() => {
          // Call compare hands
          compareHands(this.textContent, computerChoice);

          // Update Images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 1800);

        // Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
        playerHand.src = `./images/Rock.png`;
        computerHand.src = `./images/Rock.png`;
      });
    });
    resetBtn.addEventListener("click", function () {
      pScore = 0;
      cScore = 0;
      playerHand.src = `./images/Rock.png`;
      computerHand.src = `./images/Rock.png`;
      updateScore();
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    // Selector
    const winner = document.querySelector(".winner");

    // Texts output
    // const pWin =
    //   ((winner.style.color = "red"), (winner.textContent = "Player Wins"));

    // const cWin =
    //   ((winner.style.color = "blue"), (winner.textContent = "Computer Wins"));

    // pWin.style.backgroundColor = "red";
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent =
        ((winner.style.color = "white"), (winner.textContent = "It is a Tie"));
      return;
    }
    //Check for Rock
    if (playerChoice === "Rock") {
      if (computerChoice === "Scissors") {
        winner.textContent =
          ((winner.style.color = "dodgerblue"),
          (winner.textContent = "Player Wins"));
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent =
          ((winner.style.color = "Red"),
          (winner.textContent = "Computer Wins"));
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "Paper") {
      if (computerChoice === "Scissors") {
        winner.textContent =
          ((winner.style.color = "Red"),
          (winner.textContent = "Computer Wins"));
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent =
          ((winner.style.color = "dodgerblue"),
          (winner.textContent = "Player Wins"));
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "Scissors") {
      if (computerChoice === "Rock") {
        winner.textContent =
          ((winner.style.color = "Red"),
          (winner.textContent = "Computer Wins"));
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent =
          ((winner.style.color = "dodgerblue"),
          (winner.textContent = "Player Wins"));
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // Inner function
  startGame();
  playMatch();
};
// Start Game function
game();
