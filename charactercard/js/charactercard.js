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
         // renderSections(this.sections);
    },
    levelUp: function () {
        // Increment level value by one and refresh card
        
          snortleblat.level = snortleblat.level + 1;
          //renderSections(this.sections);
    }
} 

function displayLog() {
  console.log(snortleblat.name);
  console.log(snortleblat.class);
  console.log(snortleblat.level);
  console.log(snortleblat.health);
}

  document.querySelector('.name').textContent = snortleblat.name;
  document.querySelector('#className').textContent = `Class: ${snortleblat.class}`;
  document.querySelector('#level').textContent = `Level: ${snortleblat.level}`;
  document.querySelector('#health').textContent = `Health: ${snortleblat.health}`;
  
 displayLog();           
/*function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
} */
/*
function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections); */

document.querySelector("#buttonAttacked").addEventListener("click", function () {
    //const sectionNum = document.querySelector("#sectionNumber").value;
   // aCourse.enrollStudent(sectionNum);
   snortleblat.attack();
   document.querySelector('#health').textContent = `Health: ${snortleblat.health}`;
   displayLog();
});

document.querySelector("#buttonLevelup").addEventListener("click", function () {
   // const sectionNum = document.querySelector("#sectionNumber").value;
   // aCourse.enrollStudent(sectionNum);
   snortleblat.levelUp();
   document.querySelector('#level').textContent = `Level: ${snortleblat.level}`;
   displayLog()
});
