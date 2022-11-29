<?php
       
    require_once("Film.php");
    require_once("DaoFilm.php");

 class ControleurFilm { 
    static private $instanceCtr = null;
    private $reponse;

    private function __construct(){

    }

     // Retourne le singleton du modèle 
	static function  getControleurFilm():ControleurFilm{
		if(self::$instanceCtr == null){
			self::$instanceCtr = new ControleurFilm();  
		}
		return self::$instanceCtr;
	}

	function CtrF_Enregistrer(){
         $film = new Film(0,$_POST['titre'], (int)$_POST['duree'], $_POST['res'],"Pochette");
         return DaoFilm::getDaoFilm()->MdlF_Enregistrer($film); 
    }

    function CtrF_getAll(){
         return DaoFilm::getDaoFilm()->MdlF_getAll(); 
    }

    function CtrF_Actions(){
        $action=$_POST['action'];
        switch($action){
            case "enregistrer" :
                return  $this->CtrF_Enregistrer();
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
                return $this->CtrF_getAll(); 
        }
        // Retour de la réponse au client
       
    }
}
?>