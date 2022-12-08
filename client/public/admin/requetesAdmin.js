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
	console.log("in");
	$.ajax({
        type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":ctraction,"input":index},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){
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
	$('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
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
			montrerVue("enregistrer", reponse);
		},
		fail : function (err){
		   
		}
	});
}

let chercherCircuit = () => {
	let formRechercherCircuit = new FormData(document.getElementById('formRechercherCircuit'));
	formRechercherCircuit.append('action','checherCircuit');
	$('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
	$.ajax({
		type : 'POST',
		url : '../../routeAdmin.php',
		data : formRechercherCircuit, //$('#formEnreg').serialize()
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
        dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
			//console.log(salut);
			montrerVue("checherCircuit", reponse);
		},
		fail : function (err){
		   
		}
	});
}

let requeteEnregistrerE = () => {
	let formEtape = new FormData(document.getElementById('formEnregEtape'));
	formEtape.append('action','enregistrerE');
	$('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
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
					montrerVue("enregistrerE", reponse);
		},
		fail : function (err){
		   
		}
	});
}

let requeteEnregistrerJ = () => {
	let formJournee = new FormData(document.getElementById('formEnregJournee'));
	formJournee.append('action','enregistrerJ');
	$('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
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
					montrerVue("enregistrerJ", reponse);
		},
		fail : function (err){
		   
		}
	});
}

let requeteEnregistrerA = () => {
	let formActivite = new FormData(document.getElementById('formEnregActivite'));
	formActivite.append('action','enregistrerA');
	$('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
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
					montrerVue("enregistrerA", reponse);
		},
		fail : function (err){
		   
		}
	});
}

let requeteModifier = (form,ctraction) => {
	let leform = new FormData(document.getElementById(form));
	leform.append('action',ctraction);
	$('.modal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
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
			console.log("out");
			console.log(reponse);
        	montrerVue(ctraction, reponse);
        },
        fail : (err) => {
            //Décider du message
        }
    })
}

let requeteGetIdc = (ide) =>{
	$.ajax({
        type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":"chargerE","input":ide},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){
			return reponse.etape.idc;
        },
        fail : (err) => {
            //Décider du message
        }
    })
}

let requeteGetIde = (idj) =>{
	$.ajax({
        type : "POST",
        url  : "../../routeAdmin.php",
        data : {"action":"chargerJ","input":idj},
        dataType : "json", //text pour voir si bien formé même chose pour xml
        success : function (reponse){
			return reponse.journee.ide
        },
        fail : (err) => {
            //Décider du message
        }
    })
}



