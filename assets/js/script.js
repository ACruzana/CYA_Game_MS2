
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
  
  /* --- Screen --- */

  const bgSrc = "'" + scene.background + "'";
  const bgUrl = "url(" + bgSrc + ")";
  $(screenElem).css({
    "background-image": bgUrl
  }); //Put new scene background

  infoText.innerText = scene.text; //Screen text info type
  bubbleText.innerText = scene.dialog; //Screen text dialog type
  battleText.innerText = ""; //Battle text not present

  /* --- Commands --- */

  while (commandsElem.firstChild) {
    commandsElem.removeChild(commandsElem.firstChild);
  } //Remove old option buttons

  scene.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    $(btn).addClass("option-btn");
    btn.addEventListener("click", () => {
      chooseOption(option); //Select option and process it
      if (option.text.length > 2) {
        buttonSound.play(); //Button effect sound
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
  } else if (nextSceneNumber === 77) {
    return battle(nextSceneNumber); //Battle option
  } else {
    showScene(nextSceneNumber); //Following scene
  }
}

/* Call the main function to start game as the site is loaded */

$(document).ready(game());
