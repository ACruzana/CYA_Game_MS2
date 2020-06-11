/* Battle Scene Logic File */

const swordHitSound = document.getElementById("sword-hit-sound"); //Sound Effects for battle
const swordParrySound = document.getElementById("sword-parry-sound");
const gunSound = document.getElementById("gun-sound");
const battleText = document.getElementById("battleText"); //Text imputs at battle

/* Battle Option Execution */

function actionResult(action) { //Output of each battle action
  const opponentMoves = ["swordAttack", "pistolAttack", "swordDefend", "pistolDefend"]; //Opponent random move
  let opponentRng = Math.floor(Math.random() * 4);
  let counterAction = opponentMoves[opponentRng];

  if (action === "swordAttack") { //Sword Att vs Opp
    if (counterAction === "swordAttack") {
      swordHitSound.play();
      console.log("you attacked with the sword and boss also used the sword");
    } else if (counterAction === "pistolAttack") {
      swordHitSound.play();
      gunSound.play();    
      console.log("you attacked with the sword and boss used the pistol");
    } else if (counterAction === "swordDefend") {
      swordParrySound.play();
      console.log("you attacked with the sword but boss parried");
    } else {
      swordHitSound.play();
      console.log("you attacked with the sword, boss tried to evade but failed");
    }
  } else if (action === "pistolAttack") { //Pistol Att vs Opp
    if (counterAction === "swordAttack") {
      swordHitSound.play();
      gunSound.play();    
      console.log("you shot your flintlock but boss used the sword");
    } else if (counterAction === "pistolAttack") {
      gunSound.play();    
      gunSound.play();    
      console.log("you shot your flintlock and boss also used the pistol");
    } else if (counterAction === "swordDefend") {
      gunSound.play();    
      console.log("you shot your flintlock, boss tried to parry but failed");
    } else {
      gunSound.play();    
      console.log("you shot your flintlock boss evaded");
    }
  } else if (action === "swordDefend") { //Sword Def vs Opp
    if (counterAction === "swordAttack") {
      swordParrySound.play();
      console.log("you parried the boss attack with the sword");
    } else if (counterAction === "pistolAttack") {
      gunSound.play();    
      console.log("you tried parrying but boss also used the pistol");
    } else if (counterAction === "swordDefend") {
      console.log("you both look like fools parrying for nothing");
    } else {
      console.log("your are parrying and boss is evading");
    }
  } else {
    if (counterAction === "swordAttack") { //Pistol Def vs Opp
      swordHitSound.play();
      console.log("you tried evading but the boss attacked with the sword");
    } else if (counterAction === "pistolAttack") {
      gunSound.play();    
      console.log("you evaded that shot, boss used the pistol");
    } else if (counterAction === "swordDefend") {
      console.log("you are evading, boss is parrying");
    } else {
      console.log("your are both strafing like mad men");
    }
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
