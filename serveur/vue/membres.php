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
    <link rel="stylesheet" href="../../client/public/css/style.css">
    <link rel="stylesheet" href="../../client/utilitaires/bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="../../client/public/js/global.js"></script>
    <script src="../../client/public/membre/requetesMembre.js"></script>
    <script src="../../client/public/membre/vueMembre.js"></script>
    </head>
    <body onload="javascript:chargerCircuitsAJAX();">
    <?php
        require_once("menu_membre.inc.php");
    ?>
    </body>
    <div id='contenu'></div>
</html>