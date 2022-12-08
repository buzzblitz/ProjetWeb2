const TAXES = 0.1556;
let panier = null;
let listesCircuits;

if (localStorage.getItem("panier") == undefined) {
    localStorage.setItem("panier", '[]'); //panier vide
}

let nbart = JSON.parse(localStorage.getItem("panier")).length;
let afficherNbart = "(" + nbart + ")";
$('#nbart').html(afficherNbart);

let rafraichireCart = () => {
    $('#nbart').html(afficherNbart);
}

let afficherPageProfil = () => {
    let contenu = `
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src=""><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""></div>
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value=""></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""></div>
                    <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
    `;
    document.getElementById('contenu').innerHTML = contenu;
    
}

let remplirCard = (unCircuit)=> {
    let rep =    ' <div class="col">';
    rep +='<div class="card">';
                 rep +=' <img src="../ressources/images/images_circuits/'+unCircuit.photoc+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unCircuit.nomc+'</h5>';
                 rep +=' <p class="card-text">Description : '+unCircuit.descriptionc+'</p>';
                 rep +=' <p class="card-text">Prix Total : '+unCircuit.prix+'$</p>';
                 rep +=' <a href="#" onClick="detailCircuit(' + unCircuit.idc + ');" class="btn btn-primary"><span style="font-size:18px; color:white;">Détailler le Circuit</span></a>';
                 rep +=' <a href="#" onClick="ajouterPanier('+ unCircuit.idc + ');" class="btn btn-primary"><span style="font-size:18px; color:white;">Ajouter au panier</span></a>';
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
                 rep +=' <a href="#" onClick="ajouterPanier('+ unCircuit.idc + ');" class="btn btn-primary"><span style="font-size:18px; color:white;">Ajouter au panier</span></a>';
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
    rep +='<div class="card-e">';
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
    rep +='<div class="card-j">';
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
    rep +='<div class="card-a">';
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

if (localStorage.getItem("panier") == undefined) {
    localStorage.setItem("panier", '[]'); //panier vide
}


let ajouterPanier = (idCircuit) => {
    panier = JSON.parse(localStorage.getItem("panier"));
    let trouve = panier.find(idc => {
        return idCircuit == idc;
    })
    if(trouve == undefined){
        panier.push(idCircuit);
        localStorage.setItem("panier", JSON.stringify(panier));
        ++nbart;
        afficherNbart = "(" + nbart + ")";
        $('#nbart').html(afficherNbart); //document.getElementById('nbart').innerHTML = afficherNbart;
    }else {
        alert("Article existe déjà dans le panier");
    }
}

let enleverArticle = (btnClose, idArticleEnlever) => {
    let montantArticle;
    if(btnClose.parentNode.previousSibling.nodeType == 3){//Noeud bidon type #text:espace
        montantArticle = parseFloat(btnClose.parentNode.previousSibling.previousSibling.firstChild.nodeValue);
    }else {
        montantArticle = parseFloat(btnClose.parentNode.previousSibling.firstChild.nodeValue);
    }
    let ancienTotal = parseFloat(document.getElementById("totalAchat").innerText); 
    let nouveauTotal = ancienTotal - montantArticle; //Pour mettre à jour la facture
    
    //Enlver l'article du visuel du panier
    let articleEnleverVisuelPanier = btnClose.parentNode.parentNode;
    articleEnleverVisuelPanier.parentNode.remove(articleEnleverVisuelPanier);

    //Mise à jour du localStorage
    panier = JSON.parse(localStorage.getItem("panier"));
    let nouveauPanier = panier.filter(idArticlePanier => {
        return idArticlePanier != idArticleEnlever; 
    })
    if (nouveauPanier.length == panier.length) {
        alert("L'article " + idArticleEnlever + " n'existe pas");
    } else {
        localStorage.setItem("panier", JSON.stringify(nouveauPanier));
        --nbart;
        afficherNbart = "(" + nbart + ")";
        $('#nbart').html(afficherNbart);
        mettreAJourLaFacture(nouveauTotal);
    }
    //document.querySelector("#divRetirer").style.display = 'none';
}

let mettreAJourLaFacture = (nouveauTotal) => {
    document.getElementById("totalAchat").innerText = nouveauTotal.toFixed(2) + "$";
    let montantTaxes = nouveauTotal * TAXES;
    let totalPayer = nouveauTotal + montantTaxes;
    document.getElementById("idTaxes").innerText = montantTaxes.toFixed(2) + "$"; 
    document.getElementById("totalPayer").innerText = totalPayer.toFixed(2) + "$"; 
}

let ajusterTotalAchat = (elemInput, prix, montantActuel) => {
    let ancienMontant;
    let qte = elemInput.value; 
    montantTotalCetCircuit = (qte * prix);
    if(elemInput.parentNode.nextSibling.nodeType == 3){//Node bidon ajouté au DOM
        ancienMontant = parseFloat(elemInput.parentNode.nextSibling.nextSibling.firstChild.nodeValue);
        elemInput.parentNode.nextSibling.nextSibling.firstChild.nodeValue = montantTotalCetCircuit+"$";
    }else {
        ancienMontant = parseFloat(elemInput.parentNode.nextSibling.firstChild.nodeValue);
        elemInput.parentNode.nextSibling.firstChild.nodeValue = montantTotalCetCircuit+"$";
    }
    //Mise-à-jour de la facture
    let ancienTotal = parseFloat(document.getElementById("totalAchat").innerText); 
    let nouveauTotal = (ancienTotal - ancienMontant)+montantTotalCetCircuit; 
    mettreAJourLaFacture(nouveauTotal);
} 

let payer = () => {
    document.getElementById("payer").innerHTML = "Merci pour votre paiement.";
}
let afficherPhoto = (idm) => {
    let contenu = `<div class="row row-cols-4">`;
    
    contenu += `</div>`;
    document.getElementById('contenu').innerHTML = contenu;
}
let afficherPanier = () => {
    let panier = JSON.parse(localStorage.getItem("panier"));
    let nbArt = panier.length;
    let vuePanier = `
        <div class="card">
            <div class="row">
                <div class="col-md-8">
                    <div class="title">
                        <div class="row">
                            <div class="col">
                                <h4><b>Panier d'achats</b></h4>
                            </div>
                            <div class="col align-self-center text-right text-muted">${nbArt} articles</div>
                        </div>
                    </div> 
        `;
    let listeCircuitsAchetes = [];
    panier.forEach(idCircuit => {
        listeCircuitsAchetes.push(listesCircuits.find(unCircuit => unCircuit.idc == idCircuit));
    });
    let totalAchat = 0;
    let montantTotalCetCircuit;
    for (let unCircuit of listeCircuitsAchetes) {
        montantTotalCetCircuit = parseFloat(unCircuit.prix);
        vuePanier += ` 
            <div class="row border-top border-bottom">
                <div class="row align-items-center">
                    <div class="col-2"><img class="img-fluid" src="../ressources/images/images_circuits/${unCircuit.photoc}"></div>
                    <div class="col">
                        <div class="row text-muted">${unCircuit.nomc}</div>
                    </div>
                    <div class="col"> <input type="number" id="qte" name="qte" min="1" max="100" value=1 onChange="ajusterTotalAchat(this,${unCircuit.prix}, ${montantTotalCetCircuit});"></div>
                    <div class="col">${montantTotalCetCircuit}$</div>
                    <div class="col"><div class="close closeBtn" onClick="enleverArticle(this,${unCircuit.idc});">&#10005;</div></div>
                </div>
            </div>
        
        `;
        totalAchat += montantTotalCetCircuit;
    }
    
    let montantTaxes = totalAchat * TAXES;
    let totalPayer = totalAchat + montantTaxes;

    vuePanier += `
            </div>
                    <div class="col-md-4 bg-info text-dark">
                        <div>
                            <h5><b>Facture</b></h5>
                        </div>
                        <hr>
                        <br/>
                        <div class="row">
                            <div class="col" style="padding-left:10;">${nbArt} ARTICLES</div>
                            <div id="totalAchat" class="col text-right">${totalAchat.toFixed(2)}$</div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col" style="padding-left:10;">MONTANT TAXES</div>
                            <div id="idTaxes" class="col text-right">${montantTaxes.toFixed(2)}$</div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col" style="padding-left:10;">MONTANT À PAYER</div>
                            <div id="totalPayer" class="col text-right">${totalPayer.toFixed(2)}$</div>
                        </div> 
                        </br>
                        <button class="btn btn-dark" onclick="payer();">PAYER</button>
                        <span id="payer"></span>
                        <br/> 
                    </div>
                </div>
            </div>
        `;
    $('#contenuPanier').html(vuePanier);
    document.getElementById("payer").innerHTML = "";
    let modalPanier = new bootstrap.Modal(document.getElementById('idModPanier'), {});
    modalPanier.show();
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
                listesCircuits = donnees.listeCircuits;
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
        case "afficherPageProfil"  :
            if(donnees.OK){
                afficherPageProfil();     
            }else{
                console.log(donnees.msg); 
            }
            break;

    }


}