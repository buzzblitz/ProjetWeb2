<?php
    require_once(__DIR__."/../modele/membre/Membre.php");   
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
        $dossier="../ressources/images/images_membres/";
        $image="avatar.png";
        if($_FILES['photom']['tmp_name']!==""){
            $nomImage=sha1($_POST['nom'].time());
            //Upload de la photo
            $tmp = $_FILES['photom']['tmp_name'];
            $fichier= $_FILES['photom']['name'];
            $extension=strrchr($fichier,'.');
            @move_uploaded_file($tmp,$dossier.$nomImage.$extension);
            // Enlever le fichier temporaire chargé
            @unlink($tmp); //effacer le fichier temporaire
            $image=$nomImage.$extension;
        }
        
         $membre = new Membre(0, $_POST['prenom'], $_POST['nom'], $_POST['courriel'], $_POST['sexe'], $_POST['daten'], $image);
         $poopi = json_decode(DaoMembre::getDaoMembre()->MdlM_Enregistrer($membre));
         if($poopi->OK){
            $connexionM = new ConnexionM((int)$poopi->idm, $_POST['courriel'], $_POST['pass'], 'A', 'M');
         }
         return DaoConnexionM::getDaoConnexionM()->MdlCM_Enregistrer($connexionM);
    }

    function CtrH_Connexion(){
        $connexionM = new ConnexionM(0, $_POST['courrielc'], $_POST['passc'], 'A', 'M');
         return DaoConnexionM::getDaoConnexionM()->MdlCM_Connexion($connexionM);
    }

    function CtrH_getAll(){
         return DaoFilm::getDaoFilm()->MdlF_getAll(); 
    }

    function CtrH_Actions(){
        $action=$_POST['action'];
        switch($action){
            case "enregistrer" :
                return  $this->CtrH_Enregistrer();
            case "connexion" :
                return  $this->CtrH_Connexion();
            break;
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