<?php
    require_once("../../ressources/bd/configbd.inc.php");
    $idCircuit=$_POST['idc'];
    $requete="SELECT * FROM circuits WHERE idc=?";
    $stmt = $connexion->prepare($requete);
    $stmt->bind_param("i", $idCircuit);
    $stmt->execute();
    $result = $stmt->get_result();
    if(!$ligne = $result->fetch_object()){
        mysqli_close($connexion);
        header('Location: ../admin/admin.php?msg=Circuit+est+introuvable');
        exit;
    }
    $image=$ligne->imageart;
    if($image!="avatar.png"){
        $rmImg='../../ressources/images/images_circuits/'.$image;
        $tabFichiers = glob('../../ressources/images/images_circuits/*');
        //print_r($tabFichiers);
        //parcourir les fichier
        foreach($tabFichiers as $fichier){
            if(is_file($fichier) && $fichier==trim($rmImg)) {
            // enlever le fichier
            unlink($fichier);
            break;
            //
            }
        }
    }
    $requete="DELETE FROM circuits WHERE idc=?";
    $stmt = $connexion->prepare($requete);
    $stmt->bind_param("i", $idCircuit);
    $stmt->execute();
    mysqli_close($connexion);
    header('Location: ../../vue/admin.php?msg=Circuit+a+été+enlevé');
    exit;
?>