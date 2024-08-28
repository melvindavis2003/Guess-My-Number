'use strict';

// BUTTON FUNCITONALITY

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Wrong Answer

  if (!guess) {
    displayMessage('❌ Wrong Answer!');
  }

  // Correct Answer
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Answer!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Answer is Higher
  else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('📈 Too High!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You Lost The Game!';
    }
  }

  // Answer is Lower
  else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You Lost The Game!';
    }
  }
});

// AGAIN BUTTON FUNCTIONALITY

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
