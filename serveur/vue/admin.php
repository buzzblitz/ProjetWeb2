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
    <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-2">
                            <h2>Circuits</h2>
                        </div>
                        <div class="col-sm-7">
                            <nav class="navbar">
                                <ul>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Catégories
                                        </a>
                                        <ul id="selCategs" class="dropdown-menu dropdown-menu-dark"
                                            aria-labelledby="navbarDarkDropdownMenuLink">
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Trier par
                                        </a>
                                        <ul id="selCategs" class="dropdown-menu dropdown-menu-dark"
                                            aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li>
                                                <a class="dropdown-item"
                                                    href="javascript:obtenirXML('titre');">Titre</a>
                                                <a class="dropdown-item" href="javascript:obtenirXML('titre');">Prix</a>
                                                <a class="dropdown-item"
                                                    href="javascript:obtenirXML('titre');">Numéro</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li class="nav-item">
                                        <form class="form-inline" role="form">
                                            <div class="form-group">
                                                <div class="inner-addon right-addon">
                                                    <i class="loupe bi bi-search"></i>
                                                    <input type="text" class="form-control" placeholder="Recherche" />
                                                </div>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class=" col-sm-3">
                            <button type="button" class="btn btn-success" onClick="montrerFormAjouterCircuit();">
                                <i class="bi bi-plus-circle"></i>
                                <span>Ajouter</span></button>
                            <button type="button" class="btn btn-danger" onClick="requeteAfficherCircuit(6);">
                                <i class="bi bi-dash-circle"></i> <span>Modifier</span></button>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="selectAll">
                                    <label for="selectAll"></label>
                                </span>
                            </th>
                            <th>Nom</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Nombres de d'étapes</th>
                        </tr>
                    </thead>
                    <tbody id="emp_body"></tbody>
                    <tr>
                        <th colspan="11">
                             <div id="pager">
                                <ul id="pagination" class="pagination-sm">
                                </ul>
                            </div>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>

</html>