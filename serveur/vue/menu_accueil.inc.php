<!-- Menu de navigation -->
<nav class="navbar navbar-expand-lg navbar-light bg-perso">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Boutique en ligne</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a id="cat" class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Catégories
                    </a>
                    <ul id="selCategs" class="dropdown-menu dropdown-menu-dark"
                        aria-labelledby="navbarDarkDropdownMenuLink">
                    </ul>
                </li>
                <li class="nav-item">
                    <a id="dm" class="nav-link" data-bs-toggle="modal" data-bs-target="#modalEnreg" href="#">Devenir
                        membre</a>
                </li>
                <li class="nav-item">
                    <a id="co" class="nav-link" data-bs-toggle="modal" data-bs-target="#modalConnexion"
                        href="#">Connexion</a>
                </li>
                <li class="nav-item dropdown">
                    <a id="ac" class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Langue
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="javascript:obtenirXML('fr');">Français</a></li>
                        <li><a class="dropdown-item" href="javascript:obtenirXML('en');">English</a></li>
                        <li><a class="dropdown-item" href="javascript:obtenirXML('es');">Espagnol</a></li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
    </div>

</nav>
<!-- Fin de menu de navigation -->