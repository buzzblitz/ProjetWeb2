let remplirCard = (unCircuit)=> {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="serveur/pochettes/'+unCircuit.photoc+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unCircuit.nom+'</h5>';
                 rep +=' <p class="card-text">Durée : '+unCircuit.descriptionc+'</p>';
                 rep +=' <a href="#" onClick="enleverCircuit(this,unCircuit.title);" class="btn btn-danger"><span style="font-size:18px; color:white;">-</span></a>';
                 rep +=' <!--<button style="float:right;margin-right: 12px;" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">';
                 rep +=' <span style="font-size:18px; color:white;">-</span>';
                 rep +=' </button> -->';
                 rep +=' </div>';
                 rep +=' </div>';
                 rep +=' </div>';
        return rep;
}

let listerCircuits = (listeCircuit) => {
    let contenu = `<div class="row row-cols-4">`;
    for (let unCircuit of listeCircuit){
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
                listermembres(donnees.listemembres);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
    }


}