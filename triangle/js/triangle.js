const menu = document.querySelector('nav');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    btn.classList.toggle('change');
    menu.classList.toggle('hide');
}

let A=0;
    let atemp=0;
    let B=0;
    let btemp=0;
    let C=0;
    let ctemp=0;
    let x=90;
    let xtemp=0;
    let y=0;
    let ytemp=0;
    let z=0;
    let ztemp=0;

const rightT = {
    name: 'Pathagorean Theorem',
    status: 'Enter angles and/or side lengths',
    formula: 'A squared + B squared = C squared',
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
    A = document.querySelector('#sideA')?.value ?? "";
    B = document.querySelector('#sideB')?.value ?? "";
    C = document.querySelector('#sideC')?.value ?? "";
    x=90;
    y = document.querySelector('#angley')?.value ?? "";
    z = document.querySelector('#anglez')?.value ?? "";
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
    console.log(atemp);
    console.log(B);
    console.log(btemp);
    console.log(C);
    console.log(ctemp);
    console.log(x);
    console.log(xtemp);
    console.log(y);
    console.log(ytemp);
    console.log(z);
    console.log(ztemp);


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

//   document.querySelector('.name').textContent = rightT.name;
//   document.querySelector('#status').textContent = `Status: ${rightT.status}`;
//   document.querySelector('#formula').textContent = `Formula: ${rightT.formula}`;
//   document.querySelector('#level').textContent = `${rightT.level}`;
//   document.querySelector('#instructions').textContent = `Instructions: ${rightT.instructions}`;
  
 /* displayLog(); */          

    document.querySelector("#buttonSolve")?.addEventListener("click", function () {
      rightT.solve();
});
    document.querySelector("#buttonReset")?.addEventListener("click", function () {
      rightT.reset();
});

let formulaContainer = document.querySelector('#formula-container');
/* messages array */
const messages = ["Enter angles and/or side lengths", "Enter length of one more side", "A squared + B squared = C squared"];
/* formulas array */
const formulas = ["sin theta = Opposite / Hypotenuse:", "cos theta = Adjacent / Hypotenuse", "tan theta = Opposite / Adjacent", "a/sin(A) = b/sin(B) = c/sin(C)", "a squared = b squared + c squared - (2bc * cos(A)", "b squared = a squared + c squared - (2ac * cos(B)", "c squared = a squared + b squared - (2ab * cos(C)", "cos(A)=(b squared + c squared -a squared) / 2bc"];

const formulasArray = [
    {
        name: 'Sum of angles',
        description: 'The angles of a triangle add up to 180',
        formula: 'A + B + C = 180',
        notes: 'This is the Golden Rule'
    },
    {
        name: 'Pathagorean Theorem',
        description: 'In a right triangle where the hypotenuse is opposite the 90 degree angle, The sum of the sides squared is equal to the Hypotenuse squared',
        formula: 'A squared + B squared = C squared',
        notes: 'The length of the sides adjacent to the 90 degree angle are A and B'
    },
    {
        name: 'SOH Sine - Opposite - Hypotenuse',
        description: 'Sine of angle relationship with lengths of sides',
        formula: 'Sin Theta = Opposite / Hypotenuse',
        notes: 'This is a right triangle rule of sines.  Convert to degrees if necessary'
    },
    {
        name: 'CAH Cosine - Adjacent - Hypotenuse',
        description: 'Cosine of angle relationship with lengths of sides',
        formula: 'Cosine Theta = Adjacent / Hypotenuse',
        notes: 'This is a right triangle rule of cosines.  Convert to degrees if necessary'
    },
    {
        name: 'TOA Tangent - Opposite - Adjacent',
        description: 'Tangent of angle relationship with lengths of sides',
        formula: 'Tangent Theta = Opposite / Adjacent',
        notes: 'This is a right triangle rule of Tangents.  Convert to degrees if necessary'
    }
];

function loopFormulas() {
    // Safety check: if formulaContainer is null, exit the function immediately!
    if (!formulaContainer) {
        return; 
    }

    // Clear out any previous content
    formulaContainer.innerHTML = '';
    
    // Output onto screen
    formulasArray.forEach(formula => {
        renderFormulas(formula);
    });
}
function formulasTemplate(formula) {
    return `
    <article class="formula-card">
        <div class="formula-content">
            <h3 class="formula-name">${formula.name}</h3>
        </div>
        <h2 class="formula-text">${formula.formula}</h2>
        <p class="description">${formula.description}</p>
        <p class="notes">${formula.notes}</p>
    </article>`;
}


function renderFormulas(formula) {
    let html = formulasTemplate(formula);
    formulaContainer.innerHTML += html;
}

function init() {
    loopFormulas();
}

 init();