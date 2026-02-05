// select all elements
const btn = document.querySelector("#btn");
const modeBtn = document.querySelector("#modeBtn");
const copyBtn = document.querySelector("#copyBtn");
const colorCode = document.querySelector("#colorCode");
const copyStatus = document.querySelector("#copyStatus");

// Hex characters
const hexChars = "0123456789ABCDEF";

// mode flag
let isRGBMode = false;

// function to generate random hex color
function generateHexColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    color += hexChars[randomIndex];
  }

  return color;
}

// function to generate random RGB color
function generateRGBColor() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// Generate color button
btn.addEventListener("click", () => {
  let randomColor;

  if (isRGBMode) {
    randomColor = generateRGBColor();
  } else {
    randomColor = generateHexColor();
  }

  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
  copyStatus.textContent = "";
});

// Toggle Mode Button
modeBtn.addEventListener("click", () => {
  isRGBMode = !isRGBMode;

  if (isRGBMode) {
    modeBtn.textContent = "Switch to HEX";
  } else {
    modeBtn.textContent = "Switch to RGB";
  }
});

// Copy to Clipboard Button
// Copy to Clipboard Button
copyBtn.addEventListener("click", async () => {
  const textToCopy = colorCode.textContent;

  try {
    await navigator.clipboard.writeText(textToCopy);
    copyStatus.textContent = "Copied to clipboard!";

    // ✅ Auto-hide message after 3 seconds
    setTimeout(() => {
      copyStatus.textContent = "";
    }, 3000);

  } catch (err) {
    copyStatus.textContent = "Copy failed!";

    // Also hide error after 3 seconds
    setTimeout(() => {
      copyStatus.textContent = "";
    }, 3000);
  }
});

