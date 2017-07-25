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

  // Variables
  const computer_choice = Math.floor(Math.random()*throws.length);
  // const me_choice = Math.floor(Math.random()*throws.length);
  // get the user's choice from the radio box instead of random
  const me_choice = document.forms[0].elements['choice'].value;

  const computer = throws[computer_choice];
  let me = throws[me_choice];

  console.log("Computer throws: " + computer);
  console.log("You threw: " + me);

  // grab element by id for me and computer
  var image_me = document.getElementById('me');
  var image_computer = document.getElementById('computer');
  var image_winner = document.getElementById('winner');

  image_me.style.backgroundImage = image_urls[me_choice];
  image_computer.style.backgroundImage = image_urls[computer_choice];
  // image_me.innerHTML = "Me: " + me;
  // image_computer.innerHTML = "Computer: " + computer;

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
