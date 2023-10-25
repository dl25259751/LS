const readline = require('readline-sync');

const MESSAGES = require('./rock_paper_scissors.json');

const BEST_OF_X = 5;

const WINNING_SCORE = Math.floor(BEST_OF_X / 2) + 1;

const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissor',
  l: 'lizard',
  sp: 'spock',
};

const KEY_BEATS_VAL = {
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
  prompt(MESSAGES['playerChoice'] + `${Object.entries(VALID_CHOICES).map(([key, value]) => `${value}(${key})`).join(', ')}`);

  let playerChoice = readline.question().toLowerCase();

  if (VALID_CHOICES.hasOwnProperty(playerChoice)) {
    playerChoice = VALID_CHOICES[playerChoice];
  }

  while (!Object.values(VALID_CHOICES).includes(playerChoice)) {
    prompt(MESSAGES['invalidChoice']);
    playerChoice = readline.question().toLowerCase();
    if (VALID_CHOICES.hasOwnProperty(playerChoice)) {
      playerChoice = VALID_CHOICES[playerChoice];
    }
  }

  return playerChoice;
}

function computeComputerChoice() {
  const randomIndex = Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
  return Object.values(VALID_CHOICES)[randomIndex];
}

function calculateWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return undefined;
  }
  if (KEY_BEATS_VAL[playerChoice].includes(computerChoice)) {
    return true;
  }

  return false;
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);
  const result = calculateWinner(playerChoice, computerChoice);
  if (result) {
    prompt(MESSAGES['playerRoundWin']);
  } else if (result === false) {
    prompt(MESSAGES['computerRoundWin']);
  } else {
    prompt(MESSAGES['roundTie']);
  }
}

function playAgain() {
  prompt(MESSAGES['playAgain']);
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt(MESSAGES['invalidPlayAgain']);
    answer = readline.question().toLowerCase();
  }
  console.clear();
  return answer === 'y';
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  prompt(MESSAGES['welcomeMSG']);
  prompt(MESSAGES['gameIntro'] + `${BEST_OF_X}`);
  while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
    const playerChoice = getPlayerChoice();
    const computerChoice = computeComputerChoice();

    if (calculateWinner(playerChoice, computerChoice)) {
      playerScore++;
    }
    if (calculateWinner(playerChoice, computerChoice) === false) {
      computerScore++;
    }

    displayWinner(playerChoice, computerChoice);

    prompt(MESSAGES['playerScore'] + `${playerScore}` + MESSAGES['computerScore'] +`${computerScore}`);
  }

  playerScore > computerScore
    ? prompt(MESSAGES['playerGrandWinner']) : prompt(MESSAGES['computerGrandWinner']);

  if (!playAgain()) {
    break;
  }
}
