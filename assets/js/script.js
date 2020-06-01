/*jshint esversion: 6 */ /*jshint jquery: true*/ /*jshint node: true*/ /*jshint browser: true*/
/*eslint-env es6*/
/*eslint-env jquery*/
/*eslint-env browser*/
/*eslint no-console: 0*/

const screenElem = document.getElementById("screen");
const commandsElem = document.getElementById("commands");

function game() {
  showScene(1)
}

function showScene(sceneNumber) {
  const scene = scenes.find(scene => scene.id === sceneNumber)
  screenElem.innerText = scene.text
  while (commandsElem.firstChild) {
    commandsElem.removeChild(commandsElem.firstChild)
  }

  scene.options.forEach(option => {
    const btn = document.createElement("button")
    btn.innerText = option.text
    $(btn).addClass("option-btn")
    btn.addEventListener("click", () => chooseOption(option))
    commandsElem.appendChild(btn)
  })
}

function chooseOption(option) {
  const nextSceneNumber = option.nextScene
  if (nextSceneNumber === 0) {
    return game()
  } else {
    showScene(nextSceneNumber)
  }
}

const scenes = [
  {
    id: 1,
    text: "id1 on going",
    options: [
      {
        text: "one",
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
        nextScene: 2
      },
      {
        text: "five",
        nextScene: 2
      },
      {
        text: "six",
        nextScene: 2
      },
      {
        text: "restart",
        nextScene: 0
      }
    ]
  }
]

$(document).ready(game());
