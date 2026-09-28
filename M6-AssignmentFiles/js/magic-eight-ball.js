// Array containing possible Magic Eight Ball answers
let answers = [
    "Yes, definitely!",
    "It is certain.",
    "Without a doubt.",
    "Ask again later.",
    "Cannot predict now.",
    "Don't count on it.",
    "My sources say no.",
    "Yes!"
];

// Function to display a random answer
function displayAnswer() {
    // Generate a random index
    let randomIndex = Math.floor(Math.random() * answers.length);

    // Show the circle
    document.getElementById("circle").style.display = "block";

    // Display the random answer
    document.getElementById("circle").innerHTML = answers[randomIndex];
}

// Event listener for the Magic Eight Ball
document.getElementById("ball").addEventListener("click", function(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Check if the user entered a question
    if (document.getElementById("question").value === "") {
        alert("Please enter a question.");
    }
    else {
        // Display a random answer
        displayAnswer();
    }
});

// Event listener for the reset button
document.getElementById("reset").addEventListener("click", function(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Hide the answer circle
    document.getElementById("circle").style.display = "none";

    // Clear the question
    document.getElementById("question").value = "";
});

// Bonus: Add a new response
document.getElementById("addAnswer").addEventListener("click", function(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Ask the user for a new response
    let newAnswer = prompt("Enter a new Magic Eight Ball response:");

    // Only add the answer if the user entered something
    if (newAnswer !== null && newAnswer !== "") {
        answers.push(newAnswer);

        // Display the new response and number of responses in the console
        console.log("New response: " + newAnswer);
        console.log("Number of responses: " + answers.length);
    }
});

