// Rock, Paper, Scissors game!

// Var declarations


let elements = {1: "Rock", 2: "Paper", 3: "Scissors" };
let human;
let computer;
let play = {"human":human,"computer":computer};
let matchCount = 0;
let humanWins = 0;
let computerWins = 0;
let weapon = document.querySelector('#elements');
let status = document.querySelector('#result-game');
let result_cont = document.querySelector('#result-counter');
let result = document.createElement('p');

weapon.addEventListener('click',chooseWeapon);

// Game

function chooseWeapon(event) {
    if (humanWins < 3 && computerWins < 3) {
        play["human"] = event.target.textContent;
        play["computer"] = elements[parseInt(Math.random() * 2 + 1)];
        // console.log(play);
        if ((play["human"] == "Rock" && play["computer"] == "Scissors")
            || (play["human"] == "Scissors" && play["computer"] == "Paper") 
            || (play["human"] == "Paper" && play["computer"] == "Rock")) {
            matchCount += 1;
            humanWins += 1;
            result.textContent = `${humanWins} - ${computerWins}`;
            result_cont.appendChild(result);
            status.textContent = `You win, ${play["human"]} beats ${play["computer"]}`;
        } else if ((play["human"] == "Rock" && play["computer"] == "Paper")
                    || (play["human"] == "Scissors" && play["computer"] == "Rock") 
                    || (play["human"] == "Paper" && play["computer"] == "Scissors")) {
                        matchCount += 1;
                        computerWins += 1;
                        status.textContent = `You lose, ${play["computer"]} beats ${play["human"]}`;
                        result.textContent = `${humanWins} - ${computerWins}`;
                        result_cont.appendChild(result);
                    }
        else {status.textContent = `It\'s a tie`;}
        ;
    }
    if(humanWins == 3) {
        status.textContent = 'You Win!'
    } else if (computerWins == 3) {
        status.textContent = 'Computer Wins'
    }

}

// Restart

let reset = document.querySelector('#restart');
reset.addEventListener('click', () => {
    matchCount = 0;
    humanWins = 0;
    computerWins = 0;
    status.textContent = "";
    result_cont.removeChild(result)
    console.clear()})
    


