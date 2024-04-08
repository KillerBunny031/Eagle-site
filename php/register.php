<?php

require_once('db.php');

$login = $_POST['login'];
$pass = $_POST['pass'];
$repeatpass = $_POST['repeatpass'];

if (empty($login) || empty($pass) || empty($repeatpass)) {
    echo "Заполните все поля";
} else {
    if ($pass != $repeatpass) {
        echo "Пароли не совпадают";
    } else {
        $sql = "INSERT INTO `users` (login, pass) VALUES ('$login', '$pass')";
        if ($conn -> query($sql) === TRUE) {
            echo "Успешная регистрация";
        } else {
            echo "Ошибка: " . $conn->error;
        }
    }

}
