<?php
// Au début de PHP: Déclarer les types dans les paramétres des fonctions
declare (strict_types=1);

require_once(__DIR__."/../../ressources/bd/connexion.php");
require_once("Etape.php");

class DaoEtape {
    static private $modelEtape = null;
    private $reponse=array();
    private $connexion = null;
	
    private function __construct(){
        
    }
    
// Retourne le singleton du modèle 
	static function  getDaoEtape():DaoEtape {
		if(self::$modelEtape == null){
			self::$modelEtape = new DaoEtape();  
		}
		return self::$modelEtape;
	}
	
	function MdlE_Enregistrer(Etape $etape):string {
        //global $reponse;
        $connexion =  Connexion::getConnexion();
        $requette="INSERT INTO etapes VALUES(0,?,?,?,?,?,?,?)";
        try{
            $donnees = [ $etape->getIdc(), $etape->getNom(), $etape->getPhotoe(), $etape->getDescriptione(), $etape->getDebut(), $etape->getFin(), $etape->getLieurencontre()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $ide = $connexion->lastInsertId();
            $this->reponse['ide'] = $ide;
            $this->reponse['index'] = $etape->getIdc();
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "Etape bien enregistre";
            $this->reponse['location'] = "admin.php";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour enregistrer le etape";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }
    function MdlE_get($ide):string {
        //global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM etapes WHERE ide=?";
        try{
            $donnees = [$ide];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['etape'] = $stmt->fetch();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des etapes";
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
	
    function MdlE_getAll($index):string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM etapes WHERE idc =?";
        try{
            $donnees = [$index];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listeEtapes'] = array();
            $reponse['listeEtapes'] = $stmt->fetchAll();
            $reponse['index'] = $index;
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des etapes";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }

    function MdlE_update(Etape $etape){
        global $reponse;
        $connexion =  Connexion::getConnexion();
        $requette="UPDATE etapes SET idc=?,nome=?,photoe=?,descriptione=?,debut=?,fin=?,lieurencontre=? WHERE ide=?";
        try{
            $donnees = [$etape->getIdc(),$etape->getNom(),$etape->getPhotoe(),$etape->getDescriptione(),$etape->getDebut(),$etape->getFin(),$etape->getLieurencontre(),$etape->getIde()];
            $stmt = $connexion->prepare($requette);
	        $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "Réussite de la modification du etape";
            $reponse['location'] = "admin.php";
            $reponse['index'] = $etape->getIdc();
        }catch (Exception $e){
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour modifier le etape";
        }finally {
            unset($connexion);
            return json_encode($reponse);
        }
	    
    }

    function mdlE_remove($ide){
        global $reponse;
        $connexion =  Connexion::getConnexion();
        //$requetteId = "SELECT idc FROM etapes WHERE ide=?";
        $requettePhoto="SELECT photoe FROM etapes WHERE ide=?";
        $requette="DELETE FROM etapes WHERE ide=?";
        try{
            $donnees = [$ide];
            $stmt = $connexion->prepare($requettePhoto);
            $stmt->execute($donnees);
            $tmp = $stmt->fetch();
            $reponse['result'] = $tmp;
            $column = $tmp[0];
            $path = "serveur/ressources/images/images_circuits/" . $column;
            unlink($path);
            //$stmt = $connexion->prepare($requetteId);
            //$stmt->execute($donnees);
            //$result = $stmt->fetch();
            //$reponse['index'] = $result;
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "Réussite de la supression de l'etape";
        }catch (Exception $e){
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour supprimer l'etape";
        }finally {
            unset($connexion);
            return json_encode($reponse);
        }
    }


}
?>