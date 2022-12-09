let montrerFormAjouterCircuit = (id) => {
    let form = `
    <div class="modal fade" id="modalAjouterCircuit" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enregistrer un Circuit</h5>
                    <button type="button" onclick="chargerAJAX(0,'listerC');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregCircuit" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class="col-md-12">
                            <label for="nomc" class="form-label">Nom du Circuit</label>
                            <input type="text" class="form-control" id="nomc" name="nomc" value="" required>
                        </div>
                        <div class='col-md-12'>
                        <label for='prix' class='form-label'>Prix du Circuit</label>
                        <input type="number" class="form-control" id="prix" name="prix" value="" required>
                         </div>
                        <div class="col-md-12">
                            <label for="photoc" class="form-label">Image du Circuit</label>
                            <input type="file" class="form-control" id="photoc" name="photoc" value="" required>
                        </div>
                        <div class="col-md-12">
                            <label for="descriptionc" class="form-label">Description du Circuit</label>
                            <input type="text" class="form-control" id="descriptionc" name="descriptionc" value="" required required>
                        </div>
                        <div class="col-md-12">
                            <label for="etat" class="form-label">Etats du Circuit</label>
                            <select id="etat" name="etat" class="form-select form-select-sm" required
                                aria-label=".form-select-sm example">
                                <option selected disabled value="D">Desactiver</option>
                                <option value="T">Travail</option>
                                <option value="A">Deploiement</option>
                            </select>
                        </div>
                        <div class='col-md-12' id='etapes'>
        <div class='col-md-12'>
                            <label for='nome' class='form-label'>Etape</label>
                            <input type='text' class='form-control' id='nome' name='nome' value='' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='photoe' class='form-label'>Image de l'Etape</label>
                            <input type='file' class='form-control' id='photoe' name='photoe' value='' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='descriptione' class='form-label'>Description de l'Etape</label>
                            <input type='text' class='form-control' id='descriptione' name='descriptione' value='' required>
                        </div>
                        <div class='col-md-6'>
                        <label for='debut' class='form-label'>Date du Debut</label>
                            <input type='date' class='form-control is-valid' id='debut' name='debut' required>
                        </div>
                        <div class='col-md-12'>
                        </div>
                        <div class='col-md-6'>
                            <label for='fin' class='form-label'>Date de la Fin</label>
                            <input type='date' class='form-control is-valid' id='fin' name='fin' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='lieurencontre' class='form-label'>Lieu de rencontre pour le Diner</label>
                            <input type='text' class='form-control' id='lieurencontre' name='lieurencontre' value='' required>
                        </div>

            <div class='col-md-12' id='journees'>
            <div class='col-md-12'>
                            <label for='journee' class='form-label'>Journee</label>
                            </div>
                            <div class='col-md-6'>
                                <label for='datej' class='form-label'>Date</label>
                                <input type='date' class='form-control is-valid' id='datej' name='datej' required>
                            </div>
                            <div class='col-md-12'>
                                <label for='descriptionj' class='form-label'>Autre information</label>
                                <input type='text' class='form-control' id='descriptionj' name='descriptionj' value='' required>
                            </div>

                <div class='col-md-12' id='activites'>
                    <div class='col-md-12'>
                    <label for='noma' class='form-label'>Nom de l'activite</label>
                                        <input type='text' class='form-control' id='noma' name='noma' value='' required>
                                    </div>

                                    <div class='col-md-6'>
                                        "<label for='tempsdebut' class='form-label'>Heure du debut de l'activiter</label>
                                        "<input type='text' class='form-control is-valid' id='tempsdebut' name='tempsdebut' required>
                                    </div>
                                    <div class='col-md-12'>
                                    </div>
                                    <div class='col-md-6'>
                                        <label for='tempsfin' class='form-labe'>Heure de fin de l'activiter</label>
                                        <input type='text' class='form-control is-valid' id='tempsfin' name='tempsfin' required>
                                    </div>
                                    <div class='col-md-12'>
                                        <label for='descriptiona' class='form-label'>Description des activiter</label>
                                        <input type='text' class='form-control' id='descriptiona' name='descriptiona' value='' required>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteEnregistrer();" data-bs-dismiss="modal">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#modalAjouterCircuit').modal('show');
}

let montrerFormAjouterEtape = (idc) => {
    let form = `
    <div class="modal fade" id="modalAjouterEtape" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enregistrer une Etape</h5>
                    <button type="button" onclick="chargerAJAX(${idc},'listerE');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregEtape" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class='col-md-12'>
                            <label for='idc' class='form-label'>Id Circuit associé</label>
                            <input type='text' class='form-control' id='idc' name='idc' value='`+idc+`' readonly>
                        </div>
                        <div class='col-md-12'>
                            <label for='nome' class='form-label'>Etape</label>
                            <input type='text' class='form-control' id='nome' name='nome' value='' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='photoe' class='form-label'>Image de l'Etape</label>
                            <input type='file' class='form-control' id='photoe' name='photoe' value='' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='descriptione' class='form-label'>Description de l'Etape</label>
                            <input type='text' class='form-control' id='descriptione' name='descriptione' value='' required>
                        </div>
                        <div class='col-md-6'>
                        <label for='debut' class='form-label'>Date du Debut</label>
                            <input type='date' class='form-control is-valid' id='debut' name='debut' required>
                        </div>
                        <div class='col-md-12'>
                        </div>
                        <div class='col-md-6'>
                            <label for='fin' class='form-label'>Date de la Fin</label>
                            <input type='date' class='form-control is-valid' id='fin' name='fin' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='lieurencontre' class='form-label'>Lieu de rencontre pour le Diner</label>
                            <input type='text' class='form-control' id='lieurencontre' name='lieurencontre' value='' required>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteEnregistrerE();">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#modalAjouterEtape').modal('show');
}

let montrerFormAjouterJournee = (ide) => {
    let form = `
    <div class="modal fade" id="modalAjouterJournee" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enregistrer une Journee</h5>
                    <button type="button" onclick="chargerAJAX(${ide},'listerJ');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregJournee" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class='col-md-12'>
                            <label for='ide' class='form-label'>Id Etape associé</label>
                            <input type='text' class='form-control' id='ide' name='ide' value='`+ide+`' readonly>
                        </div>
                        <div class='col-md-6'>
                            <label for='datej' class='form-label'>Date</label>
                               <input type='date' class='form-control is-valid' id='datej' name='datej' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='descriptionj' class='form-label'>Autre information</label>
                            <input type='text' class='form-control' id='descriptionj' name='descriptionj' value='' required>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteEnregistrerJ();">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#modalAjouterJournee').modal('show');
}


let montrerFormAjouterActivite = (idj) => {
    let form = `
    <div class="modal fade" id="modalAjouterActivite" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enregistrer une Journee</h5>
                    <button type="button" onclick="chargerAJAX(${idj},'listerA');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregActivite" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class='col-md-12'>
                            <label for='idj' class='form-label'>Id Journee associée</label>
                            <input type='text' class='form-control' id='idj' name='idj' value='`+idj+`' readonly>
                        </div>
                        <div class='col-md-12'>
                            <label for='noma' class='form-label'>Nom de l'activite</label>
                            <input type='text' class='form-control' id='noma' name='noma' value='' required>
                        </div>
                        <div class='col-md-6'>
                            <label for='tempsdebut' class='form-label'>Heure du debut de l'activiter</label>
                            <input type='text' class='form-control is-valid' id='tempsdebut' name='tempsdebut' required>
                        </div>
                        <div class='col-md-6'>
                            <label for='tempsfin' class='form-labe'>Heure de fin de l'activiter</label>
                            <input type='text' class='form-control is-valid' id='tempsfin' name='tempsfin' required>
                        </div>
                            <div class='col-md-12'>
                                <label for='descriptiona' class='form-label'>Description des activiter</label>
                            <input type='text' class='form-control' id='descriptiona' name='descriptiona' value='' required>
                        </div>        
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteEnregistrerA();">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#modalAjouterActivite').modal('show');
}

let montrerFormRechercherCircuit = () => {
    let form = `
    <div class="modal fade" id="modalRechercherCircuit" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Rechercher un Circuit</h5>
                    <button type="button" onclick="chargerAJAX(0,'listerC');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formRechercherCircuit" class="row  needs-validation" enctype="multipart/form-data" target="cacheCache">
                        <div class='col-md-12'>
                            <label for='recherche' class='form-label'>Recherche par nom</label>
                            <input type='text' class='form-control' id='recherche' name='recherche' value='' required>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="javascript:chercherCircuit();" target="cacheCache">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#modalRechercherCircuit').modal('show');

}

let montrerFormTriCircuit = () => {
    let form = `
    <div class="modal fade" id="modalTriCircuit" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Tri sur un Circuit</h5>
                    <button type="button" onclick="chargerAJAX(0,'listerC');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formTriCircuit" class="row  needs-validation" enctype="multipart/form-data" target="cacheCache">
                        <div class='col-md-12'>
                        <label for="etat" class="form-label">Tri sur l'etats du Circuit</label>
                        <select id="etat" name="etat" class="form-select form-select-sm" required
                            aria-label=".form-select-sm example">
                            <option selected disabled value="D">Desactiver</option>
                            <option value="T">Travail</option>
                            <option value="A">Deploiement</option>
                        </select>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="javascript:triCircuit();" target="cacheCache">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#modalTriCircuit').modal('show');

}

let afficherSqueletteTable = (classe,id) =>{
    let rep = `
    <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-2">
                            <h2>Gestion des ${classe}s</h2>
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
                            </nav>
                        </div>
                        <div class=" col-sm-3">
                            <button id = "btnRetour" type="button" class="btn btn-warning">
                                <span>Retour</span></button>
                            <button type="button" class="btn btn-success" onClick="montrerFormAjouter${classe}(${id});";>
                                <i class="bi bi-plus-circle"></i>
                                <span>Ajouter un ${classe}</span></button>
                            <button type="button" class="btn btn-danger" onClick="requetteDeleteMultiple('deleteMultiple${classe}');">
                                <i class="bi bi-dash-circle"></i> <span>Supprimer plusieurs ${classe}</span></button>
                        </div>
                    </div>
                </div>
                <table id="latable" class="table table-striped table-hover">
                </table>

            </div>
        </div>
    </div>
    `;
    $('#contenu').html(rep);
}

let afficherTableC = () => {
    let rep = `
                    <thead>
                        <tr>
                            <th>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="selectAll">
                                    <label for="selectAll"></label>
                                </span>
                            </th>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Etat</th>
                            <th>Prix</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="maintable"></tbody>
    `;
    $('#latable').html(rep);
}

let afficherTableMembres = () => {
    let rep = `
    <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-2">
                            <h2>Membres</h2>
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
                            </nav>
                        </div>
                    </div>
                </div>
                <table id="latable" class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="selectAll">
                                    <label for="selectAll"></label>
                                </span>
                            </th>
                            <th>ID</th>
                            <th>Courriel</th>
                            <th>Etat</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>

            </div>
        </div>
    </div>
    `;
    document.getElementById('contenu').innerHTML = rep;
}

let afficherTableE = () => {
    let rep = `
                    <thead>
                        <tr>
                            <th>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="selectAll">
                                    <label for="selectAll"></label>
                                </span>
                            </th>
                            <th>ID</th>
                            <th>IDC</th>
                            <th>Image</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Debut</th>
                            <th>Fin</th>
                            <th>Lieu de rencontre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="maintable"></tbody>
    `;
    $('#latable').html(rep);
}

let afficherTableJ = () => {
    let rep = `
                    <thead>
                        <tr>
                            <th>
                                <span class="custom-checkbox">
                                    <input type="checkbox" id="selectAll">
                                    <label for="selectAll"></label>
                                </span>
                            </th>
                            <th>ID</th>
                            <th>IDE</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="maintable"></tbody>
    `;
    $('#latable').html(rep);
}

let afficherTableA = () => {
    let rep = `
                    <thead>
                    <tr>
                        <th>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="selectAll">
                                <label for="selectAll"></label>
                            </span>
                        </th>
                        <th>ID</th>
                        <th>IDJ</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Heure Debut</th>
                        <th>Heure Fin</th>
                        <th></th>
                    </tr>
                        </thead>
                    <tbody id="maintable"></tbody>
    `;
    $('#latable').html(rep);
}

function generate_tableC(displayRecords) {
	let rep="";
    for (let unCircuit of displayRecords) { 
		rep+=`
			<tr>
				<td>
					<span class="custom-checkbox">
						<input type="checkbox" id="opt" value="${unCircuit.idc}" name="options[]">
						<label for="opt"></label>
					</span>
				</td>	
				<td>${unCircuit.idc}</td>
				<td><img class='img-fluid'  width='60' height='60' src='../ressources/images/images_circuits/${unCircuit.photoc}'></td>
				<td>${unCircuit.nomc}</td>
				<td>${unCircuit.descriptionc }</td>
				<td>${unCircuit.etat}</td>
				<td>${unCircuit.prix}</td>
				<td></td>
                <td>
				<a href="#" onClick='requeteAfficherModif(${unCircuit.idc},"chargerC")' class="edit" data-bs-toggle="modal"><i class="bi bi-pencil" data-toggle="tooltip" title="Modifier"></i></a>
				<a href="#" onClick='requeteDelete(${unCircuit.idc}, "enleverC")' class="delete" data-toggle="modal"><i class="bi bi-trash3" data-toggle="tooltip" title="Enlever"></i></a>
                <a href="#" onClick='chargerAJAX(${unCircuit.idc},"listerE")' class="lister" data-toggle="modal"><i class="bi bi-arrow-right-square" data-toggle="tooltip" title="Lister"></i></a>
				</td>
			</tr>`;
    }
	$('#maintable').html(rep);
}

function generate_tableE(liste) {
	let rep="";
    $('#btnRetour').attr('onClick', 'chargerCircuitsAJAX()');
    for (let unCircuit of liste) {
		rep+=`
			<tr>
				<td>
					<span class="custom-checkbox">
						<input type="checkbox" id="opt" value="${unCircuit.ide}" name="options[]">
						<label for="opt"></label>
					</span>
				</td>	
				<td>${unCircuit.ide}</td>
                <td>${unCircuit.idc}</td>
				<td><img class='img-fluid'  width='60' height='60' src='../ressources/images/images_etapes/${unCircuit.photoe}'></td>
				<td>${unCircuit.nome}</td>
				<td>${unCircuit.descriptione }</td>
				<td>${unCircuit.debut}</td>
				<td>${unCircuit.fin}</td>
				<td>${unCircuit.lieurencontre}</td>
                <td>
				<a href="#" onClick='requeteAfficherModif(${unCircuit.ide},"chargerE")' class="edit" data-bs-toggle="modal"><i class="bi bi-pencil" data-toggle="tooltip" title="Modifier"></i></a>
				<a href="#" onClick='requeteDelete(${unCircuit.ide}, "enleverE")' class="delete" data-toggle="modal"><i class="bi bi-trash3" data-toggle="tooltip" title="Enlever"></i></a>
                <a href="#" onClick='chargerAJAX(${unCircuit.ide},"listerJ")' class="lister" data-toggle="modal"><i class="bi bi-arrow-right-square" data-toggle="tooltip" title="Lister"></i></a>
				</td>
			</tr>`;
    }
	$('#maintable').html(rep);
}

function generate_tableJ(displayRecords,idc) {
	let rep="";
    for (let uneJournee of displayRecords) {
        $('#btnRetour').attr('onClick', `chargerAJAX(${idc},"listerE")`); 
		rep+=`
			<tr>
				<td>
					<span class="custom-checkbox">
						<input type="checkbox" id="opt" value="${uneJournee.idj}" name="options[]">
						<label for="opt"></label>
					</span>
				</td>	
				<td>${uneJournee.idj}</td>
                <td>${uneJournee.ide}</td>
				<td>${uneJournee.descriptionj}</td>
				<td>${uneJournee.datej}</td>
                <td>
				<a href="#" onClick='requeteAfficherModif(${uneJournee.idj},"chargerJ")' class="edit" data-bs-toggle="modal"><i class="bi bi-pencil" data-toggle="tooltip" title="Modifier"></i></a>
				<a href="#" onClick='requeteDelete(${uneJournee.idj}, "enleverJ")' class="delete" data-toggle="modal"><i class="bi bi-trash3" data-toggle="tooltip" title="Enlever"></i></a>
                <a href="#" onClick='chargerAJAX(${uneJournee.idj},"listerA")' class="lister" data-toggle="modal"><i class="bi bi-arrow-right-square" data-toggle="tooltip" title="Lister"></i></a>
				</td>
			</tr>`;
    }
	$('#maintable').html(rep);
}

function generate_tableA(displayRecords,ide) {
	let rep="";
    for (let unActivite of displayRecords) { 
        $('#btnRetour').attr('onClick', `chargerAJAX(${ide},"listerJ")`);
		rep+=`
			<tr>
				<td>
					<span class="custom-checkbox">
						<input type="checkbox" id="opt" value="${unActivite.ida}" name="options[]">
						<label for="opt"></label>
					</span>
				</td>	
				<td>${unActivite.ida}</td>
                <td>${unActivite.idj}</td>
				<td>${unActivite.noma}</td>
				<td>${unActivite.descriptiona}</td>
				<td>${unActivite.tempsdebut}</td>
				<td>${unActivite.tempsfin}</td>
                <td>
				<a href="#" onClick='requeteAfficherModif(${unActivite.ida},"chargerA")' class="edit" data-bs-toggle="modal"><i class="bi bi-pencil" data-toggle="tooltip" title="Modifier"></i></a>
				<a href="#" onClick='requeteDelete(${unActivite.ida}, "enleverA")' class="delete" data-toggle="modal"><i class="bi bi-trash3" data-toggle="tooltip" title="Enlever"></i></a>
				</td>
			</tr>`;
    }
	$('#maintable').html(rep);
}

function generate_table_membre(displayRecords) {
	let rep="";
    for (let unConnexion of displayRecords) { 
		rep+=`
        <tbody id="tb${unConnexion.idm}">
			<tr>
				<td>
					<span class="custom-checkbox">
						<input type="checkbox" id="opt" value="${unConnexion.idm}" name="options[]">
						<label for="opt"></label>
					</span>
				</td>	
				<td>${unConnexion.idm}</td>
				<td>${unConnexion.courriel}</td>
				<td>${unConnexion.etat}</td>
                <td>
				<a href="#" onClick='requeteAfficherModif(${unConnexion.idm},"chargerM")' class="edit" data-bs-toggle="modal"><i class="bi bi-pencil" data-toggle="tooltip" title="Modifier"></i></a>
				</td>
			</tr></tbody>`;
    }
	$('#latable').append(rep);
}

let afficherMessage = (msg) => {
    document.getElementById('msg').innerHTML = msg;
    //setTimeout(() => { $('#msg').html(""); }, 5000);
    setTimeout(() => {
        document.getElementById('msg').innerHTML = "";
    }, 5000);
}

let afficherModifierC = (circuit) => {
    let form = `
    <div class="modal fade" id="modalModifierCircuit" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifier un Circuit</h5>
                    <button type="button" onclick="window.location.reload();" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregCircuitSolo" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class="col-md-12">
                            <label for="idc" class="form-label">Id du Circuit</label>
                            <input type="text" class="form-control" id="idc" name="idc" value="`+circuit.idc+`" readonly>
                        </div>
                        <div class="col-md-12">
                            <label for="nomc" class="form-label">Nom du Circuit</label>
                            <input type="text" class="form-control" id="nomc" name="nomc" value="`+circuit.nomc+`" required>
                        </div>
                        <div class='col-md-12'>
                            <label for='prix' class='form-label'>Prix du Circuit</label>
                            <input type="number" class="form-control" id="prix" name="prix" value="`+ circuit.prix +`" required>
                        </div>
                        <div class="col-md-12">
                            <label for="photocold" class="form-label">Photo Original</label>
                            <input type="text" class="form-control" id="photocold" name="photocold" value="`+circuit.photoc+`" readonly>
                        </div>
                        <div class="col-md-12">
                            <label for="photoc" class="form-label">Image du Circuit</label>
                            <input type="file" class="form-control" id="photoc" name="photoc" required>
                        </div>
                        <div class="col-md-12">
                            <label for="descriptionc" class="form-label">Description du Circuit</label>
                            <input type="text" class="form-control" id="descriptionc" name="descriptionc" value="`+circuit.descriptionc+`" required>
                        </div>
                        <div class="col-md-12">
                            <label for="etat" class="form-label">Etats du Circuit</label>
                            <select id="etat" name="etat" class="form-select form-select-sm" required
                                aria-label=".form-select-sm example">
                                <option selected value="T">Travail</option>
                                <option value="A">Deploiement(Actif)</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteModifier('formEnregCircuitSolo','modifierC');">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    $("#contenu").append(form);
    //document.getElementById('contenu').innerHTML = form;
    $('#modalModifierCircuit').modal('show');
}

let afficherModifierM = (membre) => {
    let form = `
    <div class="modal fade" id="modalModifierCircuit" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifier un Membre</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregMembreSolo" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class="col-md-12">
                            <label for="idm" class="form-label">Id du Membre</label>
                            <input type="text" class="form-control" id="idm" name="idm" value="` + membre.idm + `" readonly>
                        </div>
                        <div class="col-md-12">
                            <label for="courriel" class="form-label">Courriel du Membre</label>
                            <input type="text" class="form-control" id="courriel" name="courriel" value="` + membre.courriel + `" readonly>
                        </div>
                        <div class="col-md-12">
                            <label for="etat" class="form-label">Etat du Compte Membre</label>
                            <input type="text" class="form-control" id="etat" name="etat" value="` + membre.etat + `" readonly>
                        </div>
                        <div class="col-md-12">
                            <label for="etat" class="form-label">Changer l'etat du Compte Membre</label>
                            <select id="etat" name="etat" class="form-select form-select-sm" required
                                aria-label=".form-select-sm example">
                                <option selected value="A">Actif</option>
                                <option value="D">Desactiver</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteModifier('formEnregMembreSolo','modifierM');">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    $("#contenu").append(form);
    //document.getElementById('contenu').innerHTML = form;
    $('#modalModifierCircuit').modal('show');
}

let afficherModifierE = (etape) => {
    let form = `
    <div class="modal fade" id="modalModifierEtape" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifier une Étape</h5>
                    <button type="button" onclick="chargerAJAX(${etape.idc},'listerE');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregEtape" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class='col-md-12'>
                            <label for='idc' class='form-label'>Id Circuit associé</label>
                            <input type='text' class='form-control' id='idc' name='idc' value='${etape.idc}' readonly>
                        </div>
                        <div class='col-md-12'>
                            <label for='ide' class='form-label'>Id Etape</label>
                            <input type='text' class='form-control' id='ide' name='ide' value='${etape.ide}' readonly>
                        </div>
                        <div class='col-md-12'>
                            <label for='nome' class='form-label'>Etape</label>
                            <input type='text' class='form-control' id='nome' name='nome' value='${etape.nome}' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='photoeold' class='form-label'>Photo Original</label>
                            <input type='text' class='form-control' id='photoeold' name='photoeold' value='${etape.photoe}' readonly>
                        </div>
                        <div class='col-md-12'>
                            <label for='photoe' class='form-label'>Image de l'Etape</label>
                            <input type='file' class='form-control' id='photoe' name='photoe' value='${etape.photoe}' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='descriptione' class='form-label'>Description de l'Etape</label>
                            <input type='text' class='form-control' id='descriptione' name='descriptione' value='${etape.descriptione}' required>
                        </div>
                        <div class='col-md-6'>
                        <label for='debut' class='form-label'>Date du Debut</label>
                            <input type='date' class='form-control is-valid' id='debut' name='debut' value='${etape.debut.substring(0,10)}' required>
                        </div>
                        <div class='col-md-12'>
                        </div>
                        <div class='col-md-6'>
                            <label for='fin' class='form-label'>Date de la Fin</label>
                            <input type='date' class='form-control is-valid' id='fin' name='fin' value='${etape.fin.substring(0,10)}' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='lieurencontre' class='form-label'>Lieu de rencontre pour le Diner</label>
                            <input type='text' class='form-control' id='lieurencontre' name='lieurencontre' value='${etape.lieurencontre}' required>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteModifier('formEnregEtape','modifierE');">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    $("#contenu").append(form);
    //document.getElementById('contenu').innerHTML = form;
    $('#modalModifierEtape').modal('show');
}
let afficherModifierJ = (journee) => {
    let form = `
    <div class="modal fade" id="modalModifierJournee" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifier une Journée</h5>
                    <button type="button" onclick="chargerAJAX(${journee.ide},'listerJ');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregJournee" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class='col-md-12'>
                            <label for='idj' class='form-label'>Id de la journée</label>
                            <input type='text' class='form-control' id='idj' name='idj' value='${journee.idj}' readonly>
                        </div>
                        <div class='col-md-12'>
                            <label for='ide' class='form-label'>Id Etape associé</label>
                            <input type='text' class='form-control' id='ide' name='ide' value='${journee.ide}' readonly>
                        </div>
                        <div class='col-md-6'>
                            <label for='datej' class='form-label'>Date</label>
                               <input type='date' class='form-control is-valid' id='datej' name='datej' value='${journee.datej.substring(0,10)}' required>
                        </div>
                        <div class='col-md-12'>
                            <label for='descriptionj' class='form-label'>Autre information</label>
                            <input type='text' class='form-control' id='descriptionj' name='descriptionj' value='${journee.descriptionj}' required>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteModifier('formEnregJournee','modifierJ');">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    $("#contenu").append(form);
    //document.getElementById('contenu').innerHTML = form;
    $('#modalModifierJournee').modal('show');
}
let afficherModifierA = (activite) => {
    let form = `
    <div class="modal fade" id="modalModifierActivite" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifier un Activite</h5>
                    <button type="button" onclick="chargerAJAX(${activite.idj},'listerA');" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregActivite" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class='col-md-12'>
                            <label for='ida' class='form-label'>Id de l'Activité</label>
                            <input type='text' class='form-control' id='ida' name='ida' value='${activite.ida}' readonly>
                        </div>
                        <div class='col-md-12'>
                            <label for='idj' class='form-label'>Id Journee associée</label>
                            <input type='text' class='form-control' id='idj' name='idj' value='${activite.idj}' readonly>
                        </div>
                        <div class='col-md-12'>
                            <label for='noma' class='form-label'>Nom de l'activite</label>
                            <input type='text' class='form-control' id='noma' name='noma' value='${activite.noma}' required>
                        </div>
                        <div class='col-md-6'>
                            <label for='tempsdebut' class='form-label'>Heure du debut de l'activiter</label>
                            <input type='text' class='form-control is-valid' id='tempsdebut' name='tempsdebut' value='${activite.tempsdebut}' required>
                        </div>
                        <div class='col-md-6'>
                            <label for='tempsfin' class='form-labe'>Heure de fin de l'activiter</label>
                            <input type='text' class='form-control is-valid' id='tempsfin' name='tempsfin' value='${activite.tempsfin}' required>
                        </div>
                            <div class='col-md-12'>
                                <label for='descriptiona' class='form-label'>Description des activiter</label>
                            <input type='text' class='form-control' id='descriptiona' name='descriptiona' value='${activite.descriptiona}' required>
                        </div>        
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteModifier('formEnregActivite','modifierA');">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>                                                              
    </div>
    `;
    $("#contenu").append(form);
    //document.getElementById('contenu').innerHTML = form;
    $('#modalModifierActivite').modal('show');
}
let montrerVue = (action, donnees) => {
    var listeStaticJournees;
    switch(action){
        case "enregistrer"  :
            if(donnees.OK){
                window.location.reload();
            }else{
                msg="Problème+avec+enregistrement";
                console.log(donnees.msg);
                window.location.href="index.php"; 
            }
            break;
        case "enregistrerE"  :
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(donnees.index,"listerE");
            }else{  
                msg="Problème+avec+enregistrement";
                console.log(donnees.msg);
                window.location.href="index.php"; 
            }
            break;
        case "enregistrerJ"  :
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(donnees.index,"listerJ");
            }else{
                msg="Problème+avec+enregistrement";
                console.log(donnees.msg);
                window.location.href="index.php"; 
            }
            break;
        case "enregistrerA"  :
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(donnees.index,"listerA");
            }else{
                msg="Problème+avec+enregistrement";
                console.log(donnees.msg);
                window.location.href="index.php"; 
            }
            break;
        case "modifierC"     :
            if(donnees.OK){
                window.location.reload();
             }else{
                 msg="Problème+pour+modifier+le+membre.";
                 console.log(msg);
                 window.location.href="index.php"; 
             }
             break;
        case "modifierE"     :
            if(donnees.OK){                                                                                 
                $("#contenu").html("");
                chargerAJAX(donnees.index,"listerE");
             }else{
                 msg="Problème+pour+modifier+le+membre.";
                 console.log(msg);
                 window.location.href="../../index.php"; 
             }
             break;
        case "modifierJ"     :
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(donnees.index,"listerJ");
             }else{
                 msg="Problème+pour+modifier+la+journee.";
                 console.log(msg);
                 window.location.href="../../index.php"; 
             }
             break;
        case "modifierA"     :
            console.log(donnees);
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(donnees.index,"listerA");
             }else{
                 msg="Problème+pour+modifier+le+membre.";
                 console.log(msg);
                 window.location.href="../../index.php"; 
             }
             break;
        case "modifierM"     :
            if(donnees.OK){
                window.location.href= donnees.location;
                }else{
                console.log(donnees.msg);
                //window.location.href="index.php"; 
            }
        break;
        case "chargerC"      :
            if(donnees.OK){
                afficherModifierC(donnees.circuit);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
            break;
        case "chargerE"      :
            if(donnees.OK){
                afficherModifierE(donnees.etape);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
            break;
        case "chargerJ"      :
            if(donnees.OK){
                afficherModifierJ(donnees.journee);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
            break;
        case "chargerA"      :
            if(donnees.OK){
                afficherModifierA(donnees.activite);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
            break;
        case "chargerM"      :
            if(donnees.OK){
                afficherModifierM(donnees.connexionM);
            }else{
                afficherMessage(donnees.msg); 
            }
            break;
        case "enlever"      :
            if(donnees.OK){
                afficherMessage(donnees.msg);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
            break;
        case "checherCircuit":
            if(donnees.OK){
                afficherSqueletteTable("Circuit",0);
                afficherTableC();
                generate_tableC(donnees.listeCircuits);
            }else{
                 afficherMessage(donnees.msg); 
            }
            break;
        case "triCircuit":
            if(donnees.OK){
                afficherSqueletteTable("Circuit",0);
                afficherTableC();
                generate_tableC(donnees.listeCircuits);
            }else{
                afficherMessage(donnees.msg); 
            }
            break;
        case "listerC"       :
            if(donnees.OK){
                afficherSqueletteTable("Circuit",0);
                afficherTableC();
                generate_tableC(donnees.listeCircuits);
            }else{
                afficherMessage(donnees.msg); 
            }
            break;
        case "listerE"       :
            if(donnees.OK){
                afficherSqueletteTable("Etape",donnees.index);
                afficherTableE();
                generate_tableE(donnees.listeEtapes);
            }else{
                afficherMessage(donnees.msg); 
            }
            break;
        case "listerJ"       :
            if(donnees.OK){
                afficherSqueletteTable("Journee",donnees.index);
                afficherTableJ();
                idc = 0;
                generate_tableJ(donnees.listeJournees, idc);
                //requeteGetIdc(donnees.index);
            }else{
                afficherMessage(donnees.msg); 
            }
            break;
        case "listerJ2"       :
            if(donnees.OK){
                console.log(listeStaticJournees);
                generate_tableJ(listeStaticJournees, donnees.idc);
            }else{
                afficherMessage(donnees.msg); 
            }
            break;
        case "listerA"       :
            if(donnees.OK){
                afficherSqueletteTable("Activite",donnees.index);
                afficherTableA();
                ide = 0;
                //console.log(donnees.index);
                //ide = requeteGetIde(donnees.index);
                //console.log(ide);
                generate_tableA(donnees.listeActivites, ide);
            }else{
                afficherMessage(donnees.msg); 
            }
            break;
        case "enleverC"     :
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(0,"listerC");
             }else{
                console.log(donnees);
                console.log(donnees.msg);
                //window.location.href="../../index.php"; 
             }
             break;
        case "enleverE"     :
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(donnees.index.idc,"listerE");
             }else{
                console.log(donnees);
                console.log(donnees.msg);
                //window.location.href="../../index.php"; 
             }
             break;
        case "enleverJ"     :
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(donnees.index.ide,"listerJ");
             }else{
                console.log(donnees);
                console.log(donnees.msg);
                //window.location.href="../../index.php"; 
             }
             break;
        case "enleverA"     :
            if(donnees.OK){
                $("#contenu").html("");
                chargerAJAX(donnees.index.idj,"listerA");
             }else{
                console.log(donnees);
                console.log(donnees.msg);
                //window.location.href="../../index.php"; 
             }
             break;
        case "deconnexion"  :
            if(donnees.OK){
                window.location.href= donnees.location;   
            }else{
                console.log(donnees.msg); 
            }
            break;
        case "listerMembre"  :
            if(donnees.OK){
                afficherTableMembres();
                generate_table_membre(donnees.listeConnexionM);  
            }else{
                console.log(donnees.msg); 
            }
            break;
        case "deleteMultipleCircuit"  :
            if(donnees.OK){
                window.location.reload();
                console.log(donnees.msg);
            }else{
                console.log(donnees.msg); 
            }
            break;
        case "deleteMultipleEtape"  :
            if(donnees.OK){
                window.location.reload();
                console.log(donnees.msg);
            }else{
                console.log(donnees.msg); 
            }
            break;
        case "deleteMultipleJournee"  :
            if(donnees.OK){
                window.location.reload();
                console.log(donnees.msg);
            }else{
                console.log(donnees.msg); 
            }
            break;
        case "deleteMultipleActivite"  :
            if(donnees.OK){
                window.location.reload();
                console.log(donnees.msg);
            }else{
                console.log(donnees.msg); 
            }
            break;

    }


}