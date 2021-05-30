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
    this.bamboo = bamboo;skyH3
    this.rope = rope;
    this.searchCount = searchCount;
    this.day = day;
    this.crittersDefeated = crittersDefeated;
  }

  drink(num){
    this.water += num;
    waterEl.innerHTML = this.water;
  }

  eat(num){
    this.food = this.food + num;
    foodEl.textContent = this.food;

  }

  saneness(num){
    this.sanity = this.sanity - num;
    sanityEl.innerHTML = this.sanity;
  }

  coconutInventory(num){
    this.coconuts = this.coconuts + num;
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
    this.day = this.day + num;
    this.updateDayCount();
    this.searchCount = 1;
  }

  updateDayCount(){
    console.log("made it to time passes");
    dayEl.innerHTML = `Day: ${this.day}`;
    this.eat(-1);
    this.drink(-1);
  }


  digForBugs(){

  }

  fish(){

  }

  setTrap(){

  }

  buildShelter() {

  }
}
const Spensor = new Hero("Spensor", 5, 5, 5, 0, 0, 0, 1, 1, 0);

class Enemy {
  constructor(name, health){
    this.name = name;
    this.health = health;
  }

  healthy(){

  }
}
const Master = new Enemy("Master", 5)

class Critter extends Enemy{
  constructor(name, health){
    super(name, health);
  }
  healthy(){

  }
}
const Critter1 = new Critter("Critter1", 1);
const Critter2 = new Critter("Critter2", 1);
const Critter3 = new Critter("Critter3", 1);
const Critter4 = new Critter("Critter4", 1);
const Critter5 = new Critter("Critter5", 1);
const trollArray = [Critter1, Critter2, Critter3, Critter4, Critter5];

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
//When start button is clicked
// modalButton.addEventListener('click', (e) =>{  //if i push this in event listeners, it doesnt work. why?
//   toggleClass(modal, 'open');
//   instructionsModal();
// })
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
whatToDo2 = () =>{
  if(Spensor.searchCount <= 3){
    displayRightCorner();
    asidePEl.textContent = "What should Spensor do now?";
    // createWarningPopUp();                           //need to create an if statemet for just the first time
    aButtonEl.setAttribute('id', 'keep-searching-button');
    aButtonEl.textContent = "Keep Searching";
    aButtonEl.style.textDecoration = 'none';
    asidePEl.appendChild(aButtonEl);
    aButtonEl.addEventListener('click', clickedKeepSearchingForFood);
    console.log("should wait till click keepsearching")

    returnToCampButton.setAttribute('id', 'return-to-camp-button');
    returnToCampButton.innerHTML = "Return to Camp";
    asidePEl.appendChild(returnToCampButton);
    returnToCampButton.addEventListener('click', clickedReturnToCamp);
    console.log("should wait till click return to camp")
    // displayright-corner();
  } else if (Spensor.searchCount > 3){
    displayAsideR();
    console.log("It's pitch black! I hope Spensor can make it back")
    clickedReturnToCamp();
  } else {
    console.log("broke...what to do 2..288")
  }
}

//What should Spensor Do Next --DRINK  ################################################################### WHAT TO DO3
whatToDo3 = () =>{
  if(Spensor.searchCount <= 3){
    displayRightCorner();
    displayAsideR();   //will soon get rid of this, this is for food
    asidePEl.textContent = "What should Spensor do now?";

    keepSearchingForDrink.setAttribute('id', 'keep-searching-for-drink-button');
    keepSearchingForDrink.innerHTML = "Keep searching for coconuts";
    asidePEl.appendChild(keepSearchingForDrink);
    keepSearchingForDrink.addEventListener('click', clickedKeepSearchingForWater);
    console.log("wait to click search again for drink")

    returnToCampButton2.setAttribute('id', 'return-to-camp-button2');
    returnToCampButton2.innerHTML = "Return to Camp";
    asidePEl.appendChild(returnToCampButton2);
    returnToCampButton2.addEventListener('click', clickedReturnToCamp);
    console.log("wait to click return to camp(drink)")
    // displayright-corner();
  } else if (Spensor.searchCount > 3){
    displayAsideR();
    console.log("It's pitch black! I hope Spensor can make it back")          //maybe dont do this right away
    // asideRElement2.textContent = "It's pitch black! I hope Spensor can make it back";
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
  displayAsideR();
  // background.style.animationPlayState = 'running';
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

  trollButton.addEventListener("click", function(){
    // e.preventDefault();
    trollModal.style.visibility = 'hidden';
    waterSearchResult();
  })
  waterSearchResult = () => {
    if(waterArrayChoice === `"${waterArray[0]}"`) {
      console.log("found coconuts")
      // asideRPEl.textContent = waterArrayChoice;
      // asideRPEl.textContent = "Sweet! Found a delicious, refreshing coconut!"
      foundCoconuts();
      // whatToDo3();
    } else if (waterArrayChoice === `"${waterArray[1]}"`) {
        // asideRPEltextContent = waterArrayChoice;
        console.log("didnt find antyhing, does asideRPEL work?")
        whatToDo3();
    } else if (waterArrayChoice === `"${waterArray[2]}"`) {
        // asideRPEl.textContent = waterArrayChoice;
        console.log("did i make it to 370");
        battleTroll();
        whatToDo3();

    } else {
      console.log("something is wrong with code")
    }
  }
  // waterSearchResult();
  // setTimeout(waterSearchResult, 3 * 1000);

};

foundCoconuts = () => {
    displayRightCorner();
    // trollModal.style.visibility = 'hidden';
    // asideRPEl.textContent = "";
    asidePEl.textContent = "What would you like to do\nwith the coconut?";


    drinkButtonEl.setAttribute('id', 'drink-button');
    drinkButtonEl.innerHTML = "Drink";
    asidePEl.appendChild(drinkButtonEl);
    drinkButtonEl.addEventListener('click', clickedDrink);
  console.log("um")
    saveButtonEl.setAttribute('id', 'save-for-later-button');
    saveButtonEl.innerHTML = "Save for later";
    asidePEl.appendChild(saveButtonEl);
    saveButtonEl.addEventListener('click', clickedSaveForLater);
}

  //side bar notation says "Coconuts can be used to defend yourself against nasty trolls" (But only the first time he comes across coconuts)

//###################################################################################################  Food Functions
searchForFood = () => {
  hideWhatToDoButtons();
  hideRightCorner();
  displayAsideR();
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
  bubble.textContent = foodArrayChoice;
  openBubble();

  foodSearchResult = () =>{
    if(foodArrayChoice === `"${foodArray[0]}"`){
      bugProbability(Math.random());
    }else if (foodArrayChoice === `"${foodArray[1]}"`) {
      fishProbability(Math.random());
    } else if (foodArrayChoice === `"${foodArray[2]}"`) {
      trapProbability(Math.random());
    } else if (foodArrayChoice === `"${foodArray[3]}"`) {
        skyH3.textContent = foodArrayChoice;
        whatToDo2();
    } else if (foodArrayChoice === `"${foodArray[4]}"`) {
        skyH3.textContent = foodArrayChoice;
        battleTroll();
        whatToDo2();
    } else {
      console.log("something is wrong with code")
    }
  }
  setTimeout(foodSearchResult, 2 * 1000);
};

bugProbability = (num) => {
  if(num <= .75){
    skyH3.textContent = "Score!\nThis handfull of bugs and worms provides a half serving of food!";
    Spensor.eat(.5);
  } else {
    skyH3.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
};

fishProbability = (num) => {
  if(num <= .50){
    skyH3.textContent = "Spensor caught a fish!\nThis provides a full serving of food!";
    // fishEl.style.visibility ='visible';
    Spensor.eat(1);
  } else {
    skyH3.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
};

trapProbability = (num) => {
  if(num <= .50){
    skyH3.textContent = "Hard work pays off.\nHe caught an island crittert!\nThis provides 2 servings of food!";
    Spensor.eat(2);
  } else {
    skyH3.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
};
//###################################################################################################  TROLL Functions
battleTroll = () => {
  const troll = (trollArray[Math.floor(Math.random() * trollArray.length)]);

  if(Spensor.coconuts < 1){
    hideRightCorner();
    bubble.innerHTML = "Oh No! I have no coconuts to defend myself!"
    openBubble();

    timePass =() =>{
      bubble.textContent = `"${troll.name} kicked Spensor!\nSpensor loses a level of sanity."`;
      openBubble();
    }
    setTimeout(timePass, 3 * 1000);
    Spensor.saneness(1);
  } else if(Spensor.coconuts >= 1){
      trollModalGuts.textContent = `It's ${troll.name}! Attack!"`
      // toggleClass(rotatingModal, 'closed');
      openTrollModal();
      trollButton.addEventListener("click", function() {
        console.log("491")
        trollModal.style.visibility = 'hidden';
      });

      trollModalGuts.textContent = `Spensor threw a coconut at ${troll.name} and scared him off.\nPhew, that was close.`;
      openTrollModal();
      trollButton.addEventListener("click", function() {
        console.log("524")
        trollModal.style.visibility = 'hidden';
      });
      Spensor.coconutInventory(-1);
      Spensor.trolls();

  }else{
    console.log("coconut function to attack trolls is broken");
  }

  if(Spensor.crittersDefeated >= 5){
    masterTrollAttacks();
  }
}

masterTrollAttacks = () => {
  alert("Time to battle the Master Troll")
};

closeTrollModal = () => {
  trollModal.style.visibility = 'hidden';
}
openTrollModal = () => {
  trollModal.style.visibility = 'visible';
}

//###################################################################################################  CLICKING Functions
// Clicked Keep Searching For Food
clickedKeepSearchingForFood = () => {
  Spensor.searchPerDayCount(1);

  // if(Spensor.searchCount === 3){
  //   console.log(Spensor.searchCount + " :this is before 3rd time. It's getting darker...")//make it darker
  //   searchForFood();
  // } else if(Spensor.searchCount > 3){
  //   console.log(Spensor.searchCount + " :this is before 4th time. Yikes! I hope this is worth it!")
  //   searchForFood();
  // //sleeping on the road
  // } else{
      searchForFood();
};
// Clicked Keep Searching For Water
clickedKeepSearchingForWater = () => {
  Spensor.searchPerDayCount(1);

  if(Spensor.searchCount === 3){
    console.log(Spensor.searchCount + " :this is before 3rd time. It's getting darker...")//make it darker
    searchForWater();
  } else if(Spensor.searchCount > 3){
    console.log(Spensor.searchCount + " :this is before 4th time. Yikes! I hope this is worth it!")
    searchForWater();
  //sleeping on the road
  } else{
      searchForWater();
  }
};
// Clicking on Return to Camp...set prob of making it back
clickedReturnToCamp = () => {
  // asideRPEl.innerHTML = "Time to return to camp...I hope I can find my way..."
  probFunction = () =>{
    bubble.textContent = "Time to return to camp...I hope I can find my way...";
    openBubble();

    // toggleClass(rotatingModal, 'open');
    // asideRPEl.textContent = "";
    // displayAsideR();
    // asideRElement2.textContent = "Time to return to camp...I hope I can find my way..."
    // rotatingModalGuts.textContent = "Time to return to camp...I hope I can find my way..."  //this doesnt work

    // hideAsideR();

    if(Spensor.searchCount === 3){
      console.log("searchcount 3")
      setTimeout(makeItBackProbability, 5*1000, .50);
    } else if(Spensor.searchCount === 4){
      console.log("searchcount 4")
      setTimeout(makeItBackProbability, 5*1000, .25);
    } else if (Spensor.searchCount < 3){
      console.log("searchcount 1-2")
      setTimeout(makeItBackProbability, 5*1000, 1);
    } else {
      console.log("510 return to camp prob doesnt work")
    }
  }
  setTimeout(probFunction, 4 * 1000);
};
// calcaulate prob of making it back and showing results
makeItBackProbability = (num) => {
    hideAsideR();
    if((Math.random()) <= num){
      rotatingModalGuts.textContent = "He made it back to camp!\n Time to relax.";
      rotatingModal.style.visibility = 'visible';
      // toggleClass(rotatingModal, 'closed');
      nightTimeScene();
    } else{
      rotatingModalGuts.textContent = "It's pitch black!\nSpensor tried making his way back but got lost :( \n He has to sleep on the road! Oh no!";
      rotatingModal.style.visibility = 'visible';
      // toggleClass(rotatingModal, 'closed');
      Spensor.saneness(1);
      nightTimeScene();
    }
};
//Shows night time scence
nightTimeScene = () => {
closeButton.addEventListener("click", function() {
  rotatingModal.style.visibility = 'hidden';
  hideRightCorner();
  hideAsideR();
  asideRElement2.textContent = "";
  // mainEl.style.zIndex = '6';
  // background.style.backgroundImage = "url('../images/beach-night.png')";
  newDayButton();
  });
};
// new day button displays
newDayButton  = () => {
  // openButton.classList.toggle("closed");
  document.querySelector('#open-button').style.visibility = 'visible';
  openButton.style.zIndex = '7';
  openButton.addEventListener("click", function() {
    // openButton.classList.toggle("closed");
    document.querySelector('#open-button').style.visibility = 'hidden';
    newDay();
  });
};

// New day
newDay = () => {
  // openButton.style.zIndex = '5';
  Spensor.timePasses(1);
  // document.querySelector("#water-button").disabled = false;
  background.style.backgroundImage = "url(../images/beach-day.png)";
  resetWalker();
  whatToDoToday();
  console.log("should go to conteent whea to do today")
};
//####################################################

// searchForSupplies = () => {
//
// }

clickedDrink= () => {
  bubble.textContent = "Mmmmmmm";          //this command doesnt work on the 4th search
  openBubble();
  hideRightCorner();
  hideAsideR();
  drink = () => {

  // walking.style.visibility = 'visible';
  // displayAsideR();                            //this command doesnt work on the 4th search

  Spensor.drink(1);
  whatToDo3();
  }
  setTimeout(drink, 1 * 1000);

}

clickedSaveForLater= () => {
  // walking.style.visibility = 'visible';
  // walking.style.marginLeft = '40px';
  dontDrink = () => {
  hideRightCorner();
  hideAsideR();
  bubble.textContent = "I'll save this for them nasty looking trolls.";
  openBubble();
  Spensor.coconutInventory(1);
  console.log("line523")
  whatToDo3();
  }
  setTimeout(dontDrink, 1 * 1000);
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
  // e.preventDefault;
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

document.querySelector('#water-button').addEventListener('click', searchForWater);
document.querySelector('#water-button').addEventListener('click', activateWalker);
keepSearchingForDrink.addEventListener('click', activateWalker);
document.querySelector('#food-button').addEventListener('click', searchForFood);
document.querySelector('#food-button').addEventListener('click', activateWalker);
aButtonEl.addEventListener('click', activateWalker);

// document.querySelector('#supplies-button').addEventListener('click',searchForSupplies);
// document.querySelector('#supplies-button').addEventListener('click',activateWalker);
///need to make a keep searching for supplies button

modalButton.addEventListener('click', (e) =>{  //if i push this in event listeners, it doesnt work. why?
  toggleClass(modal, 'open');                   //starts the game
  instructionsModal();
})

// trollButton.addEventListener("click", function() {
//   // e.preventDefault();
//   trollModal.style.visibility = 'hidden';
//   // trollModalGuts.textContent = "";
// })
// trollButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   trollModal.style.visibility = 'hidden';
//   // trollModalGuts.textContent = "";
// })




console.log("word up");
