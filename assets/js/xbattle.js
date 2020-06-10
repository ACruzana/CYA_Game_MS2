/* Battle Scene Logic File */

const swordHitSound = document.getElementById("sword-hit-sound"); //Sound Effects
const swordParrySound = document.getElementById("sword-parry-sound");
const gunSound = document.getElementById("gun-sound");
const battleText = document.getElementById("battleText"); //Text imputs

/* Battle Option Execution */

function actionResult(action) { //How boss reacts toDo
  if (action === "swordAttack") {
      console.log("you attacked with the sword")
      } else {
        console.log("you did not attack with the sword")
      }
}

/* Battle Option Execution */

function battleOption(option) {
  console.log("battleOption on going");
  const actionTaken = option.action;
  console.log(actionTaken);
  return actionResult(actionTaken);
}

/* Main Battle Function */

function battle(sceneNumber) {
  console.log("battle on going");
  const scene = scenes.find(scene => scene.id === sceneNumber); //Access the object at scenes.js

  bubbleText.innerText = ""; //Clear previous texts
  /* --- Commands --- */

  while (commandsElem.firstChild) {
    commandsElem.removeChild(commandsElem.firstChild);
  } //Remove old option buttons

  scene.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    $(btn).addClass("option-btn");
    btn.addEventListener("click", () => {
      battleOption(option); //Choose batlle option and process it
    });
    commandsElem.appendChild(btn);
  }); //Create new option buttons
      
  /* --- Screen --- */

  $(screenElem).css({
    "background": "red"
  }); // toDo visually

  battleText.innerText = scene.text; //Screen text info type toDo
  
  /* win showScene(78);*/ //future returns
  /* lose showScene(79);*/
}