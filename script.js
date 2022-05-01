// choices of plays each round
const choices = ["lapis", "papyrus", "scalpellus"];
// obj to hold info on the player
const player = {choice: null, }
// obj to hold info on the computer
const computer = {choice: null,}
// if 0, game is inactive if 1, game is active. Set in the playGame function.
const gameActive = 0;
// generates a random int and accesses choices list items
const getRandomChoice = () => { return(choices[Math.floor(Math.random() * choices.length)]) }

const initSite = () => {
    document.querySelector("#play").addEventListener('click', playGame);
}

const setUserChoice = (roundChoice, roundChoiceDisplay) => {
    player.choice = roundChoice;
    roundChoiceDisplay.innerHTML = `Current choice: ${player.choice}`;
}

const displayResults = (roundResultDisplay) => {
    computer.choice = getRandomChoice();
    const result = compareChoices();
    roundResultDisplay.innerHTML = `Player: ${player.choice} PC: ${computer.choice}<br>${result}`
}

const compareChoices = () => {
    if (player.choice === computer.choice) {
        return ("Game is a tie.");
    } else if (player.choice === choices[0]) { // if the user picks lapis (first option in arr)
        if (computer.choice == choices[1]) {
          return("PC wins!");// lapis < papyrus
        } else {
          return("Player wins!");// lapis > scalpellus
        }
    } else if (player.choice === choices[1]) { // if the user pick papyrus (second option in arr)
        if (computer.choice == choices[2]) {
          return("PC wins!");// papyrus < scalpellus
        } else {
          return("Player wins!");// papyrus > lapis
        }
    } else { // otherwise, the last option is scalpellus (third option in arr)
        if (computer.choice == choices[0]) {
          return("PC wins!");// scalpellus < lapis
        } 
        else {
          return("Player wins!");// scalpellus > papyrus
        }
    }
}

const playGame = () => {
    document.querySelector("#play").setAttribute('disabled', true);

    const gamePrompt = document.createElement('p');
    gamePrompt.innerHTML = "Choose your play:";
    document.querySelector('#game').append(gamePrompt);

    const chooseLapis = document.createElement('button');
    chooseLapis.setAttribute('class', 'btn');
    chooseLapis.setAttribute('id', 'lapis');
    chooseLapis.innerHTML = "Lapis";
    document.querySelector("#game").append(chooseLapis);

    const choosePapyrus = document.createElement('button');
    choosePapyrus.setAttribute('class', 'btn');
    choosePapyrus.setAttribute('id', 'papyrus');
    choosePapyrus.innerHTML = "Papyrus";
    document.querySelector("#game").append(choosePapyrus);
    
    const chooseScalpellus = document.createElement('button');
    chooseScalpellus.setAttribute('class', 'btn');
    chooseScalpellus.setAttribute('id', 'scalpellus');
    chooseScalpellus.innerHTML = "Scalpellus";
    document.querySelector("#game").append(chooseScalpellus);

    const roundChoice = document.createElement('p');    //displays current selection for the user
    document.querySelector('#game').append(roundChoice);

    const submitChoice = document.createElement('button');
    submitChoice.setAttribute('class', 'btn');
    submitChoice.setAttribute('id', 'submit');
    submitChoice.innerHTML = "Submit";
    submitChoice.style.display = "block";
    document.querySelector("#game").append(submitChoice);

    const roundResult = document.createElement('p');    //displays user choice vs computer choice and then the result
    document.querySelector('#game').append(roundResult);

    document.querySelector("#lapis").addEventListener('click', function(){setUserChoice("lapis", roundChoice)});
    document.querySelector("#papyrus").addEventListener('click', function(){setUserChoice("papyrus", roundChoice)});
    document.querySelector("#scalpellus").addEventListener('click', function(){setUserChoice("scalpellus", roundChoice)});
    document.querySelector("#submit").addEventListener('click', function(){displayResults(roundResult)});

}   

document.onload = initSite();