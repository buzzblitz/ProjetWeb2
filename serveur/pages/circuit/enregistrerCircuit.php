<?php 
    //Établir connexion à la BD
    require_once("../includes/bdconfig.inc.php");
    $msg="Membre+bien+enregistré.";
    //Recupérer les données du formulaire
    //donner circuit
    $nomc = $_POST['nomc'];
    $img = $_POST['imgc'];
    $descc = $_POST['descc'];
    $categ = $_POST['categ'];

    //donner etape
    $etape = $_POST['etape'];
    $imge = $_POST['imge'];
    $desce = $_POST['desce'];
    $dated = $_POST['dated'];
    $datef = $_POST['datef'];
    $lieud = $_POST['lieud'];


    //donner journee
    $datej = $_POST['datej'];
    $autre = $_POST['autre'];

    //donner activiter
    $noma = $_POST['noma'];
    $heuredebut = $_POST['heuredebut'];
    $heurefin = $_POST['heurefin'];
    $descea = $_POST['descea'];

    $dossier="photos/";
	$image="avatar.jpg";
	if($_FILES['photo']['tmp_name']!==""){
		$nomImage=sha1($nom.time());
		//Upload de la photo
		$tmp = $_FILES['photo']['tmp_name'];
		$fichier= $_FILES['photo']['name'];
		$extension=strrchr($fichier,'.');
		@move_uploaded_file($tmp,$dossier.$nomImage.$extension);
		// Enlever le fichier temporaire chargé
		@unlink($tmp); //effacer le fichier temporaire
		$image=$nomImage.$extension;
	}
	try{
		$requete = "INSERT INTO membres VAlUES (0,?,?,?,?,?,?)";
        $stmt = $connexion->prepare($requete);
        $stmt->bind_param("ssssss", $prenom,$nom,$courriel,$sexe,$daten,$image);
        $stmt->execute();
        $idm = $connexion->insert_id;

        $requete = "INSERT INTO connexion VAlUES (?,?,?,'A','M')";
        $stmt = $connexion->prepare($requete);
        $stmt->bind_param("iss", $idm,$courriel,$pass);
        $stmt->execute();
	} catch(Exception $e){
		//Retourner le message voulu
        $msg="Problème+pour+enregistré+le+membre.";
	}finally {
		mysqli_close($connexion);
        header('Location: ../pages/membre.php');
    }
?>