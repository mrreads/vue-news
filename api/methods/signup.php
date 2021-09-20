<?php

include __DIR__ . './../database.php';

$fullname = $_POST['fullname'];
$login = $_POST['login'];
$email = $_POST['email'];
$password = $_POST['password'];

$queryEmail = "SELECT COUNT(*) FROM users WHERE email = '$email';";
$resultEmail = $conn->query($queryEmail);
$emailCount = $resultEmail->fetch_row()[0];

$errors = [];

if ($emailCount > 0)
{
    array_push($errors, "email error");
    //exit();
}

$queryLogin = "SELECT COUNT(*) FROM users WHERE login = '$login';";
$resultLogin = $conn->query($queryLogin);
$loginCount = $resultLogin->fetch_row()[0];

if ($loginCount > 0)
{
    array_push($errors, "login error");
    //exit();
}

if (count($errors) > 0)
{
    echo json_encode($errors, JSON_UNESCAPED_UNICODE);
    exit();
}

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

$query = "  INSERT INTO 
                `users` (`id`, `created_at`, `fullname`, `login`, `passsord`, `email`) 
            VALUES (NULL, CURRENT_TIMESTAMP, '$fullname', '$login', '$passwordHash', '$email');";

$result = $conn->query($query );

echo json_encode("success", JSON_UNESCAPED_UNICODE);