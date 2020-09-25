<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redline - un nième site de sondage </title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
       <h1>
           <a href="index.php">
               <img src="../assets/img/logo.png" alt="logo"> 
           </a>
       </h1>
        <nav>
        <ul>
           <li><a href="index.php">Home</a></li>
           <li><a href="#">Sondages</a></li>
           <li><a href="#">Contact</a></li>
           <li><a href="views/ranking.php">Classement</a></li>
        </ul>    
        </nav>
    </header>
    <section Rank>
        <h2>Selectionnez le ranking à afficher</h2>
        <select name="number" id="number">
        <option value="" selected>Choisissez ici le nombre de joueurs à afficher</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
        </select>
        <div class="rank_container">
            <div class="item">
                
            </div>
        </div>
    </section>