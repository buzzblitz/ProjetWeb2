<?php
// Au début de PHP: Déclarer les types dans les paramétres des fonctions
declare (strict_types=1);

require_once(__DIR__."/../../ressources/bd/Connexion.php");
require_once("Circuit.php");

class DaoCircuit {
    static private $modelCircuit = null;
    private $reponse=array();
    private $connexion = null;
	
    private function __construct(){
        
    }
    
// Retourne le singleton du modèle 
	static function  getDaoCircuit():DaoCircuit {
		if(self::$modelCircuit == null){
			self::$modelCircuit = new DaoCircuit();  
		}
		return self::$modelCircuit;
	}
	
	function MdlC_Enregistrer(Circuit $circuit):string {
        //global $reponse;
       
        $connexion =  Connexion::getConnexion();
        $requette="INSERT INTO circuits VALUES(0,?,?,?,?)";
        try{
            
            $donnees = [ $circuit->getNom(), $circuit->getPhoto(), $circuit->getDescription(), $circuit->getEtat()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "Circuit bien enregistre";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour enregistrer le circuit";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }
	
    function MdlC_getAll():string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM circuits";
        try{
            $stmt = $connexion->prepare($requette);
            $stmt->execute();
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listeCircuits'] = array();
            $reponse['listeCircuits'] = $stmt->fetchAll();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des circuits";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }

    function MdlC_update(Circuit $circuit){
        global $reponse;
        $connexion =  Connexion::getConnexion();
        $requette="UPDATE circuits SET nomc=?,photoc=?,descriptionc=?,etat=? WHERE idc=?";
        try{
            $stmt = $connexion->prepare($requette);
	        $stmt->bind_param("ssssi",$circuit->getNom(), $circuit->getPhoto(), $circuit->getDescription(),$circuit->getEtat(), $circuit->getIdc());
	        $stmt->execute();
            $reponse['OK'] = true;
            $reponse['msg'] = "Réussite de la modification du circuit";
        }catch (Exception $e){
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour modifier le circuit";
        }finally {
            unset($connexion);
            return json_encode($reponse);
        }
	    
    }
}
?>