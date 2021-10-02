let myScore = 0;
let compScore = 0;

function randomComputer() {
    let rand = ["rock", "paper", "scissors"];
    return (rand[Math.floor(Math.random() * rand.length)]);
}



function playRound() {
    const computerSelection = randomComputer();
    console.log(computerSelection);

    let playerSelection = prompt("Select rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "scissors" && computerSelection == "rock") {
        compScore++;
       alert("You Loose! Rock smashes Scissors.");
   } else if(playerSelection == "scissors" && computerSelection == "scissors") {
    alert("Draw. Play again.");
   } else if(playerSelection == "scissors" && computerSelection == "paper") {
    myScore++;    
    alert("You Win! Scissors cuts paper.");
    } else if(playerSelection == "rock" && computerSelection == "rock") {
        alert("Draw. Play again.");
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        compScore++;
        alert("You Loose!  Paper covers rock.");
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        myScore++;
        alert("You Win! Rock smashes scissors.");
    } else if(playerSelection == "paper" && computerSelection == "paper") {
        alert("Draw. Play again.");
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        myScore++;
        alert("You Win! Paper covers rock.");
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        compScore++;
        alert("You Loose!  Scissors cuts paper.");}
  }
  
  function game() {
    while (myScore < 3 && compScore < 3) {
        playRound();
    }
    if (myScore ==3) {
        alert("Way to Go!!!")
    }
    else if (compScore == 3) {
        alert("Better luck next time.")
    }
  }

  

  game();


//playRound();