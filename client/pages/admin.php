<?php
    session_start();
    if(!isset($_SESSION['courriel'])){
        header('Location: ../../index.php?msg=Vous+devez+devez+vous+connecter');
        exit;
    }
?>
<h3>JE SUIS DANS LA PAGE ADMIN</h3>
<br><br>
<a  href="../../index.php">Retour accueil</a>