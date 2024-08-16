const form = document.querySelector('form');
let number = parseInt((Math.random() * 100).toFixed(0));
remaining_guesses = parseInt(document.querySelector('.lastResult').innerHTML);
let prev_guess = document.querySelector('.guesses');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let guess = parseInt(document.querySelector('.guessField').value);
  if (guess === number) {
    document.querySelector('.lowOrHi').innerHTML =
      'You have guessed the correct number HOORAY! Now the Number will be resetted';
    prev_guess.innerHTML = '';
    remaining_guesses = 10;
    number = parseInt((Math.random() * 100).toFixed(0));
  } else if (remaining_guesses === 0) {
    document.querySelector('.lowOrHi').innerHTML =
      'GAME OVER The number has been resetted';
    prev_guess.innerHTML = '';
    remaining_guesses = 10;
    number = parseInt((Math.random() * 100).toFixed(0));
  } else if (guess !== number) {
    document.querySelector('.lastResult').innerHTML = `${--remaining_guesses}`;
    prev_guess.innerHTML += `${guess}, `;
    if (guess > number) {
      document.querySelector('.lowOrHi').innerHTML = 'Guess a little lower';
    } else if (guess < number) {
      document.querySelector('.lowOrHi').innerHTML = 'Guess a little Higher';
    }
  }
});

