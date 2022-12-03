<?php
// Au début de PHP: Déclarer les types dans les paramétres des fonctions
declare (strict_types=1);

require_once(__DIR__."/../../ressources/bd/Connexion.php");
require_once("Activite.php");

class DaoActivite {
    static private $modelActivite = null;
    private $reponse=array();
    private $connexion = null;
	
    private function __construct(){
        
    }
    
// Retourne le singleton du modèle 
	static function  getDaoActivite():DaoActivite {
		if(self::$modelActivite == null){
			self::$modelActivite = new DaoActivite();  
		}
		return self::$modelActivite;
	}
	
	function MdlA_Enregistrer(Activite $activite):string {
        //global $reponse;
       
        $connexion =  Connexion::getConnexion();
        $requette="INSERT INTO activites VALUES(0,?,?,?,?,?)";
        try{
            
            $donnees = [ $activite->getIdj(), $activite->getNom(), $activite->getTempsDebut(), $activite->getTempsFin(), $activite->getDescriptiona()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "Activite bien enregistre";
            $this->reponse['location'] = "admin.php";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour enregistrer le activite";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }
    function MdlA_get($ida):string {
        //global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM activites WHERE ida=?";
        try{
            $donnees = [$ida];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['etape'] = $stmt->fetch();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des activites";
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
	
    function MdlA_getAll():string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM activites";
        try{
            $stmt = $connexion->prepare($requette);
            $stmt->execute();
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listeActivites'] = array();
            $reponse['listeActivites'] = $stmt->fetchAll();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des activites";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
}
?>