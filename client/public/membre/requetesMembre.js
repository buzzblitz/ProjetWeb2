

let chargerCircuitsAJAX2 = () => {
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
			data : {"action":"detaillerC","input":idc},
			dataType : "json", //text pour voir si bien formé même chose pour xml
			success : function (reponse){
				montrerVue("detaillerC", reponse);
			},
			fail : (err) => {
				//Décider du message
			}
		})

}

let detailEtape = (ide) => {
	$.ajax({
		type : "POST",
		url  : "../../routeMembre.php",
		data : {"action":"detaillerE","input":ide},
		dataType : "json", //text pour voir si bien formé même chose pour xml
		success : function (reponse){
			montrerVue("detaillerE", reponse);
		},
		fail : (err) => {
			//Décider du message
		}
	})

}

let detailJournee = (idj) => {
	$.ajax({
		type : "POST",
		url  : "../../routeMembre.php",
		data : {"action":"detaillerJ","input":idj},
		dataType : "json", //text pour voir si bien formé même chose pour xml
		success : function (reponse){
			montrerVue("detaillerJ", reponse);
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



