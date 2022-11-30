<?php
       
    require_once("Film.php");
    require_once("DaoFilm.php");

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
         return DaoFilm::getDaoFilm()->MdlM_getAll(); 
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