let myScore = 0;
let compScore = 0;

function randomComputer() {
    let rand = ["rock", "paper", "scissors"];
    return (rand[Math.floor(Math.random() * rand.length)]);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});


function playRound(click) {
    const computerSelection = randomComputer();
    let computer = document.getElementById("computer");
    computer.textContent = "Computer used " + computerSelection;
    //console.log(computerSelection);

    let playerSelection = click;//= prompt("Select rock, paper, or scissors");
    //playerSelection = playerSelection.toLowerCase();

    let content = document.getElementById("results");

    if(playerSelection == "scissors" && computerSelection == "rock") {
        compScore++;
        content.textContent="You Loose! Rock smashes Scissors.";
       //alert("You Loose! Rock smashes Scissors.");
   } else if(playerSelection == "scissors" && computerSelection == "scissors") {
    content.textContent="Draw. Play again.";
    //alert("Draw. Play again.");
   } else if(playerSelection == "scissors" && computerSelection == "paper") {
    myScore++;    
    content.textContent="You Win! Scissors cuts paper.";
    //alert("You Win! Scissors cuts paper.");
    } else if(playerSelection == "rock" && computerSelection == "rock") {
        content.textContent="Draw. Play again.";
        //alert("Draw. Play again.");
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        compScore++;
        content.textContent="You Loose!  Paper covers rock.";
        //alert("You Loose!  Paper covers rock.");
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        myScore++;
        content.textContent="You Win! Rock smashes scissors.";
        //alert("You Win! Rock smashes scissors.");
    } else if(playerSelection == "paper" && computerSelection == "paper") {
        content.textContent="Draw. Play again.";
        //alert("Draw. Play again.");
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        myScore++;
        content.textContent="You Win! Paper covers rock.";
        //alert("You Win! Paper covers rock.");
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        compScore++;
        content.textContent="You Loose!  Scissors cuts paper.";
        //alert("You Loose!  Scissors cuts paper.");
    }

    let scoreM = document.getElementById("myScore");
    scoreM.textContent = "Your score is " + myScore;
    let scoreC = document.getElementById("compScore");
    scoreC.textContent = "Computer's Score is " + compScore;

    /*while (myScore < 3 && compScore < 3) {
       // playRound();
    }*/
    if (myScore >= 3) {
        content.textContent="Way to Go!!!";
        //alert("Way to Go!!!")
        resetGame();
    }
    else if (compScore >= 3) {
        content.textContent="Better luck next time.";
        //alert("Better luck next time.")
        resetGame();
    }

    function resetGame() {
        
        const playAgain = document.getElementById("playAgain");
        const replay = document.getElementById("replay");
        const quit = document.getElementById("quit");
        playAgain.textContent = "Would you like to play again?";
        
        const btn = document.createElement("BUTTON");
        btn.id = "button";
        btn.innerHTML = "Play Again!";
        replay.appendChild(btn);
        
        const btn2 = document.createElement("BUTTON");
        btn2.innerHTML = "Quit!";
        btn2.id = "end";
        quit.appendChild(btn2);
        
        restart();
    }
        
    function restart(){
        const button = document.getElementById("button");
        button.addEventListener('click', () => {
            myScore = 0;
            compScore = 0;
            scoreC.textContent = "Computer's Score is " + compScore;
            scoreM.textContent = "Your score is " + myScore;
            button.remove();
            

            const button2 = document.getElementById("end");
            button2.remove();
            playAgain.textContent = "";

        });
        const button2 = document.getElementById("end");
            button2.addEventListener('click', () => {
                
                alert("Oh come on! :(");
              });
            

    }

  }

