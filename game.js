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

while (matchCount <= 5) {
    let play = chooseWeapon();
    if ((play["human"] == "Rock" && play["computer"] == "Scissors")
        || (play["human"] == "Scissors" && play["computer"] == "Paper") 
        || (play["human"] == "Paper" && play["computer"] == "Rock")) {
        console.log(`${play["human"]} beats ${play["computer"]} => ${humanWins} - ${computerWins}`);
        matchCount += 1;
        humanWins += 1;
    } else if ((play["human"] == "Rock" && play["computer"] == "Paper")
                || (play["human"] == "Scissors" && play["computer"] == "Rock") 
                || (play["human"] == "Paper" && play["computer"] == "Scissors")) {
                    console.log(`${play["computer"]} beats ${play["human"]}`);
                    matchCount += 1;
                    computerWins =+ 1;
                    console.log(`${humanWins} - ${computerWins}`);
                }
    else {console.log('It\'s a tie');
            console.log(`${humanWins} - ${computerWins}`);}
    ;
    console.log(object);
    // console.log(play["computer"] + ' vs ' + play["human"]);
}

// console.log(`${humanWins} - ${computerWins}`);

