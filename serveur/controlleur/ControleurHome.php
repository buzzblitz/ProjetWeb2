<?php
    require_once(__DIR__."\..\modele\membre\Membre.php");   
    require_once(__DIR__."/../modele/connexion/ConnexionM.php");  

    require_once(__DIR__."/../modele/membre/DaoMembre.php");
    require_once(__DIR__."/../modele/connexion/DaoConnexionM.php");

 class ControleurHome { 
    static private $instanceCtr = null;
    private $reponse;

    private function __construct(){

    }

     // Retourne le singleton du modèle 
	static function  getControleurHome():ControleurHome{
		if(self::$instanceCtr == null){
			self::$instanceCtr = new ControleurHome();  
		}
		return self::$instanceCtr;
	}

	function CtrH_Enregistrer(){
         $membre = new Membre(1);
        $this->reponse['OK'] = false;
        $this->reponse['msg'] = "Probléme pour enregistrer le membre";
        return json_encode($this->reponse);
         $log = DaoMembre::getDaoMembre()->MdlM_Enregistrer($membre);
         if($log->OK){
            $connexionM = new ConnexionM((int)$log->idm, $_POST['courriel'], $_POST['pass'], 'A', 'M');
         }
         return DaoConnexionM::getDaoConnexionM()->MdlCM_Enregistrer($connexionM);
    }

    function CtrH_getAll(){
         return DaoFilm::getDaoFilm()->MdlF_getAll(); 
    }

    function CtrH_Actions(){
        $action=$_POST['action'];
        switch($action){
            case "enregistrer" :
                return  $this->CtrH_Enregistrer();
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
                return $this->CtrH_getAll(); 
        }
        // Retour de la réponse au client
       
    }
}
?>