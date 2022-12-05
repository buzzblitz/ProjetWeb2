<?php
// Au début de PHP: Déclarer les types dans les paramétres des fonctions
declare (strict_types=1);

require_once(__DIR__."/../../ressources/bd/Connexion.php");
require_once("Journee.php");

class DaoJournee {
    static private $modelJournee = null;
    private $reponse=array();
    private $connexion = null;
	
    private function __construct(){
        
    }
    
// Retourne le singleton du modèle 
	static function  getDaoJournee():DaoJournee {
		if(self::$modelJournee == null){
			self::$modelJournee = new DaoJournee();  
		}
		return self::$modelJournee;
	}
	
	function MdlJ_Enregistrer(Journee $journee):string {
        //global $reponse;
       
        $connexion =  Connexion::getConnexion();
        $requette="INSERT INTO journees VALUES(0,?,?,?)";
        try{
            
            $donnees = [ $journee->getIde(), $journee->getDescriptionj(), $journee->getDatej()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $idj = $connexion->lastInsertId();
            $this->reponse['idj'] = $idj;
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "Journee bien enregistre";
            $this->reponse['location'] = "admin.php";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Problème pour enregistrer la journee";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }

    function MdlJ_get($idj):string {
        //global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM journees WHERE idj=?";
        try{
            $donnees = [$idj];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['journee'] = $stmt->fetch();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des journeees";
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
	
    function MdlJ_getAll($ide):string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM journees WHERE ide = ?";
        try{
            $donnees = [$ide];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listeJournees'] = array();
            $reponse['listeJournees'] = $stmt->fetchAll();
            $reponse['index'] = $ide;
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des journees";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }

    function MdlJ_update(Journee $journee){
        global $reponse;
        $connexion =  Connexion::getConnexion();
        $requette="UPDATE journeees SET ide=?,datej=?,descriptionj=? WHERE idj=?";
        try{
            $donnees = [$journee->getIde(),$journee->getDatej(),$journee->getDescriptionj(),$journee->getIdj()];
            $stmt = $connexion->prepare($requette);
	        $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "Réussite de la modification du journee";
            $reponse['location'] = "admin.php";
            $reponse['index'] = $journee->getIde();
        }catch (Exception $e){
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour modifier le journee";
        }finally {
            unset($connexion);
            return json_encode($reponse);
        }
	    
    }

    function mdlJ_remove($idj){
        global $reponse;
        $connexion =  Connexion::getConnexion();
        $requette="DELETE FROM journees WHERE idj=?";
        try{
            $donnees = [$idj];
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