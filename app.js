$('#rgb-input').keyup(function() {

  let field = $(this);
  let input = field.val();

  // Get each colour value
  let values = input.split(',');
  let red = Number(values[0]);
  let green = Number(values[1]);
  let blue = Number(values[2]);

  // Convert each to its hexadecimal value
  red = convertToHex(red);
  green = convertToHex(green);
  blue = convertToHex(blue);

  // Show output
  let hexValue = '#' + red + green + blue;
  $('#hex-input').val(hexValue);
});

// Convert a number to hexadecimal
function convertToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}
