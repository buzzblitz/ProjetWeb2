
let montrerFormEnreg = () => {
    let form = `
    <!-- Modal pour enregistrer membre -->
        <div class="modal fade" id="enregModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Enregistrer membre</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form id="formEnreg" action="serveur/modele/membre/enregistrerMembres.php" method="POST" enctype="multipart/form-data" class="row g-3" onSubmit="return validerFormEnreg();">
                        <div class="col-md-6">
                            <label for="prenom" class="form-label">Prénom</label>
                            <input type="text" class="form-control is-valid" id="prenom" name="prenom" required>
                        </div>
                        <div class="col-md-6">
                            <label for="nom" class="form-label">Nom</label>
                            <input type="text" class="form-control is-valid" id="nom" name="nom" required>
                        </div>
                        <div class="col-md-12">
                            <label for="courriel" class="form-label">Courriel</label>
                            <input type="email" class="form-control is-valid" id="courriel" name="courriel" required>
                        </div>
                        <div class="col-md-6">
                            <label for="pass" class="form-label">Mot de passe</label>
                            <input type="password" class="form-control is-valid" pattern="[A-Za-z0-9_\$#\.]{5,10}$" id="pass" name="pass" required>
                        </div>
                        <div class="col-md-6">
                            <label for="cpass" class="form-label">Confirmer mot de passe</label>
                            <input type="password" class="form-control is-valid" pattern="[A-Za-z0-9_\$#\.]{5,10}$" id="cpass" name="cpass" required>
                            <span id="msgPass"></span>
                        </div>
                        <div class="col-md-6">
                            <label for="sexe" class="form-label">Sexe</label>
                            <select class="form-select" id="sexe" name="sexe" aria-describedby="validationServer04Feedback">
                                <option selected disabled value="">Choisir</option>
                                <option value="F">Féminin</option>
                                <option value="M">Masculin</option>
                                <option value="A">Autres</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="daten" class="form-label">Date de naissance</label>
                            <input type="date" class="form-control is-valid" id="daten" name="daten">
                        </div>
                        <div class="col-md-12">
                            <label for="photom" class="form-label">Photo</label>
                            <input type="file" class="form-control is-valid" id="photom" name="photom">
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
        <!-- Fin du modal pour enregistrer membre -->
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#enregModal').modal('show');
}


let remplirCard = (unFilm)=> {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="serveur/pochettes/'+unFilm.pochette+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unFilm.titre+'</h5>';
                 rep +=' <p class="card-text">Réalisateur : '+unFilm.res+'</p>';
                 rep +=' <p class="card-text">Durée : '+unFilm.duree+'</p>';
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

let listerFilms = (listeFilms) => {
    let contenu = `<div class="row row-cols-4">`;
    for (let unFilm of listeFilms){
            contenu+=remplirCard(unFilm);
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
                console.log(donnees.idm);
            }else{
                console.log("Problème côté serveur. Essaiez plus tard!!!"); 
            }
        break;
        case "lister"       :
            if(donnees.OK){
                console.log(donnees.listeFilms);
            }else{
                console.log("Problème côté serveur. Essaiez plus tard!!!"); 
            }
    }


}