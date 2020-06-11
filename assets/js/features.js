/* Game Optional Features */

const buttonSound = document.getElementById("button-sound");
const ambientMusic = document.getElementById("ambient-music");

function soundOn() {
  swordHitSound.muted = false;
  gunSound.muted = false;
  swordParrySound.muted = false;
  buttonSound.muted = false;
  $("#soundOn").addClass("underlined");
  $("#soundOff").removeClass("underlined");
}

function soundOff() {
  swordHitSound.muted = true;
  gunSound.muted = true;
  swordParrySound.muted = true;
  buttonSound.muted = true;
  $("#soundOff").addClass("underlined");
  $("#soundOn").removeClass("underlined");
}

function musicOn() {
  ambientMusic.play();
  ambientMusic.volume = 0.2;
  ambientMusic.loop = true;
  $("#musicOn").addClass("underlined");
  $("#musicOff").removeClass("underlined");
}

function musicOff() {
  ambientMusic.pause();
  $("#musicOff").addClass("underlined");
  $("#musicOn").removeClass("underlined");
}

function lightOn() {
  $("body").css('background', 'url("assets/images/site-bg.jpg") repeat top');
  $("#lightOn").addClass("underlined");
  $("#darkOn").removeClass("underlined");
}

function darkOn() {
  $("body").css('background', 'url("assets/images/site-bg-dark.jpg") repeat top');
  $("#darkOn").addClass("underlined");
  $("#lightOn").removeClass("underlined");
}
