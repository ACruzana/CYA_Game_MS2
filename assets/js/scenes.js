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
    dialog: "Avast ye! We going the wrong direction!! What should I do??",
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
    text: "So a 'small' wooden stick applied in the helm made the route fix to the right direction",
    background: "/assets/images/scenes/2.111.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 9.1
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
    text: "It's impossible to talk directly to the captain, missunderstanding with some crew members engaged you in a challenge...",
    background: "/assets/images/scenes/2.112.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 7
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
    text: "This small rowboat will serve me well, they won't even notice...",
    background: "/assets/images/scenes/2.113.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 6.1
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
    text: "What is even going on on deck?? Better get ready...",
    background: "/assets/images/scenes/2.211.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 7
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
    text: "Run for the edge and blidnly jump over it, not so many choices anyway",
    background: "/assets/images/scenes/2.213.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2.2131
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
    id: 2.2131, //Scene TwentyOne-ThirtyOne - continue jump link rowboat
    text: "Oportunity appears just before the eyes, grab a knife and jump on that rowboat",
    background: "/assets/images/scenes/2.2131.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 6.1 
      },
      {
        text: "-",
        nextScene: 2.2131
      },
      {
        text: "-",
        nextScene: 2.2131
      },
      {
        text: "-",
        nextScene: 2.2131
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
    text: "The wind just turned agains the ship, the flags would do better be even raised and the hat about to fly away...",
    background: "/assets/images/scenes/2.311.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 9.5
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
    text: "Wind blows furious behind the ship, goddess Calypso seems on board!!",
    background: "/assets/images/scenes/2.312.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2.9
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
    text: "Distance is just being maintained, a shift in the route is needed",
    background: "/assets/images/scenes/2.313.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 2.3131
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
    id: 2.3131, //Scene ThirtyOne-ThirtyOne - continue maintain
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Aye'!! Tuning point, all or nothing!!!",
    options: [
      {
        text: "East",
        nextScene: 2.312
      },
      {
        text: "West",
        nextScene: 2.311
      },
      {
        text: "-",
        nextScene: 2.3131
      },
      {
        text: "-",
        nextScene: 2.3131
      }
    ]
  },
  {
    id: 2.314, //Scene ThirtyOne-Four - continue fight
    text: "There we are, you have nothing to lose, you call for their captain!!",
    background: "/assets/images/scenes/2.314.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 7
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
  {
    id: 2.8, //Scene Two-Eight - fighting win dialog
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Sink me 'heartie', I won!! I'm the captain now! Straight route to the island!",
    options: [
      {
        text: "Continue",
        nextScene: 2.9
      },
      {
        text: "-",
        nextScene: 2.8
      },
      {
        text: "-",
        nextScene: 2.8
      },
      {
        text: "-",
        nextScene: 2.8
      }
    ]
  },
  {
    id: 2.9, //Scene Two-Nine - navigating win dialog
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Avast'!!! This should be the island of the map, I'll approach in the rowboat",
    options: [
      {
        text: "Continue",
        nextScene: 3
      },
      {
        text: "-",
        nextScene: 2.9
      },
      {
        text: "-",
        nextScene: 2.9
      },
      {
        text: "-",
        nextScene: 2.9
      }
    ]
  },
  {
    id: 3, //Scene Three - island choices
    text: "The small island looks a bit bigger once you step on it, let's see what happens...",
    background: "/assets/images/scenes/3.png",
    dialog: "",
    options: [
      {
        text: "Explore Beach East",
        nextScene: 9.6
      },
      {
        text: "Explore Beach West",
        nextScene: 3.1
      },
      {
        text: "Climb Rocks to Top",
        nextScene: 3.2
      },
      {
        text: "Go Through Jungle",
        nextScene: 9.7
      }
    ]
  },
  {
    id: 3.1, //Scene Three-One - continue west
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Almost everything looks the same on this side, despite some old stairs I found",
    options: [
      {
        text: "Go Back",
        nextScene: 3
      },
      {
        text: "Continue Exploring West",
        nextScene: 9.6
      },
      {
        text: "Go Through Jungle",
        nextScene: 9.7
      },
      {
        text: "Use Stone Stairs",
        nextScene: 3.2
      }
    ]
  },
  {
    id: 3.2, //Scene Three-Two - continue climb
    text: "The climb was not that easy but you find yourself near the top now. Is this it finally?",
    background: "/assets/images/scenes/3.2.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 3.3
      },
      {
        text: "-",
        nextScene: 3.2
      },
      {
        text: "-",
        nextScene: 3.2
      },
      {
        text: "-",
        nextScene: 3.2
      }
    ]
  },
  {
    id: 3.3, //Scene Three-Three - continue top
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Ahoy' lad! Showel-time!!",
    options: [
      {
        text: "Dig Under Thin Palm",
        nextScene: 4
      },
      {
        text: "Dig Near Rock Piles",
        nextScene: 9.81
      },
      {
        text: "Dig On Red Mark",
        nextScene: 9.91
      },
      {
        text: "Dig Under the Bonepile",
        nextScene: 3.31
      }
    ]
  },
  {
    id: 3.31, //Scene Three-ThirtyOne - continue bonepile
    text: "There's nothing under, what's the meaning of this bonepil do here then...",
    background: "/assets/images/scenes/3.31.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 3.3
      },
      {
        text: "-",
        nextScene: 3.31
      },
      {
        text: "-",
        nextScene: 3.31
      },
      {
        text: "-",
        nextScene: 3.31
      }
    ]
  },
  {
    id: 4, //Scene Four - continue dig palm
    text: "Shiny, heavy, yellow, desired GOLD!!!!",
    background: "/assets/images/scenes/4.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 5
      },
      {
        text: "-",
        nextScene: 4
      },
      {
        text: "-",
        nextScene: 4
      },
      {
        text: "-",
        nextScene: 4
      }
    ]
  },
  {
    id: 5, //Scene Five - continue WIN
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "How we celebrating 'Seadog'??",
    options: [
      {
        text: "Gold Hogger",
        nextScene: 5.1
      },
      {
        text: "Master of the Seas",
        nextScene: 5.2
      },
      {
        text: "Speed Devil",
        nextScene: 5.3
      },
      {
        text: "Rum & Glory",
        nextScene: 5.4
      }
    ]
  },
  {
    id: 5.1, //Scene Five-One - celebration island
    text: "You don't need to share your treasure, you are a pirate and is all yours, nothing to worry about...",
    background: "/assets/images/scenes/5.1.png",
    dialog: "",
    options: [
      {
        text: "Restart",
        nextScene: 0
      },
      {
        text: "-",
        nextScene: 5.1
      },
      {
        text: "-",
        nextScene: 5.1
      },
      {
        text: "-",
        nextScene: 5.1
      }
    ]
  },
  {
    id: 5.2, //Scene Five-Two - celebration master
    text: "Treasure can get you stupid future tech if enough, you are poor again but not a soul will catch you",
    background: "/assets/images/scenes/5.2.png",
    dialog: "",
    options: [
      {
        text: "Restart",
        nextScene: 0
      },
      {
        text: "-",
        nextScene: 5.2
      },
      {
        text: "-",
        nextScene: 5.2
      },
      {
        text: "-",
        nextScene: 5.2
      }
    ]
  },
  {
    id: 5.3, //Scene Five-Three - celebration speed
    text: "Sails are overrated and you allways liked red, checkmate. The complement came also in red!!",
    background: "/assets/images/scenes/5.3.png",
    dialog: "",
    options: [
      {
        text: "Restart",
        nextScene: 0
      },
      {
        text: "-",
        nextScene: 5.3
      },
      {
        text: "-",
        nextScene: 5.3
      },
      {
        text: "-",
        nextScene: 5.3
      }
    ]
  },
  {
    id: 5.4, //Scene Five-Four - celebration rum
    text: "You can't even be here, but as soon as you said 'Splice the Mainbrace!!' you became the hero. You can already see the bottom of the gold coffer, and night is young",
    background: "/assets/images/scenes/5.4.png",
    dialog: "",
    options: [
      {
        text: "Restart",
        nextScene: 0
      },
      {
        text: "-",
        nextScene: 5.4
      },
      {
        text: "-",
        nextScene: 5.4
      },
      {
        text: "-",
        nextScene: 5.4
      }
    ]
  },
  {
    id: 6.1, //Scene Six-One - rowboat dialog
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Ahoy! Time to make some decisions!! No 'crow's nest' in this rowboat, which route??",
    options: [
      {
        text: "North",
        nextScene: 6.11
      },
      {
        text: "South",
        nextScene: 6.12
      },
      {
        text: "West",
        nextScene: 6.13
      },
      {
        text: "East",
        nextScene: 6.14
      }
    ]
  },
  {
    id: 6.11, //Scene Six-One - rowboat 1-north
    text: "Sailed a while 'N', what to do next?",
    background: "/assets/images/scenes/6.11.png",
    dialog: "",
    options: [
      {
        text: "West",
        nextScene: 9.4
      },
      {
        text: "East",
        nextScene: 9.2
      },
      {
        text: "Back South",
        nextScene: 6.1
      },
      {
        text: "-",
        nextScene: 6.11
      }
    ]
  },
  {
    id: 6.12, //Scene Six-One - rowboat 1-south
    text: "Enough with South direction, where now?",
    background: "/assets/images/scenes/6.11.png",
    dialog: "",
    options: [
      {
        text: "West",
        nextScene: 9.3
      },
      {
        text: "East",
        nextScene: 9.2
      },
      {
        text: "Back North",
        nextScene: 6.1
      },
      {
        text: "-",
        nextScene: 6.12
      }
    ]
  },
  {
    id: 6.13, //Scene Six-One - rowboat 1-west
    text: "Enough with going West, where we head now?",
    background: "/assets/images/scenes/6.11.png",
    dialog: "",
    options: [
      {
        text: "North",
        nextScene: 6.131
      },
      {
        text: "South",
        nextScene: 9.3
      },
      {
        text: "Back East",
        nextScene: 6.1
      },
      {
        text: "-",
        nextScene: 6.13
      }
    ]
  },
  {
    id: 6.131, //Scene Six-One - rowboat 1-west-north
    text: "Spent some time heading North, where to row now?",
    background: "/assets/images/scenes/6.13.png",
    dialog: "",
    options: [
      {
        text: "West",
        nextScene: 2.9
      },
      {
        text: "East",
        nextScene: 9.2
      },
      {
        text: "-",
        nextScene: 6.131
      },
      {
        text: "-",
        nextScene: 6.131
      }
    ]
  },
  {
    id: 6.14, //Scene Six-One - rowboat 1-east
    text: "Went a while East direction, where now?",
    background: "/assets/images/scenes/6.11.png",
    dialog: "",
    options: [
      {
        text: "North",
        nextScene: 6.141
      },
      {
        text: "South",
        nextScene: 9.2
      },
      {
        text: "Back West",
        nextScene: 6.1
      },
      {
        text: "-",
        nextScene: 6.14
      }
    ]
  },
  {
    id: 6.141, //Scene Six-One - rowboat 1-east-north
    text: "Spent some time heading North, where to row now?",
    background: "/assets/images/scenes/6.13.png",
    dialog: "",
    options: [
      {
        text: "East",
        nextScene: 9.2
      },
      {
        text: "West",
        nextScene: 9.4
      },
      {
        text: "-",
        nextScene: 6.141
      },
      {
        text: "-",
        nextScene: 6.141
      }
    ]
  },
  {
    id: 7, //Scene Seven-One - challenge dialog
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Me' don't know how... A death challenge with the captain about to start, oh lord!!",
    options: [
      {
        text: "Continue",
        nextScene: 77 //toDo challenge mode function
      },
      {
        text: "-",
        nextScene: 7
      },
      {
        text: "-",
        nextScene: 7
      },
      {
        text: "-",
        nextScene: 7
      }
    ]
  },
  {
    id: 9.1, //Scene Nine-One - death intro plank
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Oh noes 'heartie' they discovered me!! They 'gonna' make me walk the plank!!",
    options: [
      {
        text: "Continue",
        nextScene: 9.11
      },
      {
        text: "-",
        nextScene: 9.1
      },
      {
        text: "-",
        nextScene: 9.1
      },
      {
        text: "-",
        nextScene: 9.1
      }
    ]
  },
  {
    id: 9.11, //Scene Nine-Eleven - walk plank death
    text: "Sadly meeting with 'Davy Jones', the crew seem excited tho...",
    background: "/assets/images/scenes/9.11.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.11
      },
      {
        text: "-",
        nextScene: 9.11
      },
      {
        text: "-",
        nextScene: 9.11
      }
    ]
  },
  {
    id: 9.2, //Scene Nine-Two - death intro old crew
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "Oh noes that's the old crew!! They may have forget??",
    options: [
      {
        text: "Continue",
        nextScene: 9.21
      },
      {
        text: "-",
        nextScene: 9.2
      },
      {
        text: "-",
        nextScene: 9.2
      },
      {
        text: "-",
        nextScene: 9.2
      }
    ]
  },
  {
    id: 9.21, //Scene Nine-Twelve - old crew death
    text: "Old crew is gathering on the edge guns blazing, this doesn't seem a 'welcome back bucko'...",
    background: "/assets/images/scenes/9.21.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.11
      },
      {
        text: "-",
        nextScene: 9.11
      },
      {
        text: "-",
        nextScene: 9.11
      }
    ]
  },
  {
    id: 9.3, //Scene Nine-Three - death intro kraken
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Avast ye'!! Something is emerging from the deep waters!!",
    options: [
      {
        text: "Continue",
        nextScene: 9.31
      },
      {
        text: "-",
        nextScene: 9.3
      },
      {
        text: "-",
        nextScene: 9.3
      },
      {
        text: "-",
        nextScene: 9.3
      }
    ]
  },
  {
    id: 9.31, //Scene Nine-ThirtyOne - kraken death
    text: "A cute 'lil' octopus... Aye lad, this is the end",
    background: "/assets/images/scenes/9.31.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.31
      },
      {
        text: "-",
        nextScene: 9.31
      },
      {
        text: "-",
        nextScene: 9.31
      }
    ]
  },
  {
    id: 9.4, //Scene Nine-Four - death intro whirlpool
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Blow me down'! Lost control of the rowboat on this waters!!",
    options: [
      {
        text: "Continue",
        nextScene: 9.41
      },
      {
        text: "-",
        nextScene: 9.4
      },
      {
        text: "-",
        nextScene: 9.4
      },
      {
        text: "-",
        nextScene: 9.4
      }
    ]
  },
  {
    id: 9.41, //Scene Nine-FourtyOne - whirlpool death
    text: "Drowning like an authentic 'landlubber'...",
    background: "/assets/images/scenes/9.41.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.41
      },
      {
        text: "-",
        nextScene: 9.41
      },
      {
        text: "-",
        nextScene: 9.41
      }
    ]
  },
  {
    id: 9.5, //Scene Nine-Five - death intro cannons
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Blimey'!! They are right beside me, I guess dead men tell no tales...",
    options: [
      {
        text: "Continue",
        nextScene: 9.51
      },
      {
        text: "-",
        nextScene: 9.5
      },
      {
        text: "-",
        nextScene: 9.5
      },
      {
        text: "-",
        nextScene: 9.5
      }
    ]
  },
  {
    id: 9.51, //Scene Nine-FiftyOne - cannons death
    text: "Cannon balls, fireballs, chainballs, unpleasant rain...",
    background: "/assets/images/scenes/9.51.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.51
      },
      {
        text: "-",
        nextScene: 9.51
      },
      {
        text: "-",
        nextScene: 9.51
      }
    ]
  },
  {
    id: 9.6, //Scene Nine-Six - death intro snakes
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Son of a Biscuit Eater'!! As I turned around the rock they are everywhere!",
    options: [
      {
        text: "Continue",
        nextScene: 9.61
      },
      {
        text: "-",
        nextScene: 9.6
      },
      {
        text: "-",
        nextScene: 9.6
      },
      {
        text: "-",
        nextScene: 9.6
      }
    ]
  },
  {
    id: 9.61, //Scene Nine-SixtyOne - snakes death
    text: "They slither, they climb, they are legion, sssssssss-rroun-dead...",
    background: "/assets/images/scenes/9.61.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.61
      },
      {
        text: "-",
        nextScene: 9.61
      },
      {
        text: "-",
        nextScene: 9.61
      }
    ]
  },
  {
    id: 9.7, //Scene Nine-Seven - death intro trap
    text: "",
    background: "/assets/images/scenes/66.png",
    dialog: "'Blimey'!!!! I stepped a bit funny. Am I flying?!?!",
    options: [
      {
        text: "Continue",
        nextScene: 9.71
      },
      {
        text: "-",
        nextScene: 9.7
      },
      {
        text: "-",
        nextScene: 9.7
      },
      {
        text: "-",
        nextScene: 9.7
      }
    ]
  },
  {
    id: 9.71, //Scene Nine-SixtyOne - trap death
    text: "Landing on sharp spikes not as soft as the take off was. Killer step...",
    background: "/assets/images/scenes/9.71.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.71
      },
      {
        text: "-",
        nextScene: 9.71
      },
      {
        text: "-",
        nextScene: 9.71
      }
    ]
  },
  {
    id: 9.81, //Scene Nine-EightyOne - fall death
    text: "Showel gets trapped under a rock, you lose balance and piles were to close to cliff, such a combination...",
    background: "/assets/images/scenes/9.81.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.81
      },
      {
        text: "-",
        nextScene: 9.81
      },
      {
        text: "-",
        nextScene: 9.81
      }
    ]
  },
  {
    id: 9.91, //Scene Nine-EightyOne - fall exposion
    text: "You hear a 'clank' as the showel enters the dirt. Next thing, you are flying, those bones beside have an easy explanation now...",
    background: "/assets/images/scenes/9.91.png",
    dialog: "",
    options: [
      {
        text: "Continue",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 9.91
      },
      {
        text: "-",
        nextScene: 9.91
      },
      {
        text: "-",
        nextScene: 9.91
      }
    ]
  },
  {
    id: 99, //Scene NinetyNine - death and restart
    text: "",
    background: "/assets/images/scenes/99.png",
    dialog: "",
    options: [
      {
        text: "Restart",
        nextScene: 0
      },
      {
        text: "-",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 99
      },
      {
        text: "-",
        nextScene: 99
      }
    ]
  }
];
