const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".moles");
const countDownBoard = document.querySelector(".countdown");
const startButton = dovument.querySelector("startButton");

let lastHole;
let timeUp = false;
let timeLimit = 20000;
let score = 0;
let countDownBoard;