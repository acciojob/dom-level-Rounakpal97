//your JS code here. If required.
// Get the element with id "level"
const element = document.getElementById("level");

// Initialize a counter for the DOM level
let level = 0;

// Traverse up the DOM tree
let current = element;
while (current) {
  level++;
  current = current.parentElement;
}

// Display the result using alert
alert("The level of the element is: " + level);
