/* ======================
Man on an Island
=========================*/
//directions and notes

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
const span = document.querySelector('.close');
const asideL = document.querySelector('.asideL');
const asideR = document.querySelector('.asideR');
const asideRPEl = document.querySelector('.asideR > p');

/* ======================
CREATE Spensor and Master Troll
=========================*/
class Hero {
  constructor(name, water, food, sanity, coconuts, bamboo, rope){
    this.name = name;
    this.water = 5;
    this.food = 5;
    this.sanity = 5;
    this.coconuts = 0;
    this.bamboo = 0;
    this.rope = 0;
  }

  drink(){
    this.water += 1;
  }

  eat(){

  }

  saneness(){

  }

  coconutInventory(num){
    this.coconuts += num;
  }

  coconutAction(){  //or attackTroll

  }

  timePasses(){   //??

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
// let dig = (Math.floor(Math.random() * (3-1) + 1));
// let fish = (Math.floor(Math.random() * (3-1) + 1));
// let trap = (Math.floor(Math.random() * (3-1) + 1));

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
//Displays asideR
const displayAsideR= () => {
  asideR.style.zIndex = '2';
}

//creates content of asideL ("What should spensor do today")
contentWhatToDoToday = () => {
  // asidePEl.textContent = "What should Spensor do today?";  //best practice to do this or create a variable?
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
//Search for Food
searchForFood = () => {
        
  hideWhatToDoButtons();
  hideAsideL();
  displayAsideR();

  asideRPEl.innerHTML = "Great choice! Happy hunting!
          //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?


  // const buttonEl = document.createElement('button');
  // buttonEl.classList.add('bugs-button')
  // buttonEl.innerHTML = "Dig for bugs";
  // buttonEl.addEventListener('click', clickedDig);
  // asideR.appendChild(buttonEl);
  //
  // const buttonEl2 = document.createElement('button');
  // buttonEl2.classList.add('fish-button')
  // buttonEl2.innerHTML = "Fish";
  // buttonEl2.addEventListener('click', clickedFish);
  // asideR.appendChild(buttonEl2);
  //
  // const buttonEl3 = document.createElement('button');
  // buttonEl3.classList.add('trap-button')
  // buttonEl3.innerHTML = "Set a trap";
  // buttonEl3.addEventListener('click', clickedTrap);
  // asideR.appendChild(buttonEl3);



}

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

clickedDig = () => {

}

clickedFish = () => {

}

clickedTrap = () => {

}




/* =============================
EVENT LISTENERS
============================= */

document.querySelector('#water-button').addEventListener('click', searchForWater);
document.querySelector('#food-button').addEventListener('click', searchForFood);
// document.querySelector('#supplies-button').addEventListener('click',searchForSupplies);






console.log("word up");
