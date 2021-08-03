// Rock, Paper, Scissors game!

// Var declarations

let matchCount = 0;
let humanWins = 0;
let computerWins = 0;

// Game Logic - Choose Weapon

const chooseWeapon = () => {
    let elements = {1: "Rock", 2: "Paper", 3: "Scissors" };
    let human = elements[prompt("choose a weapon: 1 - Rock, 2 - Paper, 3 - Scissors")];
    let computer = elements[parseInt(Math.random() * 2 + 1)];
    return {"computer": computer,"human": human}}

// Game Logic - Play

while (matchCount < 5) {
    let play = chooseWeapon();
    if ((play["human"] == "Rock" && play["computer"] == "Scissors")
        || (play["human"] == "Scissors" && play["computer"] == "Paper") 
        || (play["human"] == "Paper" && play["computer"] == "Rock")) {
        matchCount += 1;
        humanWins += 1;
        console.log(`You win, ${play["human"]} beats ${play["computer"]} => ${humanWins} - ${computerWins}`);
    } else if ((play["human"] == "Rock" && play["computer"] == "Paper")
                || (play["human"] == "Scissors" && play["computer"] == "Rock") 
                || (play["human"] == "Paper" && play["computer"] == "Scissors")) {
                    matchCount += 1;
                    computerWins += 1;
                    console.log(`You lose, ${play["computer"]} beats ${play["human"]} => ${humanWins} - ${computerWins}`);
                }
    else {console.log(`It\'s a tie => ${humanWins} - ${computerWins}`);}
    ;
    console.log(matchCount);
}

if (humanWins > computerWins) {
    console.log("You win");
} else {console.log("You lose :( try again!");}
// console.log(`${humanWins} - ${computerWins}`);

