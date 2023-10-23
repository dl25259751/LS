const readline = require('readline-sync');

const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissor',
  l: 'lizard',
  sp: 'spock',
};

const Beats = {
  rock: ['scissor', 'lizard'],
  paper: ['rock', 'spock'],
  scissor: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissor'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice() {
  prompt(`Choose one: ${Object.entries(VALID_CHOICES).map(([key, value]) => `${value}(${key})`).join(', ')}`);

  let choice = readline.question();

  if (VALID_CHOICES.hasOwnProperty(choice)) {
    choice = VALID_CHOICES[choice];
  }

  while (!Object.values(VALID_CHOICES).includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  return choice;
}

function computeComputerChoice() {
  const randomIndex = Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
  return Object.values(VALID_CHOICES)[randomIndex];
}

function calculateWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return undefined;
  }
  if (Beats[choice].includes(computerChoice)) {
    return true;
  }

  return false;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  const result = calculateWinner(choice, computerChoice);
  if (result) {
    prompt('You Win!');
  } else if (result === false) {
    prompt('Computer wins!');
  } else {
    prompt('it\'s a tie.');
  }
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer[0] === 'y';
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  prompt('Welcome to rock_paper_scissor.js!');
  prompt('This program is a console app in which you face off against your PC in a game of rock, paper, scissor, lizard, and spock in a best of 5');
  while (playerScore < 3 && computerScore < 3) {
    const playerChoice = getPlayerChoice();
    const computerChoice = computeComputerChoice();

    if (calculateWinner(playerChoice, computerChoice)) {
      playerScore++;
    }
    if (calculateWinner(playerChoice, computerChoice) === false) {
      computerScore++;
    }

    displayWinner(playerChoice, computerChoice);

    prompt(`The current score is Player : ${playerScore} Computer : ${computerScore}`);
  }

  playerScore > computerScore
    ? prompt('You are the Grand Winner!') : prompt('The Computer is the Grand Winner!');

  if (!playAgain()) {
    break;
  }
}
