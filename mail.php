<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$number = $_POST['number'];
$formcontent="From: $name \n Message: $message \n Contact Number: $number";
$recipient = "sameyer17@gmail.com";
$subject = $_POST['subject'];
$mailheader = "From: $email \r\n";
if ($_POST['submit']) {
mail($recipient, $subject, $formcontent, $mailheader);
echo "Thank You!";
}
?>