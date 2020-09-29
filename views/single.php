<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redline - un nième site de sondage </title>
    <link rel="stylesheet" href="../public/assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
</head>

<body>
    <header>
        <h1>
            <a href="../public/index.php">
                <img src="../public/assets/img/logo.png" alt="logo">
            </a>
        </h1>
        <nav>
            <ul>
            <li> <a href="../public/index.php">Home</a></li>
                <li><a href="../views/list.php">Sondages</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="../views/ranking.php">Classement</a></li>
            </ul>
        </nav>
    </header>
    <section TheSurvey>
        <!-- 
            Je compte faire en sorte que c'est une "page par question, donc voilà un exemple"
         -->
        <div class="title">
            <h2>Etude de marché</h2>
            <progress value="0" max="100"></progress> <!-- la barre de progression sera géré en JQuery en fonction de la question répondu, elle avancera,  -->
        </div>
        <div class="questionWrapper">
            <h3>Les céreales, avant ou après le lait ? </h3>
            <div class="theQuestion">
                <div class="anwserPossible">

                    <input type="radio" id="name" name="anwser1">
                    <label for="answer1">Avant, grand fou</label>
                </div>
            <div class="anwserPossible">
                <input type="radio" id="name2" name="anwser2">
                <label for="answer2">Après, grand malade</label>
            </div>
            <div class="anwserPossible">
                
                <input type="radio" id="name2" name="anwser3">
                <label for="answer3">Le premier qui me tombe sous la main</label>
            </div>


            </div>
            <div class="button-wrapper">
                <a href="#">Suivant</a>
            </div>
    </section>
</body>