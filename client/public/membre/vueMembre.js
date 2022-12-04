let remplirCard = (unCircuit)=> {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="../ressources/images/images_circuits/'+unCircuit.photoc+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unCircuit.nomc+'</h5>';
                 rep +=' <p class="card-text">Description : '+unCircuit.descriptionc+'</p>';
                 rep +=' <p class="card-text">Prix Total : '+unCircuit.prix+'$</p>';
                 rep +=' <a href="#" onClick="detailCircuit(' + unCircuit.idc + ');" class="btn btn-primary"><span style="font-size:18px; color:white;">Détailler le Circuit</span></a>';
                 rep +=' <a href="#" onClick="acheterCircuit(this,unCircuit.title);" class="btn btn-primary"><span style="font-size:18px; color:white;">Ajouter au panier</span></a>';
                 rep +=' </div>';
                 rep +=' </div>';
                 rep +=' </div>';
        return rep;
}
let remplirDetail = (unCircuit)=> {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="../ressources/images/images_circuits/'+unCircuit.photoc+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unCircuit.nomc+'</h5>';
                 rep +=' <p class="card-text">Description : '+unCircuit.descriptionc+'</p>';
                 rep +=' <p class="card-text">Prix Total : '+unCircuit.prix+'$</p>';
                 rep +=' <a href="#" onClick="detailCircuit(' + unCircuit.idc + ');" class="btn btn-primary"><span style="font-size:18px; color:white;">Détailler le Circuit</span></a>';
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
let detaillerCircuits = (unCircuit, listeEtapes, listeJournees, listeActivities) => {
    let contenu = ``;
    contenu+= carteCircuit(unCircuit);
    for(let unEtape of listeEtapes){
        contenu+= carteEtape(unEtape);
        for(let uneJournee of listeJournees) {
            contenu+= carteJournee(uneJournee);
            for(let uneActivite of listeActivities) {
                contenu+= carteActivite(uneActivite);
            }
        }
    }
    document.getElementById('contenu').innerHTML = contenu;
}

let carteCircuit = (unCircuit) => {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="../ressources/images/images_circuits/'+unCircuit.photoc+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unCircuit.nomc+'</h5>';
                 rep +=' <p class="card-text">Description : '+unCircuit.descriptionc+'</p>';
                 rep +=' <p class="card-text">Prix Total : '+unCircuit.prix+'$</p>';
                 rep +=' </div>';
                 rep +=' </div>';
                 rep +=' </div>';
        return rep;
}

let carteEtape = (unEtape) => {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="../ressources/images/images_circuits/'+unEtape.photoe+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unEtape.nome+'</h5>';
                 rep +=' <p class="card-text">Description : '+unEtape.descriptione+'</p>';
                 rep +=' <p class="card-text">Prix Total : '+unEtape.prix+'$</p>';
                 rep +=' <p class="card-text">Debut : '+unEtape.debut+'</p>';
                 rep +=' <p class="card-text">Fin : '+unEtape.fin+'</p>';
                 rep +=' <p class="card-text">Lieu de rencontre : '+unEtape.lieurencontre+'</p>';
                 rep +=' </div>';
                 rep +=' </div>';
                 rep +=' </div>';
        return rep;
}

let carteJournee = (uneJournee) => {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+ uneJournee.datej+'</h5>';
                 rep +=' <p class="card-text">Description : '+ uneJournee.descriptionj+'</p>';
                 rep +=' </div>';
                 rep +=' </div>';
                 rep +=' </div>';
        return rep;
}

let carteActivite = (uneActivite) => {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+ uneActivite.noma+'</h5>';
                 rep +=' <p class="card-text">Temps Debut : '+ uneActivite.tempsdebut+'</p>';
                 rep +=' <p class="card-text">Temps Fin : '+ uneActivite.tempsfin+'</p>';
                 rep +=' <p class="card-text">Description : '+ uneActivite.descriptiona+'</p>';
                 rep +=' </div>';
                 rep +=' </div>';
                 rep +=' </div>';
        return rep;
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
        case "detailler"  :
            if(donnees.OK){
                detaillerCircuits(donnees.circuit, donnees.listeEtapes, donnees.listeJournees, donnees.listeActivites);     
            }else{
                console.log(donnees.msg); 
            }
            break;

    }


}