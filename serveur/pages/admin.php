<?php
session_start();
if(!isset($_SESSION['courriel'])){
    header('Location: ../../index.php?msg=Vous+devez+devez+vous+connecter');
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


    <script src="../../client/utilitaires/jquery-3.6.0.min.js"></script>
    <script src="../../client/utilitaires/bootstrap-5.2.0-dist/js/bootstrap.min.js"></script>
    <script src="../../client/js/requetes.js"></script>
    <script src="../../client/js/jquery.twbsPagination.min.js"></script>
    <script src="../../client/js/monJS.js"></script>
    <link rel="stylesheet" href="../../client/utilitaires/bootstrap-5.2.0-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../client/utilitaires/icons-1.8.1/bootstrap-icons.css">
    <link rel="stylesheet" href="../../client/css/admin.css">
    <link rel="stylesheet" href="../../client/css/style.css">
</head>

<body onLoad='initialiser(<?php echo "\"" . $msg . "\""; ?>);chargerArticles("A","../articles/liste.php");'>
    <?php
require_once("../includes/menu_admin.inc.php");
?>
    <div id='contenu'></div>
    <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-2">
                            <h2>Articles</h2>
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
                            <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                data-bs-target="#modalAjouterArticles"><i class="bi bi-plus-circle"></i>
                                <span>Ajouter</span></button>
                            <button type="button" class="btn btn-danger" onClick="enleverMultiplesArticles();">
                                <i class="bi bi-dash-circle"></i> <span>Enlever</span></button>
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
                            <th>Numéro</th>
                            <th>Image</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Catégorie</th>
                            <th>Prix</th>
                            <th>Disponible</th>
                            <th>Seuil</th>
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
    <!-- Ajouter film Modal HTML -->
    <div class="modal fade" id="modalAjouterArticles" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enregistrer un article</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row  needs-validation" enctype="multipart/form-data"
                        action="../articles/enregistrer.php" method="POST">
                        <div class="col-md-12">
                            <label for="nomc" class="form-label">Nom du Circuit</label>
                            <input type="text" class="form-control" id="nomc" name="nomc" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="imgc" class="form-label">Image du Circuit</label>
                            <input type="file" class="form-control" id="imgc" name="imgc" value="">
                        </div>
                        <div class="col-md-12">
                            <label for="descc" class="form-label">Description du Circuit</label>
                            <input type="text" class="form-control" id="descc" name="descc" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="categ" class="form-label">Etats du Circuit</label>
                            <select id="categ" name="categ" class="form-select form-select-sm"
                                aria-label=".form-select-sm example">
                                <option selected disabled value="Des">Desactiver</option>
                                <option value="Tra">Travail</option>
                                <option value="Dep">Deploiement</option>
                            </select>
                        </div>
                        <div class="personal-details">
                        <div class="col-md-12">
                            <label for="etape1" class="form-label">Etape</label>
                            <input type="text" class="form-control" id="etape1" name="etape1" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="imge1" class="form-label">Image de l'Etape</label>
                            <input type="file" class="form-control" id="imge1" name="imge1" value="">
                        </div>
                        <div class="col-md-12">
                            <label for="desce1" class="form-label">Description de l'Etape</label>
                            <input type="text" class="form-control" id="desce1" name="desce1" value="" required>
                        </div>
                        <div class="col-md-6">
                            <label for="dated1" class="form-label">Date du Debut</label>
                            <input type="date" class="form-control is-valid" id="dated1" name="dated1">
                        </div>
                        <div class="col-md-12">
                        </div>
                        <div class="col-md-6">
                            <label for="datef1" class="form-label">Date de la Fin</label>
                            <input type="date" class="form-control is-valid" id="datef1" name="datef1">
                        </div>
                        <div class="col-md-12">
                            <label for="lieud1" class="form-label">Lieu de rencontre pour le Diner</label>
                            <input type="text" class="form-control" id="lieud1" name="lieud1" value="" required>
                        </div>
                        <div class="personal-details-journee">
                        <div class="col-md-12">
                            <label for="journee1" class="form-label">Journee</label>
                        </div>
                        <div class="col-md-6">
                            <label for="datej1" class="form-label">Date</label>
                            <input type="date" class="form-control is-valid" id="datej1" name="datej1">
                        </div>
                        <div class="col-md-12">
                            <label for="noma1" class="form-label">Nom de l'activiter</label>
                            <input type="text" class="form-control" id="noma1" name="noma1" value="" required>
                        </div>

                        <div class="col-md-6">
                            <label for="heuredebut1" class="form-label">Heure du debut de l'activiter</label>
                            <input type="time" class="form-control is-valid" id="heuredebut1" name="heuredebut1">
                        </div>
                        <div class="col-md-12">
                        </div>
                        <div class="col-md-6">
                            <label for="heurefin1" class="form-label">Heure de fin de l'activiter</label>
                            <input type="time" class="form-control is-valid" id="heurefin1" name="heurefin1">
                        </div>
                        <div class="col-md-12">
                            <label for="desca1" class="form-label">Description des activiter</label>
                            <input type="text" class="form-control" id="descea1" name="descea1" value="" required>
                        </div>
                        </div> 
                        <button type="button" class="add-row-journee">+</button>  
                        <div class="col-md-12">
                            <label for="autre1" class="form-label">Autre information</label>
                            <input type="text" class="form-control" id="autre1" name="autre1" value="" required>
                        </div>
                        </div>
                        <button type="button" class="add-row">+</button>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Edit Modal HTML -->
    <div class="modal fade" id="modalEditerArticles" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifier un article</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row  needs-validation" enctype="multipart/form-data" action="../articles/modifier.php"
                        method="POST">
                        <div class="col-md-12">
                            <label for="ida_m" class="form-label"></label>
                            <input type="text" class="form-control" id="ida_m" name="ida_m" value="" readonly>
                        </div>
                        <div class="col-md-12">
                            <label for="nom_m" class="form-label">Nom</label>
                            <input type="text" class="form-control" id="nom_m" name="nom_m" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="desc_m" class="form-label">Description</label>
                            <input type="text" class="form-control" id="desc_m" name="desc_m" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="categ_m" class="form-label">Catégorie</label>
                            <select id="categ_m" name="categ_m" class="form-select form-select-sm"
                                aria-label=".form-select-sm example">
                                <option value="arb">Articles de bureau</option>
                                <option value="imp">Imprimantes</option>
                                <option value="cad">Cadres</option>
                            </select>
                        </div>
                        <div class="col-md-12">
                            <label for="prix_m" class="form-label">Prix</label>
                            <input type="text" class="form-control" id="prix_m" name="prix_m" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="qted_m" class="form-label">Quantité</label>
                            <input type="text" class="form-control" id="qted_m" name="qted_m" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="seuil_m" class="form-label">Seuil</label>
                            <input type="text" class="form-control" id="seuil_m" name="seuil_m" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="img_m" class="form-label">Image</label>
                            <input type="file" class="form-control" id="img_m" name="img_m" value="">
                        </div>
                        <div class="col-12">
                            <span>&nbsp;</span>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Delete Modal HTML -->
    <div class="modal fade" id="supprimerArticleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Êtes-vous sûr que vous voulez supprimer cet article ?</p>
                    <p class="text-warning"><small>Vous ne pouvez plus défaire cette action.</small></p>


                    <input type="button" class="btn btn-default" data-bs-dismiss="modal" value="Annuler">
                    <input type="button" onClick="supprimer();" class="btn btn-danger" value="Supprimer">


                </div>
            </div>
        </div>
    </div>
    <!-- Formulaires -->

    <form id="formEnlever" action="../articles/enlever.php" method="POST">
        <input type="hidden" id="idar" name="idar" value="">
    </form>

    <form id="formEnleverMultiples" action="../articles/enleverMultiples.php" method="POST">
        <input type="hidden" id="idaM" name="idaM" value="">
    </form>

    <div class="toast-container posToast">
        <div id="toast" class="toast  align-items-center text-white bg-danger border-0" data-bs-autohide="false"
            role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="../../../client/public/images/message.png" width=24 height=24 class="rounded me-2"
                    alt="message">
                <strong class="me-auto">Messages</strong>
                <small class="text-muted"></small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div id="textToast" class="toast-body">
                <!-- texte du Toast -->
            </div>
        </div>
    </div>
    <form id="dc" action="../connexion/deconnecter.php" method="POST"></form>
</body>

</html>

<script>
    var count = 0;

    var etapes = 0;
    var journee = 0;
    var activiter = 0; 

    $('#More').click(function(){
    $(".div2").append("<div class='fieldBlock'><label >Parameter Name: </label><select id='name" + count + "'  name='name" + count + "' ><option></option></select></div> </br>");
    count++;
    });


    $(document).ready(function(){
        

    $( ".add-row" ).click(function(){
    var $clone = $( "div.personal-details" ).first();
    for ($y = 1; $y <= 5; $y++) {
        $clone.append(
        "<div class='col-md-12' id='etapes" + etapes + "'>" +
        "<div class='col-md-12'>" +
                            "<label for='etape" + etapes + "' class='form-label'>Etape</label>" +
                            "<input type='text' class='form-control' id='etape" + etapes + "' name='etape" + etapes + "' value='' required>" +
                        "</div>" +
                        "<div class='col-md-12'>" +
                            "<label for='imge" + etapes + "' class='form-label'>Image de l'Etape</label>" +
                            "<input type='file' class='form-control' id='imge" + etapes + "' name='imge" + etapes + "' value=''>" +
                        "</div>" +
                        "<div class='col-md-12'>" +
                            "<label for='desce" + etapes + "' class='form-label'>Description de l'Etape</label>" +
                            "<input type='text' class='form-control' id='desce" + etapes + "' name='desce" + etapes + "' value='' required>" +
                        "</div>" +
                        "<div class='col-md-6'>" +
                            "<label for='dated" + etapes + "' class='form-label'>Date du Debut</label>" +
                            "<input type='date' class='form-control is-valid' id='dated" + etapes + "' name='dated" + etapes + "'>" +
                        "</div>" +
                        "<div class='col-md-12'>" +
                        "</div>" +
                        "<div class='col-md-6'>" +
                            "<label for='datef" + etapes + "' class='form-label'>Date de la Fin</label>" +
                            "<input type='date' class='form-control is-valid' id='datef" + etapes + "' name='datef" + etapes + "'>" +
                        "</div>" +
                        "<div class='col-md-12'>" +
                            "<label for='lieud" + etapes + "' class='form-label'>Lieu de rencontre pour le Diner</label>" +
                            "<input type='text' class='form-control' id='lieud" + etapes + "' name='lieud" + etapes + "' value='' required>" +
                        "</div>" +
        "</div>"
        )
        for ($x = 1; $x <= 7; $x++) {
            $clone.append(
            "<div class='col-md-12' hidden id='journee" + journee + "'>" +
            "<div class='col-md-12'>" +
                                "<label for='journee" + journee + "' class='form-label'>Journee</label>" +
                            "</div>" +
                            "<div class='col-md-6'>" +
                                "<label for='datej" + journee + "' class='form-label'>Date</label>" + 
                                "<input type='date' class='form-control is-valid' id='datej" + journee + "' name='datej" + journee + "'>" +
                            "</div>" +
                            "<div class='col-md-12'>" +
                                "<label for='autre" + journee + "' class='form-label'>Autre information</label>" +
                                "<input type='text' class='form-control' id='autre" + journee + "' name='autre" + journee + "' value='' required>" +
                            "</div>"+
            "</div>"
            );


            for ($i = 1; $i <= 4; $i++) {
                $clone.append(
                "<div class='col-md-12' hidden id='activiter" + activiter + "'>" +
                    "<div class='col-md-12'>" +
                    "<label for='noma" + activiter + "' class='form-label'>Nom de l'activiter</label>" +
                                        "<input type='text' class='form-control' id='noma" + activiter + "' name='noma" + activiter + "' value='' required>" +
                                    "</div>" +

                                    "<div class='col-md-6'>" +
                                        "<label for='heuredebut" + activiter + "' class='form-label'>Heure du debut de l'activiter</label>" +
                                        "<input type='time' class='form-control is-valid' id='heuredebut" + activiter + "' name='heuredebut" + activiter + "'>" +
                                    "</div>" +
                                    "<div class='col-md-12'>" +
                                    "</div>" +
                                    "<div class='col-md-6'>" +
                                        "<label for='heurefin" + activiter + "' class='form-labe'>Heure de fin de l'activiter</label>" +
                                        "<input type='time' class='form-control is-valid' id='heurefin" + activiter + "' name='heurefin" + activiter + "'>" +
                                    "</div>" +
                                    "<div class='col-md-12'>" +
                                        "<label for='desca" + activiter + "' class='form-label'>Description des activiter</label>" +
                                        "<input type='text' class='form-control' id='descea" + activiter + "' name='descea" + activiter + "' value='' required>" +
                                    "</div>" +

                "</div>");
                activiter++;
            }
            journee++;
        }
        etapes++;
    }
    $clone.insertBefore( ".add-row" );
        });

















   $(document).on('click', '.remove-row', function() {
    $(this).parent().remove();
    });


    $(document).on('click', '.add-row-journee', function() {
        var $clone = $( "div.personal-details-journee" ).first().clone();
        $clone.append( "<button type='button' class='remove-row-journee'>-</button>" );
        $clone.insertBefore( ".add-row" );
    });
    
    $(document).on('click', '.remove-row-journee', function() {
        $(this).parent().remove();
    });
});
</script>