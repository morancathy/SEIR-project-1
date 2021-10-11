# Man on an Island  
An interactive browser story-game made with Vanilla JavaScript, CSS and HTML that manipulates the DOM.
Users help Spencer, who is stuck on an island, survive for 10 days. Users choose-their-own-adventure to decide what the character does each day to maintain his levels of food, water and sanity

### As a user I can
- interact with the game by choosing what Spencer does each day
- win by helping Spencer survive on the island for 10 days (by maintaining food, water and sanity levels)
- loose if the choices I make results in Sensor dying (by not maintaining food, water and sanity levels)
- know what is needed in order to survive by reading prompts/instructions
- always view food, water, sanity and coconut levels
- play again if Spencer dies

### As a developer I
- built an interactive browser story/game that manipulates the DOM
- provided buttons and modals that must be interacted with in order for the story to continue
- implemented an abundance of logic to determine outcomes based on user choices (probabilities listed below)
- provide instructions prior to starting game, allowing for clarity on what to strive for during the game
- provide a play-again option that resets entire game
- add/subtract water, food, sanity, and coconut levels at appropriate times
- include animations to help stimulate user experience
- manipulate modals, text bubbles and buttons, including timing. These items must be interacted with in order for game to continue. Results of such interactions will determine story's outcomes
- implemented Classes to define characters

### Technologies Used
JavaScript\
CSS\
HTML

## Instructions
Spencer is stuck on the Island of Turnbull. Similar to Naked and Afraid, Spencer will wonder the island trying to survive for 10 days.

Spencer will have 4 levels to maintain: food, water, sanity and coconuts.

If food, water or sanity levels hit zero, he dies.

When user decides Spencer will go in search for food Spencer will be presented with food options:
  - dig for bugs (provides .5 serving) (success rate 75%)  
  - fish for fish (provides 1 serving) (success rate 50%)
  - set trap for rodent/larger animal (provides 2 servings) (success rate 25%)
  - or he may not find anything

When user decides Spencer will go in search for water Spencer will come across coconuts, nothing or trolls! His options:
  - crack it open and drink it (provides 1 serving)
  - save to use as weapon against the nasty trolls and their troll leader

At random times Spencer will come across nasty trolls. Spencer's options:
  - defend himself (1 coconut scares troll away)
  - if Spencer doesn't have any coconuts, the troll kicks him and Spencer loses a level of sanity
  - If Spencer beats 5 trolls, he is confronted by the Master Troll. If Spencer has enough coconuts (5 is 100% success, it decreases from there) he can beat the master troll and win his treasure. The treasure is living in the master troll's quarters with unlimited food, water and rum the rest of the days on the island

Daily Searches
-Spencer is allowed 4 searched per day. The farther he searches, the greater chance he has of getting lost. If he sleeps away from camp, he loses a level of sanity
-Each day that passes, Spencer looses a food and water level

#### Why I included this in my portfolio:
As my very first project in the coding world and being introduced to JavaScript just 4 weeks prior to starting this project, this was an important piece of my learning journey into software development.

Though the visuals aren't my strong point, the logic I used behind it was. This project demonstrates my ability to include vast amounts of logic in numerous ways to manipulate the DOM. This includes ability to pause, start, continue and end a user's interaction with the site. Hiding modals, button events, timing text bubbles, etc. all played a part.

Much more logic was used when determining the outcome of a user's choice. Including a logical percentage of success for each item a user clicked on, makes the game not arbitrary.

One of the most challenging aspects of this project was including various animations, which I taught myself how to implement into the project. It is very much beginner animation, however to me, it demonstrates something I never thought I was capable of doing.

I deliberately refrained from updating the overall code, as viewing this project from time to time provides a meaningful reference point of where I started, not only because 1) this demonstrates my abilities with only 4 weeks of introduction to software development and 2) to visualize how much I have grown since then.
