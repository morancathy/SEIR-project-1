/* ======================
Man on an Island
=========================*/

/* ======================
CACHED DOM NODES
=========================*/
const menuEl = document.querySelector('.asideL > aside.instructions > div.what-to-do-menu');
const asidePEl = document.querySelector('.asideL > aside.instructions > p');
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

//variables for rotating modal2
const rotatingModal = document.querySelector("div.sky > div.rotating-modal");
const closeButton = document.querySelector("#close-button");
const openButton = document.querySelector("#open-button");
const rotatingModalGuts = document.querySelector('div.sky > div.rotating-modal > div.rotating-modal-guts > p');

closeButton.addEventListener("click", function() {
  rotatingModal.classList.toggle("closed");
});


// openButton.classList.toggle("closed");
// openButton.addEventListener("click", function() {
//   newDay();
// });



/* ======================
CREATE Spensor and Master Troll
=========================*/
class Hero {
  constructor(name, water, food, sanity, coconuts, bamboo, rope, searchCount, day){
    this.name = name;
    this.water = 5;
    this.food = 5;
    this.sanity = 5;
    this.coconuts = 0;
    this.bamboo = 0;
    this.rope = 0;
    this.searchCount = 0;
    this.day = 1;
  }

  drink(){
    this.water += 1;
  }

  eat(num){
    this.food += num;
  }

  saneness(){

  }

  coconutInventory(num){
    this.coconuts += num;
  }

  coconutAction(){  //or attackTroll

  }

  searchPerDayCount(num){
    this.searchCount += num;

  }

  timePasses(){
    this.day += 1;
    this.updateDayCount();
  }

  updateDayCount(){
    console.log("made it to time passes");
    const headerEl = document.querySelector('div.header');
    const dayEl = document.createElement('h2');
    dayEl.innerHTML = `Day: ${this.day}`;
    headerEl.appendChild(dayEl);
    dayEl.style.
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
const Spensor = new Hero("Spensor");
/* ======================
GLOBAL VARS
=========================*/
let coconuts = (Math.floor(Math.random() * (3-1) + 1));
let bamboo = (Math.floor(Math.random() * (6-3) + 3));
let rope = (Math.floor(Math.random() * (3-1) + 1));
let foodArray = ["Spensor found a nice rock. Let's see what we have under here...", "Ooou, a watering hole. Let's try to fish!",
"Spensor heard a couple mongrolls last night. He think's it's best he set a trap.", "Awww maaann. Spensor's been walking for hours and he's come up empty handed.",
"OH NO! Nasty Trolls!"];
let foodArrayChoice = `"${foodArray[Math.floor(Math.random() * foodArray.length)]}"`;

const aEl = document.createElement('A');
aEl.textContent = "hi"
const returnToCampButton = document.createElement('button');
const aButtonEl = document.createElement('button');
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
}}
//Displays asideL ("what should spensor do today")
const displayAsideL= () => {
  asideL.style.zIndex = '2';
}
//Hides asideL ("what should spensor do today")
const hideAsideL= () => {
  asideL.style.zIndex = '0';
}
//removes Pop Up warning
const removePopUp = () =>{
  aEl.removeAttribute('href', "#xme");
  aButtonEl.removeChild(aEl);
  aEl.textContent = "";
  aButtonEl.textContent = "Keep Searching";
  // keepSearchingButton.removeChild(warningEl);
  skyEl.removeChild(popupEl);
  console.log(popupEl)
  console.log(keepSearchingButton)
  console.log(warningEl)
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

    // const warningEl = document.querySelector('div.popup > p.content')
    console.log(warningEl)
    warningEl.textContent = ("Spensor is able to go on max 4 searches.");

    aButtonEl.setAttribute('id', 'keep-searching-button');
    aButtonEl.appendChild(aEl);
    asidePEl.appendChild(aButtonEl);

    const xEl = document.querySelector("div.popup-trigger > div.popup > a");
    console.log(xEl)
    xEl.addEventListener('click', removePopUp);
  }
}
//creates content of asideL ("What should spensor do today")
contentWhatToDoToday = () => {
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
contentWhatToDoToday();    //this gets called at begingin of each day

//What should Spensor Do now
whatToDo2 = () =>{

  if(Spensor.searchCount < 4){
  asidePEl.textContent = "What should Spensor do now?";

  createWarningPopUp();   //need to create an if statemet for just the first time

  aButtonEl.addEventListener('click', clickedKeepSearchingForFood);

  returnToCampButton.setAttribute('id', 'return-to-camp-button');
  returnToCampButton.innerHTML = "Return to Camp";
  asidePEl.appendChild(returnToCampButton);
  returnToCampButton.addEventListener('click', clickedReturnToCamp);

  displayAsideL();
  } else{
    console.log("It's pitch black! I hope Spensor can make it back")
    clickedReturnToCamp();
  }
}

//Displays asideR (hunting options)
const displayAsideR = () => {
  asideR.style.zIndex = '2';
}
//Hides asideR (hunting options)
const hideAsideR = () => {
  asideR.style.zIndex = '0';
}

//Search For Water
searchForWater = () => {
          //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?
          //text on screen "you found x coconuts" while page shows spensor next to the item celebrating
  hideWhatToDoButtons();

  alert(`You found ${coconuts} cocounts!`);

  asidePEl.innerHTML = "What would you like to do with the coconut?";

  const buttonEl = document.createElement('button');
  buttonEl.setAttribute('id', 'drink-button');
  buttonEl.innerHTML = "Drink";
  asidePEl.appendChild(buttonEl);
  buttonEl.addEventListener('click', clickedDrink);

  const buttonEl2 = document.createElement('button');
  buttonEl2.setAttribute('id', 'save-for-later-button');
  buttonEl2.innerHTML = "Save for later";
  asidePEl.appendChild(buttonEl2);
  buttonEl2.addEventListener('click', clickedSaveForLater);

  //side bar notation says "Coconuts can be used to defend yourself against nasty trolls" (But only the first time he comes across coconuts)
}
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
  }

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
}

bugProbability = (num) => {
  if(num <= .75){
    asideRPEl.textContent = "worms\nThis provides half a serving of food.";
    Spensor.eat(.5);
  } else {
    asideRPEl.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
}

fishProbability = (num) => {
  if(num <= .50){
    asideRPEl.textContent = "Big fish\nThis provides a full serving of food!";
    Spensor.eat(1);
  } else {
    asideRPEl.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
}

trapProbability = (num) => {
  if(num <= .25){
    asideRPEl.textContent = "Squirl..get it marley. This provides 2 full servings of food!";
    Spensor.eat(2);
  } else {
    asideRPEl.textContent = "Shucks. Didn't find anything.";
  }
  whatToDo2();
}

clickedKeepSearchingForFood = () => {
  Spensor.searchPerDayCount(1);

  if(Spensor.searchCount === 3){
    console.log(Spensor.searchCount + " :this is before 3rd time. It's getting darker...")//make it darker
    searchForFood();
  } else if (Spensor.searchCount === 4){
    console.log(Spensor.searchCount + " :this is before 4th time. Yikes! I hope this is worth it!")
    searchForFood();

  //sleeping on the road
  } else{
    searchForFood();
  }
}


// Clicking on Return to Camp...set prob of making it back
clickedReturnToCamp = () => {
  console.log("Time to return to camp...I hope I can find my way...")
  if(Spensor.searchCount === 3){
    makeItBackProbability(.50);
  } else if(Spensor.searchCount === 4){
    makeItBackProbability(.25);
  } else {
    makeItBackProbability(1);
  }
}
// calcaulate prob of making it back and showing results
makeItBackProbability = (num) => {
    if((Math.random()) <= num){
      rotatingModalGuts.innerHTML = "He made it back to camp!\n Time to relax.";
      toggleClass(rotatingModal, 'closed');
      nightTimeScene();
    } else{
      rotatingModalGuts.innerHTML = "Spensor has to sleep on the road! Oh no!";
      toggleClass(rotatingModal, 'closed');
      Spensor.sanity -= 1;
    }
}
//Shows night time scence
nightTimeScene = () => {
closeButton.addEventListener("click", function() {
  mainEl.style.zIndex = '6';
  mainEl.style.backgroundImage = "url('../images/beachNight.jpg')";
  newDayButton();
});
}
// new day button displays
newDayButton  = () => {
  openButton.classList.toggle("closed");
  openButton.addEventListener("click", function() {
    newDay();
  });
}

// New day
newDay = () => {
  Spensor.timePasses();
}


//####################################################




// searchForSupplies = () => {
//
// }

clickedDrink= () => {
  hideAsideL();
  Spensor.drink();
}

clickedSaveForLater= () => {
  hideAsideL();
  Spensor.coconutInventory(coconuts);
}

/* =============================
EVENT LISTENERS
============================= */

document.querySelector('#water-button').addEventListener('click', searchForWater);
document.querySelector('#food-button').addEventListener('click', searchForFood);
// document.querySelector('#supplies-button').addEventListener('click',searchForSupplies);






console.log("word up");
