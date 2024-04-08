<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="../php/register.php" method="post">
        <input type="text" placeholder="Login" name="login">
        <input type="text" placeholder="Password" name="pass">
        <input type="text" placeholder="Password" name="repeatpass">
        <button type="submit">Зарегистрироваться</button>
    </form>

    <form action="../php/login.php" method="post">
        <input type="text" placeholder="Login" name="login">
        <input type="text" placeholder="Password" name="pass">
        <button type="submit">Войти</button>
    </form>

</body>
</html>