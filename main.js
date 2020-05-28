//** The POINT OF EACH EXERCISE HERE IS USING CLOSURES */
//1
// Write a simple closure that takes a first Name on the outer function
// It takes a lastName on the innerFunction
// Create a private variable called job with the value programmer
// Expected non-hardCoded output: Hi, my name is Jeff Daniels and I am a programmer
// Use a greeting instance and then call it to get your output






//2
// Write a function called withdraw where each time you withdraw there is a transaction cost of 20 dollars
// Your bank account balance is 500 dollars. It is private
// The closure returns the balance
// If I want to make another withdrawal I should be able to withdraw from the current balance which should now be less than 500 dollars
// If the amount is below the withdrawal amount plus transactionCost send a log 'Cannot Make Withdrawal'






//3
// Using closure
// Write a function multiply that takes a number
// When an instance is created I should be able to always multiply by the number that is passed in the instance






//4
// Create a gamer function that takes hitPoints and a name
// Use closure
// There should be a function to getMoreHitPoints it adds a random number between 1 and 10 to the hit points and returns a log that says `Rando, You have 10 hit points` if the value is 10
// There should be a function  takeHit that reduces the points by the number it is given.
// In other words, if I have 10 hit points and takeHit is run with 2 I should have 8 hit points left
// If the number of hit points reaches 0 a message should be logged. something like 'Rando, You are dead'
// No function should be able to be run if the gamer is dead. If I try to call the function it should say something like 'Sorry Rando, you are dead, restart game to play again.'
// Create a function to reset the game based on the original hit points
// Info should persist with each player instance
// All pertinent functions should be available to call on the instance but variables if they can be private should be


//** The POINT OF EACH EXERCISE HERE IS USING CLOSURES */
//1
// Write a simple closure that takes a first Name on the outer function
// It takes a lastName on the innerFunction
// Create a private variable called job with the value programmer
// Expected non-hardCoded output: Hi, my name is Jeff Daniels and I am a programmer
// Use a greeting instance and then call it to get your output

function names(firstName) {
    let job = "programmer";

    return function innerFunction(lastName) {
            return `Hi, my name is ${firstName} ${lastName} and I am a ${job}`
    };
}

console.log(names("Jeff")("Daniels"));


//2
// Write a function called withdraw where each time you withdraw there is a transaction cost of 20 dollars
// Your bank account balance is 500 dollars. It is private
// The closure returns the balance
// If I want to make another withdrawal I should be able to withdraw from the current balance which should now be less than 500 dollars
// If the amount is below the withdrawal amount plus transactionCost send a log 'Cannot Make Withdrawal'
function bank() {
    let bal = 500;
    let transactionCost = 20;

    return {
        balance: function() {
            return bal;
        },

        withdraw: function(amount) {
            if(bal - amount - transactionCost < 0) {
                return "Cannot Make Withdrawal";
            } else {
                bal -= amount + transactionCost;
                return `Withdrew ${amount} plus a ${transactionCost} fee.  Your new balance is ${bal}.`;
            }
        }
    }
}

let myAccount = bank();

console.log(`My balance is ${myAccount.balance()}`);
let amountToWithdraw = 80;
console.log(`Withdrawing ${amountToWithdraw}`);
myAccount.withdraw(amountToWithdraw);
console.log(`My new balance is now ${myAccount.balance()}`);

//3
// Using closure
// Write a function multiply that takes a number
// When an instance is created I should be able to always multiply by the number that is passed in the instance


//4
// Create a gamer function that takes hitPoints and a name
// Use closure
// There should be a function to getMoreHitPoints it adds a random number between 1 and 10 to the hit points and returns a log that says `Rando, You have 10 hit points` if the value is 10
// There should be a function takeHit that reduces the points by the number it is given.
// In other words, if I have 10 hit points and takeHit is run with 2 I should have 8 hit points left
// If the number of hit points reaches 0 a message should be logged. something like 'Rando, You are dead'
// No function should be able to be run if the gamer is dead. If I try to call the function it should say something like 'Sorry Rando, you are dead, restart game to play again.'
// Create a function to reset the game based on the original hit points
// Info should persist with each player instance
// All pertinent functions should be available to call on the instance but variables if they can be private should be

