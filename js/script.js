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
  //display option what to do whatToDoToday  with text and 3 buttons
  console.log("What should Spensor do today?");
  const foodButton = document.createElement('button');
  foodButton.setAttribute('id', 'food');
  foodButton.innerHTML = 'Search for food';
  const menuEl = document.querySelector('.aside');
  menuEl.appendChild(foodButton);

}

// displayWhatToDoToday()

// selectingWhatToDoToday(){
//
// }


/* =============================
EVENT LISTENERS
============================= */


console.log("word up")
