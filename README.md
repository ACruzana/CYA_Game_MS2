# CYA_Game_MS2

Choose your adventure game (Milestone PJ 2 -CI FSC)

# Choose Your Adventure - The Long Lost Treasure
Pirate Game

**(MS interactive-front-end project - Code Institute by Ángel González)**

This is a "choose your own adventure" type of game. The game is both available to be played in browser of portable device. The site itself includes some optional access features like light/dark mode, sound effects and ambient music to personalise user experience.

## UX
### User stories
Users of this WebApp will be people wanting to spend a good while playing through the game story and trying to beat it.

The site [(see full-size preview)](/assets/images/screencaptures/Full-page-browser.png) is based on a single interactive page. The sections are distributed symmetrically to make it intuitive to visually navigate through content in a fast and easy way.

Both the fonts and the optional ambient music are heavy pirate themed to make the experience more immersive for the user.

The user finds the game screen in the center of the window [(see full-size preview)](/assets/images/screencaptures/Full-page-browser.png) making it easier to focus on it.

Users also find the deployable card containing the "instructions" displayed by default, making it easy to understand how the game works in the browser.

Finally, the users have access to a deployable card containing some "options" to customize the experience both visually and audibly. [(see Features)](#Features)

### Strategy
The goal is that the user has a good time playing fluidly through the game. To achieve this, the design is clean and theme deeply defined. Also, some customize options are given to the user.

Is another of the goals that the player plays again after failing, so an option to "restart" is given right after losing. [(see Features)](#Features)

The most ambitious goal is having a player playing again after winning the game, to attempt to achieve this four different endings were defined.

### Wireframes
Here are the first concept wireframes:

* Browser View: 

![Browser-View](/assets/wireframes/Browser-idea.png "Browser View")

* Device View: 

![Device-View](/assets/wireframes/Phone-idea.png "Device View")

* Scene Types: 

![Scene-type-description](/assets/wireframes/Scene-type-description.png "Scene type description") 
![Scene-type-speech](/assets/wireframes/Scene-type-speech.png "Scene type speech") 
![Scene-type-combat](/assets/wireframes/Scene-type-combat.png "Scene type combat")

Final concept wireframes:

* Browser View: 

![Browser-View](/assets/wireframes/Browser-idea-defined.png "Browser View")

* Device View: 

![Device-View](/assets/wireframes/Phone-idea-defined.png "Device View")

* Scene Types: 

See [Features](#Features)

Another very important part of the planning process was the structure of the story, this was in order to make easier establish code logic. Here are the decision trees of the game (last two are not included to avoid spoilers):

* Start decision tree: 

![Start-Tree](/assets/wireframes/Tree-decision-start.png "Start Tree")

* Hide decision tree: 

![Hide-Tree](/assets/wireframes/Tree-decision-hide.png "Hide Tree")

* Enlist decision tree: 

![Enlist-Tree](/assets/wireframes/Tree-decision-enlist.png "Enlist Tree")

* Rob decision tree: 

![Rob-Tree](/assets/wireframes/Tree-decision-rob.png "Rob Tree")

### Scope
Considering the goals set at [Strategy](#Strategy), has been necessary to make a solid pirate theme [(see Theming)](#Theming) to make the experience coherent. As well as giving some options to customize and make the user spend more time in the WebApp.

Also, was important to have all the interaction focus on the game screen to be able to use the project in portable devices.

### Structure
In the browser, all three main elements are occupying one third width of the screen:

![Full-page-browser](/assets/images/screencaptures/Full-page-browser.png "Browser View")

The **title** section, displays to the left and centered.

The **game** section, displays centered, focusing attention.

The **features** section, displays to the right with the instructions tab opened by default.

On a mobile device, all three main elements are aligned one on top of the other:

![Full-page-phone](/assets/images/screencaptures/Full-page-phone.png "Phone View")

The **title** section, displays on the top with reduced size.

The **game** section, displays centered and occupying most of the screen focusing attention.

The **features** section, displays under the main screen, given that this view is more intuitive and no space wants to be taken from the game section.

### Theming
As mentioned, theming was an important matter for the project in order to make the experience unique.

The special and more elaborated font for the title is [Jack Pirate](https://www.fontspace.com/jack-pirate-font-f42234) by [Måns Grebäck](https://www.fontspace.com/m%C3%A5ns-greb%C3%A4ck). The font for the rest of the site is "Pirata One".

All the pictures and designs were made in [Canva](https://www.canva.com/).

Color palette sticks to tones that are commonly associated with the pirate world.

Finally, the music used for ambience is [The Buccaneers Haul by Shane Ivers](https://www.silvermansound.com), meanwhile the button effect was found at [Sound Snap](https://www.soundsnap.com/).

## Features
This site consists single page so let's focus on the different elements:

* **Site Icon**: personalized WebApp icon displays on the browser. Also in the case someone bookmarks the game page.

![site-icon](/assets/images/site-icon.png "Site icon")

* Game **Title**: strongly styled as the [theming](#Theming) section explained. Display position adapts depending on screen size.

* **Game Screen**: display position adapts depending on screen size, keeping always the main focus spot. Here is the preview of how some of the different [types of scenes](#Wireframes) result, with changeable text on the interactive buttons and images on the background. As well as the text included in each different scene.

![Scene-type-description](/assets/images/screencaptures/Scene-type-description.png "Scene type description") ![Scene-type-speech](/assets/images/screencaptures/Scene-type-speech.png "Scene type speech")

*Image*: background changes on every visited scene making the story interesting and engaging, and the interaction meaningful.

*Text*: changes along the image displayed are either a dialog or a description of the action. Both either prompting the player to take a decision or inform of the new circumstances.

*Buttons*: the four buttons display the different options to take and they change according to the scene. Not being available all of them sometimes makes the user read and stop a second to engage deeper in the experience.

* **Miscelanea section**: placed to the right of the game screen, this card-panel system displays the game instructions by default to help the browser user understand the dynamic of the game. Once clicked the "Options" card-panel displays and "Instructions" hides. On this panel the user finds sound and music management, as well as having the option to change the theme to a darker one. The active option is marked by an underline.

![Features-default](/assets/images/screencaptures/Features-default.png "Features default")
![Features-options](/assets/images/screencaptures/Features-options.png "Features options")

*Sound Effect*: "ON" by default, allows to mute the sound effect when changing scene.

*Ambient Music*: "OFF" by default, allows to play pirate themed music as background meanwhile the user is on the site.

*Light Mode*: "ON" by default, allows to change the site background to a darker version to reduce the light coming from the screen.

* **Hover Effects**: there is a slight shading in the game screen buttons on browser in case the user scroll over them meanwhile decides. There is also a hover effect over the "Miscelanea section" titles and "Options" text changing colour. This effect along the mouse transforming to pointer makes it clearer to the user that some action is available, apart from the aesthetic, of course. 

* **Inside the Game**: a bit of explanation of what is in the actual game.

 *Base Dynamic*: the premise of the game is choosing an option in a situation and progress to another.

 *Deaths*: there are nine different deaths to finish different story arcs. After each of them, the user gets prompted to "Restart" by including it as the only option in the interactive buttons.

 *Wins*: after finishing successfully the correct arc, the user gets to chose fours different endings. After the chosen ending is viewed, the player gets prompted to play again to see another ending by including "Play Again" as the only option in the interactive buttons.

 *Battle mode*: special mode with slightly different mechanics. Player is trapped in this scene until success or defeat. Turn based battle to the best to five, which is the number of lives provided for both player and opponent.

The whole site has response from small devices to larger screens, moving sections from sideways to top/bottom when needed to achieve best display. Not responsive on 4k at the moment.

### Future Features Objectives
Ordering the possibilities in a list of viability, considering both complexity and relevance:

1. Creating parallel partial story arcs, adding complexity to the global story arc of the game. (LOW complexity / MED relevance)

2. Adding a trophy system to the bottom of the page, unlocking them when a player reaches a certain death, a certain number of deaths, a certain win, etc... (MED complexity / MED relevance)

3. Save game feature allowing the player to save the current situation on the story and coming back another day or in another terminal. This is provided the points 1 and 2 are implemented. A login system. (HIG complexity / MED relevance)

4. Provide proper sizing and response for 4k screens (MED complexity / LOW relevance)

## Contact

**E-mail:** a.cruzana88@gmail.com :technologist:

**Slack-id:** U012EE0G6CR :speech_balloon:
