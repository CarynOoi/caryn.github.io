<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "youremail@example.com"; 

    $subject = "Contact Form Submission from my Webpage";

    // Compose the email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Message:\n$message";

    mail($to, $subject, $message);
    exit;
}
?>
