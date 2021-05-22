/* ======================
Tamagotchi
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
console.log(mainEl)
console.log(menuEl);
console.log(asidePEl);
const modal2El = document.querySelector('div.modal2');
console.log(modal2El)
const span = document.querySelector('.close');
console.log(span)


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

  coconutInventory(){

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

/* =============================
FUNCTIONS
============================= */
//toggle function
const toggleClass = (node, className) => {
  node.classList.toggle(className)
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
  mainEl.style.gridArea = '2 / 2 / 3 / 5';
}
//Hides asideL ("what should spensor do today")
const hideAsideL= () => {
  mainEl.style.gridArea = '2 / 1 / 3 / 5';
}

//creates content of "What should spensor do today"
contentWhatToDoToday = () => {
  asidePEl.textContent = "What should Spensor do today?";  //best practice to do this or create a variable?
  console.log(asidePEl)
  let toDoButtons = [
    {text: 'Seach for water', id: 'water-button'},
    {text: 'Seach for food', id: 'food-button'},
    {text: 'Seach for supplies', id: 'supplies-button'},
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
  //remove the "what do you want to do today questions and buttons"
  //new scene of Spensor walking across beach/forest in search, takes maybe 5 seconds?
  //text on screen "you found x coconuts" while page shows spensor next to the item celebrating
  alert(`You found ${coconuts} cocounts!`);

  //New question on screen "What would you like to do with it?"
  asidePEl = "What would you like to do with the coconut?";
  //Buttons pop up with text "Drink"  "Save for later"
  const buttonEl = document.createElement('button');
  buttonEl.setAttribute('id', 'drink-button');
  buttonEl.innerHTML = "Drink";
  asidePEl.appendChild(buttonEl);
  console.log(document.querySelector('#drink-button')) //checker

  const buttonEl2 = document.createElement('button');
  buttonEl2.setAttribute('id', 'save-for-later-button');
  buttonEl2.innerHTML = "Save for later";
  asidePEl.appendChild(buttonEl2);

  //side bar notation says "Coconuts can be used to defend yourself against nasty trolls" (But only the first time he comes across coconuts)

  //if he clicks drink then his water levels go up one.

  //if he saves, his coconut invintory goes up one.
}

searchForFood = () => {

}

searchForSupplies = () => {

}

/* =============================
EVENT LISTENERS
============================= */

document.querySelector('#water-button').addEventListener('click', searchForWater);
document.querySelector('#food-button').addEventListener('click', searchForFood);
document.querySelector('#supplies-button').addEventListener('click',searchForSupplies);
// document.querySelector('#drink-button').addEventListener('click', Spensor.drink); //why doesnt this work?
// document.querySelector('#save-for-later-button'). addEventListener('click',       )








console.log("word up");
