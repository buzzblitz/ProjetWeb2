<?php
// Au début de PHP: Déclarer les types dans les paramétres des fonctions
declare (strict_types=1);

require_once(__DIR__."/../../ressources/bd/Connexion.php");
require_once("ConnexionM.php");

class DaoConnexionM {
    static private $modelConnexionM = null;
    private $reponse=array();
    private $connexion = null;
	
    private function __construct(){
        
    }
    
// Retourne le singleton du modèle 
	static function  getDaoConnexionM():DaoConnexionM {
		if(self::$modelConnexionM == null){
			self::$modelConnexionM = new DaoConnexionM();  
		}
		return self::$modelConnexionM;
	}
	
	function MdlCM_Enregistrer(ConnexionM $connexionM):string {
        //global $reponse;
       
        $connexion =  Connexion::getConnexion();
        $requette="INSERT INTO connexion VALUES(?,?,?,?,?)";
        try{
            
            $donnees = [ $connexionM->getIdm(), $connexionM->getCourriel(), $connexionM->getPass(), $connexionM->getEtat(), $connexionM->getRole()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "ConnexionM bien enregistre";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour enregistrer le connexionM";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }
	
    function MdlCM_getAll():string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM connexion";
        try{
            $stmt = $connexion->prepare($requette);
            $stmt->execute();
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listeConnexionM'] = array();
            $reponse['listeConnexionM'] = $stmt->fetchAll();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des connexionM";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
}
?>