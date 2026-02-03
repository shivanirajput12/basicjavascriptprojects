//select all the elements that we need

const countDisplay = document.querySelector("#count");
const incrementBtn = document.querySelector("#increase");
const decrementBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

// initialize count variable
let count = 0;

//create function to update the display
function updateDisplay() {
  //update the text

  countDisplay.textContent = count;

  //Remove all color classes first
  countDisplay.classList.remove("positive", "negative", "zero");

  //add color based on the value of count
  if (count > 0) {
    countDisplay.classList.add("positive");
  } else if (count < 0) {
    countDisplay.classList.add("negative");
  } else {
    countDisplay.classList.add("zero");
  }
}


//add event listeners to buttons
incrementBtn.addEventListener("click", function() {
  count++; //increment count by 1
  updateDisplay(); //update the display
});

decrementBtn.addEventListener("click", function() {
  count--; //decrement count by 1
  updateDisplay(); //update the display
});

resetBtn.addEventListener("click", function() {
  count = 0; //reset count to 0
  updateDisplay(); //update the display
});

//initial display update
updateDisplay();