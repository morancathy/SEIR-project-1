/* ======================
Man on an Island
=========================*/
// "use strict";

/* ======================
CACHED DOM NODES
=========================*/
const menuEl = document.querySelector('div.right-corner > aside.instructions > div.what-to-do-menu');
const asidePEl = document.querySelector('div.right-corner > aside.instructions > p');
const modalButton = document.querySelector('div.modal > button.start-button');
const modal = document.querySelector('div.modal');
const mainEl = document.querySelector('.main');
const imgEl = document.createElement('img');
const modal2El = document.querySelector('div.modal2');
const span = document.querySelector('span.close');
const rightCorner = document.querySelector('.right-corner');
const asideR = document.querySelector('.asideR');
const asideRPEl = document.querySelector('.asideR > p.food-intro');
const asideRElement2 = document.querySelector('div.asideR > p.result');         //can prob delete
const skyEl = document.querySelector('.sky');
const keepSearchingButton = document.querySelector('div.right-corner > aside.instructions > button')
const warningEl = document.querySelector('div.popup > p.content')
const popupEl = document.querySelector('div.sky > div.popup-trigger')
const drinkButtonEl = document.createElement('button');
const saveButtonEl = document.createElement('button');
//variables for rotating modal2
const rotatingModal = document.querySelector("div.sky > div.rotating-modal");
const closeButton = document.querySelector("#close-button");
const trollModal = document.querySelector("div.sky > div.troll-modal");
const trollButton = document.querySelector("div.sky > div.troll-modal > button.troll-modal-button");
const trollModalGuts = document.querySelector("div.sky > div.troll-modal > div.troll-modal-guts > p.p1");
// const trollModalGuts2 = document.querySelector("div.sky > div.troll-modal > div.troll-modal-guts > p.p2");

const openButton = document.querySelector("#open-button");
const rotatingModalGuts = document.querySelector('div.sky > div.rotating-modal > div.rotating-modal-guts > p');

const dayEl = document.querySelector('div.header > div.day');
const waterEl = document.querySelector('div.header > div.water-level');
const foodEl = document.querySelector('div.header > div.food-level');
const sanityEl = document.querySelector('div.header > div.sanity-level');
const coconutsEl = document.querySelector('div.header > div.coconuts-level');
const ropeEl = document.querySelector('div.header > div.rope-level');
const bambooEl = document.querySelector('div.header > div.bamboo-level');
const trollsEl = document.querySelector('div.header > div.trolls-level');
const walking = document.querySelector('div.path > div.walking');
// const fishEl = document.querySelector('div.asideR > div.fish');
const background = document.querySelector('.grid-container > div.back')
const bubble = document.querySelector('.bubble');
const skyH3 = document.querySelector('.sky > h3.h3')
console.log(skyH3)
const deathText = document.querySelector("div.sky > div.troll-modal > div.troll-modal-guts > p.p2");
/* ======================
CREATE Spensor and Master Troll
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
      trollModalGuts.textContent = "";
      deathText.textContent = 'SPENSOR DIED OF THIRST!!!!'
      trollModal.style.visibility = 'visible';
      trollButton.style.visibility = 'hidden';
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
      trollModalGuts.textContent = "";
      deathText.textContent = 'SPENSOR DIED OF HUNGER!!!!'
      trollModal.style.visibility = 'visible';
      trollButton.style.visibility = 'hidden';
    }
  }

  saneness(num){
    this.sanity -= num;
    sanityEl.innerHTML = this.sanity;
    if(this.sanity <= 0){
      trollModalGuts.textContent = "";
      deathText.textContent = 'SPENSOR DIED!! DARN TROLLS KILLED HIM'
      trollModal.style.visibility = 'visible';
      trollButton.style.visibility = 'hidden';
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
const Spensor = new Hero("Spensor", 5, 5, 5, 0, 0, 0, 1, 1, 0);
// Spensor.coconuts = 12;
class Enemy {
  constructor(name, health){
    this.name = name;
    this.health = health;
  }
  healthy(){
  }
}
const Master = new Enemy("Arthur Bernier", 5)

class Critter extends Enemy{
  constructor(name, health){
    super(name, health);
  }
  healthy(){
  }
}
const Critter1 = new Critter("Sarah Moe", 1);
const Critter2 = new Critter("Jamie McMorran", 1);
const Critter3 = new Critter("Jason Hargrove", 1);
const Critter4 = new Critter("Christopher Traylor", 1);
const Critter5 = new Critter("John Malhinha", 1);
const Critter6 = new Critter("Sachiyo Sugaya", 1);
const Critter7 = new Critter("Yulia Penyevskaya", 1);
const Critter8 = new Critter("Brayan Santos", 1);
const Critter9 = new Critter("Amit Nema", 1);
const Critter10 = new Critter("Luke Stocker", 1);
const Critter11 = new Critter("Jason Chartier", 1);
const Critter12 = new Critter("Jason Tighe", 1);
const Critter13 = new Critter("Lilia Salas", 1);
const Critter14 = new Critter("Frank Garcia", 1);
const Critter15 = new Critter("Neet Khangura", 1);
const trollArray = [Critter1, Critter2, Critter3, Critter4, Critter5, Critter6, Critter7, Critter8, Critter9, Critter10, Critter11, Critter12, Critter13, Critter14, Critter15];
/* ======================
GLOBAL VARS
=========================*/
// let coconuts = (Math.floor(Math.random() * (3-1) + 1));
let coconuts = 1;
let bamboo = (Math.floor(Math.random() * (6-3) + 3));
let rope = (Math.floor(Math.random() * (3-1) + 1));
let foodArray = ["Spensor found a nice rock. Let's see what we have under here...", "Ooou, a watering hole. Let's try to fish!",
"Spensor heard a couple mongrolls last night. He think's it's best he set a trap.", "Awww maaann. Spensor's been walking for hours and he's come up empty handed.",
"OH NO! A nasty troll!"];
let waterArray = [`Sweet!\nFound a delicious, refreshing coconuts!`, "Awww maaann. Spensor's been walking for hours and he's come up empty handed.",
"OH NO! A nasty troll!"];

const aEl = document.createElement('A');
const returnToCampButton = document.createElement('button');
const returnToCampButton2 = document.createElement('button');
const aButtonEl = document.createElement('button');
const keepSearchingForDrink = document.createElement('button');
/* =============================
FUNCTIONS
============================= */
//toggle function
const toggleClass = (node, className) => {
  node.classList.toggle(className)
}

//hides buttons
hideWhatToDoButtons = () => {
  document.querySelector('#water-button').style.visibility = 'hidden';
  document.querySelector('#food-button').style.visibility = 'hidden';
  document.querySelector('#supplies-button').style.visibility = 'hidden';
}
//show buttons
showWhatToDoButtons = () => {
  document.querySelector('#water-button').style.visibility = 'visible';
  document.querySelector('#food-button').style.visibility = 'visible';
  document.querySelector('#supplies-button').style.visibility = 'visible';
}
// opens instructions modal
const instructionsModal = () =>{
  toggleClass(modal2El, 'open');
  span.onclick = function(){
  modal2El.style.display = 'none';
  // contentWhatToDoToday();
  whatToDoToday();
  walking.style.visibility = 'visible';
  dayEl.innerHTML = `Day: ${Spensor.day}`;
}}
//Displays right-corner ("what should spensor do today")
const displayRightCorner = () => {
  rightCorner.style.zIndex = '15';
  rightCorner.style.visibility = 'visible';
}
//Hides right-corner ("what should spensor do today")
const hideRightCorner = () => {
  console.log("does 191 work")
  rightCorner.style.zIndex = '0';
  asidePEl.style.zIndex = '0';
  rightCorner.style.visibility = 'hidden';
}
//Displays asideR (hunting options)
const displayAsideR = () => {
  asideR.style.zIndex = '15';
}
//Hides asideR (hunting options)
const hideAsideR = () => {
  asideR.style.zIndex = '0';
}

//creates main button contents of right-corner ("What should spensor do today")
contentWhatToDoToday = () => {
  let toDoButtons = [
    {text: 'Search for water', id: 'water-button'},
    {text: 'Search for food', id: 'food-button'},
    {text: 'Search for supplies', id: 'supplies-button'},
    ];
  for(let bananas of toDoButtons){
    const buttonEl = document.createElement('button');
    buttonEl.setAttribute('id', bananas.id);
    buttonEl.innerHTML = bananas.text;
    menuEl.appendChild(buttonEl);
  }
}
contentWhatToDoToday();
// displays content What Should Spensor Do Today -gets called each day
whatToDoToday = () => {
  displayRightCorner();
  asidePEl.textContent = "What should Spensor do today?";
  showWhatToDoButtons();
};
//What should Spensor Do Next --FOOD  ################################################################### WHAT TO DO2
// whatToDo2 = () =>{
//   if(Spensor.searchCount <= 3){
//     displayRightCorner();
//     asidePEl.textContent = "What should Spensor do now?";
//     aButtonEl.setAttribute('id', 'keep-searching-button');
//     aButtonEl.textContent = "Keep Searching for Food";
//     asidePEl.appendChild(aButtonEl);
//     aButtonEl.onclick = clickedKeepSearchingForFood;
//     console.log("should wait till click keepsearching")
//
//     returnToCampButton.setAttribute('id', 'return-to-camp-button');
//     returnToCampButton.innerHTML = "Return to Camp";
//     asidePEl.appendChild(returnToCampButton);
//     returnToCampButton.onclick = clickedReturnToCamp;
//     console.log("should wait till click return to camp")
//
//   } else if (Spensor.searchCount > 3){
//     console.log("It's pitch black! I hope Spensor can make it back")
//     clickedReturnToCamp();
//   } else {
//     console.log("broke...what to do 2..288")
//   }
// }

//What should Spensor Do Next --DRINK  ################################################################### WHAT TO DO3


whatToDo3 = () =>{
  if(Spensor.searchCount <= 3){
    displayRightCorner();
    asidePEl.textContent = "What should Spensor do now?";

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

    returnToCampButton2.setAttribute('id', 'return-to-camp-button2');
    returnToCampButton2.innerHTML = "Return to Camp";
    asidePEl.appendChild(returnToCampButton2);
    returnToCampButton2.onclick = clickedReturnToCamp;
    console.log("wait to click return to camp(drink)")
    // displayright-corner();
  } else if (Spensor.searchCount > 3){
    console.log("It's pitch black! I hope Spensor can make it back")          //maybe dont do this right away
    clickedReturnToCamp();
  } else {
    console.log("broke...what to do 3..314")
  }
}

//###################################################################################################  Water Functions
searchForWater = () => {
          //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?
          //text on screen "you found x coconuts" while page shows spensor next to the item celebrating
  hideWhatToDoButtons();
  hideRightCorner();
  openBubble();

  if(Spensor.searchCount <= 2){
    bubble.textContent = "Great choice! Happy Coconuts!"; //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?
  } else if (Spensor.searchCount === 3){
    bubble.textContent = "It's getting darker, but there's gotta be coconuts somewhere.";

  } else if (Spensor.searchCount === 4){
    background.style.backgroundImage = "url(../images/beach-dusk.png)";
    bubble.textContent = "This is the last time Spensor can search before it's pitch black.\nI hope this is worth it!"
  } else {
    console.log("spensor has searched too many times. i shouldnt see this. 298")
  }
  setTimeout(waterSeachActivity, 3 * 1000);
};

waterSeachActivity = () => {
  pauseWalker();

  let waterArrayChoice = `"${waterArray[Math.floor(Math.random() * waterArray.length)]}"`;
  console.log(waterArrayChoice);

  trollModalGuts.textContent = waterArrayChoice;
  trollModal.style.visibility = 'visible';

  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    waterSearchResult();
  }
  waterSearchResult = () => {
    if(waterArrayChoice === `"${waterArray[0]}"`) {
      console.log("found coconuts")
      foundCoconuts();
    } else if (waterArrayChoice === `"${waterArray[1]}"`) {
        console.log("didnt find antyhing")
        whatToDo3();
    } else if (waterArrayChoice === `"${waterArray[2]}"`) {
        console.log("battle troll");
        battleTroll();
        // whatToDo3();
    } else {
      console.log("something is wrong with code")
    }
  }
  // waterSearchResult();
  // setTimeout(waterSearchResult, 3 * 1000);

};

foundCoconuts = () => {
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

  //side bar notation says "Coconuts can be used to defend yourself against nasty trolls" (But only the first time he comes across coconuts)

//###################################################################################################  Food Functions
searchForFood = () => {
  hideWhatToDoButtons();
  hideRightCorner();
  openBubble();
  skyH3.style.zIndex = '17';

  if(Spensor.searchCount <= 2){
    bubble.textContent = "Great choice! A hunting I will go!"; //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?
  } else if (Spensor.searchCount === 3){
    bubble.textContent = "It's getting darker, but I'm hungry.";
  } else if (Spensor.searchCount > 3){
    background.style.backgroundImage = "url(../images/beach-dusk.png)";
    bubble.textContent = "Yikes! This is the last time I can search before it's pitch black.\nI hope this is worth it!"
  } else {
    console.log("spensor has searched too many times. i shouldnt see this. 298")
  }
  setTimeout(foodSeachActivity, 3 * 1000);
};

foodSeachActivity = () => {
  pauseWalker();

  let foodArrayChoice = `"${foodArray[Math.floor(Math.random() * foodArray.length)]}"`;
  trollModalGuts.textContent = foodArrayChoice;
  trollModal.style.visibility = 'visible';

  trollButton.onclick = function(){
      trollModal.style.visibility = 'hidden';
      foodSearchResult();
    }

  foodSearchResult = () =>{
    if(foodArrayChoice === `"${foodArray[0]}"`){
      bugProbability(Math.random());
    }else if (foodArrayChoice === `"${foodArray[1]}"`) {
      fishProbability(Math.random());
    } else if (foodArrayChoice === `"${foodArray[2]}"`) {
      trapProbability(Math.random());
    } else if (foodArrayChoice === `"${foodArray[3]}"`) {
      whatToDo3();
    } else if (foodArrayChoice === `"${foodArray[4]}"`) {
      battleTroll();
    } else {
      console.log("something is wrong with code")
    }
  }
  // setTimeout(foodSearchResult, 2 * 1000);
};

bugProbability = (num) => {
  trollModal.style.visibility = 'visible';
  if(num <= .75){
    trollModalGuts.textContent = "Score!\nThis handfull of bugs and worms provides a half serving of food!";
    Spensor.eat(.5);
  } else {
    trollModalGuts.textContent = "Shucks. Didn't find anything.";
  }
  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    // displayRightCorner();
    whatToDo3();
  }
  // closeSky =() =>{
  //   trollModal.style.visibility = 'hidden';
  // }
  // setTimeout(closeSky, 4 * 1000);
};

fishProbability = (num) => {
  trollModal.style.visibility = 'visible';
  // trollButton.onclick = function(){
  //     trollModal.style.visibility = 'hidden';
  //   }
  if(num <= .50){
    trollModalGuts.textContent= "Spensor caught a fish!\nThis provides a full serving of food!";
    // fishEl.style.visibility ='visible';
    Spensor.eat(1);
  } else {
    trollModalGuts.textContent = "Shucks. Didn't find anything.";
  }
  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    // displayRightCorner();
    whatToDo3();
  }
  // closeSky =() =>{
  //   trollModal.style.visibility = 'hidden';
  // }
  // setTimeout(closeSky, 4 * 1000);

};

trapProbability = (num) => {
  trollModal.style.visibility = 'visible';
  if(num <= .50){
    trollModalGuts.textContent = "Hard work pays off.\nHe caught an island crittert!\nThis provides 2 servings of food!";
    Spensor.eat(2);
  } else {
    trollModalGuts.textContent = "Shucks. Didn't find anything.";
  }

  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    // displayRightCorner();
    whatToDo3();
  }
};
//##############################################################################  TROLL Functions
// Battle Troll
battleTroll = () => {
  const troll = (trollArray[Math.floor(Math.random() * trollArray.length)]);

  if(Spensor.coconuts < 1){
    hideRightCorner();
    bubble.innerHTML = "I have no coconuts to defend myself!"
    openBubble();

    trollID =() =>{
      trollModalGuts.textContent = `"It's island troll ${troll.name}!"`
      trollModal.style.visibility = 'visible';
      trollButton.onclick = function(){
        trollModal.style.visibility = 'hidden';
        kickedMe();
        setTimeout(loseSanityTime, 4 * 1000);
      }
    }
    setTimeout(trollID, 3 * 1000);

    kickedMe = () => {
      bubble.innerHTML = `"${troll.name} kicked me!"`;
      openBubble();
    }

    loseSanityTime = () => {
      trollModal.style.visibility = 'visible';
      trollModalGuts.textContent ="Spensor loses a level of sanity.";
      console.log("525")
      trollButton.onclick = function(){
        trollModal.style.visibility = 'hidden';
        Spensor.saneness(1);
        if(Spensor.sanity > 1){
          whatToDo3();
        }
      }
    }
  } else if(Spensor.coconuts >= 1){
      hideRightCorner();
      bubble.innerHTML = textContent = `It's island troll ${troll.name}! Time to attack um'!"`
      openBubble();

      timePass2 =() =>{
        trollModalGuts.textContent = `Spensor threw a coconut at ${troll.name} and scared um' off.\nPhew, that was close.`;
        openTrollModal();
      }
      setTimeout(timePass2, 3 * 1000);

      trollButton.onclick = function() {
        console.log("524")
        trollModal.style.visibility = 'hidden';
        Spensor.coconutInventory(-1);
        Spensor.trolls();
        trollCheck();
      };
  }else{
    console.log("coconut function to attack trolls is broken");
  }
}
// Check Number of Trolls Defeated
trollCheck = () => {
  if(Spensor.crittersDefeated % 5 === 0){
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
masterTrollAttacks = () => {
  hideRightCorner();
  trollModalGuts.textContent = `"I am the Master Troll of this island. You defeated 5 of my top trolls."`
  trollModal.style.visibility = 'visible';

  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    trollOffer();
  }

  trollOffer = () => {
    trollModalGuts.textContent = `"If you can defeat me, I'll let you have my rum."`
    trollModal.style.visibility = 'visible';
    trollButton.onclick = function(){
        trollModal.style.visibility = 'hidden';
        bubble.textContent = "I'll fight you! I want a mojito!"
        openBubble()
        setTimeout(battleProbability, 2 * 1000);
    }
  }
};
// Battle Probability ...based on # of coconuts
battleProbability = () => {
  let num = 0;
  if(Spensor.coconuts > 5){
    trollModalGuts.textContent = `Spensor has ${Spensor.coconuts} coconuts! He's prepared!`
    num = 1;
  }else if (Spensor.coconuts === 4){
    trollModalGuts.textContent = `Spensor has ${Spensor.coconuts} coconuts! His chances are good!`
    num = .75;
  }else if (Spensor.coconuts === 3){
    trollModalGuts.textContent = `Spensor only has ${Spensor.coconuts} coconuts! His chances aren't very good!`
    num = .5;
  }else if (Spensor.coconuts === 2){
    trollModalGuts.textContent = `Spensor only has ${Spensor.coconuts} coconuts! His chances aren't very good!`
    num = .25;
  } else {
    trollModalGuts.textContent = `Spensor only has ${Spensor.coconuts} coconut! He's done-zo!`
    num = .01;
  }
  trollModal.style.visibility = 'visible';
  trollButton.onclick = function(){
    trollModal.style.visibility = 'hidden';
    battleSuccess(num);
  }
}
// Battle Result
battleSuccess = (num) => {
  trollModal.style.visibility = 'visible';
  if((Math.random()) <= num){
    trollModalGuts.textContent = "Spensor defeated the Master Troll! Now he can live out the rest of his days on this island in the Master Troll's den. Unlimted water, food and sanity! :) ";
    trollButton.onclick = function(){
      trollModal.style.visibility = 'hidden';
      easyliving();
    }
    easyliving = () => {
    trollModal.style.visibility = 'visible';
    trollModalGuts.textContent = "Oh, and don't forget about the rum! YUM!"
    trollButton.style.visibility = 'hidden';

    setTimeout(theEnd, 2 * 1000);
    }
  }
  else {
    trollModalGuts.textContent = "DoH! The Master Troll defeated Spensor";
    trollButton.onclick = function(){
      trollModal.style.visibility = 'hidden';
      Spensor.coconuts = 0;
      Spensor.saneness();
      console.log("make it to 643")
      whatToDo3();
    }
  }
}

closeTrollModal = () => {
  trollModal.style.visibility = 'hidden';
}
openTrollModal = () => {
  trollModal.style.visibility = 'visible';
}
// The End!
theEnd = () => {
  bubble.innerHTML = textContent = `The End!"`
  openBubble();
    //insert pic of celbrating
}
//##############################################################################  CLICKING Functions
// Clicked Keep Searching For Food
clickedKeepSearchingForFood = () => {
  Spensor.searchPerDayCount(1);
  activateWalker();
  searchForFood();
};
// Clicked Keep Searching For Water
clickedKeepSearchingForWater = () => {
  Spensor.searchPerDayCount(1);
  activateWalker();
  searchForWater();
};
// Clicking on Return to Camp...set prob of making it back
clickedReturnToCamp = () => {
  probFunction = () =>{
    if(Spensor.searchCount === 3){
      console.log("searchcount 3")
      bubble.textContent = "Time to return to camp...I hope I can find my way back...";
      openBubble();
      setTimeout(makeItBackProbability, 5*1000, .50);
    } else if(Spensor.searchCount === 4){
      console.log("searchcount 4")
      // background.style.backgroundImage = "url('../images/beach-night.png')";
      bubble.textContent = "Yikes! It's pitch black!...I hope I can find my way back...";
      openBubble();
      setTimeout(makeItBackProbability, 5*1000, .25);
    } else if (Spensor.searchCount < 3){
      console.log("searchcount 1-2")
      bubble.textContent = "I'm going back to camp to relax...I hope I can find my way...";
      openBubble();
      setTimeout(makeItBackProbability, 5*1000, 1);
    } else {
      console.log("510 return to camp prob doesnt work")
    }
  }
  setTimeout(probFunction, 1 * 1000);
};
// calcaulate prob of making it back and showing results
makeItBackProbability = (num) => {
    if((Math.random()) <= num){
      rotatingModalGuts.textContent = "He made it back to camp!\n Time to chill.";
      rotatingModal.style.visibility = 'visible';
      nightTimeScene();
    } else{
      rotatingModalGuts.textContent = "Spensor tried making his way back but got lost :( \n He has to sleep on the road! Spensor loses a level of sanity! Oh no!";
      rotatingModal.style.visibility = 'visible';
      nightTimeScene();
      if(Spensor.sanity <=1){
        trollModalGuts.textContent = "";
        deathText.textContent = 'SPENSOR DIED!! Too many nights away from camp killed him!'
        trollModal.style.visibility = 'visible';
        trollButton.style.visibility = 'hidden';
      } else if(Spensor.sanity > 1) {
        Spensor.saneness(1);
      } else {
        console.log("650 doesn work")
      }
    }
};
//Shows night time scence
nightTimeScene = () => {
  closeButton.onclick = function () {
  rotatingModal.style.visibility = 'hidden';
  hideRightCorner();
  // mainEl.style.zIndex = '6';
  // background.style.backgroundImage = "url('../images/beach-night.png')";
  newDayButton();
  };
};
// new day button displays
newDayButton  = () => {
  document.querySelector('#open-button').style.visibility = 'visible';
  openButton.style.zIndex = '7';
  openButton.onclick = function () {
    document.querySelector('#open-button').style.visibility = 'hidden';
    newDay();
  }
};
// New day
newDay = () => {
  // openButton.style.zIndex = '5';
  background.style.backgroundImage = "url(../images/beach-day.png)";
  resetWalker();
  console.log("should go to conteent whea to do today")
  Spensor.timePasses(1);
  whatToDoToday();
};
//####################################################

// searchForSupplies = () => {
//
// }

clickedDrink= () => {
  bubble.textContent = "Mmmmmmm";
  openBubble();
  hideRightCorner();
  drink = () => {
    Spensor.drink(1);
    whatToDo3();
  }
  setTimeout(drink, 1 * 1000);
}

clickedSaveForLater= () => {
  // dontDrink = () => {
    hideRightCorner();
    bubble.textContent = "I'm saving this coconut for the sneaky island trolls.";
    openBubble();
    Spensor.coconutInventory(1);
    console.log("line523")
    openRightCorn = () =>{
      whatToDo3();
    }
    setTimeout(openRightCorn, 3 * 1000);
  // }
  // setTimeout(dontDrink, 1 * 1000);
}

openBubble = () => {
  bubble.style.visibility = 'visible';
  closeBubble = () => {
    bubble.style.visibility = 'hidden';
  }
  setTimeout(closeBubble, 3 * 1000);
}

/* =============================
EVENT LISTENERS
============================= */

//This restarts the walker
resetWalker = () => {
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
activateWalker = () => {
  walking.style.visibility = 'visible';
  walking.style.animationPlayState = 'running';
  background.style.animationPlayState = 'running';
};
//this stops walker
pauseWalker = () => {
  walking.style.animationPlayState = 'paused';
  background.style.animationPlayState = 'paused';
};

const waterButton = document.querySelector('#water-button');
waterButton.onclick = searchForWater;
waterButton.addEventListener('click', activateWalker);
// waterButton.onclick = activateWalker;
const foodButton = document.querySelector('#food-button');
foodButton.onclick = searchForFood;0
foodButton.addEventListener('click', activateWalker);
// foodButton.onclick = activateWalker;
aButtonEl.onclick = activateWalker;
keepSearchingForDrink.onclick = activateWalker;
// document.querySelector('#supplies-button').addEventListener('click',searchForSupplies);
// document.querySelector('#supplies-button').addEventListener('click',activateWalker);
///need to make a keep searching for supplies button

modalButton.addEventListener('click', (e) =>{  //if i push this in event listeners, it doesnt work. why?
  toggleClass(modal, 'open');                   //starts the game
  instructionsModal();
})

trollButton.onclick = function() {
  trollModal.style.visibility = 'hidden';
};








console.log("word up");
