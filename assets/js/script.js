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

// returns the (length) options convert button to apply the relevant function when clicked
document.getElementById('lengthButton').addEventListener('click', lengthFunc);
  // enter key works as click
  let eInputl = document.getElementById('lengthInput');
  eInputl.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('lengthButton').click();
    }
  });

// returns the (speed) options convert button to apply the relevant function when clicked
document.getElementById('speedButton').addEventListener('click', speedFunc);
  // enter key works as click
  let eInputs = document.getElementById('speedInput');
  eInputs.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('speedButton').click();
    }
  });

// returns the (temperature) options convert button to apply the relevant function when clicked
document.getElementById('tempButton').addEventListener('click', tempFunc);
  // enter key works as click
  let eInputte = document.getElementById('tempInput');
  eInputte.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('tempButton').click();
    }
  });

// returns the (time) options convert button to apply the relevant function when clicked
document.getElementById('timeButton').addEventListener('click', timeFunc);
  // enter key works as click
  let eInputti = document.getElementById('timeInput');
  eInputti.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('timeButton').click();
    }
  });

// returns the (weight) options convert button to apply the relevant function when clicked
document.getElementById('weightButton').addEventListener('click', weightFunc);
  // enter key works as click
  let eInputw = document.getElementById('weightInput');
  eInputw.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('weightButton').click();
    }
  });

// and here are the functions for them
  // for Area 
function areaFunc() {
  // parseFloat to make floating numbers for more accurate results
  let inputNum = parseFloat(document.getElementById('areaInput').value);
  // the value of what we want to convert from
  let fromUnit = document.getElementById('fromArea').value;
  // the value of what we want to convert to
  let toUnit = document.getElementById('toArea').value;
  // factors can be set easily as only multiplication can be used to determine them
  let units = {
    acre: 0.000247105,
    are: 0.01,
    hectare: 0.0001,
    sqCentimeter: 10000,
    sqDecimeter: 100,
    sqFoot: 10.7639,
    sqInch: 1550.0031,
    // chose sqMeter as base value all the others compared to it
    sqMeter: 1,
    sqMile: 3.861e-7,
    sqMillimeter: 1000000,
    sqKilometer: 0.000001,
    sqYard: 1.19599,
  };
    // add a little basic math to the function
  let result = inputNum * (units[toUnit] / units[fromUnit]);
  // to show the results on the html page by changing the original text to the result
  // toFixed(3), to limit digits after decimal to 3
  document.getElementById('areaResult').textContent = `Result: ${result.toFixed(3)}`;
}

  // for Data
function dataFunc() {
  let inputNum = parseFloat(document.getElementById('dataInput').value);
  let fromUnit = document.getElementById('fromData').value;
  let toUnit = document.getElementById('toData').value;
  let units = {
    bit: 8192,
    byte: 1024,
    gigabyte: 0.000000953674,
    // chose kilobyte as base value
    kilobyte: 1,
    megabyte: 0.000976562,
    terabyte: 0.000000000931322,
  };
  let result = inputNum * (units[toUnit] / units[fromUnit]);
  document.getElementById('dataResult').textContent = `Result: ${result.toFixed(3)}`;
}

  // for Length
function lengthFunc() {
  let inputNum = parseFloat(document.getElementById('lengthInput').value);
  let fromUnit = document.getElementById('fromLength').value;
  let toUnit = document.getElementById('toLength').value;
  let units = {
    centimeter: 100,
    chain: 0.049709,
    decimeter: 10,
    feet: 3.28083,
    furlong: 0.0049709,
    inch: 39.37007,
    kilometer: 0.001,
    league: 0.000207123,
    // chose meter as base value
    meter: 1,
    mile: 0.000621371,
    millimeter: 1000,
    nauticalmile: 0.0005399,
    rod: 0.19883,
    yard: 1.09361,
  };
  let result = inputNum * (units[toUnit] / units[fromUnit]);
  document.getElementById('lengthResult').textContent = `Result: ${result.toFixed(3)}`;
}

  // for Speed
function speedFunc() {
  let inputNum = parseFloat(document.getElementById('speedInput').value);
  let fromUnit = document.getElementById('fromSpeed').value;
  let toUnit = document.getElementById('toSpeed').value;
  let units = {
    ftperm: 54.6806,
    ftpers: 0.911344,
    // chose km/h as base value
    kmperh: 1,
    knot: 0.539956,
    lightspeed: 0.0000000009265669311,
    mileperh: 0.621371,
    mpers: 0.277777,
    soundspeedair: 0.000809375,
    soundspeedwater: 0.000187181,
  };
  let result = inputNum * (units[toUnit] / units[fromUnit]);
  document.getElementById('speedResult').textContent = `Result: ${result.toFixed(3)}`;
}

  // for Temperature
function tempFunc() {
  let inputNum = parseFloat(document.getElementById('tempInput').value);
  let fromUnit = document.getElementById('fromTemp').value;
  let toUnit = document.getElementById('toTemp').value;
  // Here I used if/else as temperature values are cannot be determined with only 1 arithmetical operation 
  // to work out this formula I had help from www.shecodes.io 
  let result;
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      result = (inputNum * 9) / 5 + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      result = inputNum + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      result = ((inputNum - 32) * 5) / 9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      result = ((inputNum - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      result = inputNum - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      result = ((inputNum - 273.15) * 9) / 5 + 32;
    } else {
      result = inputNum;
    }
      document.getElementById('tempResult').textContent = `Result: ${result.toFixed(3)}`;
}

  // for Time
function timeFunc() {
  let inputNum = parseFloat(document.getElementById('timeInput').value);
  let fromUnit = document.getElementById('fromTime').value;
  let toUnit = document.getElementById('toTime').value;
  let units = {
    calendaryear: 1 / 31536000,
    century: 1 / 3153600000,
    day: 1 / 86400,
    decade: 1 / 315360000,
    hour: 1 / 3600,
    millenium: 1 / 31536000000,
    millisecond: 1000,
    minute: 1 / 60,
    month: 1 / 2628000,
    // chose seconds as base value
    second: 1,
    week: 1 / 604800,
  };
  let result = inputNum * (units[toUnit] / units[fromUnit]);
  document.getElementById('timeResult').textContent = `Result: ${result.toFixed(3)}`;
}

  // for Weigth
function weightFunc() {
  let inputNum = parseFloat(document.getElementById('weightInput').value);
  let fromUnit = document.getElementById('fromWeight').value;
  let toUnit = document.getElementById('toWeight').value;
  let units = {
    carat: 5,
    grain: 15.4323,
    // chose gram as base value
    gram: 1,
    kilogram: 0.001,
    milligram: 1000,
    ounce: 0.035273,
    pennyweight: 0.643014,
    pound: 0.002204,
    stone: 0.000157473,
    tonlong: 0.0000009842,
    tonmetric: 0.000001,
    tonshort: 0.0000011023,
    troyounce: 0.0321507,
    troypound: 0.00267922,
  };
  let result = inputNum * (units[toUnit] / units[fromUnit]);
  document.getElementById('weightResult').textContent = `Result: ${result.toFixed(3)}`;
}