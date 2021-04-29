<?php

$recepient = "Sege1chenkov.vladon@yandex.ru";
$siteName = "Ulap";

$firstname = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "First name: $firstname \nPhone: $phone \nE-mail: $email \nText: $text ";

$pagetitle = "Site: \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>