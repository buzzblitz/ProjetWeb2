<?php
session_start();
if (!isset($_SESSION['courriel'])) {
    header('Location: ../../index.php?msg=Problème+avec+votre+connexion');
    exit;
}
if (isset($_GET['msg'])) {
    $msg = $_GET['msg'];
}
else {
    $msg = null;
}
?>
<!-- Basé sur le modèle
    https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form
    -->
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Admin</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">

    <link rel="stylesheet" href="../../client/utilitaires/icons-1.8.1/bootstrap-icons.css">
    <link rel="stylesheet" href="../../client/public/css/style.css">
    <link rel="stylesheet" href="../../client/utilitaires/bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="../../client/utilitaires/jquery-3.6.0.min.js"></script>
    <script src="../../client/utilitaires/bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <script src="../../client/public/admin/requetesAdmin.js"></script>
    <script src="../../client/public/admin/vueAdmin.js"></script>
</head>

<body onload="javascript:chargerCircuitsAJAX();">
    <?php
require_once("menu_admin.inc.php");
?>
    <div id='contenu'></div>
</body>

</html>