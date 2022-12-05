let chargerCircuitsAJAX = () => {
    $.ajax({
        type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":"listerC"},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){//alert(listeFilms);
            // listeFilms = reponse;
			console.log("mom");
        	montrerVue("listerC", reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}

let chargerMembresAJAX = () => {
    $.ajax({
        type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":"listerMembre"},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){//alert(listeFilms);
            // listeFilms = reponse;
        	montrerVue("listerMembre", reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}

let chargerAJAX = (id, ctraction) => {
    $.ajax({
        type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":ctraction,"input":id},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){//alert(listeFilms);
            // listeFilms = reponse;
        	montrerVue(ctraction, reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}

let requeteAfficherModif = (index,ctraction) => {
	console.log(index);
	console.log(ctraction);
	$.ajax({
        type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":ctraction,"input":index},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){
			console.log("j'ai sorti");
			console.log(reponse);
			montrerVue(ctraction, reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}

let requeteEnregistrer = () => {
	let formCircuit = new FormData(document.getElementById('formEnregCircuit'));
	formCircuit.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : '../../routeAdmin.php',
		data : formCircuit, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
			console.log(reponse.location);
			montrerVue("enregistrer", reponse);
		},
		fail : function (err){
		   
		}
	});
}

let requeteEnregistrerE = () => {
	let formEtape = new FormData(document.getElementById('formEnregEtape'));
	formEtape.append('action','enregistrerE');
	$.ajax({
		type : 'POST',
		url : '../../routeAdmin.php',
		data : formEtape, //$('#formEnreg').serialize()
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

let requeteEnregistrerJ = () => {
	let formJournee = new FormData(document.getElementById('formEnregJournee'));
	formJournee.append('action','enregistrerJ');
	$.ajax({
		type : 'POST',
		url : '../../routeAdmin.php',
		data : formJournee, //$('#formEnreg').serialize()
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

let requeteEnregistrerA = () => {
	let formActivite = new FormData(document.getElementById('formEnregActivite'));
	formActivite.append('action','enregistrerA');
	$.ajax({
		type : 'POST',
		url : '../../routeAdmin.php',
		data : formActivite, //$('#formEnreg').serialize()
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

let requeteModifier = (form,ctraction) => {
	let leform = new FormData(document.getElementById(form));
	leform.append('action',ctraction);
	$.ajax({
		type : 'POST',
		url : '../../routeAdmin.php',
		data : leform, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					montrerVue(ctraction, reponse);
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
		url : '../../routeAdmin.php',
		data : formAdmin, //$('#formEnreg').serialize()
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

let requeteDelete = (id,ctraction) => {
	$.ajax({
        type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":ctraction,"input":id},
        dataType : "json",
        success : function (reponse){
        	montrerVue(ctraction, reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}

let requetteDeleteMultiple = (ctraction) => {
	let listeCheckBoxes = document.getElementsByName("options[]");
	//Vérifier s'il y a au moins une option de cochée;
	let liste=[];
	for(let uneOption of listeCheckBoxes){
		if (uneOption.checked){
			liste.push(uneOption.value); 
		}
	}
	console.log(liste);
	console.log("in");
	$.ajax({
		type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":ctraction,"input":liste},
        dataType : "json",
        success : function (reponse){
        	montrerVue(ctraction, reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}



