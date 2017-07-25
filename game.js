var app = new Vue({
  el: '#outcome',
  data: {
    me: 0,
    computer: 0
  }
})


function playGame() {
  console.log("Clicked");

  // show the outcomes
  var outcome_div = document.getElementById('outcome');
  outcome_div.style.display = "flex";

  const throws = ['rock', 'paper', 'scissors'];
  const image_urls = ['url(resources/rock.png)', 'url(resources/paper.png)', 'url(resources/scissors.png)', 'url(resources/win.jpeg)', 'url(resources/looser.jpeg)', 'url(resources/tie.jpeg)']

  const rock_img = 0;
  const paper_img = 1;
  const scissors_img = 2;
  const win_img = 3;
  const lose_img = 4;
  const tie_img = 5;

  // Generate random numbers for the throw
  const computer_choice = Math.floor(Math.random()*throws.length);
  const me_choice = document.forms[0].elements['choice'].value;

  // Extract the named choice
  const computer = throws[computer_choice];
  const me = throws[me_choice];

  console.log("Computer throws: " + computer);
  console.log("You threw: " + me);

  // grab element by id for me and computer
  var image_me = document.getElementById('me');
  var image_computer = document.getElementById('computer');
  var image_winner = document.getElementById('winner');

  image_me.style.backgroundImage = image_urls[me_choice];
  image_computer.style.backgroundImage = image_urls[computer_choice];

  // Throws
  // 6.0 Player has the full range of throws to play, as follows:
  //
  // 6.0.1 Rock: wins against scissors, loses to paper and stalemates against itself
  //
  // 6.0.2 Paper wins against Rock, loses to scissors and stalemates against itself
  //
  // 6.0.3 Scissors wins against paper, loses to rock and stalemates against itself

// COMPUTER WINS
  if( computer === 'rock' && me === 'scissors' ){
    // image_winner.innerHTML = "computer wins";
    image_winner.style.backgroundImage = image_urls[lose_img]
    app.computer +=1;
  }

  else if( computer === 'paper' && me === 'rock' ){
    // image_winner.innerHTML = "computer wins";
    image_winner.style.backgroundImage = image_urls[lose_img]
    app.computer +=1;

  }

  else if( computer === 'scissors' && me === 'paper' ){
    // image_winner.innerHTML = "computer wins";
    image_winner.style.backgroundImage = image_urls[lose_img]
    app.computer +=1;

  }

// YOU WIN
  else if( me === 'rock' && computer === 'scissors' ){
    // image_winner.innerHTML = "I win";
    image_winner.style.backgroundImage = image_urls[win_img]
    app.me +=1;

  }

  else if( me === 'paper' && computer === 'rock' ){
    // image_winner.innerHTML = "I win";
    image_winner.style.backgroundImage = image_urls[win_img]
    app.me +=1;

  }

  else if( me === 'scissors' && computer === 'paper' ){
    // image_winner.innerHTML = "I win";
    image_winner.style.backgroundImage = image_urls[win_img]
    app.me +=1;

  }

  else {
    // image_winner.innerHTML = "tie";
    image_winner.style.backgroundImage = image_urls[5]
  }


}
