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

  // make selected options visible only
let category = document.getElementById('convCat');
  category.addEventListener('change', function() {
    // this to call back the hidden option that has been clicked on
    let perInput = category.value;
    optionInput.forEach((opt) => (opt.style.display = 'none'));
    // added style to display the options correctly when chosen
    document.getElementById(perInput).style.display = 'block';
});

// returns the (area) options convert button to apply the relevant function when clicked
document.getElementById('areaButton').addEventListener('click', areaFunc);
  // enter key works as click
  // this to call the enter key function in the input box when the user types in desired value
  let eInputa = document.getElementById('areaInput');
  eInputa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      // this to call the function to work as the submit button
      document.getElementById('areaButton').click();
    }
  });

// returns the (data) options convert button to apply the relevant function when clicked
document.getElementById('dataButton').addEventListener('click', dataFunc);
  // enter key works as click
  let eInputd = document.getElementById('dataInput');
  eInputd.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('dataButton').click();
    }
  });