/* jshint esversion: 6 */ /*jshint jquery: true */ /*jshint node: true */ /* jshint browser: true */ /* eslint-env es6 */ /* eslint-env jquery */ /* eslint-env browser */ /* eslint no-console: 0 */



/* Game API (scenes) */

// eslint-disable-next-line
const scenes = [
  {
    id: 0, //Home Screen
    text: "Home screen",
    background: "/assets/images/1.png",
    options: [
      {
        text: "Start Adventure!",
        nextScene: 1
      },
      {
        text: "-",
        nextScene: 0
      },
      {
        text: "-",
        nextScene: 0
      },
      {
        text: "-",
        nextScene: 0
      }]
  },
  {
    id: 1, //Scene One - no choice
    text: "First Scene - Found map",
    background: "/assets/images/3.png",
    options: [
      {
        text: "Read Map",
        nextScene: 2
      },
      {
        text: "Drop Map",
        nextScene: 1.1
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
    text: "Second Scene - First choice",
    background: "/assets/images/4.png",
    options: [
      {
        text: "Alist",
        nextScene: 3
      },
      {
        text: "Steal",
        nextScene: 3
      },
      {
        text: "Hide",
        nextScene: 3
      },
      {
        text: "restart",
        nextScene: 0
      }
    ]
  }
];
