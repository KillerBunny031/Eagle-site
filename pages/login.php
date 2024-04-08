<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="../styles/login_style.css">
    <title>Eagle | Вход в аккаунт</title>
    <link rel="icon" href="../images/Eagle_icon.png" type="image/x-icon">
</head>

<body>

    <div class="container" id="container">
        <div class="form-container sign-up">
            <form action="../php/register.php" method="post">
                <h1 id="create">Создать аккаунт</h1>
                <input type="text" placeholder="Логин" name="login">
                <input type="password" placeholder="Пароль" name="pass">
                <input type="password" placeholder="Повторите пароль" name="repeatpass">
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form action="../php/login.php" method="post">
                <h1 id="Voiti">Войти</h1>
                <input type="text" placeholder="Логин" name="login">
                <input type="password" placeholder="Пароль" name="pass">
                <a href="#">Забыли пароль?</a>
                <button type="submit">Войти</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Привет вновь!</h1>
                    <p>Введите свои личные данные, чтобы использовать все возможности сайта</p>
                    <button class="hidden" id="login">Войти</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Привет!</h1>
                    <p>Зарегистрируйтесь, указав свои личные данные, чтобы использовать все функции сайта.</p>
                    <button class="hidden" id="register">Зарегистрироваться</button>
                </div>
            </div>
        </div>
    </div>

    <script src="../js/login.js"></script>
</body>

</html>