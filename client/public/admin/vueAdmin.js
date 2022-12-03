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

let montrerFormAjouteEtape = () => {
    let form = `
    <div class="modal fade" id="modalAjouterEtape" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
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
                            <button class="btn btn-primary" type="button" onclick="requeteEnregistrer();">Enregistrer</button>
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

let montrerFormAjouterJournee = () => {
    let form = `
    <div class="modal fade" id="modalAjouterJournee" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
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
    $('#modalAjouterJournee').modal('show');
}


let montrerFormAjouterActivitee = () => {
    let form = `
    <div class="modal fade" id="modalAjouterCircuit" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
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
    $('#modalAjouterActivitee').modal('show');
}

let remplirCard = (unCircuit)=> {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="../ressources/images/images_circuits/'+unCircuit.photoc+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unCircuit.nomc+'</h5>';
                 rep +=' <p class="card-text">Description : '+unCircuit.descriptionc+'</p>';
                 rep +=' <a href="#" onClick="acheterCircuit(this,unCircuit.title);" class="btn btn-primary"><span style="font-size:18px; color:white;">Ajouter au panier</span></a>';
                 rep +=' </div>';
                 rep +=' </div>';
                 rep +=' </div>';
        return rep;
}

let listerCircuits = (listeCircuits) => {
    let contenu = `<div class="row row-cols-4">`;
    for (let unCircuit of listeCircuits){
            contenu+=remplirCard(unCircuit);
    } 
    contenu += `</div>`;
    document.getElementById('contenu').innerHTML = contenu;
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
                 msg="Problème+pour+enregistré+le+membre.";
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
                listerCircuits(donnees.listeCircuits);
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