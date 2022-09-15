'use strict';

console.log('hey world heyyyy!');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! Please guess yes or no to the following questions.`);

let question0neGuess = prompt('Do you think I like to Travel?').toLocaleLowerCase();

if(question0neGuess === 'y' || question0neGuess === 'yes'){
alert('You are correct!');
} else if( question0neGuess === 'n' || question0neGuess === 'no'){
alert('Sorry, you are wrong!');
}

let questionTwoGuess = prompt('Do you think I like Pizza?').toLocaleLowerCase();

if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
alert('You are correct!');
} else if( questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
alert('No, but good try!');
}

let questionThreeGuess = prompt('Do you think I am the only child?').toLocaleLowerCase();

if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
alert('You are correct!');
} else if( questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
alert('Sorry, maybe in another dimension!');
}

let questionFourGuess = prompt('Do you think I am Nigerian?').toLocaleLowerCase();

if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
alert('Great guess!');
} else if( questionFourGuess === 'n' || questionFourGuess === 'no'){
alert('Sorry, I am full blooded Nigerian!');
}


let questionFiveGuess = prompt('Do you think I like rap music?').toLocaleLowerCase();

if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
alert('You are correct!, I listen to rap music everyday!');
} else if( questionFiveGuess === 'n' || questionFiveGuess === 'no'){
alert('Sorry, its my jam!');
}


//Guessinng Game 
let attempts = 4;
let myNum = 6;

while(attempts>0){
  let userGuess = parseInt (prompt('Guess how many countries I have traveled to!'));

  if(userGuess < myNum){
    alert('That was too low...Try Again!');
    attempts--;
  }  else if (userGuess > myNum){
    alert('That was too high...Try Again!');
    attempts--;
  } else if (userGuess === myNum){
    alert('Wow! Great guess!');
    break;
  }
}


//Top 10 Destinations
let destinations =['Mexico','Texas','New York','Jamaica','California','London','Toronto','Paris'];
let attempts2 = 6;

for(let i = 0; i < destinations.length; i++){
  let myGuess = parseInt (prompt('Guess my favorite country!'));

  if (destinations[i] === 'Mexico'){
    alert (`Nice! You must be a code reader!`);
    attempts2--;
  } else if (
  console. log(`${destinations[i]}`))
  alert('No,thats not it!'); 
  attempts2--;
  break;
};






















alert(`Thanks for playing ${visitorName}!`);