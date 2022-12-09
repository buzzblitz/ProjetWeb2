

let chargerCircuitsAJAX = () => {
    $.ajax({
        type : "POST",
        url  : "../../routeMembre.php",
        data : {"action":"lister"},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : (listeCircuits) => {
            // listeFilms = reponse;
        	montrerVue("lister", listeCircuits);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}
let requeteAfficherCircuit = (idc) => {
	$.ajax({
        type : "POST",
        url  : "../../routeMembre.php",
        data : {"action":"charger","input":idc},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){
			montrerVue("charger", reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}


let requeteModifier = () => {
	let formModifier = new FormData(document.getElementById('formEnreg'));
	formModifier.append('action','modifier');
	console.log("salut");
	$.ajax({
		type : 'POST',
		url : '../../routeMembre.php',
		data : formModifier, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					montrerVue("modifier", reponse);
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
	let formMembre = new FormData();
	formMembre.append('action','deconnecter');
	$.ajax({
		type : 'POST',
		url : '../../routeMembre.php',
		data : formMembre, //$('#formEnreg').serialize()
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

	let detailCircuit = (idc) => {
		$.ajax({
			type : "POST",
			url  : "../../routeMembre.php",
			data : {"action":"detailler","input":idc},
			dataType : "json", //text pour voir si bien formé même chose pour xml
			success : function (reponse){
				montrerVue("detailler", reponse);
			},
			fail : (err) => {
				//Décider du message
			}
		})

}

let requeteAfficherProfil = (index) => {
	$.ajax({
        type : "POST",
        url  : "../../routeMembre.php",
        data : {"action":"afficherPageProfil","input":index},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){
			montrerVue("afficherPageProfil", reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}



