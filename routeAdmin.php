<?php
    // Au début de PHP: Déclarer les types dans les paramétres des fonctions
    declare (strict_types=1);

    require_once(__DIR__."/serveur/controlleur/ControleurAdmin.php");
    
    $instanceCtr = ControleurAdmin::getControleurAdmin();
    echo $instanceCtr->CtrA_Actions();
?>