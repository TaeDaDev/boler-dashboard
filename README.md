# Interactive Productivity Dashboard
 This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
## ToDo List
- [x] Setup file structure
- [x] Create the build of the site and style it 
- [x] Add Javascript for the interactivity 


## Imperial/Metric Converter

The Imperial/Metric Converter is a tool that allows users to convert measurements between Imperial and Metric units. The application converts inches, feet, yards, and miles to centimeters, meters, and kilometers, as well as Metric units back to Imperial units.

### Logic and Pseudocode

BEGIN


INPUT numericValue
INPUT conversionChoice

IF conversionChoice = "inch to centimeter" THEN
    SET result = numericValue * 2.54
    DISPLAY result rounded to 2 decimal places

ELSE IF conversionChoice = "foot to centimeter" THEN
    SET result = numericValue * 30.48
    DISPLAY result rounded to 2 decimal places

ELSE IF conversionChoice = "yard to meter" THEN
    SET result = numericValue * 0.91
    DISPLAY result rounded to 2 decimal places

ELSE IF conversionChoice = "mile to kilometer" THEN
    SET result = numericValue * 1.61
    DISPLAY result rounded to 2 decimal places

ELSE IF conversionChoice = "centimeter to inch" THEN
    SET result = numericValue * 0.39
    DISPLAY result rounded to 2 decimal places

ELSE IF conversionChoice = "centimeter to foot" THEN
    SET result = numericValue * 0.0328
    DISPLAY result rounded to 2 decimal places

ELSE IF conversionChoice = "meter to yard" THEN
    SET result = numericValue * 1.09
    DISPLAY result rounded to 2 decimal places

ELSE IF conversionChoice = "kilometer to mile" THEN
    SET result = numericValue * 0.62
    DISPLAY result rounded to 2 decimal places

ELSE
    DISPLAY "Invalid conversion choice."


END

      
## Magic Eight Ball

A fun interactive Magic Eight Ball game that allows users to enter a question and receive a random response. The game uses JavaScript event listeners to handle user interactions and dynamically displays responses.

### Technical Features

* Uses a JavaScript array to store multiple Magic Eight Ball responses.
* Generates random responses using `Math.random()` and `Math.floor()`.
* Uses `addEventListener()` to handle mouse and button events.
* Uses `getElementById()` and `innerHTML` to dynamically update the page.
* Includes a reset button to hide the displayed response.
* Bonus feature allows users to add new responses to the answer array.
* Uses browser alerts and the console for user feedback and testing.
