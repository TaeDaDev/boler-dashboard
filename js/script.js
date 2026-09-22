// The following code will display an alert pop-up window.
window.alert("The JavaScript code is working!");


// Metric Converter
let numericValue;
let conversionChoice;
let result;

// Example for getting inputs
numericValue = parseFloat(/* ask user for number */);
conversionChoice = /* ask user for conversion type */;

if (conversionChoice === "inch to centimeter") {
  result = numericValue * 2.54;
  // Display rounded result: result.toFixed(2)
} else if (conversionChoice === "foot to centimeter") {
  result = numericValue * 30.48;
  // Display rounded result
} else if (conversionChoice === "yard to meter") {
  result = numericValue * 0.91;
  // Display rounded result
} else if (conversionChoice === "mile to kilometer") {
  result = numericValue * 1.61;
  // Display rounded result
} else if (conversionChoice === "centimeter to inch") {
  result = numericValue * 0.39;
  // Display rounded result
} else if (conversionChoice === "centimeter to foot") {
  result = numericValue * 0.0328;
  // Display rounded result
} else if (conversionChoice === "meter to yard") {
  result = numericValue * 1.09;
  // Display rounded result
} else if (conversionChoice === "kilometer to mile") {
  result = numericValue * 0.62;
  // Display rounded result
} else {
  // Display: "Invalid conversion choice."
}
// End Metric Converter
