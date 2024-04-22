// First of all, the automation for the moving text
i = 0;
  // text to be showed on the main page
myText = 'Simple yet stylish unit converter!';
  // as text is not too long I added 250 milliseconds, so it's not too fast and readable
let sequence1 = setInterval(update, 250);
function update() {
  i++;
  if (i > myText.length) {
    // i is set to zero so it's start over when the text rolled out
    i = 0;
  }
  moveLeft1 = myText.substring(i, myText.length);
    // non-breaking spaces added to the end
  moveLeft1 += '&nbsp;';
    // start at the beginning and up to i to create the marquee effect
  moveLeft1 += myText.substring(0, i);
    // finally apply the text into html page
  document.getElementById('move-left1').innerHTML = moveLeft1;
}

// choose all elements with .options class name and make them hidden
let optionInput = document.querySelectorAll('.options');
  optionInput.forEach((opt) => (opt.style.display = 'none'));