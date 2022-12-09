<!-- Menu de navigation -->
<nav class="navbar navbar-expand-lg navbar-light bg-perso">
    <div class="container-fluid">
        <img id="idmt" class="navbar-brand" src="../ressources/images/images_membres/<?php echo $photo; ?>" class="image-border" alt="photo" style="width:48px">    

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                
                    <ul id="selCategs" class="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink">
                    </ul>
                </li>
                <li class="nav-item">
                    <a id="pr" class="nav-link" href="javascript:requeteAfficherProfil(<?php echo $idm; ?>);">Profil</a>
                </li>
                <li class="nav-item">
                    <a id="pr" class="nav-link" href="javascript:window.location.reload();">Retourner Circuit</a>
                </li>
            </ul>
        </div>
        <a id="pa" class="nav-link" href="javascript:afficherPanier();"><i class="bi bi-cart panierPlus"> <span id="nbart">(0)</span></i></a>
    </div>
    <button class="btn btn-danger" onClick="requeteDeconnexion();">
        Déconnexion
    </button>
</nav>
<!-- Fin de menu de navigation -->