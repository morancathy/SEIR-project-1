# Man on an Island    

####Items to improve upon/ to do's:####
- ~~include images~~
- ~~update README to include user stories, developer stories, technologies used, brief overview~~
- change all functions to const
- check for unused variables
- check for dead CSS, HTML
- Create a 'you win' function
- Is 21 days appropriate?  Change to 10? 15?
- images:
    - update fish img
    - find mongrel img?
    - others?
- Ask Arthur:
  - can I delete the main branch with the random README?
  - do I call this project a story or a game? or a story-game?
- deploy to Heroku

####Brief overview of project to place inside my portfolio:####
Man on an Island is a choose your own adventure story-game in which the user helps Spensor, who is stuck on an island, survive for 21 days.
The user interactively decides what Spensor does each day to maintain his levels of food, water and sanity, in order to survive. (insert link to game)
(Since I have a whole instruction/rules portion user must read before game starts, I feel writing more here would be redundant)

####Why I included this in my portfolio####
As my very first project in the coding world and being introduced to JavaScript just 4 weeks prior to starting this project, this was an important piece of my learning journey in software development.

Though the visuals aren't my strong point, the logic I used behind it was. This project demonstrates my ability to include vast amounts of logic in numerous ways to manipulate the DOM. This includes ability to pause, start, continue and end a user's interaction with the site. Hiding modals, button events, timing text bubbles, etc. all played a part.

Much more logic was used when determining the outcome of a user's choice. Including a logical percentage of success for each item a user clicked on, makes the game not arbitrary.

One of the most challenging aspects of this project was including various animations, which I taught myself how to implement into the project. It is very much beginner animation, however to me, it demonstrates something I never thought I was capable of doing.

I deliberately refrained from updating the overall code, as viewing this project from time to time provides a meaningful reference point of where I started, no only because 1) this demonstrates my abilities with only 4 weeks of introduction to software development and 2) to visualize how much I have grown since then.

# Man on an Island  

Man on an Island is a choose your own adventure story-game in which the user helps Spensor, who is stuck on an island, survive for 21 days.
The user interactively decides what Spensor does each day to maintain his levels of food, water and sanity, in order to survive.

###As a user I can###
- interact with the game by choosing what Spensor does each day.
- win by helping Spensor survive on the island for 21 days (by maintaining food, water and sanity levels).
- loose if the choices I make results in Sensor dying (by not maintaining food, water and sanity levels).
- know what is needed in order to survive by reading prompts/instructions.
- always view food, water, sanity and coconut levels.
- play again if Spensor dies.

###As a developer I###
- built an interactive browser story/game that manipulates the DOM.
- manipulate the DOM by providing buttons and modals that must be interacted with in order for the story to continue.
- implemented a lot of logic to determine outcomes based on the user's choices. This provides a non-random experience and no option to 'cheat' the game.
  (probabilities listed below)
- provide instructions before the game begins allowing for clarity on what to strive for during the game.
- provide a play-again option that resets entire game.
- add/subtract water, food, sanity, and coconut levels at appropriate times.
- include animations to help stimulate user experience.
- manipulate modals, text bubbles and buttons. These items must be interacted with in order for game to continue. Results of such interactions will determine story's outcomes.

##Instructions##
Spensor is stuck on the Island of Turbull. Similar to Naked and Afraid, spensor will wonder the island trying to survive for 21 days.

Spensor will have 4 levels to maintain: food, water, sanity and coconuts.

If food, water or sanity levels hit zero, he dies.

When user decides Spensor will go in search for food Spensor will be presented with food options:
  - dig for bugs  (provides .5 serving) (success rate 75%)  
  - fish for fish (provides 1 serving) (success rate 50%)
  - set trap for rodent/larger animal (provides 2 servings) (success rate 25%)
  - or he may not find anything.

When user decides Spensor will go in search for water Spensor will come across coconuts, nothing or trolls! His options:
  - crack it open and drink it (provides 1 serving)
  - save to use as weapon against the nasty trolls and their troll leader.

At random times Spensor will come across nasty trolls. Spensor's options:
  - defend himself (1 coconut scares troll away)
  - if Spensor doesn't have any coconuts, the troll kicks him and Spensor looses a level of sanity
  - If Spensor beats 5 trolls, he is confronted by the Master Troll. If Spensor has enough coconuts (5 is 100% success, it decreases from there) he can beat the master troll and win his treasure. The treasure is living in the master troll's quarters with unlimited food, water and rum the rest of the days on the island.

Daily Searches
-Spensor is allowed 4 searched per day. The farther he searches, the greater chance he has of getting lost. If he sleeps away from camp, he looses a level of sanity.
-Each day that passes, Spensor looses a food and water level.

###Technologies Used###
JavaScript/
CSS/
HTML
