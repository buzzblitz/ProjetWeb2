<?php
    if(!isset($_SESSION['usager'])){
      
    }
?>
<!-- Menu de navigation -->
<nav class="navbar navbar-expand-lg navbar-light bg-perso">
    <div class="container-fluid">
        <a class="navbar-brand" href="#" style="color: white">Admin</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="javascript:chargerCircuitsAJAX();">Gérer les
                        Circuits</a>
                </li>
                <li class="nav-item">
                    <a id="me" class="nav-link" href="javascript:chargerMembresAJAX();">Gérer les
                        membres</a>
                </li>
                <li class="nav-item">
                    <a id="me" class="nav-link" href="javascript:montrerFormRechercherCircuit();">Recherche Circuit</a>
                </li>
                <li class="nav-item">
                    <a id="me" class="nav-link" href="javascript:montrerFormTriCircuit();">Tri Circuit</a>
                </li>
            </ul>
        </div>
    </div>
    <button class="btn btn-danger" onClick="requeteDeconnexion();">
        Déconnexion
    </button>
</nav>
<!-- Fin de menu de navigation -->