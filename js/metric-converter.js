
 // The following code will display an alert pop-up window.
window.alert("The JavaScript code is working!");

// Imperial/Metric Converter

// Get the elements from the HTML
let input = document.getElementById("numeric-value");
let conversion = document.getElementById("conversion-type");
let button = document.getElementById("convert-button");
let result = document.getElementById("conversion-result");

// Add event listener to the button
button.addEventListener("click", function(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Convert input to a number
    let inputValue = parseFloat(input.value);

    // Check that a number was entered
    if (isNaN(inputValue)) {
        result.textContent = "Please enter a number.";
        return;
    }

    // Get the selected conversion directly
    let conversionType = conversion.value;

    let convertedValue;

    // Conversion logic
    if (conversionType === "inch-to-centimeter") {
        convertedValue = inputValue * 2.54;
        result.textContent = inputValue + " inches is " + convertedValue.toFixed(2) + " centimeters";
    }
    else if (conversionType === "foot-to-meter") {
        convertedValue = inputValue * 0.3048;
        result.textContent = inputValue + " feet is " + convertedValue.toFixed(2) + " meters";
    }
    else if (conversionType === "yard-to-meter") {
        convertedValue = inputValue * 0.9144;
        result.textContent = inputValue + " yards is " + convertedValue.toFixed(2) + " meters";
    }
    else if (conversionType === "mile-to-kilometer") {
        convertedValue = inputValue * 1.60934;
        result.textContent = inputValue + " miles is " + convertedValue.toFixed(2) + " kilometers";
    }
    else if (conversionType === "centimeter-to-inch") {
        convertedValue = inputValue / 2.54;
        result.textContent = inputValue + " centimeters is " + convertedValue.toFixed(2) + " inches";
    }
    else if (conversionType === "meter-to-foot") {
        convertedValue = inputValue / 0.3048;
        result.textContent = inputValue + " meters is " + convertedValue.toFixed(2) + " feet";
    }
    else if (conversionType === "meter-to-yard") {
        convertedValue = inputValue / 0.9144;
        result.textContent = inputValue + " meters is " + convertedValue.toFixed(2) + " yards";
    }
    else if (conversionType === "kilometer-to-mile") {
        convertedValue = inputValue / 1.60934;
        result.textContent = inputValue + " kilometers is " + convertedValue.toFixed(2) + " miles";
    }
});
