let imagesURL = null;
let provenanceAppel = null;
let listeCircuits = null;
let listeCategories = null;

let remplirCard = unCircuit => {
    let rep = ' <div class="col-sm-3 maCard">'
    rep += '<div class="card">'
    rep +=
        ' <img src="' + imagesURL +
        unCircuit.photoc +
        '"  class="card-img-top img-fluid" alt="...">'
    rep += ' <div class="card-body">'
    rep += ' <h5 class="card-title">' + unCircuit.nomc + '</h5>'
    rep +=
        ' <p class="card-text">' +
        unCircuit.descriptionc.substring(0, 30) +
        '...</p>'
    rep += ' <p class="card-text">' + unCircuit.descriptionc + '$</p>'
    if (provenanceAppel == 'M') {
        rep +=
            ' <a href="#" onClick="ajouterPanier(' + unCircuit.idc + ');"><i class="bi bi-cart-plus panierPlus"></i></a>'
    }
    rep += ' </div>'
    rep += ' </div>'
    rep += ' </div>'
    return rep
}

let listerCircuits = (listeCircuits) => {
    let contenu = `<div class="row">`
    if(listeCircuits.length){
        listeCircuits.forEach(element => {
            contenu += remplirCard(element);
        });
    }
    else{
        console.log("erreur");
    }
    
    //for (let unCircuit of listeCircuits) {
        //contenu += remplirCard({"idc":"1","nomc":"un circuit","photoc":"logo.png","descriptionc":"une description de circuit","etat":"A"})
    //}
    contenu += `</div>`
    $('#contenu').html(contenu) //document.getElementById('contenu').innerHTML=contenu;
}

//allerURL contient le url où se trouve le fichier liste.php
//Provenance si l'Appel provient de index.php ou membres.php
//imagesURL selon la provenance contiendra le bon chemin où se trouve les images des Circuits
let chargerCircuits = (provenance, allerURL) => {
    provenanceAppel = provenance;
    console.log(provenance);
    console.log(allerURL);
    imagesURL = (provenance == 'I') ? "serveur/images_circuits/" : "../../images_circuits/";
    $.ajax({
        type: 'POST',
        url: allerURL,
        dataType: 'json',
        success: reponse => {
            console.log(reponse)
            if (reponse.OK) {
                listeCircuits = reponse.listeCircuits;
                if(provenance == "I" || provenance == "M"){
                    console.log(listeCircuits);
                    listerCircuits(listeCircuits);
                }else {// A-Admin
                    genererPagination(); //À partir de listeCircuits
                }
            }
        },
        fail: e => {
            alert('Problème avec votre requête')
        }
    })
}