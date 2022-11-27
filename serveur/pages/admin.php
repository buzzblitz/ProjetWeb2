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
                        </div>
                        <button type="button" class="add-row" id="defaultBoutonStart"  onclick="ajouterDefault(0)">+</button>
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

    var etapes = 1;
    var journee = 1;
    var activiter = 1; 

    //valeur qui determine combien d'etapes, journee et activiter vont etre cree a la creation de la page
    var nbEtapes = 5;
    var nbJournees = 7;
    var nbActiviters = 4;



    function ajouterDefault(x) {
    //code pour faire apparaitre une nouvelle etape
    document.getElementById("etapes" + (x + 1)).removeAttribute("hidden");
    document.getElementById("etape" + (x + 1)).setAttribute("required", "");
    document.getElementById("desce" + (x + 1)).setAttribute("required", "");
    document.getElementById("lieud" + (x + 1)).setAttribute("required", "");
    document.getElementById("defaultBoutonStart").setAttribute("hidden", "");

    //code pour faire apparaitre la premier journee de l'etape
    document.getElementById("journees" + ((1% (x + 1) * x * nbJournees)+ 1)).removeAttribute("hidden");
    document.getElementById("autre" + ((1% (x + 1) * x * nbJournees)+ 1)).setAttribute("required", "");

    //code pour faire apparaitre la premiere activiter de la journee
    document.getElementById("activiters" + ((1% (x + 1) * x * (nbJournees * nbActiviters))+ 1)).removeAttribute("hidden");
    document.getElementById("noma" + ((1% (x + 1) * x * (nbJournees * nbActiviters))+ 1)).setAttribute("required", "");
    document.getElementById("descea" + ((1% (x + 1) * x * (nbJournees * nbActiviters))+ 1)).setAttribute("required", "");
    
    }


    function ajouterEtape(x) {
    //code pour faire apparaitre une nouvelle etape
    document.getElementById("etapes" + (x + 1)).removeAttribute("hidden");
    document.getElementById("etape" + (x + 1)).setAttribute("required", "");
    document.getElementById("desce" + (x + 1)).setAttribute("required", "");
    document.getElementById("lieud" + (x + 1)).setAttribute("required", "");
    document.getElementById("bouttonEtapesAjouter" + x).setAttribute("hidden", "");

    //code pour faire apparaitre la premier journee de l'etape
    document.getElementById("journees" + ((1% (x + 1) * x * nbJournees)+ 1)).removeAttribute("hidden");
    document.getElementById("autre" + ((1% (x + 1) * x * nbJournees)+ 1)).setAttribute("required", "");

    //code pour faire apparaitre la premiere activiter de la journee
    document.getElementById("activiters" + ((1% (x + 1) * x * (nbJournees * nbActiviters))+ 1)).removeAttribute("hidden");
    document.getElementById("noma" + ((1% (x + 1) * x * (nbJournees * nbActiviters))+ 1)).setAttribute("required", "");
    document.getElementById("descea" + ((1% (x + 1) * x * (nbJournees * nbActiviters))+ 1)).setAttribute("required", "");
    
    }

    function ajouterJournee(x) {

    //code pour faire apparaitre une nouvelle journee
    document.getElementById("journees" + (x + 1)).removeAttribute("hidden");
    document.getElementById("autre" + (x + 1)).setAttribute("required", "");
    document.getElementById("bouttonJourneesAjouter" + x).setAttribute("hidden", "");

    //code pour faire apparaitre la premiere activiter de la journee
    document.getElementById("activiters" + ( (x+1)*nbActiviters+1 )).removeAttribute("hidden");
    document.getElementById("noma" + ( (x+1)*nbActiviters+1 )).setAttribute("required", "");
    document.getElementById("descea" + ( (x+1)*nbActiviters+1 )).setAttribute("required", "");
    
    }

    function ajouterActiviter(x) {
    //code pour faire apparaitre la premiere activiter de la journee
    document.getElementById("activiters" + (x + 1)).removeAttribute("hidden");
    document.getElementById("noma" + (x + 1)).setAttribute("required", "");
    document.getElementById("descea" + (x + 1)).setAttribute("required", "");
    document.getElementById("bouttonActivitersAjouter" + x).setAttribute("hidden", "");

    //TODO: une erreur est lever parce que dans la premier valeur le bouton enlever n'existe pas
    document.getElementById("bouttonActivitersEnlever" + x).setAttribute("hidden", "");

    }



    function enleverJournee(x) {

    //code pour faire apparaitre une nouvelle journee
    document.getElementById("journees" + (x + 1)).removeAttribute("hidden");
    document.getElementById("autre" + (x + 1)).setAttribute("required", "");
    document.getElementById("bouttonJourneesAjouter" + x).setAttribute("hidden", "");


    for ($j = 1; $j <= nbActiviters; $j++) {

    document.getElementById("activiters" + ( (x-1)*nbActiviters+ $j ) ).setAttribute("hidden", "");
    document.getElementById("noma" + ( (x-1)*nbActiviters+ $j )).removeAttribute("required");
    document.getElementById("descea" + ( (x-1)*nbActiviters+ $j )).removeAttribute("required");

    document.getElementById("noma" + ( (x-1)*nbActiviters+ $j )).value = document.getElementById("noma" + ( (x-1)*nbActiviters+ $j )).defaultValue;
    document.getElementById("heuredebut" + ( (x-1)*nbActiviters+ $j )).value = document.getElementById("heuredebut" + ( (x-1)*nbActiviters+ $j )).defaultValue;
    document.getElementById("heurefin" + ( (x-1)*nbActiviters+ $j )).value = document.getElementById("heurefin" + ( (x-1)*nbActiviters+ $j )).defaultValue;
    document.getElementById("descea" + ( (x-1)*nbActiviters+ $j )).value = document.getElementById("descea" + ( (x-1)*nbActiviters+ $j )).defaultValue;

    document.getElementById("bouttonActivitersAjouter" + ( (x-1)*nbActiviters+ $j )).removeAttribute("hidden");

    if($j != 1) {
        document.getElementById("bouttonActivitersEnlever" + ( (x-1)*nbActiviters+ $j )).removeAttribute("hidden");
        }
    }

    }


    
    function enleverActiviter(x) {
    //code pour faire apparaitre la premiere activiter de la journee
    document.getElementById("activiters" + x ).setAttribute("hidden", "");
    document.getElementById("noma" + x).removeAttribute("required");
    document.getElementById("descea" + x).removeAttribute("required");

    document.getElementById("noma" + x).value = document.getElementById("noma" + x).defaultValue;
    document.getElementById("heuredebut" + x).value = document.getElementById("heuredebut" + x).defaultValue;
    document.getElementById("heurefin" + x).value = document.getElementById("heurefin" + x).defaultValue;
    document.getElementById("descea" + x).value = document.getElementById("descea" + x).defaultValue;


    document.getElementById("bouttonActivitersAjouter" + (x - 1)).removeAttribute("hidden");
    document.getElementById("bouttonActivitersEnlever" + (x - 1)).removeAttribute("hidden");

    }


    $(document).ready(function(){
    var string = ""
    var $clone = $( "div.personal-details" ).first();
    for ($y = 1; $y <= nbEtapes; $y++) {
        string +=
        "<div class='col-md-12' hidden id='etapes" + etapes + "'>" +
        "<div class='col-md-12'>" +
                            "<label for='etape" + etapes + "' class='form-label'>Etape</label>" +
                            "<input type='text' class='form-control' id='etape" + etapes + "' name='etape" + etapes + "' value=''>" +
                        "</div>" +
                        "<div class='col-md-12'>" +
                            "<label for='imge" + etapes + "' class='form-label'>Image de l'Etape</label>" +
                            "<input type='file' class='form-control' id='imge" + etapes + "' name='imge" + etapes + "' value=''>" +
                        "</div>" +
                        "<div class='col-md-12'>" +
                            "<label for='desce" + etapes + "' class='form-label'>Description de l'Etape</label>" +
                            "<input type='text' class='form-control' id='desce" + etapes + "' name='desce" + etapes + "' value=''>" +
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
                            "<input type='text' class='form-control' id='lieud" + etapes + "' name='lieud" + etapes + "' value=''>" +
                        "</div>";
        if($y != nbEtapes) {
            string += "<button type='button' id='bouttonEtapesAjouter" + etapes + "' onclick='ajouterEtape(" + etapes + ")' >+</button>"
        }
        for ($x = 1; $x <= nbJournees; $x++) {
            string += 
            "<div class='col-md-12' hidden id='journees" + journee + "'>" +
            "<div class='col-md-12'>" +
                                "<label for='journee" + journee + "' class='form-label'>Journee</label>" +
                            "</div>" +
                            "<div class='col-md-6'>" +
                                "<label for='datej" + journee + "' class='form-label'>Date</label>" + 
                                "<input type='date' class='form-control is-valid' id='datej" + journee + "' name='datej" + journee + "'>" +
                            "</div>" +
                            "<div class='col-md-12'>" +
                                "<label for='autre" + journee + "' class='form-label'>Autre information</label>" +
                                "<input type='text' class='form-control' id='autre" + journee + "' name='autre" + journee + "' value='' >" +
                            "</div>";
            ;
            if($x != nbJournees) {
            string += "<button type='button' id='bouttonJourneesAjouter" + journee + "' onclick='ajouterJournee(" + journee + ")' >+</button>"
            }
            if($x != 1) {
                    string += "<button type='button' id='bouttonJourneesEnlever" + journee + "' onclick='enleverJournee(" + journee + ")' >-</button>"
                }
            for ($i = 1; $i <= nbActiviters; $i++) {
                string +=
                "<div class='col-md-12' hidden id='activiters" + activiter + "'>" +
                    "<div class='col-md-12'>" +
                    "<label for='noma" + activiter + "' class='form-label'>Nom de l'activiter</label>" +
                                        "<input type='text' class='form-control' id='noma" + activiter + "' name='noma" + activiter + "' value=''>" +
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
                                        "<input type='text' class='form-control' id='descea" + activiter + "' name='descea" + activiter + "' value=''>" +
                                    "</div>";
                if($i != nbActiviters) {
                    string += "<button type='button' id='bouttonActivitersAjouter" + activiter + "' onclick='ajouterActiviter(" + activiter + ")' >+</button>"
                }
                if($i != 1) {
                    string += "<button type='button' id='bouttonActivitersEnlever" + activiter + "' onclick='enleverActiviter(" + activiter + ")' >-</button>"
                }
                string += "</div>";
                activiter++;
            }
            string += "</div>";
            journee++;
        }
        string += "</div>";
        etapes++;
    }
    $clone.append(string);
    string = "";
    $clone.insertBefore( ".add-row" );

   /* $(document).on('click', '.add-row', function() {
        //code pour faire apparaitre une etape
        document.getElementById("etapes1").removeAttribute("hidden");
        document.getElementById("etape1").setAttribute("required", "");
        document.getElementById("desce1").setAttribute("required", "");
        document.getElementById("lieud1").setAttribute("required", "");

        //code pour faire apparaitre une journee
        document.getElementById("journees1").removeAttribute("hidden");
        document.getElementById("autre1").setAttribute("required", "");

        //code pour faire apparaitre une acticiter
        document.getElementById("activiters1").removeAttribute("hidden");
        document.getElementById("noma1").setAttribute("required", "");
        document.getElementById("descea1").setAttribute("required", "");
    });*/















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