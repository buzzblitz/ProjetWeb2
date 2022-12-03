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
	
    function MdlE_getAll($index):string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM etapes WHERE idc =" + $index;
        try{
            $stmt = $connexion->prepare((string)$requette);
            $stmt->execute();
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listeEtapes'] = array();
            $reponse['listeEtapes'] = $stmt->fetchAll();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des etapes";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
}
?>