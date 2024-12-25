// Set up text to print, each item in the array is a new line
var aText = [
  "There are only 10 types of people in the world:",
  "Those who understand binary, and those who don't",
];
var iSpeed = 100; // Time delay of print out
var iIndex = 0; // Start printing array at this position
var iScrollAt = 20; // Start scrolling up at this many lines
var iTextPos = 0; // Initialise text position
var sContents = ""; // Initialise contents variable

function typewriter() {
  sContents = "";
  var destination = document.getElementById("typedtext");

  // Ensure the index is within bounds
  if (iIndex < aText.length) {
    // Prepare the content to display
    for (var iRow = Math.max(0, iIndex - iScrollAt); iRow < iIndex; iRow++) {
      sContents += aText[iRow] + "<br />";
    }
    // Add current text with cursor
    sContents += aText[iIndex].substring(0, iTextPos) + "_";
    destination.innerHTML = sContents;

    // If we reached the end of the current string, move to the next string
    if (iTextPos++ === aText[iIndex].length) {
      iTextPos = 0;
      iIndex++;
      if (iIndex < aText.length) {
        setTimeout(typewriter, 500); // Delay before starting the next line
      }
    } else {
      setTimeout(typewriter, iSpeed); // Typing speed
    }
  }
}

// Run typewriter effect once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", typewriter);
