
let montrerFormEnreg = () => {
    let form = `
    <!-- Modal pour enregistrer film -->
        <div class="modal fade" id="enregModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Enregistrer film</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form id="formEnreg">
                        <div class="col-md-6">
                            <label for="titre" class="form-label">Titre</label>
                            <input type="text" class="form-control is-valid" id="titre" name="titre" required>
                        </div>
                        <div class="col-md-6">
                            <label for="duree" class="form-label">Durée</label>
                            <input type="numeric" class="form-control is-valid" id="duree" name="duree" required>
                        </div>
                        <div class="col-md-12">
                            <label for="res" class="form-label">Réalisateur</label>
                            <input type="text" class="form-control is-valid" id="res" name="res" required>
                        </div>
                        <div class="col-md-6">
                            <label for="pass" class="form-label">Mot de passe</label>
                            <input type="password" class="form-control is-valid" pattern="[A-Za-z0-9_\$#\.]{5,10}$" id="pass" name="pass" required>
                        </div>
                        <div class="col-md-6">
                            <label for="pochette" class="form-label">Pochette</label>
                            <input type="file"  class="form-control is-valid" id="pochette" name="pochette">
                            <span id="msgPass"></span>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" onClick="requeteEnregistrer();">Enregistrer</button>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin du modal pour enregistrer film -->
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#enregModal').modal('show');
}


let remplirCard = (unFilm)=> {
    let rep ='<div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="../ressources/images/images_circuits/'+ unCircuit.photoc+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unCircuit.nomc+'</h5>';
                 rep +=' <p class="card-text">Réalisateur : '+unCircuit.etat+'</p>';
                 rep +=' <p class="card-text">Durée : '+unCircuit.descriptionc+'</p>';
                 rep +=' <a href="#" class="btn btn-primary">Bande annonce</a>';
                 rep +=' <a href="#" onClick="enleverFilm(this,unFilm.title);" class="btn btn-danger"><span style="font-size:18px; color:white;">-</span></a>';
                 rep +=' <!--<button style="float:right;margin-right: 12px;" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">';
                 rep +=' <span style="font-size:18px; color:white;">-</span>';
                 rep +=' </button> -->';
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

let montrerVue = (action, donnees) => {

    switch(action){
        case "enregistrer"  :
        case "modifier"     :
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
    }


}