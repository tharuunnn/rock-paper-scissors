let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function computerMove(){
  let randomValue = Math.random();
  if(randomValue>0 && randomValue<1/3){
    computersMove='Rock';
  }
  else if(randomValue>1/3 && randomValue<2/3){
    computersMove='Paper';
  }
  else if(randomValue>2/3 && randomValue<1){
    computersMove='Scissors';
  }
  return computersMove;
}

function playGame(playersMove){
  const computersMove = computerMove();
  let result='';
  if(playersMove === 'Rock'){
    if(computersMove === 'Rock'){
      result='Tie.';
    }
    else if(computersMove === 'Paper'){
      result='You lose.';
    }
    else if(computersMove === 'Scissors'){
      result='You win.';
    }
  }

  if(playersMove === 'Paper'){
    if(computersMove === 'Rock'){
      result='You win.';
    }
    else if(computersMove === 'Paper'){
      result='Tie.';
    }
    else if(computersMove === 'Scissors'){
      result='You lose.';
    }
  }

  if(playersMove === 'Scissors'){
    if(computersMove === 'Rock'){
      result='You lose.';
    }
    else if(computersMove === 'Paper'){
      result='You win.';
    }
    else if(computersMove === 'Scissors'){
      result='Tie.';
    }
  }

  if(result === 'You win.'){
    score.wins+=1;
  }
  else if(result === 'You lose.'){
    score.losses+=1;
  }
  else if(result === 'Tie.'){
    score.ties+=1;
  }

  document.querySelector('.result').innerHTML=`${result}`;

  document.querySelector('.result-info').innerHTML=`You <img src="/images/${playersMove}-emoji.png" class="emoji" />  <img src="/images/${computersMove}-emoji.png" class="emoji" /> Computer`;

  localStorage.setItem('score',JSON.stringify(score));

  updateScore();

}

function updateScore(){
document.querySelector('.result-stats').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties};`
}
