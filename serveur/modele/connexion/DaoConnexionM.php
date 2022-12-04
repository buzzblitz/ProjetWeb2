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
            $this->reponse['location'] = "serveur/vue/membres.php";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour enregistrer le connexionM";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }


    function MdlCM_Connexion(ConnexionM $connexionM):string {
        //global $reponse;
       
        $connexion =  Connexion::getConnexion();
        $requette="SELECT * FROM connexion WHERE courriel = ? AND pass = ?";
        try{
            
            $donnees = [ $connexionM->getCourriel(), $connexionM->getPass()];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $usager = $stmt->fetch();
            if($usager == false) {
                
                $this->reponse['OK'] = false;
                $this->reponse['msg'] = "Aucun usager Trouver";
            } else {
                if($usager["etat"] == "A"){
                    $_SESSION['courriel'] = $usager["courriel"];
                    $this->reponse['courriel'] = $usager["courriel"];
                    $this->reponse['role'] = $usager["role"];
                    if($usager["role"] == "M"){
                            $this->reponse['OK'] = true;
                            $this->reponse['msg'] = "Connexion Avec succes";
                            $this->reponse['idm'] = $usager["idm"];
                            $this->reponse['location'] = "serveur/vue/membres.php";
                    }else if($usager["role"] == "A"){
                        $this->reponse['OK'] = true;
                        $this->reponse['msg'] = "Connexion Avec succes";
                        $this->reponse['location'] = "serveur/vue/admin.php";
                    }
                } else {
                    $this->reponse['OK'] = false;
                    $this->reponse['msg'] = "Votre compte est desactiver. Veuiller contacter un Administrateur";
                }
            }
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme durant le script de Connexion";
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

    function MdlCM_get($idm):string {
        //global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM connexion WHERE idm=?";
        try{
            $donnees = [$idm];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['connexionM'] = $stmt->fetch();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données de connexion";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }

    

    function MdlCM_getAllMembre():string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM connexion WHERE role=?";
        try{
            $donnees = ['M'];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
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

    function MdlCM_update(ConnexionM $connexionM){
        global $reponse;
        $connexion =  Connexion::getConnexion();
        $requette="UPDATE connexion SET etat=? WHERE idm=?";
        try{
            $donnees = [$connexionM->getEtat(), $connexionM->getIdM()];
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
}
?> 