<?php
    require_once("../../includes/configbd.inc.php");
    $tab=array();
    $requete = "SELECT * FROM circuits";
    try{
        $listeCircuits=mysqli_query($connexion,$requete);
        $tab['OK']=true;
        $tab['listeCircuits']=array();
        while($ligne=mysqli_fetch_object($listeCircuits)){
            $tab['listeCircuits'][] = $ligne;
        }
    }catch(Exception $e) {
        $tab['OK']=false;
    }finally {
        mysqli_close($connexion);
        echo json_encode($tab);
    }
?>