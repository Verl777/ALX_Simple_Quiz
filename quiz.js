// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4";

    // Step 3: Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Check if an option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 5: Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Add Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
