$(function () {
    const $rock = $('#rock');
    const $paper = $('#paper');
    const $scissors = $('#scissors');
    const $playerImg = $('#img-player');
    const $botImg = $('#img-bot');
    const $winnerText = $('#winner');
    let playerWins = 0;
    let botWins = 0;

    $rock.on('click', function () {
        setPlayerImage('img/1.png');
        rndImgGenerator();
    });

    $paper.on('click', function () {
        setPlayerImage('img/2.png');
        rndImgGenerator();
    });

    $scissors.on('click', function () {
        setPlayerImage('img/3.png');
        rndImgGenerator();
    });

    function setPlayerImage(imageSrc) {
        $playerImg.attr('src', imageSrc);
    }

    function rndImgGenerator() {
        const rndNumber = Math.floor(Math.random() * 3 + 1);
        const imgSrc = `img/${rndNumber}.png`;
        $botImg.attr('src', imgSrc);
        checkWinner();
    }

    function checkWinner() {
        const player = +$playerImg.attr('src').match(/\d+/g)[0];
        const bot = +$botImg.attr('src').match(/\d+/g)[0];

        if (player === bot) {
            return;
        }

        if (
            (player === 1 && bot === 3) ||
            (player === 2 && bot === 1) ||
            (player === 3 && bot === 2)
        ) {
            playerWins++;
        } else {
            botWins++;
        }

        $('#playerCount').text(`Player: Wins ${playerWins}`);
        $('#botCount').text(`Bot: Wins ${botWins}`);
        $winnerText.text(`Current Winner: ${playerWins === botWins ? 'None' : playerWins > botWins ? 'Player' : 'Bot'}`);
    }
});