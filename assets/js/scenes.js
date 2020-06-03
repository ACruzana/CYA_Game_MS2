/* jshint esversion: 6 */ /*jshint jquery: true */ /*jshint node: true */ /* jshint browser: true */ /* eslint-env es6 */ /* eslint-env jquery */ /* eslint-env browser */ /* eslint no-console: 0 */



/* Game API (scenes) */

// eslint-disable-next-line
const scenes = [
  {
    id: 0, //Home Screen
    text: "",
    background: "/assets/images/scenes/0.png",
    dialog: "",
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
    text: "First Scene - Found map choice",
    background: "/assets/images/scenes/1.png",
    dialog: "",
    options: [
      {
        text: "Read Map",
        nextScene: 1.1
      },
      {
        text: "Drop Map",
        nextScene: 1.2
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
    id: 1.1, //Scene One - choice
    text: "Read map - Continue",
    background: "/assets/images/scenes/1.1.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2
      },
      {
        text: "-",
        nextScene: 1.1
      },
      {
        text: "-",
        nextScene: 1.1
      },
      {
        text: "-",
        nextScene: 1.1
      }
    ]
  },
  {
    id: 1.2, //Scene One - no choice
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Drop map - no can do",
    options: [
      {
        text: "Read Map",
        nextScene: 1.1
      },
      {
        text: "-",
        nextScene: 1.2
      },
      {
        text: "-",
        nextScene: 1.2
      },
      {
        text: "-",
        nextScene: 1.2
      }
    ]
  },
  {
    id: 2, //Scene Two - first choice
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Second Scene - First choice",
    options: [
      {
        text: "Enlist",
        nextScene: 2.1
      },
      {
        text: "Hide",
        nextScene: 2.2
      },
      {
        text: "Steal",
        nextScene: 2.3
      },
      {
        text: "-",
        nextScene: 2
      }
    ]
  },
  {
    id: 2.1, //Scene Two - first choice
    text: "Enlist - Continue",
    background: "/assets/images/scenes/2.1.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2
      },
      {
        text: "-",
        nextScene: 2.1
      },
      {
        text: "-",
        nextScene: 2.1
      },
      {
        text: "-",
        nextScene: 2.1
      }
    ]
  },
  {
    id: 2.2, //Scene Two - first choice
    text: "Hide Scene - Continue",
    background: "/assets/images/scenes/2.2.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2
      },
      {
        text: "-",
        nextScene: 2.2
      },
      {
        text: "-",
        nextScene: 2.2
      },
      {
        text: "-",
        nextScene: 2.2
      }
    ]
  },
  {
    id: 2.3, //Scene Two - first choice
    text: "Steal Scene - Continue",
    background: "/assets/images/scenes/2.3.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2
      },
      {
        text: "-",
        nextScene: 2.3
      },
      {
        text: "-",
        nextScene: 2.3
      },
      {
        text: "-",
        nextScene: 2.3
      }
    ]
  }
];
