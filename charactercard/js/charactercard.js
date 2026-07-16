const snortleblat = {
    name: 'Snortleblat',
    class: 'Swamp Based Diplomat',
    level: 1,
    health: 100,
    attack: function () {
        // Decrease health by 20... check to see if character is alive and refresh card
          snortleblat.health = snortleblat.health-20;
          if (snortleblat.health <= 0) {
            alert("Character died"); 
          }
    },
    levelUp: function () {
        // Increment level value by one and refresh card    
          snortleblat.level = snortleblat.level + 1;
    }
} 

/* function displayLog() {
  console.log(snortleblat.name);
  console.log(snortleblat.class);
  console.log(snortleblat.level);
  console.log(snortleblat.health);
} */

  document.querySelector('.name').textContent = snortleblat.name;
  document.querySelector('#className').textContent = `Class: ${snortleblat.class}`;
  document.querySelector('#level').textContent = `Level: ${snortleblat.level}`;
  document.querySelector('#health').textContent = `Health: ${snortleblat.health}`;
  
 /* displayLog(); */          

document.querySelector("#buttonAttacked").addEventListener("click", function () {
   snortleblat.attack();
   document.querySelector('#health').textContent = `Health: ${snortleblat.health}`;
   /* displayLog(); */
});

document.querySelector("#buttonLevelup").addEventListener("click", function () {
   snortleblat.levelUp();
   document.querySelector('#level').textContent = `Level: ${snortleblat.level}`;
   /* displayLog() */
});
