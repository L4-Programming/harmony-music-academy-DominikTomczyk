// javascript
import { validateForm } from "./validateForm.js";
import { calculateCosts } from "./calculateCosts.js";
import { displayResults } from "./displayResults.js";

// Capture user's input on form submission - Set to variables


let formData = document.querySelector("form");

formData.addEventListener("submit", function (event) {
  event.preventDefault();

  //  Get the user's email address - userEmail
  let userEmail = document.querySelector("#email").value;

  //  Get the user's level - userLevel
  let userLevel = document.querySelector("#level").value;
  
  //  Get the user's hours of study - userHours
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input - check with ifs. display errors by showing hidden text
  const result = validateForm({userEmail, userLevel, userHours});

  if (result) {
    const output = calculateCosts(result)
    displayResults(output);
  }

});

// Calculate the total cost - MATHS
// Display the total cost to the user - add hidden text and show it with the value after calc
