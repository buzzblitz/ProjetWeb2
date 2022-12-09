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

let afficherPageProfil = (membre,connexion) => {

    let contenu = `
    <div class="modal fade" id="enregModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modifier membre</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form id="formEnreg" method="POST" enctype="multipart/form-data" class="row g-3">
                <div class="col-md-6">
                    <input type='text' class='form-control' id='idm' name='idm' value='`+membre.idm+`' readonly hidden>
                    <label for="prenom" class="form-label">Prénom</label>
                    <input type="text" class="form-control is-valid" id="prenom" name="prenom" value="`+membre.prenom+`" required>
                </div>
                <div class="col-md-6">
                    <label for="nom" class="form-label">Nom</label>
                    <input type="text" class="form-control is-valid" id="nom" name="nom" value="`+ membre.nom +`" required>
                </div>
                <div class="col-md-12">
                    <label for="courriel" class="form-label">Courriel</label>
                    <input type="email" class="form-control is-valid" id="courriel" name="courriel"  value="`+ membre.courriel +`" readonly>
                </div>
                <div class="col-md-6">
                    <label for="pass" class="form-label">Nouveau Mot de passe</label>
                    <input type='text' class='form-control' id='passOriginal' name='passOriginal' value='`+connexion.pass+`' readonly hidden>
                    <input type="password" class="form-control is-valid" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}$" id="pass" name="pass" required>
                </div>
                <div class="col-md-6">
                    <label for="cpass" class="form-label">Confirmer du nouveau mot de passe</label>
                    <input type="password" class="form-control is-valid" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}$" id="cpass" name="cpass" required>
                    <span id="msgPass"></span>
                </div>
                <div class="col-md-6 id_sexe">
                    <label for="sexe" class="form-label">Sexe</label>
                    <select class="form-select" id="sexe" name="sexe" aria-describedby="validationServer04Feedback">
                        <option selected disabled value="">Choisir</option>
                        <option value="F">Féminin</option>
                        <option value="M">Masculin</option>
                        <option value="A">Autres</option>
                    </select>
                </div>
                <div class="col-md-12">
                <label for="photom" class="form-label">Photo actuel</label>
                <input type='text' class='form-control' id='photomcold' name='photomcold' value='`+membre.photom+`' readonly hidden>
                <img class='img-fluid'  width='60' height='60' id="phototmp" src='../ressources/images/images_membres/` + membre.photom + `'>
                </div>
                <div class="col-md-12">
                    <label for="photom" class="form-label">Photo</label>
                    <input type="file" class="form-control is-valid" id="photom" name="photom">
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="button" onclick="requeteModifier();">Enregistrer</button>
                </div>
            </form>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
    `;
    document.getElementById('contenu').innerHTML = contenu;
    $("div.id_sexe select").val(membre.sexe).change();
    $('#enregModal').modal('show');
    
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

let detaillerC = (listeEtapes) => {
    let contenu = ``;
    for(let unEtape of listeEtapes){
        contenu+= carteEtape(unEtape);
    }
    document.getElementById('contenu').innerHTML = contenu;
}

let detaillerE = (listeJournees) => {
    let contenu = ``;
        for(let uneJournee of listeJournees) {
            contenu+= carteJournee(uneJournee);
        }
    document.getElementById('contenu').innerHTML = contenu;
}

let detaillerJ = (listeActivities) => {
    let contenu = ``;
            for(let uneActivite of listeActivities) {
                contenu+= carteActivite(uneActivite);
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
                 rep +=' <img src="../ressources/images/images_etapes/'+unEtape.photoe+'" class="card-img-top tailleImg" alt="...">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+unEtape.nome+'</h5>';
                 rep +=' <p class="card-text">Description : '+unEtape.descriptione+'</p>';
                 rep +=' <p class="card-text">Debut : '+unEtape.debut+'</p>';
                 rep +=' <p class="card-text">Fin : '+unEtape.fin+'</p>';
                 rep +=' <p class="card-text">Lieu de rencontre : '+unEtape.lieurencontre+'</p>';
                 rep +=' <a href="#" onClick="detailEtape(' + unEtape.ide + ');" class="btn btn-primary"><span style="font-size:18px; color:white;">Détailler Étape</span></a>';
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
                 rep +=' <a href="#" onClick="detailJournee(' + uneJournee.idj + ');" class="btn btn-primary"><span style="font-size:18px; color:white;">Détailler la Journee</span></a>';
                 rep +=' </div>';
                 rep +=' </div>';
                 rep +=' </div>';
        return rep;
}

let carteActivite = (unActivite) => {
    let rep =    ' <div class="col">';
    rep +='<div class="card-a">';
                 rep +=' <div class="card-body">';
                 rep +=' <h5 class="card-title">'+ unActivite.noma+'</h5>';
                 rep +=' <p class="card-text">Temps Debut : '+ unActivite.tempsdebut+'</p>';
                 rep +=' <p class="card-text">Temps Fin : '+ unActivite.tempsfin+'</p>';
                 rep +=' <p class="card-text">Description : '+ unActivite.descriptiona+'</p>';
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

let ajusterTotalAchat = (elemInput, prix) => {
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
    localStorage.removeItem("panier");
    window.location.reload();
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
                console.log(donnees.msg);
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
                listeCircuits = donnees.listeCircuits;
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
        case "detaillerC"  :
                if(donnees.OK){
                    detaillerC(donnees.listeEtapes);     
                }else{
                    console.log(donnees.msg); 
                }
                break;
        case "detaillerE"  :
                    if(donnees.OK){
                        detaillerE(donnees.listeJournees);     
                    }else{
                        console.log(donnees.msg); 
                    }
                    break;
        case "detaillerJ"  :
                if(donnees.OK){
                    detaillerJ(donnees.listeActivites);     
                }else{
                    console.log(donnees.msg); 
                }
                break;
        case "afficherPageProfil"  :
            if(donnees.OK){
                afficherPageProfil(donnees.membre, donnees.connexion);     
            }else{
                console.log(donnees.msg); 
            }
            break;

    }


}