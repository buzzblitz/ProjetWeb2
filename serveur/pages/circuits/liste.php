<?php
    require_once("../../includes/configbd.inc.php");
    $tab=array();
    $requete = "SELECT * FROM circuits";
    try{
        $listeCircuit=mysqli_query($connexion,$requete);
        $tab['OK']=true;
        $tab['listeCircuit']=array();
        while($ligne=mysqli_fetch_object($listeCircuit)){
            $tab['listeCircuit'][] = $ligne;
        }
    }catch(Exception $e) {
        $tab['OK']=false;
    }finally {
        mysqli_close($connexion);
        echo json_encode($tab);
    }
?>