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
  })
piano.addEventListener('mouseup', (event) => {
  event.target.classList.remove('piano-key-active-mouse');
})