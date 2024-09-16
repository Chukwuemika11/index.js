// Variables
let name = "John";
const age = 25;
let isStudent = true;

// Function
function greet() {
  return `Hello, ${name}. You are ${age} years old.`;
}

// Conditional Statement
function checkStudentStatus() {
  if (isStudent) {
    return `${name} is a student.`;
  } else {
    return `${name} is not a student.`;
  }
}

// Loop
function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

// DOM Manipulation Example (Assuming you have a browser environment)
// Add content to a div element with id="output"
function updateDOM() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p>${greet()}</p>
    <p>${checkStudentStatus()}</p>
  `;
}

// Calling the functions
console.log(greet());
console.log(checkStudentStatus());
printNumbers();
updateDOM();
