<?php
    // Au début de PHP: Déclarer les types dans les paramétres des fonctions
    declare (strict_types=1);

    require_once(__DIR__."/serveur/controlleur/ControleurHome.php");
    
    $instanceCtr = ControleurHome::getControleurHome();
    echo $instanceCtr->CtrH_Actions();
?>