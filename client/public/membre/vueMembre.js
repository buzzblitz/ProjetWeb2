let chargerCircuitsMembreAJAX = () => {
    $.ajax({
        type : "POST",
        url  : "../../membres.php",
        data : {"action":"lister"},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : (listerCircuits) => {//alert(listeFilms);
            // listeFilms = reponse;
        	montrerVue("lister", listerCircuits);
        },
        fail : (err) => {
            //Décider du message
        }
    })
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