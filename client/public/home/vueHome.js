
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
                    <form id="formEnreg" method="POST" enctype="multipart/form-data" class="row g-3">
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
                            <input type="email" class="form-control is-valid" id="courriel" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" name="courriel" required>
                        </div>
                        <div class="col-md-6">
                            <label for="pass" class="form-label">Mot de passe</label>
                            <input type="password" class="form-control is-valid" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}$" id="pass" name="pass" required>
                        </div>
                        <div class="col-md-6">
                            <label for="cpass" class="form-label">Confirmer mot de passe</label>
                            <input type="password" class="form-control is-valid" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}$" id="cpass" name="cpass" required>
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
                            <button class="btn btn-primary" type="button" onclick="requeteEnregistrer();">Enregistrer</button>
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
let afficherCarou = (unCircuit) => {
    let test = `
        <div class="carousel-item">
          <img src="serveur/ressources/images/images_circuits/`+ unCircuit.photoc + `" class="d-block w-100 h-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>`+ unCircuit.nomc + `</h5>
            <p>` + unCircuit.descriptionc + `</p>
          </div>
        </div>
      `;
    return test;

}
let afficherContact = () => {
    let test = `
  
    <h1 style="text-align:center">Contactez nous</h1>  
    <h2 style="text-align:center">Notre Équipe</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Félix-Antoine Lavallée</h2>
            <p class="title">Scrum master et développeur </p>
            <p>1986645</p>
            <p>201986645@collegeahuntsic.qc.ca</p>
          </div>
        </div>
      </div>
    
      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Félix Gauthier-Pravato</h2>
            <p class="title">développeur </p>
            <p>201964428@collegeahuntsic.qc.ca</p>
          </div>
        </div>
      </div>
    
      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Maxime Couillard</h2>
            <p class="title">développeur </p>
            <p>200940118@collegeahuntsic.qc.ca</p>
          </div>
        </div>
      </div>
    
      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Haddouni Sid Ali</h2>
            <p class="title">développeur </p>
            <p>201947531@collegeahuntsic.qc.ca</p>
          </div>
        </div>
      </div>
    </div>
    `;

    document.getElementById('carouselExampleCaptions').innerHTML = test;

}

let montrerFormConnex = () => {
    let form = `
    <!-- Modal connexion -->
        <div class="modal fade" id="modalConnexion" tabindex="-1" aria-labelledby="ModalConnexionLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalConnexionLabel">Connexion</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3" id="formConnexion" method="POST">
                            <div class="col-md-4">
                                <label for="courriel" class="form-label">Courriel</label>
                                <input type="email" class="form-control" id="courrielc" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" name="courrielc" value="" required>
                            </div>
                            <div class="col-md-6">
                                <label for="pass" class="form-label">Mot Passe</label>
                                <input type="password" class="form-control" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}$" id="passc" name="passc" required>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="button" onclick="requeteConnexion();">Connexion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin du modal pour connexion-->
    `;
    document.getElementById('contenu').innerHTML = form;
    $('#modalConnexion').modal('show');
}


let remplirCard = (unFilm) => {
    let rep = ' <div class="col">';
    rep += '<div class="card">';
    rep += ' <img src="serveur/pochettes/' + unFilm.pochette + '" class="card-img-top tailleImg" alt="...">';
    rep += ' <div class="card-body">';
    rep += ' <h5 class="card-title">' + unFilm.titre + '</h5>';
    rep += ' <p class="card-text">Réalisateur : ' + unFilm.res + '</p>';
    rep += ' <p class="card-text">Durée : ' + unFilm.duree + '</p>';
    rep += ' <a href="#" class="btn btn-primary">Bande annonce</a>';
    rep += ' <a href="#" onClick="enleverFilm(this,unFilm.title);" class="btn btn-danger"><span style="font-size:18px; color:white;">-</span></a>';
    rep += ' <!--<button style="float:right;margin-right: 12px;" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">';
    rep += ' <span style="font-size:18px; color:white;">-</span>';
    rep += ' </button> -->';
    rep += ' </div>';
    rep += ' </div>';
    rep += ' </div>';

    return rep;
}

let listerCircuits = (listeCircuits) => {
    let contenu = `<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
    for (let i = 1; i < listeCircuits.length; i++) {
        contenu +=` <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="` + i +`" aria-label="Slide `+ (i+1) +`"></button>`;
    }
    contenu +=`</div>
    <div class="carousel-inner">`;
    for (let i = 0; i < listeCircuits.length; i++) {
        if(i == 0) {
            contenu += `<div class="carousel-item active">
            <img src="serveur/ressources/images/images_circuits/` + listeCircuits[0].photoc + `" class="d-block w-100 h-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>` + listeCircuits[0].nomc + `</h5>
              <p>` + listeCircuits[0].descriptionc + `</p>
            </div>
            </div>`;
        } else {
            contenu += afficherCarou(listeCircuits[i]);
        }
    }
    contenu += `</div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>`;
    document.getElementById('carouselExampleCaptions').innerHTML = contenu;
}

let afficherMessage = (msg) => {
    document.getElementById('msg').innerHTML = msg;
    //setTimeout(() => { $('#msg').html(""); }, 5000);
    setTimeout(() => {
        document.getElementById('msg').innerHTML = "";
    }, 5000);
}

let montrerVue = (action, donnees) => {

    switch (action) {
        case "enregistrer":
            if (donnees.OK) {
                window.location.href = donnees.location;
            } else {
                msg = "Problème+pour+enregistré+le+membre.";
                console.log(msg);
                window.location.href = "index.php";
            }
            break;
        case "connexion":
            if (donnees.OK) {
                if (donnees.role == "M") {
                    window.location.href = donnees.location;
                } else {
                    window.location.href = donnees.location;
                }
            } else {
                console.log(donnees.msg);
            }
            break;
        case "modifier":
        case "enlever":
            if (donnees.OK) {
                afficherMessage(donnees.msg);
            } else {
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!");
            }
            break;
        case "lister":
            
            if (donnees.OK) {
                listerCircuits(donnees.listeCircuits);
            } else {
                console.log(donnees.msg);
            }
    }



}