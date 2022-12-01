let chargerCircuitsAJAX = () => {
    $.ajax({
        type : "POST",
        url  : "routeAdmin.php",
        data : {"action":"lister"},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : (listeFilms) => {//alert(listeFilms);
            // listeFilms = reponse;
        	montrerVue("lister", listeFilms);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}

let requeteEnregistrer = () => {
	let formFilm = new FormData(document.getElementById('formEnreg'));
	formFilm.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'routes.php',
		data : formFilm, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					montrerVue("enregistrer", reponse);
		},
		fail : function (err){
		   
		}
	});
}
// Consulter pour upload de fichiers
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const posterFormAvecFETCH = async ( url, formData ) => {
	const optionsFetch = {
		method: "POST",
		body: formData
	}
	const reponse = await fetch(url, optionsFetch);
	if (!reponse.ok) {
		const messageErreur = await reponse.text();
		throw new Error(messageErreur);
	}
	return reponse.json();
}

const chargerCircuitsFETCH = async () => {
	const url = "../controlleur/controleurAdmin.php";
	const formData = new FormData();
	formData.append('action','lister');
	listeCircuits = await posterFormAvecFETCH( url, formData);
	alert(listeCircuits.msg);
	montrerVue("lister", listeFilms);
}

let requeteDeconnexion = () => {
	let formAdmin = new FormData();
	formAdmin.append('action','deconnecter');
	$.ajax({
		type : 'POST',
		url : 'routeAdmin.php',
		data : formHome, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					montrerVue("deconnexion", reponse);
		},
		fail : function (err){
		   
		}
	});
}



