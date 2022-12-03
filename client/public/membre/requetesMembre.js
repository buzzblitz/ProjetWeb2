
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
