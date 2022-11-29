<?php
    session_start();

    if(!isset($_SESSION['courriel'])){
        header('Location: ../../index.php?msg=Vous+devez+vous+connecter');
        exit;
    }
    $photo = $_SESSION['photom'];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membre</title>
    <link rel="stylesheet" href="../../client/utilitaires/bootstrap-5.2.0-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../client/css/style.css">
    <script src="../../client/public/js/global.js"></script>
</head>
<body>
    <!-- Barre de navigation -->
    <nav class="navbar navbar-expand-lg bg-nav-perso">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Test</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick="lister();">Profil</a>
                    </li>
                    
                </ul>
                <img src="../ressources/images/images_membres/<?php echo $photo; ?>" class="image-border" alt="photo" style="width:48px">
            </div>
        </div>
    </nav>
    <br><br>
    <h3>JE SUIS DANS LA PAGE MEMBRE</h3>
    <br><br>
    <button type="button" class="btn btn-primary" onClick="deconnecter();">Déconnexion</button>
    <form id="dc" action="../ressources/bd/deconnecter.php"></form>
</body>
</html>