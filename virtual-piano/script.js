'use strict';

const btnFullscreen = document.querySelector('.fullscreen');
const pianoKeys = document.querySelectorAll('.piano-key');
const piano = document.querySelector('.piano');
const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes');
const pianoLetter = document.querySelectorAll('.piano-letter')

// фулскрин ====================
btnFullscreen.addEventListener('click', () => {
  document.documentElement.requestFullscreen();
  if (document.documentElement.requestFullscreen){
    document.exitFullscreen();
  }
});
// ==============================

// переключалки букв и нот =========================
btnLetters.addEventListener('click', function () {
  btnLetters.classList.add('btn-active');
  btnNotes.classList.remove('btn-active');
  pianoLetter.forEach(function (item) {
    item.style.display = 'block';
  })
})

btnNotes.addEventListener('click', function () {
  btnNotes.classList.add('btn-active');
  btnLetters.classList.remove('btn-active');
  pianoLetter.forEach(function (item) {
    item.style.display = 'none';
  })
})
// ==============================



window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`),
        pianoKey = document.querySelector(`.piano-key[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  pianoKey.classList.add('piano-key-active');
});

function deleteTrnasition(e) {
  this.classList.remove('piano-key-active');
}

pianoKeys.forEach((e) => {
  e.addEventListener('transitionend', deleteTrnasition);
});


piano.addEventListener('mousedown', (event) => {
    event.target.classList.add('piano-key-active-mouse');
    const audio = document.querySelectorAll('audio');
    const value = event.target.id;
    switch (value) {
      case 'c':
        audio[0].currentTime = 0;
        audio[0].play();
        break;
      case 'd':
        audio[1].currentTime = 0;
        audio[1].play();
        break;
      case 'e':
        audio[2].currentTime = 0;
        audio[2].play();
        break;
      case 'f':
        audio[3].currentTime = 0;
        audio[3].play();
        break;
      case 'g':
        audio[4].currentTime = 0;
        audio[4].play();
        break;
      case 'a':
        audio[5].currentTime = 0;
        audio[5].play();
        break;
      case 'b':
        audio[6].currentTime = 0;
        audio[6].play();
        break;
      case 'c♯':
        audio[7].currentTime = 0;
        audio[7].play();
        break;
      case 'd♯':
        audio[8].currentTime = 0;
        audio[8].play();
        break;
      case 'f♯':
        audio[9].currentTime = 0;
        audio[9].play();
        break;
      case 'g♯':
        audio[10].currentTime = 0;
        audio[10].play();
        break;
      case 'a♯':
        audio[11].currentTime = 0;
        audio[11].play();
        break;
    }
  })

piano.addEventListener('mouseup', (event) => {
  event.target.classList.remove('piano-key-active-mouse');
})


