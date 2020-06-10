/* Battle scene logic */

function battle(sceneNumber) {
  console.log("battle on going");
  const scene = scenes.find(scene => scene.id === sceneNumber); //Access the object at scenes.js
  
  /* --- Screen --- */

  const bgSrc = "'" + scene.background + "'";
  const bgUrl = "url(" + bgSrc + ")";
  $(screenElem).css({
    "background-image": bgUrl
  }); //Put new scene background

  infoText.innerText = scene.text; //Screen text info type
  bubbleText.innerText = scene.dialog; //Screen text dialog type

  /* --- Commands --- */

  while (commandsElem.firstChild) {
    commandsElem.removeChild(commandsElem.firstChild);
  } //Remove old option buttons

  scene.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    $(btn).addClass("option-btn");
    btn.addEventListener("click", () => {
      chooseOption(option);
      buttonSound.play();
    });
    commandsElem.appendChild(btn);
  }); //Create new option buttons
  
  
  
  /* win showScene(78);*/
  /* lose showScene(79);*/
}