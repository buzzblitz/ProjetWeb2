let chargerCircuitsAJAX3 = () => {
    $.ajax({
        type : "POST",
        url  : "routeHome.php",
        data : {"action":"lister"},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : (listeCircuits) => {//alert(listeFilms);
            // listeFilms = reponse;
        	montrerVue("lister", listeCircuits);
        },
        fail : (err) => {
            //Décider du message
        }
    });
}

let requeteEnregistrer = () => {
	let formHome = new FormData(document.getElementById('formEnreg'));
	formHome.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'routeHome.php',
		data : formHome, //$('#formEnreg').serialize()
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

let requeteConnexion = () => {
	let formHome = new FormData(document.getElementById('formConnexion'));
	formHome.append('action','connexion');
	$.ajax({
		type : 'POST',
		url : 'routeHome.php',
		data : formHome, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					montrerVue("connexion", reponse);
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

const chargerFilmsFETCH = async () => {
	const url = "serveur/film/controleurFilm.php";
	const formData = new FormData();
	formData.append('action','lister');
	listeFilms = await posterFormAvecFETCH( url, formData);
	alert(listeFilms.msg);
	//montrerVue("lister", listeFilms);
}