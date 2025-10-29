import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");

let indexImg;
let winSound = new Audio("Ayrton-Senna-Tema-da-vitoria_-.mp3"); 
let bgMusic = new Audio("(Cartoon Inspired) Sleepy_Rest Playlist for the Slow Days [TZBu8n9Z8EM].mp3"); 

bgMusic.loop = true; // toca em loop
bgMusic.volume = 0.3; // volume inicial (0 a 1)

btnNew.onclick = () => init();

init();

function init() {
  
  winSound.pause();
  winSound.currentTime = 0;

  
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {
      console.log("O navegador bloqueou o autoplay — música começará quando o usuário clicar.");
    });
  }

  indexImg = 1;
  img.src = `img1.png`;

  generateGuessSection();
  generateButtons();
}

function generateGuessSection() {
  contentGuessWord.textContent = "";

  const { word, clue } = getWord();
  const wordWithoutAccent = word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(wordWithoutAccent).forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = "_";
    span.setAttribute("word", letter.toUpperCase());
    contentGuessWord.appendChild(span);
  });

  contentClue.textContent = `Dica: ${clue}`;
}

function wrongAnswer() {
  indexImg++;
  img.src = `img${indexImg}.png`;

  if (indexImg === 7) {
    setTimeout(() => {
      alert("Perdeu :/");
      init();
    }, 100);
  }
}

function verifyLetter(letter) {
  const arr = document.querySelectorAll(`[word="${letter}"]`);

  if (!arr.length) wrongAnswer();

  arr.forEach((e) => {
    e.textContent = letter;
  });

  const spans = document.querySelectorAll(`.guess-word span`);
  const won = !Array.from(spans).find((span) => span.textContent === "_");

  if (won) {
    
    bgMusic.pause();

    
    winSound.currentTime = 0;
    winSound.play();

    setTimeout(() => {
      alert("Ganhou!!!");
      
      bgMusic.play();
      init();
    }, 100);
  }
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verifyLetter(letter);
    };

    contentBtns.appendChild(btn);
  }
}
