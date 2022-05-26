function paper() {
  function computerPlay() {
    const select = ['paper', 'scissors', 'rock']
    const random = Math.floor(Math.random() * select.length)
    return select[random];
  }
  
  function playerPlay() {
    const select = ['paper', 'scissors', 'rock']
    const random = Math.floor(Math.random() * select.length)
    return select[random];
  }
  
  function playRound(playerSelection, computerSelection) {
    // let playerSelect = prompt('Select your weapon of choice Blud')
    // computerSelection = computerPlay().toLowerCase();
    // playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
      return 'Tie Game!'
    } else if (
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors') & (computerSelection === 'rock') ||
      (playerSelection === 'rock') & (computerSelection === 'paper')
    ) {
      return `You Lose! CPU chose ${computerSelection} and Player chose ${playerSelection}`
      cpuScore++
    } else if (
      (computerSelection === 'paper' && playerSelection === 'scissors') ||
      (computerSelection === 'scissors') & (playerSelection === 'rock') ||
      (computerSelection === 'rock') & (playerSelection === 'paper')
    ) {
      return `You Win! Player chose ${playerSelection} and CPU chose ${computerSelection}` 
      userScore++
    }
  }
  
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}
// function computerPlay() {
//   const select = ['paper', 'scissors', 'rock']
//   const random = Math.floor(Math.random() * select.length)
//   return select[random];
// }

// function playerPlay() {
//   const select = ['paper', 'scissors', 'rock']
//   const random = Math.floor(Math.random() * select.length)
//   return select[random];
// }

// function playRound(playerSelection, computerSelection) {
//   // let playerSelect = prompt('Select your weapon of choice Blud')
//   // computerSelection = computerPlay().toLowerCase();
//   // playerSelection = playerSelection.toLowerCase();
//   if (playerSelection == computerSelection) {
//     return 'Tie Game!'
//   } else if (
//     (playerSelection === 'paper' && computerSelection === 'scissors') ||
//     (playerSelection === 'scissors') & (computerSelection === 'rock') ||
//     (playerSelection === 'rock') & (computerSelection === 'paper')
//   ) {
//     return `You Lose! CPU chose ${computerSelection} and Player chose ${playerSelection}`
//     cpuScore++
//   } else if (
//     (computerSelection === 'paper' && playerSelection === 'scissors') ||
//     (computerSelection === 'scissors') & (playerSelection === 'rock') ||
//     (computerSelection === 'rock') & (playerSelection === 'paper')
//   ) {
//     return `You Win! Player chose ${playerSelection} and CPU chose ${computerSelection}` 
//     userScore++
//   }
// }

// const playerSelection = playerPlay();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

  playRound('rock', 'paper')
  function game() {
    let userScore = 0
    let cpuScore = 0
    let player = 'rock'
    let cpu = 'paper'
    for (let i = 0; i < 5; i++) {
      // let player = prompt('Select your choice')
      // let cpu = prompt('Select CPU choice')
      playRound('rock', 'paper')
      // if (userScore === 3) {
      //   return 'You win the game slime'
      // } else if (cpuScore === 3) {
      //   return 'You lose the game slime'
      // }
    }
  }
  game()
}
// // const select = ['paper', 'scissors', 'rock']
// // const random = Math.floor(Math.random() * select.length)
// // console.log(select[random])

// function playRound(playerSelection, computerSelection) {
//   // let playerSelect = prompt('Select your weapon of choice Blud')
//   if (playerSelection == computerSelection) {
//     return 'Tie Game!'
//   } else if (
//     (playerSelection === 'paper' && computerSelection === 'scissors') ||
//     (playerSelection === 'scissors') & (computerSelection === 'rock') ||
//     (playerSelection === 'rock') & (computerSelection === 'paper')
//   ) {
//     return 'You Lose!'
//     cpuScore++
//   } else if (
//     (computerSelection === 'paper' && playerSelection === 'scissors') ||
//     (computerSelection === 'scissors') & (playerSelection === 'rock') ||
//     (computerSelection === 'rock') & (playerSelection === 'paper')
//   ) {
//     return 'You Win!'
//     userScore++
//   }
// }

// function game() {
//   let userScore = 0
//   let cpuScore = 0
//   for (let i = 0; i < 5; i++) {
//     playRound(playerSelection, computerSelection)
//     if (userScore === 3) {
//       return 'You win the game slime'
//     } else if (cpuScore === 3) {
//       return 'You lose the game slime'
//     }
//   }
// }
// game()
// // const playerSelection = 'rock'
// // const computerSelection = computerPlay()
// // console.log(playRound(playerSelection, computerSelection))
