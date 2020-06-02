/* jshint esversion: 6 */ /*jshint jquery: true */ /*jshint node: true */ /* jshint browser: true */ /* eslint-env es6 */ /* eslint-env jquery */ /* eslint-env browser */ /* eslint no-console: 0 */


/* Variables Set (screen/commands) */
const screenElem = document.getElementById("screen");
const commandsElem = document.getElementById("commands");

/* Main function */
function game() {
  showScene(0);
}

/* Setting scene on interface -Control function- */
function showScene(sceneNumber) {
  const scene = scenes.find(scene => scene.id === sceneNumber); //Access our object
  
  /* Screen */
  
  const bgSrc = '"'+scene.background+'"';
  const bgUrl = 'url('+bgSrc+')';
  $(screenElem).css({ "background-image": bgUrl }); //Put new scene background
  screenElem.innerText = scene.text; //Screen access test, change to image eventually
  
  /* Commands */
  
  while (commandsElem.firstChild) {
    commandsElem.removeChild(commandsElem.firstChild);
  } //Remove old option buttons
  
  scene.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    $(btn).addClass("option-btn");
    btn.addEventListener("click", () => chooseOption(option));
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

/* Game API (scenes) */
const scenes = [
  {
    id: 0, //Home Screen
    text: "id0 on going",
    background: "/assets/images/1.png",
    options: [

    ]
  },
  {
    id: 1, //Scene One - no choice
    text: "id1 on going",
    options: [
      {
        text: "next1",
        nextScene: 2
      },
      {
        text: "next1",
        nextScene: 2
      },
      {
        text: "-",
        nextScene: 1
      },
      {
        text: "-",
        nextScene: 1
      }
    ]
  },
  {
    id: 2, //Scene Two - first choice
    text: "id2 on going",
    options: [
      {
        text: "back",
        nextScene: 1
      },
      {
        text: "back",
        nextScene: 1
      },
      {
        text: "stay",
        nextScene: 2
      },
      {
        text: "restart",
        nextScene: 0
      }
    ]
  }
];

/* Call the function to start game */
$(document).ready(game());
