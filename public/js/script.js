/* ======================
Man on an Island
=========================*/
/* ======================
CACHED DOM NODES
=========================*/
const menuEl = document.querySelector('div.right-corner > aside.instructions > div.what-to-do-menu');
const asidePEl = document.querySelector('div.right-corner > aside.instructions > p');
const modalButton = document.querySelector('div.modal > button.start-button');
const modal = document.querySelector('div.modal');
const modal2El = document.querySelector('div.modal2');
const span = document.querySelector('span.close');
const rightCorner = document.querySelector('.right-corner');
const asideR = document.querySelector('.asideR');
const openButton = document.querySelector("#open-button");
//variables for Rotating modal2 and Troll Modal
const rotatingModal = document.querySelector("div.sky > div.rotating-modal");
const closeButton = document.querySelector("#close-button");
const trollModal = document.querySelector("div.sky > div.troll-modal");
const trollButton = document.querySelector("div.sky > div.troll-modal > button.troll-modal-button");
const trollModalGuts = document.querySelector("div.sky > div.troll-modal > div.troll-modal-guts > p.p1");
const deathText = document.querySelector("div.sky > div.troll-modal > div.troll-modal-guts > p.p2");
const rotatingModalGuts = document.querySelector('div.sky > div.rotating-modal > div.rotating-modal-guts > p');
// elements to set Spencer's Daily Stats
const dayEl = document.querySelector('div.header > div.day');
const waterEl = document.querySelector('div.header > div.water-level');
const foodEl = document.querySelector('div.header > div.food-level');
const sanityEl = document.querySelector('div.header > div.sanity-level');
const coconutsEl = document.querySelector('div.header > div.coconuts-level');
const trollsEl = document.querySelector('div.header > div.trolls-level');

const walking = document.querySelector('div.path > div.walking');
const fishEl = document.querySelector('div.asideL > div.fish');
const background = document.querySelector('.grid-container > div.back')
const bubble = document.querySelector('.bubble');
const bubble2 = document.querySelector('.bubble2');
const coconutThing = document.querySelector('div.footer > div.coconut');
const trollWalking = document.querySelector('.footer > div.troll');
const bugs = document.querySelector('.footer > div.bugs');
const dead = document.querySelector('.footer > div.dead');
/* ======================
CREATE Spencer and Master Troll
=========================*/
class Hero {
  constructor(name, water, food, sanity, coconuts, bamboo, rope, searchCount, day, crittersDefeated){
    this.name = name;
    this.water = water;
    this.food = food;
    this.sanity = sanity;
    this.coconuts = coconuts;
    this.bamboo = bamboo;
    this.rope = rope;
    this.searchCount = searchCount;
    this.day = day;
    this.crittersDefeated = crittersDefeated;
  }

  drink(num){
    this.water += num;
    waterEl.innerHTML = this.water;
  }
  drinkDecrease(){
    this.water -= 1;
    waterEl.innerHTML = this.water;
    if(this.water <= 0){
      deathText.textContent = 'Spencer DIED OF THIRST!!!!'
      died();
    }
  }
  eat(num){
    this.food = this.food + num;
    foodEl.textContent = this.food;
  }
  eatDecrease(){
    this.food = this.food - 1;
    foodEl.textContent = this.food;
    if(this.food <= 0){
      deathText.textContent = 'Spencer DIED OF HUNGER!!!!'
      died();
    }
  }

  saneness(num){
    this.sanity -= num;
    if(this.sanity >= 1){
      sanityEl.innerHTML = this.sanity;
    }else{
      this.sanity = 0;
      coconutsEl.innerHTML = this.sanity;
    }

    if(this.sanity <= 0){
      deathText.textContent = 'Spencer DIED!! DARN TROLLS KILLED HIM'
      died();
    }
  }

  coconutInventory(num){
    this.coconuts += num;
    if(this.coconuts >= 0){
      coconutsEl.innerHTML = this.coconuts;
    } else{
      this.coconuts = 0;
      coconutsEl.innerHTML = this.coconuts;
    }
  }

  trolls(){
    this.crittersDefeated += 1;
    trollsEl.innerHTML = this.crittersDefeated;
  }

  searchPerDayCount(num){
    this.searchCount += num;
  }

  timePasses(num){
    this.day += num;
    this.updateDayCount();
    this.searchCount = 1;
  }

  updateDayCount(){
    console.log("made it to time passes");
    dayEl.innerHTML = `Day: ${this.day}`;
    this.eatDecrease();
    this.drinkDecrease();
  }

};
const Spencer = new Hero("Spencer", 5, 5, 5, 0, 0, 0, 1, 1, 0);

class Enemy {
  constructor(name, health){
    this.name = name;
    this.health = health;
  }
  healthy(){
  }
}
const Master = new Enemy("Arthur", 5)

class Critter extends Enemy{
  constructor(name, health){
    super(name, health);
  }
  healthy(){
  }
}
const Critter1 = new Critter("Sarah M", 1);
const Critter2 = new Critter("Jamie M", 1);
const Critter3 = new Critter("Jason H", 1);
const Critter4 = new Critter("Christopher T", 1);
const Critter5 = new Critter("John M", 1);
const Critter6 = new Critter("Sachiyo S", 1);
const Critter7 = new Critter("Yulia P", 1);
const Critter8 = new Critter("Santos", 1);
const Critter9 = new Critter("Amit N", 1);
const Critter10 = new Critter("Luke S", 1);
const Critter11 = new Critter("Jason C", 1);
const Critter12 = new Critter("Jason T", 1);
const Critter13 = new Critter("Lilia S", 1);
const Critter14 = new Critter("Frank G", 1);
const Critter15 = new Critter("Neet K", 1);
const trollArray = [Critter1, Critter2, Critter3, Critter4, Critter5, Critter6, Critter7, Critter8, Critter9, Critter10, Critter11, Critter12, Critter13, Critter14, Critter15];
/* ======================
GLOBAL VARS
=========================*/
let coconuts = 1;
let foodArray = ["Spencer found a nice rock. Let's see what we have under here...", "Ooou, a watering hole. Let's try to fish!",
"Spencer heard a couple mongrolls last night. He think's it's best he set a trap.", "Awww maaann. Spencer's been walking for hours and he's come up empty handed.",
"OH NO! A nasty troll!"];
let waterArray = [`Sweet!\nFound a delicious, refreshing coconut!`, "Awww maaann. Spencer's been walking for hours and he's come up empty handed.",
"OH NO! A nasty troll!"];
const aEl = document.createElement('A');
const returnToCampButton = document.createElement('button');
const aButtonEl = document.createElement('button');
const keepSearchingForDrink = document.createElement('button');
const restartButton = document.createElement('button');
const drinkButtonEl = document.createElement('button');
const saveButtonEl = document.createElement('button');
/* =============================
FUNCTIONS
============================= */
//toggle function
const toggleClass = (node, className) => {
  node.classList.toggle(className)
}
//hides buttons
const hideWhatToDoButtons = () => {
  document.querySelector('#water-button').style.visibility = 'hidden';
  document.querySelector('#food-button').style.visibility = 'hidden';
  // document.querySelector('#supplies-button').style.visibility = 'hidden';
}
//show buttons
const showWhatToDoButtons = () => {
  document.querySelector('#water-button').style.visibility = 'visible';
  document.querySelector('#food-button').style.visibility = 'visible';
  // document.querySelector('#supplies-button').style.visibility = 'visible';
}
// opens instructions modal
const instructionsModal = () =>{
  console.log('line 203, instructionsModal')
  modal2El.style.visibility = 'visible';
  setModal2Text();

  span.onclick = function(){
    setModal2TextPart2();
    span.onclick = function(){
      modal2El.style.visibility = 'hidden';
      modal.style.visibility = 'hidden';
      modalButton.style.visibility = 'hidden';
    document.querySelector('.stats-container').style.visibility = 'visible';
    whatToDoToday();
    walking.style.visibility = 'visible';
    dayEl.innerHTML = `Day: ${Spencer.day}`;
    }
  }
}
//sets text
const setModal2Text = () =>{
  document.querySelector('div.modal2 > div.model2-content > h3.trolls').textContent = "Daily Searches";
  document.querySelector('div.modal2 > div.model2-content > p.p1').textContent = "- Spencer is allowed 4 searches per day.";
  document.querySelector('div.modal2 > div.model2-content > p.p2').textContent = "- Each search leads to food, coconuts, nothing, or nasty island trolls!";
  document.querySelector('div.modal2 > div.model2-content > p.p3').textContent = "- But Beware. The more he searches, the farther he gets from camp.";
  document.querySelector('div.modal2 > div.model2-content > p.p4').textContent = "- If he doesn't find his way back each night, he looses a sanity level.";
}
const setModal2TextPart2 = () =>{
  document.querySelector('div.modal2 > div.model2-content > h2').textContent = "";
  document.querySelector('div.modal2 > div.model2-content > p.top1').textContent = "";
  document.querySelector('div.modal2 > div.model2-content > p.top2').textContent = "";

  document.querySelector('div.modal2 > div.model2-content > h3.trolls').textContent = "Trolls";
  document.querySelector('div.modal2 > div.model2-content > p.p1').textContent = "- Beware of trolls, they can take your sanity!";
  document.querySelector('div.modal2 > div.model2-content > p.p2').textContent = "- Coconuts are needed to defend Spencer.";
  document.querySelector('div.modal2 > div.model2-content > p.p3').textContent = "- If Spencer defeats 5 trolls, the Master Troll appears and Spencer has a chance to take his riches!";
  document.querySelector('div.modal2 > div.model2-content > p.p4').textContent = "- 5 coconuts are needed to defeat the Master Troll. He can attempt with less, but chances are slim.";

}
//Displays right-corner ("what should Spencer do today")
const displayRightCorner = () => {
  rightCorner.style.zIndex = '15';
  rightCorner.style.visibility = 'visible';
  console.log('244 display right corner')
}
//Hides right-corner ("what should Spencer do today")
const hideRightCorner = () => {
  rightCorner.style.zIndex = '0';
  asidePEl.style.zIndex = '0';
  rightCorner.style.visibility = 'hidden';
}

//creates main button contents of right-corner ("What should Spencer do today")
const contentWhatToDoToday = () => {
  let toDoButtons = [
    {text: 'Search for water', id: 'water-button'},
    {text: 'Search for food', id: 'food-button'},
    // {text: 'Search for supplies', id: 'supplies-button'},
    ];
  for(let bananas of toDoButtons){
    const buttonEl = document.createElement('button');
    buttonEl.setAttribute('id', bananas.id);
    buttonEl.innerHTML = bananas.text;
    menuEl.appendChild(buttonEl);
  }
}
contentWhatToDoToday();
// displays content What Should Spencer Do Today -gets called each day
const whatToDoToday = () => {
  displayRightCorner();
  asidePEl.textContent = "What should Spencer do today?";
  showWhatToDoButtons();
};
// What TO DO NEXT ################################################################################################## WHAT TO DO NEXT
const whatToDo3 = () =>{
  if(Spencer.searchCount <= 3){
    displayRightCorner();
    asidePEl.textContent = "What should Spencer do now?";

    keepSearchingForDrink.setAttribute('id', 'keep-searching-for-drink-button');
    keepSearchingForDrink.innerHTML = "Search for coconuts";
    asidePEl.appendChild(keepSearchingForDrink);
    keepSearchingForDrink.onclick = clickedKeepSearchingForWater;
    console.log("wait to click search again for drink")

    aButtonEl.setAttribute('id', 'keep-searching-button');
    aButtonEl.innerHTML= "Search for Food";
    asidePEl.appendChild(aButtonEl);
    aButtonEl.onclick = clickedKeepSearchingForFood;
    console.log("should wait till click keepsearching")

    returnToCampButton.setAttribute('id', 'return-to-camp-button2');
    returnToCampButton.innerHTML = "Return to Camp";
    asidePEl.appendChild(returnToCampButton);
    returnToCampButton.onclick = clickedReturnToCamp;
    console.log("wait to click return to camp(drink)")
  } else if (Spencer.searchCount > 3){
    console.log("It's pitch black! I hope Spencer can make it back")

    clickedReturnToCamp();
  } else {
    console.log("broke...what to do 3..314")
  }
}
// Water Functions ##################################################################################################  Water Functions
const searchForWater = () => {
  console.log('serachforwawater')
  hideWhatToDoButtons();
  hideRightCorner();
  openBubble();

  if(Spencer.searchCount <= 2){
    bubble.textContent = `"Great choice! Happy Coconuts!"`;
  } else if (Spencer.searchCount === 3){
    bubble.textContent = `"It's getting darker, but there's gotta be coconuts somewhere."`;
  } else if (Spencer.searchCount === 4){
    // background.style.backgroundImage = "url(../images/beach-dusk.png)";
    bubble.textContent = `"This is the last time I can search before it's pitch black.\nI hope this is worth it!"`
  } else {
    console.log("Spencer has searched too many times. i shouldnt see this. 298")
  }
  setTimeout(waterSeachActivity, 4 * 1000);
};

const waterSeachActivity = () => {
  pauseWalker();

  let waterArrayChoice = `${waterArray[Math.floor(Math.random() * waterArray.length)]}`;
  console.log(waterArrayChoice);

  trollModalGuts.textContent = waterArrayChoice;
  trollModal.style.visibility = 'visible';

  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    waterSearchResult();
  }
  waterSearchResult = () => {
    if(waterArrayChoice === `${waterArray[0]}`) {
      console.log("found coconuts")
      foundCoconuts();
    } else if (waterArrayChoice === `${waterArray[1]}`) {
        console.log("didnt find antyhing")
        whatToDo3();
    } else if (waterArrayChoice === `${waterArray[2]}`) {
        console.log("battle troll");
        battleTroll();
    } else {
      console.log("something is wrong with code")
    }
  }
  // waterSearchResult();
  // setTimeout(waterSearchResult, 3 * 1000);
};

var count = 1;
const foundCoconuts = () => {
  if(count <= 1){
    bubble2.style.visibility = 'visible';
    bubble2.textContent = "A coconut can be used to replenish a water level or defend against island trolls. If Spencer has no coconuts when attacked, he loses a level of sanity."
    count +=1;
  }
  coconutThing.style.visibility ='visible';
  displayRightCorner();
  asidePEl.textContent = "What would you like to do\nwith the coconut?";

  drinkButtonEl.setAttribute('id', 'drink-button');
  drinkButtonEl.innerHTML = "Drink";
  asidePEl.appendChild(drinkButtonEl);
  drinkButtonEl.onclick = clickedDrink;
console.log("um")
  saveButtonEl.setAttribute('id', 'save-for-later-button');
  saveButtonEl.innerHTML = "Save as a weapon against trolls";
  asidePEl.appendChild(saveButtonEl);
  saveButtonEl.onclick = clickedSaveForLater;
}

// Food Functions ###################################################################################################  Food Functions
const searchForFood = () => {
  hideWhatToDoButtons();
  hideRightCorner();
  openBubble();
  // skyH3.style.zIndex = '17';

  if(Spencer.searchCount <= 2){
    bubble.textContent = `"Great choice! A hunting I will go!"`;
  } else if (Spencer.searchCount === 3){
    bubble.textContent = `"It's getting darker, but I'm hungry."`;
  } else if (Spencer.searchCount > 3){
    // background.style.backgroundImage = "url(../images/beach-dusk.png)";
    bubble.textContent = `"Yikes! This is the last time I can search before it's pitch black.\nI hope this is worth it!"`
  } else {
    console.log("Spencer has searched too many times. i shouldnt see this. 298")
  }
  setTimeout(foodSeachActivity, 3 * 1000);
};

const foodSeachActivity = () => {
  pauseWalker();

  let foodArrayChoice = `${foodArray[Math.floor(Math.random() * foodArray.length)]}`;
  trollModalGuts.textContent = foodArrayChoice;
  trollModal.style.visibility = 'visible';

  trollButton.onclick = function(){
      trollModal.style.visibility = 'hidden';
      foodSearchResult();
    }

  const foodSearchResult = () =>{
    if(foodArrayChoice === `${foodArray[0]}`){
      bugProbability(Math.random());
    }else if (foodArrayChoice === `${foodArray[1]}`) {
      fishProbability(Math.random());
    } else if (foodArrayChoice === `${foodArray[2]}`) {
      trapProbability(Math.random());
    } else if (foodArrayChoice === `${foodArray[3]}`) {
      whatToDo3();
    } else if (foodArrayChoice === `${foodArray[4]}`) {
      battleTroll();
    } else {
      console.log("something is wrong with code")
    }
  }
  // setTimeout(foodSearchResult, 2 * 1000);
};

const bugProbability = (num) => {
  trollModal.style.visibility = 'visible';
  if(num <= .75){
    trollModalGuts.textContent = "Score!\nThis handful of bugs and worms provides a half serving of food!";
    bugs.style.visibility = 'visible';
    Spencer.eat(.5);
  } else {
    trollModalGuts.textContent = "Shucks. Didn't find anything.";
  }
  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    bugs.style.visibility = 'hidden';
    whatToDo3();
  }
};

const fishProbability = (num) => {
  trollModal.style.visibility = 'visible';
  // trollButton.onclick = function(){
  //     trollModal.style.visibility = 'hidden';
  //   }
  if(num <= .50){
    trollModalGuts.textContent= "Spencer caught a fish!\nThis provides a full serving of food!";
    fishEl.style.visibility ='visible';
    Spencer.eat(1);
  } else {
    trollModalGuts.textContent = "Darn. Didn't find anything.";
  }
  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    fishEl.style.visibility ='hidden';
    whatToDo3();
  }
};

const trapProbability = (num) => {
  trollModal.style.visibility = 'visible';
  if(num <= .30){
    trollModalGuts.textContent = "Hard work pays off.\nSpencer caught an island critter!\nThis provides 2 servings of food!";
    Spencer.eat(2);
  } else {
    trollModalGuts.textContent = "Drat! Didn't find anything.";
  }

  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    whatToDo3();
  }
};
//  Troll Functions #################################################################################################  Troll Functions
// Battle Troll
const battleTroll = () => {
  const troll = (trollArray[Math.floor(Math.random() * trollArray.length)]);
  resetTroll();
  if(Spencer.coconuts < 1){
    hideRightCorner();
    startTroll();
    bubble.innerHTML = `"I have no coconuts to defend myself!"`;
    openBubble();

    const trollID = () => {
      trollModalGuts.textContent = `"It's island troll ${troll.name}!"`
      trollModal.style.visibility = 'visible';
      trollButton.onclick = function(){
        trollModal.style.visibility = 'hidden';
        kickedMe();
        setTimeout(loseSanityTime, 4 * 1000);
      }
    }
    setTimeout(trollID, 3 * 1000);

    const kickedMe = () => {
      bubble.innerHTML = `"Troll ${troll.name} kicked me!"`;
      walking.style.background = "url(./img/SpensorKicked.png)";
      openBubble();
    }

    const loseSanityTime = () => {
      trollModal.style.visibility = 'visible';
      trollModalGuts.textContent ="Spencer loses a level of sanity.";
      console.log("525")
      trollButton.onclick = function(){
        stopTroll();
        trollModal.style.visibility = 'hidden';
        walking.style.background = "url(./img/css_sprites.png)";
        Spencer.saneness(1);
        if(Spencer.sanity >= 1){
          whatToDo3();
        }
      }
    }
  } else if(Spencer.coconuts >= 1){
      hideRightCorner();
      startTroll();
      bubble.innerHTML = textContent = `"It's island troll ${troll.name}!! I have coconuts...Attack!!!!"`;
      openBubble();

      timePass2 =() =>{
        trollModalGuts.textContent = `Spencer threw a coconut at ${troll.name} and scared um' off.\nPhew, that was close.`;
        openTrollModal();
      }
      setTimeout(timePass2, 3 * 1000);

      trollButton.onclick = function() {
        stopTroll();
        console.log("524")
        trollModal.style.visibility = 'hidden';
        Spencer.coconutInventory(-1);
        Spencer.trolls();
        trollCheck();
      };
  }else{
    console.log("coconut function to attack trolls is broken");
  }
}
// Check Number of Trolls Defeated
const trollCheck = () => {
  if(Spencer.crittersDefeated % 5 === 0){
    hideRightCorner();
    trollModalGuts.textContent = 'Time to battle the Master Troll!';
    trollModal.style.visibility = 'visible';
    trollButton.onclick = function(){
        trollModal.style.visibility = 'hidden';
        masterTrollAttacks();
    }
  } else {
    whatToDo3();
  }
}
// Master Troll Attacks
const masterTrollAttacks = () => {
  hideRightCorner();
  resetTroll();
  startTroll();
  trollModalGuts.textContent = `"I am ${Master.name}, the Master Troll of this island. You defeated 5 of my top trolls."`
  trollModal.style.visibility = 'visible';

  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    trollOffer();
  }

  const trollOffer = () => {
    trollModalGuts.textContent = `"If you can defeat me, I'll let you have my rum."`
    trollModal.style.visibility = 'visible';
    trollButton.onclick = function(){
        trollModal.style.visibility = 'hidden';
        bubble.textContent = `"I'll fight you! I want a mojito!"`
        openBubble()
        setTimeout(battleProbability, 2 * 1000);
    }
  }
};
// Battle Probability ...based on # of coconuts
const battleProbability = () => {
  let num = 0;
  if(Spencer.coconuts > 5){
    trollModalGuts.textContent = `Spencer has ${Spencer.coconuts} coconuts! He's prepared!`
    num = 1;
  }else if (Spencer.coconuts === 4){
    trollModalGuts.textContent = `Spencer has ${Spencer.coconuts} coconuts! His chances are good!`
    num = .75;
  }else if (Spencer.coconuts === 3){
    trollModalGuts.textContent = `Spencer only has ${Spencer.coconuts} coconuts! His chances aren't very good!`
    num = .5;
  }else if (Spencer.coconuts === 2){
    trollModalGuts.textContent = `Spencer only has ${Spencer.coconuts} coconuts! His chances aren't very good!`
    num = .25;
  } else {
    trollModalGuts.textContent = `Spencer only has ${Spencer.coconuts} coconut! He's done-zo!`
    num = .01;
  }
  trollModal.style.visibility = 'visible';
  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    battleSuccess(num);
  }
}
// Battle Result
const battleSuccess = (num) => {
  stopTroll();
  trollModal.style.visibility = 'visible';
  if((Math.random()) <= num){
    trollModalGuts.textContent = `Spencer defeated ${Master.name}, the Master Troll! Now he can live out the rest of his days on this island in ${Master.name}'s den with unlimited water, food and sanity! :) `;
    trollButton.onclick = function(){
      trollModal.style.visibility = 'hidden';
      easyliving();
    }
    easyliving = () => {
    trollModal.style.visibility = 'visible';
    trollModalGuts.textContent = "Oh, and don't forget about the rum! YUM!"
    trollButton.style.color = 'transparent';
    setTimeout(theEnd, 2 * 1000);
    }
  }
  else {
    trollModalGuts.textContent = `Do'H! Master Troll ${Master.name} defeated Spencer`;
    trollButton.onclick = function(){
      trollModal.style.visibility = 'hidden';
      Spencer.coconuts = 0;
      Spencer.saneness();
      console.log("make it to 643")
      whatToDo3();
    }
  }
}

const closeTrollModal = () => {
  trollModal.style.visibility = 'hidden';
}
const openTrollModal = () => {
  trollModal.style.visibility = 'visible';
}
// The End!
const theEnd = () => {
  bubble.innerHTML = textContent = `"The End!"`
  openBubble();
  createRestartButton();
}
// Clicking Function ################################################################################################  CLICKING Functions
// Clicked Drink Coconut
const clickedDrink= () => {
  coconutThing.style.visibility ='hidden';
  bubble2.style.visibility = 'hidden';
  bubble.textContent = `"Mmmmmmm"`;
  openBubble();
  hideRightCorner();
  drink = () => {
    Spencer.drink(1);
    whatToDo3();
  }
  setTimeout(drink, 1 * 1000);
}
// Clicked Save Coconut for later
const clickedSaveForLater= () => {
    coconutThing.style.visibility ='hidden';
    bubble2.style.visibility = 'hidden';
  // dontDrink = () => {
    hideRightCorner();
    bubble.textContent = `"I'm saving this coconut for the sneaky island trolls."`;
    openBubble();
    Spencer.coconutInventory(1);
    console.log("line523")
    openRightCorn = () =>{
      whatToDo3();
    }
    setTimeout(openRightCorn, 3 * 1000);
  // }
  // setTimeout(dontDrink, 1 * 1000);
}
// Clicked Keep Searching For Food
const clickedKeepSearchingForFood = () => {
  Spencer.searchPerDayCount(1);
  activateWalker();
  searchForFood();
};
// Clicked Keep Searching For Water
const clickedKeepSearchingForWater = () => {
  Spencer.searchPerDayCount(1);
  activateWalker();
  searchForWater();
};
// Clicking on Return to Camp...set prob of making it back
const clickedReturnToCamp = () => {
  activateWalker();
  hideRightCorner();
  probFunction = () =>{
    if(Spencer.searchCount === 3){
      console.log("searchcount 3")
      bubble.textContent = `"Time to return to camp...I hope I can find my way back..."`;
      openBubble();
      setTimeout(makeItBackProbability, 5*1000, .50);
    } else if(Spencer.searchCount === 4){
      console.log("searchcount 4")
      background.style.backgroundImage = "url(./img/Game_Background_Dark.png)";
      bubble.textContent = `"I have to head back to camp! I can't see a thing!...I hope I can find my way back..."`;
      openBubble();
      setTimeout(makeItBackProbability, 5*1000, .25);
    } else if (Spencer.searchCount < 3){
      console.log("searchcount 1-2")
      bubble.textContent = `"I'm going back to camp to relax...I didn't go far, I know the way"`;
      openBubble();
      setTimeout(makeItBackProbability, 5*1000, 1);
    } else {
      console.log("510 return to camp prob doesnt work")
    }
  }
  setTimeout(probFunction, 1 * 1000);
};
// calcaulate prob of making it back and showing results
const makeItBackProbability = (num) => {
  if((Math.random()) <= num){
    pauseWalker();
    walking.style.visibility = 'hidden';
    rotatingModalGuts.textContent = "He made it back to camp!\n Time to chill.";
    rotatingModal.style.visibility = 'visible';
    // background.style.backgroundImage = "url('../images/Game_Background_Dark.png')";
    nightTimeScene();
  } else{
    pauseWalker();
    walking.style.visibility = 'hidden';
    rotatingModalGuts.textContent = "Spencer tried making his way back but got lost :( \n He has to sleep on the road! Spencer loses a level of sanity! Oh no!";
    rotatingModal.style.visibility = 'visible';
    nightTimeScene();
    if(Spencer.sanity <=1){
      deathText.textContent = 'Spencer DIED!! Too many nights away from camp killed him!'
      died();
    } else if(Spencer.sanity > 1) {
      Spencer.saneness(1);
    } else {
      console.log("650 doesn work")
    }
  }
};
//Shows night time scence
const nightTimeScene = () => {
  closeButton.onclick = function () {
  rotatingModal.style.visibility = 'hidden';
  hideRightCorner();
  newDayButton();
  };
};
// new day button displays
const newDayButton  = () => {
  background.style.backgroundImage = "url(./img/Game_Background_Dark.png)";
  document.querySelector('#open-button').style.visibility = 'visible';
  openButton.style.zIndex = '7';
  openButton.onclick = function () {
    document.querySelector('#open-button').style.visibility = 'hidden';
    newDay();
  }
};
// New day
const newDay = () => {
  background.style.backgroundImage = "url(./img/Game_Background_43.png)";
  resetWalker();
  console.log("should go to conteent whea to do today")
  Spencer.timePasses(1);
  whatToDoToday();
};
//####################################################
// Open's Spencer Bubble
const openBubble = () => {
  bubble.style.visibility = 'visible';
  closeBubble = () => {
    bubble.style.visibility = 'hidden';
  }
  setTimeout(closeBubble, 3 * 1000);
}
// openBubble2 = () => {
//   bubble2.style.visibility = 'visible';
//   closeBubble = () => {
//     bubble2.style.visibility = 'hidden';
//   }
//   setTimeout(closeBubble, 3 * 1000);
// }

//This resets the walker
const resetWalker = () => {
  walking.classList.remove("walking");
  walking.offsetWidth = walking.offsetWidth;
  walking.classList.add("walking");
  walking.style.animationPlayState = 'paused';

  background.classList.remove("back");
  backgroundoffsetWidth = walking.offsetWidth;
  background.classList.add("back");
  background.style.animationPlayState = 'paused';
};
//this starts walker
const activateWalker = () => {
  walking.style.visibility = 'visible';
  walking.style.animationPlayState = 'running';
  background.style.animationPlayState = 'running';
};
//this stops walker
const pauseWalker = () => {
  walking.style.animationPlayState = 'paused';
  background.style.animationPlayState = 'paused';
};
//reset troll
const resetTroll = () => {
  trollWalking.classList.remove("troll");
  trollWalking.offsetWidth = walking.offsetWidth;
  trollWalking.classList.add("troll");
  trollWalking.style.animationPlayState = 'paused';
};
//this starts troll
const startTroll = () => {
  trollWalking.style.animationPlayState = 'running';
  trollWalking.style.visibility = 'visible';
}
//this stops troll
const stopTroll = () => {
  trollWalking.style.animationPlayState = 'paused';
  trollWalking.style.visibility = 'hidden';
}

/* =============================
EVENT LISTENERS
============================= */
const waterButton = document.querySelector('#water-button');
waterButton.onclick = searchForWater;
waterButton.addEventListener('click', activateWalker);

const foodButton = document.querySelector('#food-button');
foodButton.onclick = searchForFood;
foodButton.addEventListener('click', activateWalker);

aButtonEl.onclick = activateWalker;
keepSearchingForDrink.onclick = activateWalker;

trollButton.onclick = function() {
  trollModal.style.visibility = 'hidden';
};

// starts the game
modalButton.onclick = function() {
  toggleClass(modal, 'open');
  instructionsModal();
}

//restarts game
const restartStory = () => {
  rotatingModal.style.visibility = 'hidden';
  dead.style.visibility = 'hidden';
  deathText.textContent = "";
  trollModal.style.visibility = 'hidden';
  trollButton.style.color = 'purple';
  modalButton.style.visibility = 'visible';
  modal.style.visibility = 'visible';
  waterEl.innerHTML = 5;
  Spencer.water = 5;
  foodEl.innerHTML = 5;
  Spencer.food = 5;
  sanityEl.innerHTML = 5;
  Spencer.sanity = 5;
  coconutsEl.innerHTML = 0;
  Spencer.coconuts = 0;
  trollsEl.innerHTML = 0;
  Spencer.crittersDefeated = 0;
  dayEl.innerHTML = 1;
  Spencer.day = 1;
  Spencer.searchCount = 1;
  resetWalker();
  background.style.backgroundImage = "url(./img/Game_Background_43.png)";
  modalButton.onclick = function() {
    modalButton.style.visibility = 'hidden';
    modal.style.visibility = 'hidden';
    instructionsModal();
  }
};

//create restart button and what happens when you click it
const createRestartButton = () => {
  restartButton.setAttribute('id', 'restart-button');
  restartButton.innerHTML = "Restart Spencer's Story";
  asideR.appendChild(restartButton);
  restartButton.style.visibility = 'visible';
  document.querySelector('.stats-container').style.visibility = 'hidden';
  restartButton.onclick = function() {
    restartButton.style.visibility = 'hidden';
    restartStory();
  }
}

//when Spencer dies
const died = () =>{
  trollModalGuts.textContent = "";
  walking.style.visibility = 'hidden';
  dead.style.visibility = 'visible';
  trollModal.style.visibility = 'visible';
  rightCorner.style.visibility = 'hidden';
  trollButton.style.color = 'transparent';
  createRestartButton();
}







console.log("word up");
