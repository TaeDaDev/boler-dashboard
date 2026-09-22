# Interactive Productivity Dashboard
 This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
## ToDo List
- [x] Setup file structure
- [x] Create the build of the site and style it 
- [x] Add Javascript for the interactivity 
      
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
