const startScreen = document.querySelector('.start-screen');
const clouds = document.querySelector('.clouds');
const dragao = document.querySelector('.dragao');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score');
let score = 0;
let pointScored = false;

dragao.classList.add('oculto');
clouds.classList.add('oculto');
pipe.classList.add('oculto');


const startGame = () => {
    startScreen.style.display = 'none'; // Oculta a tela inicial
    clouds.classList.remove('oculto')
    dragao.classList.remove('oculto')
    pipe.classList.remove('oculto');
    score = 0; // Reinicia a pontuação
    scoreElement.innerText = `Score: ${score}`; // Atualiza a pontuação na tela
    loopGame(); // Chama a função do loop do jogo
};

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft
    const dragaoPosition = dragao.offsetLeft

    if (pipePosition < 145 && pipePosition > 0 && marioPosition < 90) {
       
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        dragao.style.animation = 'none';
        dragao.style.left = `${dragaoPosition}px`;

       
        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
    

        scoreElement.innerText = `Score: ${score}`;

        clearInterval(loop);

        } 
        else if (pipePosition < 0 && !pointScored) {
          score++;
          scoreElement.innerText = `Score: ${score}`;
          pointScored = true;
        }
        else if (pipePosition >= 0) {
        pointScored = false;
        }
 
}, 10)

document.addEventListener('keydown', (event) => {
    if (startScreen.style.display !== 'none') {
        startGame(); // Inicia o jogo ao pressionar qualquer tecla
    } else {
        jump(); // Faz o Mario pular
    }
});

