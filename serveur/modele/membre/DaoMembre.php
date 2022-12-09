<?php
// Au début de PHP: Déclarer les types dans les paramétres des fonctions
declare (strict_types=1);

require_once(__DIR__."/../../ressources/bd/Connexion.php");
require_once("Membre.php");

class DaoMembre {
    static private $modelMembre = null;
    private $reponse=array();
    private $connexion = null;
	
    private function __construct(){
        
    }
    
// Retourne le singleton du modèle 
	static function  getDaoMembre():DaoMembre {
		if(self::$modelMembre == null){
			self::$modelMembre = new DaoMembre();  
		}
		return self::$modelMembre;
	}
	
	function MdlM_Enregistrer(Membre $membre):string {
        //global $reponse;
       
        $connexion =  Connexion::getConnexion();
        $requette="INSERT INTO membres VALUES(0,?,?,?,?,?,?)";
        try{

            $donnees = [ $membre->getPrenom(), $membre->getNom(), $membre->getCourriel(), $membre->getSexe(), $membre->getDaten(), $membre->getPhotom()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $idm = $connexion->lastInsertId();
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "Membre bien enregistre";
            $this->reponse['idm'] = $idm;
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour enregistrer le membre";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }

    function  obtenirPhotoMembre($idm){
        $connexion =  Connexion::getConnexion();
        $requette="SELECT photom FROM membres WHERE idm = ?";
        try{
            $donnees = [$idm];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $usager = $stmt->fetch();
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "image reussi";
            $_SESSION['photom'] = $usager["photom"];
            
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme durant la function obtenirPhotoMembre()";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }
	function MdlM_Profile_get($idm):string {
        //global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM membres WHERE idm=?";
        try{
            $donnees = [$idm];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['membre'] = $stmt->fetch();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des membres";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
    function MdlM_getAll():string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM membres";
        try{
            $stmt = $connexion->prepare($requette);
            $stmt->execute();
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listeMembres'] = array();
            $reponse['listeMembres'] = $stmt->fetchAll();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des Membres";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }

    function MdlM_update(Membre $membre){
        global $reponse;
        $connexion =  Connexion::getConnexion();
        $requette="UPDATE membres SET prenom=?,nom=?,sexe=?,photom=? WHERE idm=?";
        try{
            $donnees = [$membre->getPrenom(), $membre->getNom(), $membre->getSexe(), $membre->getPhotom(), $membre->getIdm()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "Réussite de la modification du membre";
        }catch (Exception $e){
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour modifier le membre";
        }finally {
            unset($connexion);
            return json_encode($reponse);
        }
            
    }
}
?>