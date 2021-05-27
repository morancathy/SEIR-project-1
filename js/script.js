/* ======================
Man on an Island
=========================*/

/* ======================
CACHED DOM NODES
=========================*/
const menuEl = document.querySelector('div.asideL > aside.instructions > div.what-to-do-menu');
const asidePEl = document.querySelector('div.asideL > aside.instructions > p');
const modalButton = document.querySelector('div.modal > button.start-button');
const modal = document.querySelector('div.modal');
const mainEl = document.querySelector('.main');
const imgEl = document.createElement('img');
const modal2El = document.querySelector('div.modal2');
const span = document.querySelector('span.close');
const asideL = document.querySelector('.asideL');
const asideR = document.querySelector('.asideR');
const asideRPEl = document.querySelector('.asideR > p.food-intro');
const skyEl = document.querySelector('.sky');
const keepSearchingButton = document.querySelector('div.asideL > aside.instructions > button')
const warningEl = document.querySelector('div.popup > p.content')
const popupEl = document.querySelector('div.sky > div.popup-trigger')
const drinkButtonEl = document.createElement('button');
const saveButtonEl = document.createElement('button');
//variables for rotating modal2
const rotatingModal = document.querySelector("div.sky > div.rotating-modal");
const closeButton = document.querySelector("#close-button");
const trollModal = document.querySelector("div.sky > div.troll-modal");
console.log(trollModal)
const trollButton = document.querySelector("div.sky > div.troll-modal > button.troll-modal-button");
console.log(trollButton);
const trollModalGuts = document.querySelector("div.sky > div.troll-modal > div.troll-modal-guts");
console.log(trollModalGuts);

const openButton = document.querySelector("#open-button");
const rotatingModalGuts = document.querySelector('div.sky > div.rotating-modal > div.rotating-modal-guts > p');

const dayEl = document.querySelector('div.header > div.day');
const waterEl = document.querySelector('div.header > div.water-level');
const foodEl = document.querySelector('div.header > div.food-level');
const sanityEl = document.querySelector('div.header > div.sanity-level');
const coconutsEl = document.querySelector('div.header > div.coconuts-level');
const ropeEl = document.querySelector('div.header > div.rope-level');
const bambooEl = document.querySelector('div.header > div.bamboo-level');

/* ======================
CREATE Spensor and Master Troll
=========================*/
class Hero {
  constructor(name, water, food, sanity, coconuts, bamboo, rope, searchCount, day){
    this.name = name;
    this.water = water;
    this.food = food;
    this.sanity = sanity;
    this.coconuts = coconuts;
    this.bamboo = bamboo;
    this.rope = rope;
    this.searchCount = searchCount;
    this.day = day;
  }

  drink(){
    this.water += 1;
    waterEl.innerHTML = this.water;
  }

  eat(num){
    this.food += num;
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

  coconutAction(){  //or attackTroll

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
const Spensor = new Hero("Spensor", 5, 5, 5, 0, 0, 0, 1, 1);

/* ======================
GLOBAL VARS
=========================*/
// let coconuts = (Math.floor(Math.random() * (3-1) + 1));


let coconuts = 1;
let bamboo = (Math.floor(Math.random() * (6-3) + 3));
let rope = (Math.floor(Math.random() * (3-1) + 1));
let foodArray = ["Spensor found a nice rock. Let's see what we have under here...", "Ooou, a watering hole. Let's try to fish!",
"Spensor heard a couple mongrolls last night. He think's it's best he set a trap.", "Awww maaann. Spensor's been walking for hours and he's come up empty handed.",
"OH NO! Nasty Trolls!"];
let foodArrayChoice = `"${foodArray[Math.floor(Math.random() * foodArray.length)]}"`;
let waterArray = [`Sweet!\nFound a delicious, refreshing coconuts!`, "Awww maaann. Spensor's been walking for hours and he's come up empty handed.",
"OH NO! Nasty Trolls!"];
// let waterArrayChoice = `"${waterArray[Math.floor(Math.random() * waterArray.length)]}"`;
const aEl = document.createElement('A');
aEl.textContent = "hi"
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
modalButton.addEventListener('click', (e) =>{  //if i push this in event listeners, it doesnt work. why?
  toggleClass(modal, 'open');
  instructionsModal();
})
// opens instructions modal
const instructionsModal = () =>{
  toggleClass(modal2El, 'open');
  span.onclick = function(){
  modal2El.style.display = 'none';
  displayAsideL();
  dayEl.innerHTML = `Day: ${Spensor.day}`;
}}
//Displays asideL ("what should spensor do today")
const displayAsideL = () => {
  asideL.style.zIndex = '15';
}
//Hides asideL ("what should spensor do today")
const hideAsideL = () => {
  console.log("does 191 work")
  asideL.style.zIndex = '0';
}
//Displays asideR (hunting options)
const displayAsideR = () => {
  asideR.style.zIndex = '15';
}
//Hides asideR (hunting options)
const hideAsideR = () => {
  asideR.style.zIndex = '0';
}
//removes Pop Up warning
const removePopUp = () =>{
  aEl.removeAttribute('href', "#xme");
  aButtonEl.removeChild(aEl);
  aEl.textContent = "";
  aButtonEl.textContent = "Keep Searching";
  // keepSearchingButton.removeChild(warningEl);
  skyEl.removeChild(popupEl);
  console.log("lordy")
}
//creates warning pop up and keep searching button
const createWarningPopUp = () => {
  console.log(warningEl)
  if(aEl.textContent === ""){
    aButtonEl.setAttribute('id', 'keep-searching-button');
    aButtonEl.textContent = "Keep Searching";
    asidePEl.appendChild(aButtonEl);
    return;
  } else {
    console.log("first time through create WARNING POP UP")
    aEl.setAttribute('href', "#xme");

    aEl.textContent = "Keep Searching";

    console.log(warningEl)
    warningEl.textContent = ("Spensor is able to go on max 4 searches.");

    aButtonEl.setAttribute('id', 'keep-searching-button');
    aButtonEl.appendChild(aEl);
    asidePEl.appendChild(aButtonEl);

    const xEl = document.querySelector("div.popup-trigger > div.popup > a");
    console.log(xEl)
    xEl.addEventListener('click', removePopUp);
    console.log("should wait till i click the X on popup")
  }
}
//creates content of asideL ("What should spensor do today")
contentWhatToDoToday = () => {
  displayAsideL();
  asidePEl.textContent = "What should Spensor do today?";
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
contentWhatToDoToday();    //this gets called at begingin of each day#####################################

whatToDoToday = () => {
  displayAsideL();
  asidePEl.textContent = "What should Spensor do today?";
  showWhatToDoButtons();
};
//What should Spensor Do now######################################################3### WHAT TO DO2
whatToDo2 = () =>{

  if(Spensor.searchCount < 4){
  asidePEl.textContent = "What should Spensor do now?";

  createWarningPopUp();                           //need to create an if statemet for just the first time

  aButtonEl.addEventListener('click', clickedKeepSearchingForFood);
  console.log("should wait till click keepsearching")

  returnToCampButton.setAttribute('id', 'return-to-camp-button');
  returnToCampButton.innerHTML = "Return to Camp";
  asidePEl.appendChild(returnToCampButton);
  returnToCampButton.addEventListener('click', clickedReturnToCamp);
  console.log("should wait till click return to camp")

  displayAsideL();
  } else{
    console.log("It's pitch black! I hope Spensor can make it back")
    clickedReturnToCamp();
  }
}

// what should SPensor do now ---after drinking  ##################################### WHAT TO DO3
whatToDo3 = () =>{
  if(Spensor.searchCount < 4){
  displayAsideL();
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
  displayAsideL();
  } else{
    console.log("It's pitch black! I hope Spensor can make it back")
    clickedReturnToCamp();
  }
}

//Search For Water
searchForWater = () => {
          //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?
          //text on screen "you found x coconuts" while page shows spensor next to the item celebrating
  // document.querySelector("#water-button").disabled = true;
  hideWhatToDoButtons();
  hideAsideL();
  displayAsideR();

  if(Spensor.searchCount <= 2){
    asideRPEl.textContent = "Great choice! Happy Coconuts!"; //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?
  } else if (Spensor.searchCount === 3){
    asideRPEl.textContent = "It's getting darker, but there's gotta be coconuts somewhere.";
  } else if (Spensor.searchCount === 4){
    asideRPEl.textContent = "This is the last time Spensor can search before it's pitch black.\nI hope this is worth it!"
  } else {
    console.log("spensor has searched too many times. i shouldnt see this. 298")
  }
  setTimeout(waterSeachActivity, 2 * 1000);
};

waterSeachActivity = () => {
  let waterArrayChoice = `"${waterArray[Math.floor(Math.random() * waterArray.length)]}"`;
  // let waterArrayChoice = waterArray[0];
  console.log(waterArrayChoice);

waterSearchResult = () =>{
    if(waterArrayChoice === `"${waterArray[0]}"`) {
      console.log("found coconuts")
      asideRPEl.textContent = waterArrayChoice;
      // asideRPEl.textContent = "Sweet! Found a delicious, refreshing coconut!"
      foundCoconuts();
    } else if (waterArrayChoice === `"${waterArray[1]}"`) {
        asideRPEl.textContent = waterArrayChoice;
        console.log("didnt find antyhing, does asideRPEL work?")
        whatToDo3();
    } else if (waterArrayChoice === `"${waterArray[2]}"`) {
        asideRPEl.textContent = waterArrayChoice;
        // hideAsideL();
        // asideRPEl.textContent = "Time to battle a troll\n or do I run away?(water)";
        battleTroll();
        whatToDo3();
    } else {
      console.log("something is wrong with code")
    }
  }
setTimeout(waterSearchResult, 2 * 1000);
}

foundCoconuts = () => {
    displayAsideL();
    // asideRPEl.textContent = "";
    asidePEl.textContent = "What would you like to do with the coconut?";

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

//Search for Food#####################################################
searchForFood = () => {
  hideWhatToDoButtons();
  hideAsideL();
  displayAsideR();

  if(Spensor.searchCount <= 2){
    asideRPEl.innerHTML = "Great choice! Happy hunting!"; //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?
  } else{
    asideRPEl.innerHTML = "Happy hunting!";
  }
  setTimeout(foodSeachActivity, 2 * 1000);
};

foodSeachActivity = () => {
  asideRPEl.textContent = foodArrayChoice;
  setTimeout(foodSearchResult, 3 * 1000);
};

foodSearchResult = () =>{
  if(foodArrayChoice === `"${foodArray[0]}"`){
    bugProbability(Math.random());
  }else if (foodArrayChoice === `"${foodArray[1]}"`) {
    fishProbability(Math.random());
  } else if (foodArrayChoice === `"${foodArray[2]}"`) {
    trapProbability(Math.random());
  } else if (foodArrayChoice === `"${foodArray[3]}"`) {
      asideRPEl.textContent = "nada\n Darn it!";
      whatToDo2();
  } else if (foodArrayChoice === `"${foodArray[4]}"`) {
      asideRPEl.textContent = "Time to battle a troll\n or do I run away?";
      whatToDo2();
  } else {
    console.log("something is wrong with code")
  }
};

bugProbability = (num) => {
  if(num <= .75){
    asideRPEl.textContent = "Score!\nThis handfull of bugs and worms provides half a serving of food!";
    Spensor.eat(.5);
  } else {
    asideRPEl.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
};

fishProbability = (num) => {
  if(num <= .50){
    asideRPEl.textContent = "Big fish\nThis provides a full serving of food!";
    Spensor.eat(1);
  } else {
    asideRPEl.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
};

trapProbability = (num) => {
  if(num <= .25){
    asideRPEl.textContent = "Squirl..get it marley. This provides 2 full servings of food!";
    Spensor.eat(2);
  } else {
    asideRPEl.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
};



// Battle Troll #############################################################  BATTLE TROLL
battleTroll = () => {
  if(Spensor.coconuts < 1){
    hideAsideL();
    trollModalGuts.innerHTML = "Spensor has no coconuts to defend himself :("
    // toggleClass(rotatingModal, 'closed');
    trollModal.style.visibility = 'visible';


    trollButton.addEventListener("click", function() {
      trollModal.style.visibility = 'hidden';
        // rotatingModal.classList.toggle("closed");
      // toggleClass(rotatingModal, 'closed');
      asideRPEl.textContent = "Darn troll kicked him!\nSpensor loses a sanity level.";
      Spensor.saneness(1);
      // whatToDo3();
      });
  } else if(Spensor.coconuts >= 1){
      trollModalGuts.innerHTML = "Attack!"
      // toggleClass(rotatingModal, 'closed');
      trollModal.style.visibility = 'visible';
      trollButton.addEventListener("click", function() {
        console.log("450")
        // toggleClass(rotatingModal, 'closed');
        trollModal.style.visibility = 'hidden';
        asideRPEl.textContent = "Spensor threw a coconut at the troll and scared him off.\nPhew, that was close.";
        Spensor.coconutInventory(-1);
      });
  }else{
    console.log("coconut function to attack trolls is broken");
  }
  console.log("coconuts attack trolls work...now what")
}

// Clicked Keep Searching For Food
clickedKeepSearchingForFood = () => {
  Spensor.searchPerDayCount(1);

  if(Spensor.searchCount === 3){
    console.log(Spensor.searchCount + " :this is before 3rd time. It's getting darker...")//make it darker
    searchForFood();
  } else if(Spensor.searchCount === 4){
    console.log(Spensor.searchCount + " :this is before 4th time. Yikes! I hope this is worth it!")
    searchForFood();
  //sleeping on the road
  } else{
      searchForFood();
  }
};
// Clicked Keep Searching For Water
clickedKeepSearchingForWater = () => {
  Spensor.searchPerDayCount(1);

  if(Spensor.searchCount === 3){
    console.log(Spensor.searchCount + " :this is before 3rd time. It's getting darker...")//make it darker
    searchForWater();
  } else if(Spensor.searchCount === 4){
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
    toggleClass(rotatingModal, 'open');
    rotatingModalGuts.textContent = "Time to return to camp...I hope I can find my way..."  //this doesnt work

    hideAsideR();

    if(Spensor.searchCount === 3){
      console.log("searchcount 3")
      makeItBackProbability(.50);
    } else if(Spensor.searchCount === 4){
      console.log("searchcount 4")
      makeItBackProbability(.25);
    } else if (Spensor.searchCount < 3){
      console.log("searchcount 1-2")
      makeItBackProbability(1);
    } else {
      console.log("510 return to camp prob doesnt work")
    }
  }
  setTimeout(probFunction, 5 * 1000);
};
// calcaulate prob of making it back and showing results
makeItBackProbability = (num) => {
    if((Math.random()) <= num){
      rotatingModalGuts.textContent = "He made it back to camp!\n Time to relax.";
      rotatingModal.style.visibility = 'visible';
      // toggleClass(rotatingModal, 'closed');
      nightTimeScene();
    } else{
      rotatingModalGuts.textContent = "Spensor tried making his way back but got lost :( \n He has to sleep on the road! Oh no!";
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
  hideAsideL();
  hideAsideR();
  // mainEl.style.zIndex = '6';
  mainEl.style.backgroundImage = "url('../images/beachNight.jpg')";
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
  mainEl.style.backgroundImage = "url('../images/beach-walk.jpg')";
  whatToDoToday();
  console.log("should go to conteent whea to do today")
};
//####################################################

// searchForSupplies = () => {
//
// }

clickedDrink= () => {
  hideAsideL();
  Spensor.drink();
  asideRPEl.textContent = "Mmmmmmm";
  whatToDo3();
}

clickedSaveForLater= () => {
  hideAsideL();
  Spensor.coconutInventory(1);
  console.log("line523")
  whatToDo3();
}

/* =============================
EVENT LISTENERS
============================= */

document.querySelector('#water-button').addEventListener('click', searchForWater);
document.querySelector('#food-button').addEventListener('click', searchForFood);
// document.querySelector('#supplies-button').addEventListener('click',searchForSupplies);






console.log("word up");
