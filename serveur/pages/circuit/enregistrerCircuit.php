<?php 
    //Établir connexion à la BD
    require_once("../../includes/bdconfig.inc.php");
    $msg="Membre+bien+enregistré.";
    //Recupérer les données du formulaire
    //donner circuit
    $nomc = $_POST['nomc'];
    $img = $_POST['imgc'];
    $descc = $_POST['descc'];
    $categ = $_POST['categ'];

    //donner etape
    $nome = $_POST['nome'];
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

    $dossier="../../membre/photos/";
	$imagec="avatar.jpg";
	if($_FILES['imgc']['tmp_name']!==""){
		$nomImage=sha1($nomc.time());
		//Upload de la photo
		$tmp = $_FILES['imgc']['tmp_name'];
		$fichier= $_FILES['imgc']['name'];
		$extension=strrchr($fichier,'.');
		@move_uploaded_file($tmp,$dossier.$nomImage.$extension);
		// Enlever le fichier temporaire chargé
		@unlink($tmp); //effacer le fichier temporaire
		$imagec=$nomImage.$extension;
	}

	$imagee="avatar.jpg";
    if($_FILES['imge']['tmp_name']!==""){
		$nomImage=sha1($nome.time());
		//Upload de la photo
		$tmp = $_FILES['imge']['tmp_name'];
		$fichier= $_FILES['imge']['name'];
		$extension=strrchr($fichier,'.');
		@move_uploaded_file($tmp,$dossier.$nomImage.$extension);
		// Enlever le fichier temporaire chargé
		@unlink($tmp); //effacer le fichier temporaire
		$imagee=$nomImage.$extension;
	}

    
	try{
		$requete = "INSERT INTO circuits VAlUES (0,?,?,?,?)";
        $stmt = $connexion->prepare($requete);
        $stmt->bind_param("ssss", $nomc,$imagec,$descc,$categ);
        $stmt->execute();
        $idc = $connexion->insert_id;

        $requete = "INSERT INTO etapes VAlUES (0,?,?,?,?,?,?,?)";
        $stmt = $connexion->prepare($requete);
        $stmt->bind_param("issssss", $idc,$nome,$imagee,$desce,$dated,$datef,$lieud);
        $stmt->execute();
        $ide = $connexion->insert_id;

        $requete = "INSERT INTO journees VAlUES (0,?,?,?)";
        $stmt = $connexion->prepare($requete);
        $stmt->bind_param("iss", $ide,$datej,$autre);
        $stmt->execute();
        $idj = $connexion->insert_id;

        $requete = "INSERT INTO activites VAlUES (0,?,?,?,?,?)";
        $stmt = $connexion->prepare($requete);
        $stmt->bind_param("isiis", $idj,$noma,$heuredebut,$heurefin,$descea);
        $stmt->execute();

	} catch(Exception $e){
		//Retourner le message voulu
        $msg="Problème+pour+enregistré+le+membre.";
	}finally {
		mysqli_close($connexion);
        header('Location: ../pages/membre.php');
    }
?>