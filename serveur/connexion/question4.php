<?php
    session_start();
    //Établir connexion à la BD
    require_once("../includes/bdconfig.inc.php");

    function  obtenirPhotoMembre($idm){
        global $connexion;
        $requete = "SELECT photo FROM membres WHERE idm = ?";
        $stmt = $connexion->prepare($requete);
        $stmt->bind_param("i", $idm);
        $stmt->execute();
        $result = $stmt->get_result();
        $ligne = $result->fetch_object();
        return $ligne->photo;
    }
    //Recupérer les données du formulaire
    $courriel = $_POST['courrielc'];
    $pass = $_POST['passc'];

    $requete = "SELECT * FROM connexion WHERE courriel = ? AND pass = ?";
    $stmt = $connexion->prepare($requete);
    $stmt->bind_param("ss", $courriel,$pass);
    $stmt->execute();
    $result = $stmt->get_result();
	if(!$ligne = $result->fetch_object()){//Si pas trouvé
        mysqli_close($connexion);
        header('Location: ../../index.php?msg=Problème+avec+votre+compte.+Contactez+l\'administrateur');
        exit;
    }
    $idm = $ligne->idm;
    if($ligne->etat == "A"){
        $_SESSION['courriel'] = $courriel;
        $_SESSION['role'] = $ligne->role;
        if($ligne->role == "M"){
            $photo = obtenirPhotoMembre($idm);
            $_SESSION['photo'] = $photo;
            header('Location: ../../client/pages/membre.php');
            exit;
        }else  if($ligne->role == "A"){
            header('Location: ../../client/pages/admin.php');
            exit;
        }
    }
    else {
        header('Location: ../../index.php?msg=Problème+avec+votre+compte,+contactez+l\'administrateur');
        exit;
    }
?>