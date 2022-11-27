<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="client/utilitaires/jquery-3.6.0.min.js"></script>
    <script src="client/utilitaires/bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <script src="client/public/js/monJS.js"></script>
    <script src="client/public/js/requetes.js"></script>
    <script src="client/public/js/langues.js"></script>
    <link rel="stylesheet" href="client/utilitaires/bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="client/utilitaires/icons-1.8.1/bootstrap-icons.css">
    <link rel="stylesheet" href="client/public/css/style.css">

    <title id="titre"></title>
</head>

<body onLoad="chargerArticles('I','serveur/pages/articles/liste.php');">
    <?php
      include_once('serveur/includes/menu_accueil.inc.php');
  ?>
    <br>
    <div class="container" id="contenu"></div>

    <!-- Fin de menu de navigation -->
    <div class="container">
        <!-- Modal Enregistrer -->
        <div class="modal fade" id="modalEnreg" tabindex="-1" aria-labelledby="ModalEnregLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalEnregLabel">Nouveau membre</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3" id="formEnreg" action="serveur/pages/membre/enregistrerMembres.php"
                            method="POST" onSubmit="return validerFormEnreg();">
                            <div class="col-md-4">
                                <label for="prenom" class="form-label">Prénom</label>
                                <input type="text" class="form-control" id="prenom" name="prenom" value="" required>
                            </div>
                            <div class="col-md-4">
                                <label for="nom" class="form-label">Nom</label>
                                <input type="text" class="form-control" id="nom" name="nom" value="" required>
                            </div>
                            <div class="col-md-4">
                                <label for="courriel" class="form-label">Courriel</label>
                                <input type="email" class="form-control" id="courriel" name="courriel" value=""
                                    required>
                            </div>
                            <div class="col-md-6">
                                <label for="pass" class="form-label">Mot Passe</label>
                                <input type="password" class="form-control" id="pass" name="pass" required>
                            </div>
                            <div class="col-md-6">
                                <label for="cpass" class="form-label">Confirmer mot passe</label>
                                <input type="password" class="form-control" id="cpass" name="cpass" required>
                            </div>
                            <span class="msgFormEnreg">Pour des raison statistiques</span>
                            <div class="form-check mb-3">
                                <input type="radio" class="form-check-input" id="feminin" value="F" name="sexe">
                                <label class="form-check-label" for="feminin">Féminin</label>
                            </div>
                            <div class="form-check mb-3">
                                <input type="radio" class="form-check-input" id="masculin" value="M" name="sexe">
                                <label class="form-check-label" for="masculin">Masculin</label>
                            </div>
                            <div class="col-md-6">
                                <label for="date" class="form-label">Date de naissance</label>
                                <input type="date" class="form-control" id="datenaissance" name="datenaissance">
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Enregister</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Connexion -->
        <div class="modal fade" id="modalConnexion" tabindex="-1" aria-labelledby="ModalConnexionLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalConnexionLabel">Connexion</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3" id="formConnexion" action="serveur/pages/connexion/connexion.php"
                            method="POST">
                            <div class="col-md-4">
                                <label for="courriel" class="form-label">Courriel</label>
                                <input type="email" class="form-control" id="courrielc" name="courrielc" value=""
                                    required>
                            </div>
                            <div class="col-md-6">
                                <label for="pass" class="form-label">Mot Passe</label>
                                <input type="password" class="form-control" id="passc" name="passc" required>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Connexion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</body>

</html>