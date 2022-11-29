<?php
       
    require_once(__DIR__."/../modele/circuit/Circuit.php");
    require_once(__DIR__."/../modele/circuit/DaoCircuit.php");

 class ControleurAdmin { 
    static private $instanceCtr = null;
    private $reponse;

    private function __construct(){

    }

     // Retourne le singleton du modèle 
	static function  getControleurAdmin():ControleurAdmin{
		if(self::$instanceCtr == null){
			self::$instanceCtr = new ControleurAdmin();  
		}
		return self::$instanceCtr;
	}

	function CtrA_Enregistrer(){
         $circuit = new Circuit(0, $_POST['nomc'], $_POST['photoc'], $_POST['descriptionc'], $_POST['etat']);
         return DaoCircuit::getDaoCircuit()->MdlC_Enregistrer($circuit); 
    }

    function CtrA_getAll(){
         return DaoCircuit::getDaoCircuit()->MdlC_getAll(); 
    }

    function CtrA_Actions(){
        $action=$_POST['action'];
        switch($action){
            case "enregistrer" :
                return  $this->CtrA_Enregistrer();
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
                return $this->CtrA_getAll(); 
        }
        // Retour de la réponse au client
       
    }
}
?>