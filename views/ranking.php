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
    <section Rank>
        
        <div class="rank_container">
            <h2>Top 10 des résultats</h2>
            <table>
                <tr>
                    <th>Position</th>
                    <th>Nom</th>
                    <th>Score</th>
                    <th>Image</th>
                </tr>
                <tr>
                    <th>1 <span>[leader]</span></th>
                    <th>timogo</th>
                    <th>42</th>
                    <th><img src="../public/assets/img/timogo.jpg" alt=""></th>
                </tr>
                <tr>
                    <th>2</th>
                    <th>Eric Cartman</th>
                    <th>39</th>
                    <th><img src="../public/assets/img/rank/Eric_Cartman.png" alt=""></th>
                </tr>
                <tr>
                    <th>3</th>
                    <th>Stan Marsh</th>
                    <th>35</th>
                    <th><img src="../public/assets/img/rank/Stan_Marsh.png" alt=""></th>
                </tr>
                <tr>
                    <th>4</th>
                    <th>Kenny McCormick</th>
                    <th>31</th>
                    <th><img src="../public/assets/img/rank/Kenny_McCormick.png" alt=""></th>
                </tr>
                <tr>
                    <th>5</th>
                    <th>Kyle</th>
                    <th>25</th>
                    <th><img src="../public/assets/img/rank/Kyle.png" alt=""></th>
                </tr>
                <tr>
                    <th>6</th>
                    <th>Craig Tucker</th>
                    <th>23</th>
                    <th><img src="../public/assets/img/rank/Craig_Tucker.png" alt=""></th>
                </tr>
                <tr>
                    <th>7</th>
                    <th>Butters Stotch</th>
                    <th>22</th>
                    <th><img src="../public/assets/img/rank/Butters_Stotch.png" alt=""></th>
                </tr>
                <tr>
                    <th>8</th>
                    <th>Jimmy_Valner</th>
                    <th>15</th>
                    <th><img src="../public/assets/img/rank/Jimmy_Valner.png" alt=""></th>
                </tr>
                <tr>
                    <th>9</th>
                    <th>15 - Juste 15</th>
                    <th>9</th>
                    <th><img src="../public/assets/img/rank/15.png" alt=""></th>
                </tr>
                <tr>
                    <th>10</th>
                    <th>Servietsky</th>
                    <th>-12</th>
                    <th><img src="../public/assets/img/rank/Servietsky.png" alt=""></th>
                </tr>
            </table>
        </div>
    </section>
    <footer>
   <div class="socialLinks">
   <div class="socialCard">
        <a href="https://github.com/timoogo">
            <i class="fab fa-github">
                <span>github</span>
            </i>
        </a>
        </div>
        <div class="socialCard">
            <a href="mailto:timothee.gaultier@edu.devinci.fr"> 
            <i class="fas fa-envelope"><span>Envoyez moi un email !</span></i>
            </a>
        </div>
        <div class="socialCard">
            <a href="tel:+33658842360"> 
            <i class="fas fa-phone">
                <span>Appelez moi ! </span>
            </i>
            </a>
        </div>
   
   </div>
    <div class="credits">
       <h4> Site crée par Timothee Gaultier (timogo©). Assets modifiés par Timothée Gaultier 2A - DW IIM.   </h4>
        <!-- Vu qu'il n'y a pas encore de système d'insctiption / connexion, je les mets dans le footer, après ils seront dans un menu déroulant dans header nav ul -->
        <div class="sign">
            <a href="#">Connexion</a>
            <a href="#">Inscription</a>
        </div>
   </div> 

</footer>
</body>

</html>