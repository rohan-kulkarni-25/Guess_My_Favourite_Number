const chanceEl = document.querySelector('.chance');
const checkEl = document.querySelector('.btn_check');

const guessEl = Number(document.querySelector('.guess').nodeValue);

const number = Math.trunc(Math.random() * 5) + 1;

document.querySelector('.btn_restart').classList.add('hidden');
let chances = 3;
chanceEl.textContent = `Chances Remaining :- ${chances}`;




document.querySelector('.btn_check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (guess === 1) {
        document.querySelector('.line1').textContent = `Congrats!!`;
        document.querySelector('.line2').textContent = `YOU WON THE GAME !!`;
        document.querySelector('.chance').classList.add('hidden');
        document.querySelector('.btn_check').classList.add('hidden');
        document.querySelector('.guess').classList.add('hidden');
        document.querySelector('body').classList.add('winner_background')
        document.querySelector('.btn_restart').classList.remove('hidden');
    }
    else if (guess > 5) {
        if (chances > 0) {
            chances = chances - 1;
            chanceEl.textContent = `Chances Remaining :- ${chances}`;
            alert('You have to Enter a Number Between 1 - 5')


        }
        else {
            document.querySelector('.line1').textContent = `Oops !!`;
            document.querySelector('.line2').textContent = `YOU LOST THE GAME !!`;
            document.querySelector('.btn_restart').classList.remove('hidden');
            document.querySelector('.chance').classList.add('hidden');
            document.querySelector('.btn_check').classList.add('hidden');
            document.querySelector('.guess').classList.add('hidden');
            document.querySelector('body').classList.add('lost_background')
        }


    }
    else {

        if (chances > 0) {
            chances = chances - 1;
            chanceEl.textContent = `Chances Remaining :- ${chances}`;
            alert(`Wrong guess you have ${chances} left !`)


        }
        else {
            document.querySelector('.line1').textContent = `Oops !!`;
            document.querySelector('.line2').textContent = `YOU LOST THE GAME !!`;
            document.querySelector('.btn_restart').classList.remove('hidden');
            document.querySelector('.chance').classList.add('hidden');
            document.querySelector('.btn_check').classList.add('hidden');
            document.querySelector('.guess').classList.add('hidden');
            document.querySelector('body').classList.add('lost_background')
        }

    }
});


document.querySelector('.btn_restart').addEventListener('click', function () {
    location.reload();
});