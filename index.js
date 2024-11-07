// javascript

// Capture user's input on form submission - Set to variables
//  Get the user's email address - userEmail
//  Get the user's level - userLevel
//  Get the user's hours of study - userHours
let formData = document.querySelector("form");

formData.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});

let userEmail;
let userLevel;
let userHours;

console.log(userEmail);
console.log(userLevel);
console.log(userHours);

// Validate the user's input - check with ifs. display errors by showing hidden text
//  Check if the user has provided an email address - "E-mail address is required" is it an actual email
//  Check if the user has selected a level - "You must select a course level"
//  Check if the user has specified at least one hour of study - "You must select at least one hour per week of lessons"
//  Check if the number of hours requested is within the allowed range - "You can only have a maximum of 5 hours per week with the beginner plan" / "You can only have a maximum of 10 hours per week with the advanced plan"
function ValidateData() {
  if (userEmail == "") {
    console.log("no email provided");
  }

  if (userLevel == "") {
    console.log("no level provided");
  }

  if (userHours < 1) {
    console.log("hour too low");
  }

  if (userLevel == "basic" && userHours > 5) {
    console.log("beginner hours to high");
  }

  if (userLevel == "advanced" && userHours > 10) {
    console.log("advanced hours to high");
  }
}

// Calculate the total cost - MATHS
// Display the total cost to the user - add hidden text and show it with the value after calc
