var win = false;

function moveCar(el) {
    if (el.key == 'k') {
        const avtivePoistion = document.querySelector('#player1-race .active');
        avtivePoistion.classList.remove('active');
        avtivePoistion.nextElementSibling.classList.add('active')

        if (avtivePoistion.nextElementSibling.classList.contains('finish')) {
            alert('Player 1 Won!')
            win = confirm('another game?');
            avtivePoistion.classList.remove('active');
        }
    } else if (el.key == 's') {
        const avtivePoistion = document.querySelector('#player2-race .active');
        avtivePoistion.classList.remove('active');
        avtivePoistion.nextElementSibling.classList.add('active')

        if (avtivePoistion.nextElementSibling.classList.contains('finish')) {
            alert('Player 2 Won!')
            win = confirm('another game?');
            avtivePoistion.nextElementSibling.classList.remove('active');
        }
    }

    if (win) {
        const firstPosition1 = document.querySelector('#player1-race');
        const firstPosition2 = document.querySelector('#player2-race');

        // console.log(firstPosition1.children);
        [...firstPosition1.children].forEach((el) => el.classList.remove('active'));
        [...firstPosition2.children].forEach((el) => el.classList.remove('active'));

        firstPosition1.children[0].classList.add('active');
        firstPosition2.children[0].classList.add('active');
        win = false;
    }
}


document.body.addEventListener('keypress', moveCar)