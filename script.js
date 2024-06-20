
let computervalue = undefined;
let humanvalue = undefined;
let humanscore = 0;
let computerscore = 0;

function getComputerChoice() {
    computervalue = Math.floor(Math.random() * 3);

    if (computervalue == 0) {
        return computervalue = ("Rock");
    }
    else if (computervalue == 1) {
        return computervalue = ("Paper");
    }
    else if (computervalue == 2) {
        return computervalue = ("Scissors");
    }
    else {
        return computervalue = ("Error.");
    }
 
}

const results = document.querySelector("#rslt");
let win = undefined;
const winner = document.createElement('p').textContent = win;
    
    function playRound(computervalue, humanvalue) {
        if (computervalue === "Rock" && humanvalue === "Rock") {
            return computerscore = computerscore + 1, humanscore = humanscore + 1, win = 'A Tie!';
        }
        else if (computervalue === "Rock" && humanvalue === "Scissors") {
            return computerscore = (computerscore + 1), humanscore = humanscore, console.log("You lost! Rock is stronger than scissors.");
        }
        else if (computervalue === "Scissors" && humanvalue === "Rock") {
            return computerscore = computerscore, humanscore = (humanscore + 1), console.log("You won! Rock crushes scissors!");
        }
        else if (computervalue === "Paper" && humanvalue === "Scissors") {
            return computerscore = computerscore, humanscore = (humanscore + 1), console.log("You won! Scissors cuts paper!");
        }
        else if (computervalue === "Scissors" && humanvalue === "Paper") {
            return computerscore = (computerscore + 1), humanscore = humanscore, console.log("You lost! Scissors are stronger than paper.");
        }
        else if (computervalue === "Rock" && humanvalue === "Paper") {
            return computerscore = computerscore, humanscore = (humanscore + 1), console.log("You won! Paper covers rock!");
        }
        else if (computervalue === "Paper" && humanvalue === "Rock") {
            return computerscore = (computerscore + 1), humanscore = humanscore, console.log("You lost! Paper is stronger than rock.");
        }
        else if (computervalue === "Paper" && humanvalue === "Paper") {
            return computerscore = computerscore + 1, humanscore = humanscore + 1, console.log("A Tie!");
        }
        else if (computervalue === "Scissors" && humanvalue === "Scissors") {
            return computerscore = computerscore + 1, humanscore = humanscore + 1, console.log("A Tie!");
        }
        else {
            return console.log("Oops, something went wrong!")
        }
    
}


function playGame() {
    getComputerChoice()
    playRound(computervalue, humanvalue)  
}

const brock = document.querySelector("#rock");
brock.addEventListener('click',() => { 
     humanvalue = 'Rock';
    playGame(computervalue, humanvalue);
});
const bpaper = document.querySelector("#paper");
bpaper.addEventListener('click',() => {
     humanvalue = 'Paper';
    playGame(computervalue, humanvalue);
});
const bscissors = document.querySelector("#scissors");
bscissors.addEventListener('click',() => {
     humanvalue = 'Scissors';
    playGame(computervalue, humanvalue);
});



