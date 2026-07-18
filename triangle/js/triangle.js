const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide'); 
    btn.classList.toggle('change');
}

let formula1="A squared + B squared = C squared";
let A=0;
let atemp=0;
let B=0;
let btemp=0;
let C=0;
let ctemp=0;
let x=90;
let y=0;
let z=0;
let ytemp=0;
let ztemp=0;

readValues();

const rightT = {
    name: 'Pathagorean Theorem',
    status: 'Enter angles and/or side lengths',
    formula: formula1,
    level: 'Use Side-Angle-Side or Angle-Side-Angle',
    instructions: 'Enter only numbers. Click Solve.',
    solve: function () {
        // Read in values:
          readValues();
    },

     reset: function () {
        const myInput = document.getElementById('sideA');
            myInput.value = "";
        const myInput1 = document.getElementById('sideB');
            myInput1.value = "";
        const myInput2 = document.getElementById('sideC');
            myInput2.value = "";
        const myInput3 = document.getElementById('anglex');
            myInput3.value = 90;
        const myInput4 = document.getElementById('angley');
            myInput4.value = "";
        const myInput5 = document.getElementById('anglez');
            myInput5.value = "";
    }
}
function readValues() {
    A = document.querySelector('#sideA').value;
    B = document.querySelector('#sideB').value;
    C = document.querySelector('#sideC').value;
    x=90;
    y = document.querySelector('#angley').value;
    z = document.querySelector('#anglez').value;
    evaluate();
    displayValues();
}

function evaluate() { 
    if (A) {
        if (B) {
            C = Math.sqrt((A*A) + (B*B));
        }
        else if (C) {
            B = Math.sqrt((C*C)-(A*A));
        
            if (!y) {
                ytemp = Math.asin(A/C);
                y = (ytemp * (180 / Math.PI)).toFixed(2);
            }
            if (!z) {
                    ztemp = Math.acos(A/C)
                    z = (ztemp * (180 / Math.PI)).toFixed(2);
            }
        }
        displayValues();
    }

    if (B) {
        if (C) {
            A = (Math.sqrt((C*C)-(B*B)))
            
            if (!y){
                ytemp = Math.acos(B/C)
                y = (ytemp * (180 / Math.PI)).toFixed(2);
            }
            if (!z) {
                ztemp = Math.asin(B/C)
                z = (ztemp * (180 / Math.PI)).toFixed(2);
            }
        }
    }
    if (y){
        if (B){
            btemp = y * (Math.PI / 180);
            ctemp=Math.cos(btemp);
            C = B/ctemp.toFixed(2);
        
            A = (Math.sqrt((C*C)-(B*B)))

            if (!z) {
                ztemp = Math.asin(B/C)
                z = (ztemp * (180 / Math.PI)).toFixed(2);
            }
        }
        if (A){
            atemp = y * (Math.PI / 180);
            atemp=Math.sin(atemp);
            C = A/atemp.toFixed(2);
        
            B = (Math.sqrt((C*C)-(A*A)))

            if (!z) {
                ztemp = Math.acos(A/C)
                z = (ztemp * (180 / Math.PI)).toFixed(2);
            }
        }          
    }

    if (z){
        if (B){
            btemp = z * (Math.PI/180);
            ctemp=Math.sin(btemp);
            C = B/ctemp.toFixed(2);
        
            A = (Math.sqrt((C*C)-(B*B)))

            if (!y){
                    ytemp = Math.acos(B/C)
                    y = (ytemp * (180 / Math.PI)).toFixed(2);
            }
        }
         if (A){
            atemp = z * (Math.PI/180);
            ctemp=Math.cos(atemp);
            C = A/ctemp.toFixed(2);
        
            B = (Math.sqrt((C*C)-(A*A)))

            if (!y){
                    ytemp = Math.asin(A/C)
                    y = (ytemp * (180 / Math.PI)).toFixed(2);
            }
        }
    }

}

function displayValues() {
    console.log(A);
    console.log(B);
    console.log(btemp);
    console.log(C);
    console.log(ctemp);
    console.log(x);
    console.log(y);
    console.log(ytemp);
    console.log(z);
    console.log(ztemp);
    console.log(level);

    populateInputs();
}

  function populateInputs () {
    const myInput = document.getElementById('sideA');
        myInput.value = A;
    const myInput1 = document.getElementById('sideB');
        myInput1.value = B;
    const myInput2 = document.getElementById('sideC');
        myInput2.value = C;
    const myInput3 = document.getElementById('anglex');
        myInput3.value = x;
    const myInput4 = document.getElementById('angley');
        myInput4.value = y;
    const myInput5 = document.getElementById('anglez');
        myInput5.value = z;
  }

  document.querySelector('.name').textContent = rightT.name;
  document.querySelector('#status').textContent = `Status: ${rightT.status}`;
  document.querySelector('#formula').textContent = `Formula: ${rightT.formula}`;
  document.querySelector('#level').textContent = `${rightT.level}`;
  document.querySelector('#instructions').textContent = `Instructions: ${rightT.instructions}`;
  
 /* displayLog(); */          

    document.querySelector("#buttonSolve").addEventListener("click", function () {
      rightT.solve();
});
    document.querySelector("#buttonReset").addEventListener("click", function () {
      rightT.reset();
});


/* messages array */
const messages = ["Enter angles and/or side lengths", "Enter length of one more side", "A squared + B squared = C squared"];