// javascript

// Capture user's input on form submission - Set to variables


let formData = document.querySelector("form");

formData.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");

  //  Get the user's email address - userEmail
  let userEmail = document.querySelector("#email").value;
  console.log(userEmail);

  //  Get the user's level - userLevel
  let userLevel = document.querySelector("#level").value;
  console.log(userLevel);
  
  //  Get the user's hours of study - userHours
  let userHours = document.querySelector("#hoursPerWeek").value;
  console.log(userHours);

  // Validate the user's input - check with ifs. display errors by showing hidden text
  validateData(userEmail, userLevel, userHours);

});


function validateData(email, level, hours) {
  let emailError = document.getElementById("email_error");
  let levelError = document.getElementById("level_error");
  let hoursError = document.getElementById("hours_error");
  //  Check if the user has provided an email address - "E-mail address is required" is it an actual email
  if (email == "") {
    emailError.textContent = "You must provide a valid email";
    console.log("no email provided");
  } else {
    emailError.textContent = "";
  }

  //  Check if the user has selected a level - "You must select a course level"
  if (level == "") {
    levelError.textContent = "You must select a level";
    console.log("no level provided");
  } else {
    levelError.textContent = "";
  }

  //  Check if the user has specified at least one hour of study - "You must select at least one hour per week of lessons"
  if (hours < 1) {
    hoursError.textContent = "You must sign up for at least one hour per week";
    console.log("hour too low");
    
    //  Check if the number of hours requested is within the allowed range - "You can only have a maximum of 5 hours per week with the beginner plan" / "You can only have a maximum of 10 hours per week with the advanced plan"
  } else if (level == "basic" && hours > 5) {
    hoursError.textContent = "You can only have a maximum of 5 hours per week with the basic plan";
    console.log("beginner hours too high");
  } else if (level == "advanced" && hours > 10) {
    hoursError.textContent = "You can only have a maximum of 10 hours per week with the advanced plan";
    console.log("advanced hours too high");
  } else {
    hoursError.textContent = "";
  }
}

// Calculate the total cost - MATHS
// Display the total cost to the user - add hidden text and show it with the value after calc
