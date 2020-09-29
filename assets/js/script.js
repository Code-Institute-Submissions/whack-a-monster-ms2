const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const countDownBoard = document.querySelector(".countdown");
const startButton = document.querySelector(".startButton");
const audioButton = document.getElementById("audioButton");

let lastHole;
let timeUp = false;
let timeLimit = 30000;
let score = 0;
let countdown;



// Game Functions
function pickRandomHole(holes){
    const randomHole = Math.floor(Math.random()*holes.length);
    const hole = holes[randomHole];
    if (hole === lastHole){
        return pickRandomHole(holes);
    }
    lastHole = hole;
    return hole;
}
function popOut(){
    const time = Math.random() * 1300 + 400;
    const hole = pickRandomHole(holes);
    hole.classList.add("up");
    setTimeout(function(){
        hole.classList.remove("up");
        if (!timeUp) popOut();
    }, time);
}

var gameAudio = new Audio('assets/music/BeatThree.mp3');

function startGame(){
    gameAudio.play();
    countdown = timeLimit/1000;
    scoreBoard.textContent = 0;
    scoreBoard.style.display = "block";
    startButton.style.display = "none";
    countDownBoard.textContent = countdown;
    timeUp = false;
    score = 0;
    popOut();
    setTimeout(function(){
        timeUp = true;
    }, timeLimit);

// Countdown 30s

    let startCountdown = setInterval(function(){
        countdown -= 1;
        countDownBoard.textContent = countdown;
        if (countdown < 0) {
            countdown = 0;
            clearInterval(startCountdown);
            countDownBoard.textContent = "Times UP!!!";
            startButton.textContent = "RESTART GAME!";
            startButton.style.display = "block";

        }
    }, 1000);
}
startButton.addEventListener("click", startGame);

// Whack function with sprites
var smack = new Audio('assets/music/smack1.mp3');

function whack(e){
    debugger;
    smack.play();
    score++;
    if ( score % 1 === 0) { 
    countdown += 15;
    }
    this.style.backgroundImage = "url(assets/img/char2.png)";
    this.style.pointerEvent = "none";
    setTimeout(() => {
        this.style.backgroundImage = "url(assets/img/char1.png)";
        this.style.pointerEvent = "all";
    }, 800);
    scoreBoard.textContent = score;


}
moles.forEach (mole => mole.addEventListener("click", whack));

// Mute audio function

function switchSound(audio){
    audio.muted = !audio.muted;
}

audioButton.addEventListener("click",  function() {
    switchSound(gameAudio).loop;
});
