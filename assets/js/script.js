/*jshint esversion: 6 */ /*jshint jquery: true*/ /*jshint node: true*/ /*jshint browser: true*/
/*eslint-env es6*/ /*eslint-env jquery*/ /*eslint-env browser*/ /*eslint no-console: 0*/

const screenElem = document.getElementById("screen");
const commandsElem = document.getElementById("commands");

let status = {}

function game() {
  status = {}
  showScene(1)
}

function showScene(sceneNumber) {
  const scene = scenes.find(scene => scene.id === sceneNumber)
  screenElem.innerText = scene.text
  while (commandsElem.firstChild) {
    commandsElem.removeChild(commandsElem.firstChild)
  }
  
  scene.options.forEach(option => {
    if (showOptions(option)) {
      const btn = document.createElement("button")
      btn.innerText = option.text
      $(btn).addClass("option-btn")
      btn.addEventListener("click", () => chooseOption(option))
      commandsElem.appendChild(btn)
    }
  })
}

function showOptions(option) {
  return true
}

function chooseOption(option) {
  const nextSceneNumber = option.nextScene
  status = Object.assign(status, option.setStatus)
  showScene(nextSceneNumber)
}

const scenes = [
  {
    id: 1,
    text: "id1 on going",
    options: [
      {
        text: "one",
        setStatus: { continue: true },
        nextScene: 2
      },
      {
        text: "two",
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
    id: 2,
    text: "id2 on going",
    options: [
      {
        text: "four",
        setStatus: { continue: true },
        nextScene: 1
      },
      {
        text: "five",
        nextScene: 2
      },
      {
        text: "six",
        nextScene: 1
      },
      {
        text: "seven",
        nextScene: 1
      }
    ]
  }
]

$(document).ready(game());