document.addEventListener("DOMContentLoaded", () => {
    let computervalue;
    let humanvalue;
    let humanscore = 0;
    let computerscore = 0;
    let rounds = 0;

    const results = document.querySelector("#rslt");
    const restartButton = document.querySelector("#restart");
    const confettiCanvas = document.getElementById('confetti-canvas');
    const confettiInstance = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
    });

    function getComputerChoice() {
        computervalue = Math.floor(Math.random() * 3);

        if (computervalue == 0) {
            return "Rock";
        } else if (computervalue == 1) {
            return "Paper";
        } else if (computervalue == 2) {
            return "Scissors";
        } else {
            return "Error.";
        }
    }

    function playRound(computervalue, humanvalue) {
        let resultMessage;

        if (computervalue === "Rock" && humanvalue === "Rock") {
            humanscore += 1;
            computerscore += 1;
            resultMessage = 'A Tie!';
        } else if (computervalue === "Rock" && humanvalue === "Scissors") {
            computerscore += 1;
            resultMessage = "You lost! Rock is stronger than scissors.";
        } else if (computervalue === "Scissors" && humanvalue === "Rock") {
            humanscore += 1;
            resultMessage = "You won! Rock crushes scissors!";
        } else if (computervalue === "Paper" && humanvalue === "Scissors") {
            humanscore += 1;
            resultMessage = "You won! Scissors cuts paper!";
        } else if (computervalue === "Scissors" && humanvalue === "Paper") {
            computerscore += 1;
            resultMessage = "You lost! Scissors are stronger than paper.";
        } else if (computervalue === "Rock" && humanvalue === "Paper") {
            humanscore += 1;
            resultMessage = "You won! Paper covers rock!";
        } else if (computervalue === "Paper" && humanvalue === "Rock") {
            computerscore += 1;
            resultMessage = "You lost! Paper is stronger than rock.";
        } else if (computervalue === "Paper" && humanvalue === "Paper") {
            humanscore += 1;
            computerscore += 1;
            resultMessage = "A Tie!";
        } else if (computervalue === "Scissors" && humanvalue === "Scissors") {
            humanscore += 1;
            computerscore += 1;
            resultMessage = "A Tie!";
        } else {
            resultMessage = "Oops, something went wrong!";
        }

        return resultMessage;
    }

    function playGame(humanvalue) {
        if (rounds < 5) {
            computervalue = getComputerChoice();
            const resultMessage = playRound(computervalue, humanvalue);
            results.textContent = `${resultMessage} Human: ${humanscore}, Computer: ${computerscore}`;
            rounds++;

            if (rounds === 5) {
                if (humanscore > computerscore) {
                    results.style.backgroundColor = "lightgreen";
                    results.textContent = `You win! Final Score - Human: ${humanscore}, Computer: ${computerscore}`;
                    startConfetti();
                } else if (computerscore > humanscore) {
                    results.style.backgroundColor = "lightcoral";
                    results.textContent = `You lost! Final Score - Human: ${humanscore}, Computer: ${computerscore}`;
                } else {
                    results.style.backgroundColor = "lightyellow";
                    results.textContent = `It's a tie! Final Score - Human: ${humanscore}, Computer: ${computerscore}`;
                }
                restartButton.style.display = "block";
            }
        }
    }

    function resetGame() {
        humanscore = 0;
        computerscore = 0;
        rounds = 0;
        results.textContent = "";
        results.style.backgroundColor = "";
        restartButton.style.display = "none";
    }

    const brock = document.querySelector("#rock");
    brock.addEventListener('click', () => {
        humanvalue = 'Rock';
        playGame(humanvalue);
    });

    const bpaper = document.querySelector("#paper");
    bpaper.addEventListener('click', () => {
        humanvalue = 'Paper';
        playGame(humanvalue);
    });

    const bscissors = document.querySelector("#scissors");
    bscissors.addEventListener('click', () => {
        humanvalue = 'Scissors';
        playGame(humanvalue);
    });

    restartButton.addEventListener('click', resetGame);

    function startConfetti() {
        const duration = 5 * 1000; // 5 seconds
        const end = Date.now() + duration;

        (function frame() {
            const timeLeft = end - Date.now();
            if (timeLeft <= 0) {
                return;
            }

            const particleCount = 5 * (timeLeft / duration);
            confettiInstance({
                particleCount,
                startVelocity: 0,
                spread: 360,
                ticks: 300,
                gravity: 0.2,
                origin: {
                    x: Math.random(),
                    y: 0
                }
            });

            requestAnimationFrame(frame);
        }());
    }
});