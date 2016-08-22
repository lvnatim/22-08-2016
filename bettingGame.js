// var playerMoney = 50;

// function generateNumber(){
//   return Math.ceil(Math.random() * 10);
// }

// while (playerMoney > 5) {
//   var bet;
//   var guess;
//   do {
//     alert("You have $" + playerMoney);
//     bet = parseInt(prompt("Enter your bet between $5 and $10!"), 10);
//   } while (bet > 10 || bet < 5);

//   do {
//     guess = parseInt(prompt("Guess a number between 1 and 10!"), 10);
//   } while(guess > 10 || guess < 1);

//   var computerNumber = generateNumber();
//   var difference = Math.abs(guess - computerNumber);

//   switch(difference){
//     case 0:
//       playerMoney += bet
//       alert("The number was " + computerNumber + ". You won some money! Your total is $" + playerMoney);
//     case 1:
//       alert("The number was " + computerNumber + ". You keep your money. Your total is $" + playerMoney);
//     default:
//       playerMoney -= bet
//       alert("The number was " + computerNumber + ". You lost money! Your total is $" + playerMoney);      
//   }

// }

// alert("You lose!")


