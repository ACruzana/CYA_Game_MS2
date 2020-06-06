/* jshint esversion: 6 */ /*jshint jquery: true */ /*jshint node: true */ /* jshint browser: true */ /* eslint-env es6 */ /* eslint-env jquery */ /* eslint-env browser */ /* eslint no-console: 0 */


/* Variables Set (screen/commands) */
const screenElem = document.getElementById("screen");
const commandsElem = document.getElementById("commands");
const infoText = document.getElementById("infoText");
const bubbleText = document.getElementById("bubbleText");

/* Main function */
function game() {
  showScene(0);
}

/* Setting scene on interface -Control function- */
function showScene(sceneNumber) {
  const scene = scenes.find(scene => scene.id === sceneNumber); //Access the object at scenes.js
  
  /* Screen */

  const bgSrc = "'" + scene.background + "'";
  const bgUrl = "url(" + bgSrc + ")";
  $(screenElem).css({
    "background-image": bgUrl
  }); //Put new scene background

  infoText.innerText = scene.text; //Screen text info type
  bubbleText.innerText = scene.dialog; //Screen text dialog type

  /* Commands */

  while (commandsElem.firstChild) {
    commandsElem.removeChild(commandsElem.firstChild);
  } //Remove old option buttons

  scene.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    $(btn).addClass("option-btn");
    btn.addEventListener("click", () => {
      chooseOption(option);
      if (option.text.length > 2) {
        buttonSound.play();
      }
    });
    commandsElem.appendChild(btn);
  }); //Create new option buttons
}

/* Changing scene -Trigger function- */
function chooseOption(option) {
  const nextSceneNumber = option.nextScene;
  if (nextSceneNumber === 0) {
    return game(); //Restart option
  } else {
    showScene(nextSceneNumber); //Following scene
  }
}

/* Call the function to start game */
$(document).ready(game());
