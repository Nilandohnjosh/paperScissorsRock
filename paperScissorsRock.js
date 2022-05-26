function computerPlay(weapon) {}
const select = ['paper', 'scissors', 'rock']
const random = Math.floor(Math.random() * select.length)
console.log(select[random])

function playRound(playerSelection, computerSelection) {
  let playerSelect = prompt('Select your weapon of choice Blud')
  if ((playerSelection === 'paper') & (computerSelection === 'rock')) {
    return 'You Win! Paper beats Rock!'
  } else if (
    (playerSelection === 'scissors') &
    (computerSelection === 'paper')
  ) {
    return 'You Win! Scissors beats Paper!'
  } else if (
    (playerSelection === 'rock') &
    (computerSelection === 'scissors')
  ) {
    return 'You Win! Rock beats Scissors!'
  }
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

function game() {
  function playRound(playerSelection, computerSelection) {
    console.log('OK')
  }

  function playRound(playerSelection, computerSelection) {
    console.log('OK')
  }

  function playRound(playerSelection, computerSelection) {
    console.log('OK')
  }

  function playRound(playerSelection, computerSelection) {
    console.log('OK')
  }

  function playRound(playerSelection, computerSelection) {
    console.log('OK')
  }
}
