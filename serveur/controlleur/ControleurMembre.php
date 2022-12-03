<?php
        
       require_once(__DIR__."/../modele/circuit/Circuit.php");
       require_once(__DIR__."/../modele/circuit/DaoCircuit.php");
       require_once(__DIR__."/../modele/etape/Etape.php");
       require_once(__DIR__."/../modele/etape/DaoEtape.php");
       require_once(__DIR__."/../modele/activite/Activite.php");
       require_once(__DIR__."/../modele/activite/DaoActivite.php");
       require_once(__DIR__."/../modele/journee/Journee.php");
       require_once(__DIR__."/../modele/journee/DaoJournee.php");
       session_start();

 class ControleurMembre { 
    static private $instanceCtr = null;
    private $reponse;

    private function __construct(){

    }

     // Retourne le singleton du modèle 
	static function  getControleurMembre():ControleurMembre{
		if(self::$instanceCtr == null){
			self::$instanceCtr = new ControleurMembre();  
		}
		return self::$instanceCtr;
	}

	function CtrM_Enregistrer(){
         $film = new Film(0,$_POST['titre'], (int)$_POST['duree'], $_POST['res'],"Pochette");
         return DaoFilm::getDaoFilm()->MdlF_Enregistrer($film); 
    }

    function CtrM_getAll(){
        return DaoCircuit::getDaoCircuit()->MdlC_getAll(); 
   }

    function CtrM_Actions(){
        $action=$_POST['action'];
        switch($action){
            case "enregistrer" :
                return  $this->CtrM_Enregistrer();
            case "fiche" :
                //fiche(); 
            break;
            case "modifier" :
                //modifier(); 
            break;
            case "enlever" :
                //enlever(); 
            break;
            case "lister" :
                return $this->CtrM_getAll(); 
        }
        // Retour de la réponse au client
       
    }
}
?>