<?php
    session_start();
    $msg="";
    if(isset($_GET['msg'])){
        $msg = $_GET['msg'];
    }
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
    
    <link rel="stylesheet" href="client/public/css/style.css">
    <link rel="stylesheet" href="client/utilitaires/bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="client/utilitaires/jquery-3.6.0.min.js"></script>
    <script src="client/utilitaires/bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <script src="client/public/js/global.js"></script>
    <script src="client/public/home/requetesHome.js"></script>
    <script src="client/public/home/vueHome.js"></script>

</head>
<body onload="javascript:chargerCircuistAJAX();">
    
     <?php 
      // include_once('serveur/includes/menu_accueil.inc.php'); 
  ?> 
    <!-- Barre de navigation -->
        <!-- <nav class="navbar navbar-expand-lg bg-nav-perso"> -->
    <nav class="navbar navbar-expand-lg bg-nav-perso">
        <div class="container-fluid">
            <a class="navbar-brand" href="javascript: chargerCircuistAJAX();"></a>
            <img  src="serveur/ressources/images/logo_sanstexte.jpg" alt="Logo" width="60" height="50" class="d-inline-block align-text-top">
            <div id="logo_text" >The Luxury Traveler</div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
               
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="javascript: chargerCircuistAJAX();">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript: montrerFormEnreg();">Enregistrer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript: montrerFormConnex();">Connexion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript: afficherContact();">Contactez nous</a>
                    </li>
                   
                </ul>  
            </div>
        </div>
    </nav>
    <!-- Fin de barre de navigation -->
    <div class="container" id="contenu"></div>

        <form id="formLister" action="serveur/lister.php" method="POST"></form>
    </div>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  
</div>
    
		
</body>
</html>