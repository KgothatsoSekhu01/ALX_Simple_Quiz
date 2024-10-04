// Function Declaration
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4"; // The correct answer for the quiz question

    // Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the User’s Answer with the Correct Answer
    const feedback = document.getElementById("feedback"); // Element to display feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done."; // User's answer is correct
    } else {
        feedback.textContent = "That's incorrect. Try again!"; // User's answer is incorrect
    }
}

// Add an Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
