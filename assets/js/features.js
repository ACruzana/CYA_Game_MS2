/* jshint esversion: 6 */ /*jshint jquery: true */ /*jshint node: true */ /* jshint browser: true */ /* eslint-env es6 */ /* eslint-env jquery */ /* eslint-env browser */ /* eslint no-console: 0 */

const buttonSound = document.getElementById("button-sound");
const ambientMusic = document.getElementById("ambient-music");

function soundOn () {
  buttonSound.muted = false;
  buttonSound.volume = 0.8;
}

function soundOff () {
  buttonSound.muted = true;
}

function musicOn () {
  ambientMusic.play();
  ambientMusic.volume = 0.8;
}

function musicOff () {
  ambientMusic.pause();
}

function lightOn () {
  $("body").css("background", "url(/assets/images/site-bg.jpg) repeat top");
}

function darkOn () {
  $("body").css("background", "url(/assets/images/site-bg-dark.jpg) repeat top");
}