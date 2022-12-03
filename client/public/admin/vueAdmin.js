let montrerFormAjouterCircuit = () => {
    let form = `
    <div class="modal fade" id="modalAjouterCircuit" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enregistrer un Circuit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEnregCircuit" class="row  needs-validation" enctype="multipart/form-data" method="POST">
                        <div class="col-md-12">
                            <label for="nomc" class="form-label">Nom du Circuit</label>
                            <input type="text" class="form-control" id="nomc" name="nomc" value="" required>
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
                                <option selected disabled value="Des">Desactiver</option>
                                <option value="Tra">Travail</option>
                                <option value="Dep">Deploiement</option>
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
                                        "<input type='time' class='form-control is-valid' id='tempsdebut' name='tempsdebut' required>
                                    </div>
                                    <div class='col-md-12'>
                                    </div>
                                    <div class='col-md-6'>
                                        <label for='tempsfin' class='form-labe'>Heure de fin de l'activiter</label>
                                        <input type='time' class='form-control is-valid' id='tempsfin' name='tempsfin' required>
                                    </div>
                                    <div class='col-md-12'>
                                        <label for='descriptiona' class='form-label'>Description des activiter</label>
                                        <input type='text' class='form-control' id='descriptiona' name='descriptiona' value='' required>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteEnregistrer();">Enregistrer</button>
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
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <input type='time' class='form-control is-valid' id='tempsdebut' name='tempsdebut' required>
                        </div>
                        <div class='col-md-6'>
                            <label for='tempsfin' class='form-labe'>Heure de fin de l'activiter</label>
                            <input type='time' class='form-control is-valid' id='tempsfin' name='tempsfin' required>
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

let afficherTableCircuits = () => {
    let rep = `
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
                            <th>ID</th>
                            <th>Image</th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Etat</th>
                            <th>Prix</th>
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
    `;
    document.getElementById('contenu').innerHTML = rep;
}

var $pagination,
totalRecords = 0,
records = [],
displayRecords = [],
recPerPage = 4,
page = 1,
totalPages = 0;

function genererPagination(listeCircuits){
	$pagination = $('#pagination');
	records = listeCircuits;
	//alert(JSON.stringify(records));
	// console.log(records);
	totalRecords = records.length;
	totalPages = Math.ceil(totalRecords / recPerPage);
	apply_pagination();
}

function generate_table(displayRecords) {
    let tr;
    $('#emp_body').html('');
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
				<td>${unCircuit.prix}$</td>

				<td>
				<a href="#" onClick='editerArticle(${unCircuit.idc})' class="edit" data-bs-toggle="modal"><i class="bi bi-pencil" data-toggle="tooltip" title="Modifier"></i></a>
				<a href="#" onClick='supprimerArticle(${unCircuit.idc})' class="delete" data-toggle="modal"><i class="bi bi-trash3" data-toggle="tooltip" title="Enlever"></i></a>
                <a href="#" onClick='listerEtape(${unCircuit.idc})' class="lister" data-toggle="modal"><i class="bi bi-arrow-right-square" data-toggle="tooltip" title="Lister"></i></a>
				</td>
			</tr>`;
    }
	$('#emp_body').html(rep);
}

function apply_pagination() {
    $pagination.twbsPagination({
          totalPages: totalPages,
          visiblePages: 6,
          onPageClick: function (event, page) {
                displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
                endRec = (displayRecordsIndex) + recPerPage;
               
                displayRecords = records.slice(displayRecordsIndex, endRec);
                generate_table(displayRecords);
          }
    });
}

let afficherMessage = (msg) => {
    document.getElementById('msg').innerHTML = msg;
    //setTimeout(() => { $('#msg').html(""); }, 5000);
    setTimeout(() => {
        document.getElementById('msg').innerHTML = "";
    }, 5000);
}

let afficherModifier = (circuit) => {
    let form = `
    <div class="modal fade" id="modalAjouterCircuitSolo" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enregistrer un Circuit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                        <div class="col-md-12">
                            <label for="photocold" class="form-label">Id du Circuit</label>
                            <input type="text" class="form-control" id="photocold" name="photocold" value="`+circuit.photoc+`" readonly>
                        </div>
                        <div class="col-md-12">
                            <label for="photoc" class="form-label">Image du Circuit</label>
                            <input type="file" class="form-control" id="photoc" name="photoc" required>
                        </div>
                        <div class="col-md-12">
                            <label for="descriptionc" class="form-label">Description du Circuit</label>
                            <input type="text" class="form-control" id="descriptionc" name="descriptionc" value="`+circuit.descriptionc+`" required required>
                        </div>
                        <div class="col-md-12">
                            <label for="etat" class="form-label">Etats du Circuit</label>
                            <select id="etat" name="etat" class="form-select form-select-sm" required
                                aria-label=".form-select-sm example">
                                <option selected value="Tra">Travail</option>
                                <option value="Dep">Deploiement</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onclick="requeteModifier();">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#modalAjouterCircuitSolo').modal('show');
}

let montrerVue = (action, donnees) => {

    switch(action){
        case "enregistrer"  :
            if(donnees.OK){
                window.location.href= donnees.location;
            }else{
                msg="Problème+avec+enregistrement";
                console.log(msg);
                window.location.href="index.php"; 
            }
            break;
        case "modifier"     :
            if(donnees.OK){
                window.location.href= donnees.location;
             }else{
                 msg="Problème+pour+modifier+le+membre.";
                 console.log(msg);
                 window.location.href="index.php"; 
             }
             break;
        case "charger"      :
            if(donnees.OK){
                afficherModifier(donnees.circuit);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
        break;
        case "enlever"      :
            if(donnees.OK){
                afficherMessage(donnees.msg);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
        break;
        case "lister"       :
            if(donnees.OK){
                afficherTableCircuits();
                generate_table(donnees.listeCircuits);
            }else{
                afficherMessage(donnees.msg); 
            }
        break;
        case "deconnexion"  :
            if(donnees.OK){
                window.location.href= donnees.location;   
            }else{
                console.log(donnees.msg); 
            }
            break;

    }


}