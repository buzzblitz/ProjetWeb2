<?php
    define("SERVEUR","localhost");
    define("USAGER","root");
    define("PASSE","");
    define("BD","bdprojetweb");
    $connexion = new mysqli(SERVEUR,USAGER,PASSE,BD);
    if ($connexion->connect_errno) {
      echo "Problème de connexion au serveur de bd";
      exit();
	}
?>