<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>quizz</title>
    <link rel="stylesheet" href="../public/assets/css/poll.css?a=v">
</head>

<body>
    <header>
        <h1>
            <a href="../public/index.php">
                <img src="../public/assets/img/logo.png" alt="logo">
            </a>
        </h1>
        <div class="score" id="score">0</div>
        <a href="#" id="usernameDisplay"></a>
        <nav>
            <ul>
                <li> <a href="../public/index.php">Home</a></li>
                <li><a href="../views/list.php">Sondages</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="../views/ranking.php">Classement</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">

        <div id="questionContainer">
            <div class="question" id="isActive">
                <h3 id="currentQuestion"></h3>
                <div class="answersContainer">

                </div>
            </div>
        </div>

    </div>


    <script src="../public/assets/js/variables.js"></script>
    <script src="../public/assets/js/functions.js"></script>
    <script src="../public/assets/js/app.js"></script>
</body>

</html>