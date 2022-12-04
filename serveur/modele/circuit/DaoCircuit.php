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
        $requette="INSERT INTO circuits VALUES(0,?,?,?,?,?)";
        try{
            
            $donnees = [ $circuit->getNom(), $circuit->getPhoto(), $circuit->getDescription(), $circuit->getEtat(), $circuit->getPrix()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $idc = $connexion->lastInsertId();
            $this->reponse['idc'] = $idc;
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "Circuit bien enregistre";
            $this->reponse['location'] = "admin.php";
            
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

    function MdlC_get($idc):string {
        //global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM circuits WHERE idc=?";
        try{
            $donnees = [$idc];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['circuit'] = $stmt->fetch();
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
        $requette="UPDATE circuits SET nomc=?,photoc=?,descriptionc=?,etat=?,prix=? WHERE idc=?";
        try{
            $donnees = [$circuit->getNom(), $circuit->getPhoto(), $circuit->getDescription(), $circuit->getEtat(), $circuit->getPrix(), $circuit->getIdc()];
            $stmt = $connexion->prepare($requette);
	        $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "Réussite de la modification du circuit";
            $reponse['location'] = "admin.php";
        }catch (Exception $e){
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour modifier le circuit";
        }finally {
            unset($connexion);
            return json_encode($reponse);
        }
	    
    }

    function mdlC_remove($idc){
        global $reponse;
        $connexion =  Connexion::getConnexion();
        $requettePhoto="SELECT photoc FROM circuits WHERE idc=?";
        $requette="DELETE FROM circuits WHERE idc=?";
        try{
            $donnees = [$idc];
            $stmt = $connexion->prepare($requettePhoto);
            $stmt->execute($donnees);
            $result = $stmt->fetch();
            $image=$result;
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
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "Réussite de la supression du circuit";
        }catch (Exception $e){
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour supprimer le circuit";
        }finally {
            unset($connexion);
            return json_encode($reponse);
        }
    }
}
?>