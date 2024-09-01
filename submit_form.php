<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can implement further processing, validation, and sending emails here

    // For simplicity, just log the form data to a file
    $logFile = "form_submissions.log";
    $logData = "Name: $name\nEmail: $email\nMessage: $message\n\n";
    file_put_contents($logFile, $logData, FILE_APPEND);
}
?>
