function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Real-time validation
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var validationMessages = document.getElementById("validationMessages");
    validationMessages.innerHTML = ""; // Clear previous messages

    if (name === "" || email === "" || message === "") {
        validationMessages.innerHTML = "All fields are required.";
        return;
    }

    // If all fields are filled, you can proceed with AJAX to submit the form data
    // ...

    // For this example, simulate form submission success
    var submissionStatus = document.getElementById("submissionStatus");
    submissionStatus.innerHTML = "Form submitted successfully!";
    clearForm(); // Optional: Clear the form after successful submission
}

function clearForm() {
    document.getElementById("contactForm").reset();
}
