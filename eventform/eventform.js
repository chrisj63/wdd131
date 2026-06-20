
const form = document.querySelector("#ticketform");
const type = document.querySelector("#type");
const student = document.querySelector("#student");
const studentLabel = document.querySelector(`label[for="${student}"]`);
const guest = document.querySelector("#guest");
const guestLabel = document.querySelector(`label[for="${guest}"]`);
const output = document.querySelector("#output");

function updateNotesField() {
  const value = type.value;

  // Show the Student ID or Guest code as appropriate by the Type choice.
  
    if (value === 'chooseone') {
       studentContainer.hidden = true;
       guestContainer.hidden = true;
    }
    if (value === 'student') {
       studentContainer.hidden = false;
       student.required = true;
    } else {
       studentContainer.hidden = true;
       student.required = false;
    }
    if (value === 'guest') {
       guestContainer.hidden = false;
       guest.required = true;
    } else {
       guestContainer.hidden = true;
       guest.required = false;
    }
}

type.addEventListener("change", updateNotesField);
updateNotesField();

// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const availableDate = form.availableDate.value;
  const student = form.student.value.trim();
  const guest = form.guest.value.trim();

  // Validate the input
  // Let the user know if they choose student or guest.
  if (type === 'student' && student.length != 9) {
    output.textContent =  "Student I# must be 9 digits";
    return;
  }
  
  //Let the user know if they choose invalid data entry that doesn't match the required pattern.
  
  if (type === 'guest' && guest != "EVENT131") {
    output.textContent = "Please enter correct access code. ie EVENT131"
    return;
  }
  if (type === 'chooseone') {
    output.textContent = "Please Choose a Type - Student or Guest to continue."
    return;
  }
  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${availableDate}</p>
  `;

  form.reset();
  updateNotesField();
});