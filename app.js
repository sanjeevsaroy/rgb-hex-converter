// Convert the rgb input to a hex value
$('#red-input, #green-input, #blue-input').keyup(function() {

  // get all the input values
  let red = Number($('#red-input').val());
  let green = Number($('#green-input').val());
  let blue = Number($('#blue-input').val());

  let noErrors = (red <= 255) && (green <= 255) && (blue <= 255) && !isNaN(red) && !isNaN(green) && !isNaN(blue);

  if (noErrors) {
    red = convertToHex(red);
    green = convertToHex(green);
    blue = convertToHex(blue);

    // Show output
    let hexValue = '#' + red + green + blue;
    $('#hex-input').val(hexValue);
  }
  else {
    // Display error message
    $('#hex-input').val('Not a valid input');
  }
});

// Convert the hex input to a rgb value
$('#hex-input').keyup(function() {

  let field = $(this);
  let input = field.val();

  // Get each colour value
  let red = input.substring(1,3);
  let green = input.substring(3,5);
  let blue = input.substring(5,7);

  let regex = /([a-fA-F0-9]{2})/;
  let noErrors = regex.test(red) && regex.test(green) && regex.test(blue);

  if (noErrors) {
    // Convert each to its decimal value
    red = convertToDecimal(red);
    green = convertToDecimal(green);
    blue = convertToDecimal(blue);

    // Show output
    $('#red-input').val(red);
    $('#green-input').val(green);
    $('#blue-input').val(blue);
  }
  else {
    // Display error message
    $('#red-input').val('Not a');
    $('#green-input').val('valid');
    $('#blue-input').val('input');
  }
});

// Convert a decimal to hexadecimal
function convertToHex(d) {
  var hex = d.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

// Convert a hexadecimal to decimal
function convertToDecimal(h) {
  var decimal = parseInt(h, 16);
  return decimal;
}
