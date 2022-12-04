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
    <link rel="stylesheet" href="../../client/utilitaires/icons-1.8.1/bootstrap-icons.css">
    <link rel="stylesheet" href="../../client/utilitaires/bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../client/public/css/style.css">
    <script src="../../client/utilitaires/jquery-3.6.0.min.js"></script>
    <script src="../../client/utilitaires/bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <script src="../../client/public/membre/requetesMembre.js"></script>
    <script src="../../client/public/membre/vueMembre.js"></script>
    </head>
    <body id="pageM"onload="javascript:chargerCircuitsAJAX(), rafraichireCart();">
    <?php
        require_once("menu_membre.inc.php");
    ?>
    <div id='contenu'></div>
    <div class="modal fade" id="idModPanier" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="contenuPanier"></div>
      </div>
    </div>
  </div>
</div>
    </body>
    
</html>