// Get the input field and all buttons
let input = document.getElementById("output-display");
let buttons = document.querySelectorAll("button");

// Initialize variables to store the input string and convert buttons to an array
let string = "";
let arr = Array.from(buttons);

// Add click event listeners to all buttons
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Trigger the flash animation by temporarily removing and adding the animation
    e.target.style.animation = "none";
    setTimeout(() => {
      e.target.style.animation = "";
    }, 10);

    // Check which button was clicked and perform the corresponding action
    if (e.target.innerHTML == "=") {
      // Evaluate the string and display the result
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "C") {
      // Clear the input string
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      // Remove the last character from the input string
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      // Append the clicked button's value to the input string
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
