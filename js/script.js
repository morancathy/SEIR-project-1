/* ======================
Tamagotchi
=========================*/
//directions and notes

/* ======================
CACHED DOM NODES
=========================*/


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
    this.rope = 0 ;
  }

  drink(){

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



/* ======================
GLOBAL VARS
=========================*/


/* =============================
FUNCTIONS
============================= */
displayWhatToDoToday = () => {
  document.querySelector('.aside > p').textContent = "What should Spensor do today?";

  const foodButton = document.createElement('button'); //do i have to do these 5 lines for each button?
  foodButton.setAttribute('id', 'food-button');
  foodButton.innerHTML = 'Search for food';
  const menuEl = document.querySelector('.what-to-do-menu');
  menuEl.appendChild(foodButton);

  const waterButton = document.createElement('button');
  waterButton.setAttribute('id', 'water-button');
  waterButton.innerHTML = 'Search for water';
  menuEl.appendChild(waterButton);

  const suppliesButton = document.createElement('button');
  suppliesButton.setAttribute('id', 'supplies-button');
  suppliesButton.innerHTML = 'Search for supplies';
  menuEl.appendChild(suppliesButton);

}
displayWhatToDoToday()    //this gets called at begingin of each day

// selectingWhatToDoToday(){
//
// }


/* =============================
EVENT LISTENERS
============================= */


console.log("word up")
