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
    id: 1, //Scene One - no choice - beach
    text: "Yo Ho Ho! You have found a bottle with a map inside at the beach!",
    background: "/assets/images/scenes/1.png",
    dialog: "",
    options: [
      {
        text: "Read Map",
        nextScene: 1.1
      },
      {
        text: "Drop Botlle",
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
    id: 1.1, //Scene One - choice - map
    text: "The map shows an island you seem to recognize. Will the red 'X' mean there's a hidden treasure?",
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
    dialog: "Ahoy! I think curiosity is too powerfull!!",
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
    id: 2, //Scene Two - first choice - lack boat
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Aaarr, but I'm no captain. How should I be on route?",
    options: [
      {
        text: "Enlist a Pirate Crew",
        nextScene: 2.1
      },
      {
        text: "Hide on a Ship's Hold",
        nextScene: 2.2
      },
      {
        text: "Rob a Ship",
        nextScene: 2.3
      },
      {
        text: "-",
        nextScene: 2
      }
    ]
  },
  {
    id: 2.1, //Scene Two-One - Continue enlist
    text: "You made it on board, 'no prey, no pay' they said...",
    background: "/assets/images/scenes/2.1.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2.11
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
    id: 2.11, //Scene Two-Eleven - second choice - enlist
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Avast ye! We going the wrong direction!!",
    options: [
      {
        text: "Trick the Ship's Helm",
        nextScene: 2.111
      },
      {
        text: "Try Talking to the Captain",
        nextScene: 2.112
      },
      {
        text: "Escape in the Rowboat",
        nextScene: 2.113
      },
      {
        text: "-",
        nextScene: 2.11
      }
    ]
  },
  {
    id: 2.111, //Scene Eleven-One - continue trick
    text: "And the helm is tricked",
    background: "/assets/images/scenes/2.111.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 7.1 //toDo challenge route
      },
      {
        text: "-",
        nextScene: 2.111
      },
      {
        text: "-",
        nextScene: 2.111
      },
      {
        text: "-",
        nextScene: 2.111
      }
    ]
  },
  {
    id: 2.112, //Scene Eleven-Two - continue talk
    text: "Tried but no friendly",
    background: "/assets/images/scenes/2.112.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 8.1 //toDo plank and death
      },
      {
        text: "-",
        nextScene: 2.112
      },
      {
        text: "-",
        nextScene: 2.112
      },
      {
        text: "-",
        nextScene: 2.112
      }
    ]
  },
  {
    id: 2.113, //Scene Eleven-Three - continue escape
    text: "escaping...",
    background: "/assets/images/scenes/2.113.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 6.1 //toDo rowboat
      },
      {
        text: "-",
        nextScene: 2.113
      },
      {
        text: "-",
        nextScene: 2.113
      },
      {
        text: "-",
        nextScene: 2.113
      }
    ]
  },
  {
    id: 2.2, //Scene Two-Two - Continue - hide
    text: "Aye, hidden on the cellar. Time for a sip of rum and take a 'caulk'...",
    background: "/assets/images/scenes/2.2.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2.21
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
    id: 2.21, //Scene Two-TwentyOne - second choice - hide
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Blimey!!!! 'Me' got caught!! Need to do something, I don't want to feed the fish just yet",
    options: [
      {
        text: "Challenge the Captain",
        nextScene: 2.211
      },
      {
        text: "Enroll the Crew",
        nextScene: 2.1
      },
      {
        text: "Jump Over the Edge",
        nextScene: 2.213
      },
      {
        text: "-",
        nextScene: 2.21
      }
    ]
  },
  {
    id: 2.211, //Scene TwentyOne-One - continue challenge
    text: "here the challenge",
    background: "/assets/images/scenes/2.211.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 7.2 //toDo challenge route
      },
      {
        text: "-",
        nextScene: 2.211
      },
      {
        text: "-",
        nextScene: 2.211
      },
      {
        text: "-",
        nextScene: 2.211
      }
    ]
  },
  {
    id: 2.213, //Scene TwentyOne-Three - continue jump
    text: "scaping...",
    background: "/assets/images/scenes/2.213.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 6.1 //toDo link with rowboat
      },
      {
        text: "-",
        nextScene: 2.213
      },
      {
        text: "-",
        nextScene: 2.213
      },
      {
        text: "-",
        nextScene: 2.213
      }
    ]
  },
  {
    id: 2.3, //Scene Two-Three - Continue - rob
    text: "Yo Ho Ho!! This fools went to the tavern all at time. Aye, time to raise the anchor!",
    background: "/assets/images/scenes/2.3.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2.31
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
  },
  {
    id: 2.31, //Scene Two-ThirtyOne - second choice - rob
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Shiver Me Timbers'! I see through my spyglass that they are chasing me!!!",
    options: [
      {
        text: "Turn West",
        nextScene: 2.311
      },
      {
        text: "Turn East",
        nextScene: 2.312
      },
      {
        text: "Maintain Route",
        nextScene: 2.313
      },
      {
        text: "Go For Them!",
        nextScene: 2.314
      }
    ]
  },
  {
    id: 2.311, //Scene ThirtyOne-One - continue west
    text: "",
    background: "/assets/images/scenes/2.311.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 5.1 //toDo chase
      },
      {
        text: "-",
        nextScene: 2.311
      },
      {
        text: "-",
        nextScene: 2.311
      },
      {
        text: "-",
        nextScene: 2.311
      }
    ]
  },
  {
    id: 2.312, //Scene ThirtyOne-Two - continue east
    text: "",
    background: "/assets/images/scenes/2.312.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 5.2 //toDo chase
      },
      {
        text: "-",
        nextScene: 2.312
      },
      {
        text: "-",
        nextScene: 2.312
      },
      {
        text: "-",
        nextScene: 2.312
      }
    ]
  },
  {
    id: 2.313, //Scene ThirtyOne-Three - continue maintain
    text: "",
    background: "/assets/images/scenes/2.313.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 5.3 //toDo chase
      },
      {
        text: "-",
        nextScene: 2.313
      },
      {
        text: "-",
        nextScene: 2.313
      },
      {
        text: "-",
        nextScene: 2.313
      }
    ]
  },
  {
    id: 2.314, //Scene ThirtyOne-Four - continue fight
    text: "",
    background: "/assets/images/scenes/2.314.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 7.3 //toDo challenge route
      },
      {
        text: "-",
        nextScene: 2.314
      },
      {
        text: "-",
        nextScene: 2.314
      },
      {
        text: "-",
        nextScene: 2.314
      }
    ]
  },
];
