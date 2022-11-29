let contenu;
let deconnecter = () => {
    //fetch('serveur/pages/deconnecter.php').then(alert("FINI"));
    document.getElementById('dc').submit();
}

let validerFormEnreg = () => {
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    if (pass === cpass) {
        return true;
    } else {
        return false;
    }
}

function rendreVisible(elem){
	document.getElementById(elem).style.display='block';
}

function rendreInvisible(elem){
	document.getElementById(elem).style.display='none';
}

function lister(){
	document.getElementById('formLister').submit();
}

function validerNum(elem){
	var num=document.getElementById(elem).value;
	var numRegExp=new RegExp("^[0-9]{1,4}$");
	if(num!="" && numRegExp.test(num))
		return true;
	return false;
}
//TODO edit this shit
function valider(){
	var num=document.getElementById('num').value;
	var titre=document.getElementById('titre').value;
	var duree=document.getElementById('duree').value;
	var res=document.getElementById('res').value;
	var numRegExp=new RegExp("^[0-9]{1,4}$");
	if(num!="" && titre!="" && duree!="" && res!="")
		if(numRegExp.test(num))
			return true;
	return false;
}
//TODO edit this shit
function jouerBande(url){
	document.getElementById('ifba').src=url;
	$('#baModal').modal('show');
}


//TODO edit this shit
function editerCircuit(unCircuit){
	document.getElementById('ida_m').value=unCircuit.ida;
	document.getElementById('nom_m').value=unCircuit.nomCircuit;
	document.getElementById('desc_m').value=unCircuit.description;
	document.getElementById('categ_m').value=unCircuit.categorie;
	document.getElementById('qted_m').value=unCircuit.qteinventaire;
	document.getElementById('seuil_m').value=unCircuit.seuil;
	document.getElementById('prix_m').value=unCircuit.prix;
	$('#modalEditerCircuits').modal('show');
}

let idCircuitSupprimer;

function supprimerCircuit(idc){
	idCircuitSupprimer = idc;
	$('#supprimerCircuitModal').modal('show');
}

function supprimer(){
     let formEnlever = document.getElementById('formEnlever');
	 document.getElementById('idc').value = idCircuitSupprimer;
	 formEnlever.submit();
}

function enleverMultiplesCircuits(){                  
	let listeCheckBoxes = document.getElementsByName("options[]");
	//Vérifier s'il y a au moins une option de cochée;
	let listeCircuits="";
	for(let uneOption of  listeCheckBoxes){
		if (uneOption.checked){
			listeCircuits+=(uneOption.value+";"); //9;13;50;
		}
	}
	if(listeCircuits.length > 0){
		listeCircuits=listeCircuits.substring(0,listeCircuits.length-1);//Enlever dernier ;
		document.getElementById("idcM").value = listeCircuits;
		document.getElementById("formEnleverMultiples").submit();
	}
}
//Cas d'un button
/*
function valider(){
	var formEnreg=document.getElementById('formEnreg');
	var num=document.getElementById('num').value;
	var titre=document.getElementById('titre').value;
	var duree=document.getElementById('duree').value;
	var res=document.getElementById('res').value;
	var numRegExp=new RegExp("^[0-9]{1,4}$");
	if(num!="" && titre!="" && duree!="" && res!="")
		if(numRegExp.test(num))
			formEnreg.submit();
}
*/

$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});

let initialiser = (msg) =>{
	if(msg.length > 0){
		let textToast = document.getElementById("textToast");
		let toastElList = [].slice.call(document.querySelectorAll('.toast'))
		let toastList = toastElList.map(function (toastEl) {
			return new bootstrap.Toast(toastEl)
		})
		textToast.innerHTML = msg;
		toastList[0].show();
	}
}

//pour le paginator


var $pagination,
totalRecords = 0,
records = [],
displayRecords = [],
recPerPage = 4,
page = 1,
totalPages = 0;

function genererPagination(){
	$pagination = $('#pagination');
	records = listeCircuits;
	//alert(JSON.stringify(records));
	// console.log(records);
	totalRecords = records.length;
	totalPages = Math.ceil(totalRecords / recPerPage);
	apply_pagination();
}

function generate_table() {
    let tr;
    $('#emp_body').html('');
	let rep="";
    for (let unCircuit of displayRecords) { 
		rep+=`
			<tr>
				<td>
					<span class="custom-checkbox">
						<input type="checkbox" id="opt" value="${unCircuit.idc}" name="options[]">
						<label for="opt"></label>
					</span>
				</td>	
				<td>${unCircuit.idc}</td>
				<td><img class='img-fluid'  width='60' height='60' src='../ressources/images/images_circuits/${unCircuit.photoc}'></td>
				<td>${unCircuit.etat}</td>
				<td>${unCircuit.descriptionc }</td>			
				<td>
					<a href="#" onClick='editerCircuit(`;
				rep+=JSON.stringify(unCircuit);
				rep+=`)' class="edit" data-bs-toggle="modal"><i class="bi bi-pencil" data-toggle="tooltip" title="Modifier"></i></a>
					<a href="#" onClick='supprimerCircuit(${unCircuit.idc})' class="delete" data-toggle="modal"><i class="bi bi-trash3" data-toggle="tooltip" title="Enlever"></i></a>
				</td>
			</tr>`;
    }
	$('#emp_body').html(rep);
}	

function apply_pagination() {
    $pagination.twbsPagination({
          totalPages: totalPages,
          visiblePages: 6,
          onPageClick: function (event, page) {
                displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
                endRec = (displayRecordsIndex) + recPerPage;
               
                displayRecords = records.slice(displayRecordsIndex, endRec);
                generate_table();
          }
    });
}