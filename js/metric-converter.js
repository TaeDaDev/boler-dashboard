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

    // Get the selected conversion
    let conversionIndex = document.getElementsByTagName("select")[0].selectedIndex;

    // Get the selected option
    let conversionType = document.getElementsByTagName("option")[conversionIndex].value;

    let convertedValue;

    // Conversion logic
    if (conversionType === "inch-to-centimeter") {
        convertedValue = inputValue * 2.54;
        result.innerHTML = inputValue + " inches is " + convertedValue.toFixed(2) + " centimeters";
    }
    else if (conversionType === "foot-to-meter") {
        convertedValue = inputValue * 0.3048;
        result.innerHTML = inputValue + " feet is " + convertedValue.toFixed(2) + " meters";
    }
    else if (conversionType === "yard-to-meter") {
        convertedValue = inputValue * 0.9144;
        result.innerHTML = inputValue + " yards is " + convertedValue.toFixed(2) + " meters";
    }
    else if (conversionType === "mile-to-kilometer") {
        convertedValue = inputValue * 1.60934;
        result.innerHTML = inputValue + " miles is " + convertedValue.toFixed(2) + " kilometers";
    }
    else if (conversionType === "centimeter-to-inch") {
        convertedValue = inputValue / 2.54;
        result.innerHTML = inputValue + " centimeters is " + convertedValue.toFixed(2) + " inches";
    }
    else if (conversionType === "meter-to-foot") {
        convertedValue = inputValue / 0.3048;
        result.innerHTML = inputValue + " meters is " + convertedValue.toFixed(2) + " feet";
    }
    else if (conversionType === "meter-to-yard") {
        convertedValue = inputValue / 0.9144;
        result.innerHTML = inputValue + " meters is " + convertedValue.toFixed(2) + " yards";
    }
    else if (conversionType === "kilometer-to-mile") {
        convertedValue = inputValue / 1.60934;
        result.innerHTML = inputValue + " kilometers is " + convertedValue.toFixed(2) + " miles";
    }
});


//complete