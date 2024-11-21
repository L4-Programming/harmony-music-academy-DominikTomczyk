function displayErrors(errors) {
    for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }

    let errorDiv = document.querySelector(`#${field}-error`);
    if (errorDiv) {
      errorDiv.classList.add("error-message");
      let ul = document.createElement("ul");

      errors[field].messages.forEach((message) => {
        let li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
      });

      errorDiv.innerHTML = ""; // Clear any existing content
      errorDiv.appendChild(ul);
    }
  }
}

function removeErrors() {
    let errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((input => {
        input.classList.remove("error-input")
    }))

    let errorLabels = document.querySelectorAll(".error-label")
    errorLabels.forEach((label) => {
        label.classList.remove("error-label")
    })

    let errorMessages = document.querySelectorAll(".error-message")
    errorMessages.forEach((div) => {
        div.classList.remove("error-message")
        div.innerHTML = "";
    })
}


export function validateForm({userEmail, userLevel, userHours}) {
    const maxHoursPerLevel = {
        basic: 5,
        advanced: 10
    };

    removeErrors()

    
  let errors = {};

  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = {messages: []};
    }
    errors[field].messages.push(message);
  }



  //  Check if the user has provided an email address - "E-mail address is required" is it an actual email
  if (userEmail == "") {
    addError("email", "Please enter your email address.");
  }

  //  Check if the user has selected a level - "You must select a course level"
  if (userLevel == "") {
    addError("level", "Please select a level of study.");
  }

  //  Check if the user has specified at least one hour of study - "You must select at least one hour per week of lessons"
  if (isNaN(userHours) || userHours < 1) {
    addError("hoursPerWeek", "Please enter at least one hour of tuition.");
  }

  //  Check if the number of hours requested is within the allowed range - "You can only have a maximum of 5 hours per week with the beginner plan" / "You can only have a maximum of 10 hours per week with the advanced plan"
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    addError("level", "Invalid level of study selected.");
  }

  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    );
  }

  if (Object.keys(errors).length > 0) {
    displayErrors(errors);
    return false;
  }

  return {
    userEmail,
    userLevel,
    userHours: parseInt(userHours),
  };
}