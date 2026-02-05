// select all the elements
const countDisplay = document.querySelector("#count");
const incrementBtn = document.querySelector("#increase");
const decrementBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const doubleBtn = document.querySelector("#double"); // ✅ New

// limits
const MIN = -10;
const MAX = 10;

// initialize count
let count = 0;

// function to update UI
function updateDisplay() {
  // update number
  countDisplay.textContent = count;

  // remove old classes
  countDisplay.classList.remove("positive", "negative", "zero");

  // add color based on value
  if (count > 0) {
    countDisplay.classList.add("positive");
  } else if (count < 0) {
    countDisplay.classList.add("negative");
  } else {
    countDisplay.classList.add("zero");
  }

  // ✅ Disable buttons at limits (pro UX)
  incrementBtn.disabled = count >= MAX;
  decrementBtn.disabled = count <= MIN;
  doubleBtn.disabled = count * 2 > MAX || count * 2 < MIN;
}

// Increase
incrementBtn.addEventListener("click", function () {
  if (count < MAX) {
    count++;
    updateDisplay();
  }
});

// Decrease
decrementBtn.addEventListener("click", function () {
  if (count > MIN) {
    count--;
    updateDisplay();
  }
});

// Reset
resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});

// ✅ Double
doubleBtn.addEventListener("click", function () {
  const doubled = count * 2;

  // enforce limits
  if (doubled > MAX) {
    count = MAX;
  } else if (doubled < MIN) {
    count = MIN;
  } else {
    count = doubled;
  }

  updateDisplay();
});

// initial render
updateDisplay();
