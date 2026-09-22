// The following code will display an alert pop-up window.
window.alert("The JavaScript code is working!");


// Start Metric Converter
let numericValue;
let conversionChoice;
let result;

// Example way to get input (we haven't covered prompts yet, so just imagine these values are set)
numericValue = /* some number */;
conversionChoice = /* some text like "inch to centimeter" */;

if (conversionChoice === "inch to centimeter") {
    result = numericValue * 2.54;
    // Show result
    // e.g., console.log(result);
} else if (conversionChoice === "foot to centimeter") {
    result = numericValue * 30.48;
    // Show result
} else if (conversionChoice === "yard to meter") {
    result = numericValue * 0.91;
    // Show result
} else if (conversionChoice === "mile to kilometer") {
    result = numericValue * 1.61;
    // Show result
} else if (conversionChoice === "centimeter to inch") {
    result = numericValue * 0.39;
    // Show result
} else if (conversionChoice === "centimeter to foot") {
    result = numericValue * 0.0328;
    // Show result
} else if (conversionChoice === "meter to yard") {
    result = numericValue * 1.09;
    // Show result
} else if (conversionChoice === "kilometer to mile") {
    result = numericValue * 0.62;
    // Show result
} else {
    // Show invalid choice message
     console.log("Invalid conversion choice.");
}
// End Metric Converter
