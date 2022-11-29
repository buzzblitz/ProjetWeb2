<?php
// Au début de PHP: Déclarer les types dans les paramétres des fonctions
declare (strict_types=1);

require_once(__DIR__."/../ressources/bd/Connexion.php");
require_once("Film.php");

class DaoFilm {
    static private $modelFilm = null;
    private $reponse=array();
    private $connexion = null;
	
    private function __construct(){
        
    }
    
// Retourne le singleton du modèle 
	static function  getDaoFilm():DaoFilm {
		if(self::$modelFilm == null){
			self::$modelFilm = new DaoFilm();  
		}
		return self::$modelFilm;
	}
	
	function MdlF_Enregistrer(Film $film):string {
        //global $reponse;
       
        $connexion =  Connexion::getConnexion();
        $requette="INSERT INTO films VALUES(0,?,?,?,?,?)";
        try{
            
            $donnees = [$film->getTitre(),$film->getDuree(),$film->getRealisateur(),$film->getPochette(),NULL];
            $stmt = $connexion->prepare($requette);
            $stmt->execute($donnees);
            $this->reponse['OK'] = true;
            $this->reponse['msg'] = "Film bien enregistre";
        }catch (Exception $e){
            $this->reponse['OK'] = false;
            $this->reponse['msg'] = "Probléme pour enregistrer le film";
        }finally {
          unset($connexion);
          return json_encode($this->reponse);
        }
    }
	
    function MdlF_getAll():string {
        global $reponse;
        $connexion = Connexion::getConnexion();
        $requette="SELECT * FROM films";
        try{
            $stmt = $connexion->prepare($requette);
            $stmt->execute();
            $reponse['OK'] = true;
            $reponse['msg'] = "";
            $reponse['listeFilms'] = array();
            $reponse['listeFilms'] = $stmt->fetchAll();
        }catch (Exception $e){ 
            $reponse['OK'] = false;
            $reponse['msg'] = "Problème pour obtenir les données des films";
            //$reponse['msg'] = $e->getMessage();
        }finally {
          unset($connexion);
          return json_encode($reponse);
        }
    }
}
?>