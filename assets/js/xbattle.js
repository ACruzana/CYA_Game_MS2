/* Battle Scene Logic File */

const swordHitSound = document.getElementById("sword-hit-sound"); //Sound Effects for battle
const swordParrySound = document.getElementById("sword-parry-sound");
const gunSound = document.getElementById("gun-sound");
const battleText = document.getElementById("battleText"); //Text imputs at battle

/* Battle Option Execution */

function actionResult(action) { //Output of each battle action
  const opponentMoves = ["swordAttack", "pistolAttack", "swordDefend", "pistolDefend"]; //Opponent random move pool
  let opponentRng = Math.floor(Math.random() * 4);
  let counterAction = opponentMoves[opponentRng];

  if (action === "swordAttack") { //Sword Att vs Opp
    if (counterAction === "swordAttack") {
      swordHitSound.play();
      battleText.innerText = "You both swing your blades, you both get hit, but you are both weaker now...";
    } else if (counterAction === "pistolAttack") {
      swordHitSound.play();
      gunSound.play();    
      battleText.innerText = "You lunge forward with your sword and hit him but you also receive a gun shot!!";
    } else if (counterAction === "swordDefend") {
      swordParrySound.play();
      battleText.innerText = "You swing your sword, but he masterfully parries the attack rejecting it";
    } else {
      swordHitSound.play();
      battleText.innerText = "You lunge forward with your sword and hit him as he tried to strafe and evade";
    }
  } else if (action === "pistolAttack") { //Pistol Att vs Opp
    if (counterAction === "swordAttack") {
      swordHitSound.play();
      gunSound.play();    
      battleText.innerText = "You make use of your flintlock as he lunges forward to reach you with his sword";
    } else if (counterAction === "pistolAttack") {
      gunSound.play();    
      gunSound.play();    
      battleText.innerText = "You both shot your guns, you both get hit, but you are both weaker now...";
    } else if (counterAction === "swordDefend") {
      gunSound.play();    
      battleText.innerText = "He really tried to parry a gun bullet?!? Definitively that did not work";
    } else {
      gunSound.play();    
      battleText.innerText = "You shot your flintlock, but he strafed swiftly and evaded the shot";
    }
  } else if (action === "swordDefend") { //Sword Def vs Opp
    if (counterAction === "swordAttack") {
      swordParrySound.play();
      battleText.innerText = "He swings his sword, but you masterfully parry the attack rejecting it";
    } else if (counterAction === "pistolAttack") {
      gunSound.play();    
      battleText.innerText = "You really tried to parry a gun bullet?!? Definitively that did not work";
    } else if (counterAction === "swordDefend") {
      battleText.innerText = "You are both keeping a defensive stance with the sword, the crowd gets nervous...";
    } else {
      battleText.innerText = "You keep your sword up, he keeps strafe jumping, a duel can't get more ridiculous...";
    }
  } else {
    if (counterAction === "swordAttack") { //Pistol Def vs Opp
      swordHitSound.play();
      battleText.innerText = "You try to strafe and evade, but he lunges forward with his sword and hits you";
    } else if (counterAction === "pistolAttack") {
      gunSound.play();    
      battleText.innerText = "He shot at you with his flintlock, but you strafed swiftly and evaded the shot";
    } else if (counterAction === "swordDefend") {
      battleText.innerText = "You are strafe jumping, he keeps his sword up, a duel can't get more ridiculous...";
    } else {
      battleText.innerText = "You are both strafing to the side in circles... Funny, but this could never end...";
    }
  }
}

/* Battle Option Processing */

function battleOption(option) {
  const actionTaken = option.action;
  return actionResult(actionTaken);
}

/* Main Battle Function */

function battle(sceneNumber) {
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

  /* win showScene(78);*/ //future returns
  /* lose showScene(79);*/
}
