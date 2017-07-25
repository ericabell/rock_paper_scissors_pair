const throws = ['rock', 'paper', 'scissors'];

// Variables
const computer = throws[Math.floor(Math.random()*throws.length)];
let me = throws[Math.floor(Math.random()*throws.length)];

console.log("Computer throws: " + computer);
console.log("You threw: " + me);

// rock beats scisssors
// paper beats rock
// scissors beats paper

if( computer === 'rock' && me === 'scissors' ){
  console.log("Computer wins!");
}

else if( computer === 'paper' && me === 'rock' ){
  console.log("Computer wins!");
}

else if( computer === 'scissors' && me === 'paper' ){
  console.log("Computer wins!");
}

else if( me === 'rock' && computer === 'scissors' ){
  console.log("I win!");
}

else if( me === 'paper' && computer === 'rock' ){
  console.log("I win!");
}

else if( me === 'scissors' && computer === 'paper' ){
  console.log("I win!");
}

else{
  console.log("Tie");
}
