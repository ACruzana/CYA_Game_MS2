/* Battle Scene Logic File */

const swordHitSound = document.getElementById("sword-hit-sound"); //Sound Effects for battle
const swordParrySound = document.getElementById("sword-parry-sound");
const gunSound = document.getElementById("gun-sound");
const battleText = document.getElementById("battleText"); //Text imputs at battle
let playerHp = 5;
let opponentHp = 6;

/* Is battle over? */

function battleOver(player, opponent) { //Decide if we go back to the story arc or not
  if (player === 0) {
    return showScene(79);
  } else if (opponent === 0) {
    return showScene(78);
  }
  return;
}

/* Battle Option Execution */

function actionResult(action, counter) { //Output of each battle action

  if (action === "swordAttack") { //Sword Att vs Opp
    if (counter === "swordAttack") {
      swordHitSound.play();
      battleText.innerText = "You both swing your blades, you both get hit, but you are both weaker now...";
      playerHp -= 1;
      opponentHp -= 1;
    } else if (counter === "pistolAttack") {
      swordHitSound.play();
      gunSound.play();
      battleText.innerText = "You lunge forward with your sword and hit him but you also receive a gun shot!!";
      playerHp -= 1;
      opponentHp -= 1;
    } else if (counter === "swordDefend") {
      swordParrySound.play();
      battleText.innerText = "You swing your sword, but he masterfully parries the attack rejecting it";
    } else {
      swordHitSound.play();
      battleText.innerText = "You lunge forward with your sword and hit him as he tried to strafe and evade";
      opponentHp -= 1;
    }
  } else if (action === "pistolAttack") { //Pistol Att vs Opp
    if (counter === "swordAttack") {
      swordHitSound.play();
      gunSound.play();
      battleText.innerText = "You make use of your flintlock as he lunges forward to reach you with his sword";
      playerHp -= 1;
      opponentHp -= 1;
    } else if (counter === "pistolAttack") {
      gunSound.play();
      gunSound.play();
      battleText.innerText = "You both shot your guns, you both get hit, but you are both weaker now...";
      playerHp -= 1;
      opponentHp -= 1;
    } else if (counter === "swordDefend") {
      gunSound.play();
      battleText.innerText = "He really tried to parry a gun bullet?!? Definitively that did not work";
      opponentHp -= 1;
    } else {
      gunSound.play();
      battleText.innerText = "You shot your flintlock, but he strafed swiftly and evaded the shot";
    }
  } else if (action === "swordDefend") { //Sword Def vs Opp
    if (counter === "swordAttack") {
      swordParrySound.play();
      battleText.innerText = "He swings his sword, but you masterfully parry the attack rejecting it";
    } else if (counter === "pistolAttack") {
      gunSound.play();
      battleText.innerText = "You really tried to parry a gun bullet?!? Definitively that did not work";
      playerHp -= 1;
    } else if (counter === "swordDefend") {
      battleText.innerText = "You are both keeping a defensive stance with the sword, the crowd gets nervous...";
    } else {
      battleText.innerText = "You keep your sword up, he keeps strafe jumping, a duel can't get more ridiculous...";
    }
  } else {
    if (counter === "swordAttack") { //Pistol Def vs Opp
      swordHitSound.play();
      battleText.innerText = "You try to strafe and evade, but he lunges forward with his sword and hits you";
      playerHp -= 1;
    } else if (counter === "pistolAttack") {
      gunSound.play();
      battleText.innerText = "He shot at you with his flintlock, but you strafed swiftly and evaded the shot";
    } else if (counter === "swordDefend") {
      battleText.innerText = "You are strafe jumping, he keeps his sword up, a duel can't get more ridiculous...";
    } else {
      battleText.innerText = "You are both strafing to the side in circles... Funny, but this could never end...";
    }
  }

  return battleOver(playerHp, opponentHp);
}

/* Battle Option Processing */

function battleOption(option) {
  const actionTaken = option.action; //Player choosen move

  const opponentMoves = ["swordAttack", "pistolAttack", "swordDefend", "pistolDefend"]; //Opponent random move pool
  let opponentRng = Math.floor(Math.random() * 4);
  let counterAction = opponentMoves[opponentRng];

  return actionResult(actionTaken, counterAction);
}

/* Main Battle Function */

function battle(sceneNumber) {

  const scene = scenes.find(scene => scene.id === sceneNumber); //Access the object at scenes.js

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

  bubbleText.innerText = ""; //Clear previous texts

  $(screenElem).css({
    "background": "red"
  }); // toDo visually

  /* win showScene(78);*/ //future returns
  /* lose showScene(79);*/
}
