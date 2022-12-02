<?php
       
    require_once(__DIR__."/../modele/circuit/Circuit.php");
    require_once(__DIR__."/../modele/circuit/DaoCircuit.php");
    require_once(__DIR__."/../modele/circuit/Etape.php");
    require_once(__DIR__."/../modele/circuit/DaoEtape.php");
    require_once(__DIR__."/../modele/circuit/Activite.php");
    require_once(__DIR__."/../modele/circuit/DaoActivite.php");
    require_once(__DIR__."/../modele/circuit/Journee.php");
    require_once(__DIR__."/../modele/circuit/DaoJournee.php");
    session_start();

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
        $dossierc="../ressources/images/images_circuits/";
        $imageCircuit="avatar.png";
        $nomc = $_POST['nomc'];
        if($_FILES['photoc']['tmp_name']!==""){
            $nomphotoc=sha1($nomc.time());
            //Upload de la photo
            $tmpc = $_FILES['photom']['tmp_name'];
            $fichierc= $_FILES['photom']['name'];
            $extensionc=strrchr($fichierc,'.');
            @move_uploaded_file($tmpc,$dossierc.$nomphotoc.$extensionc);
            // Enlever le fichier temporaire chargé
            @unlink($tmpc); //effacer le fichier temporaire
            $photoc=$nomphotoc.$extensionc;
        }
         $circuit = new Circuit(0, $_POST['nomc'], $photoc, $_POST['descriptionc'], $_POST['etat']);
         $addc = json_decode(DaoCircuit::getDaoCircuit()->MdlC_Enregistrer($circuit));
         if($addc->OK){
            $dossiere="../ressources/images/images_etapes/";
            $imageEtape="avatar.png";
            $nome = $_POST['nome'];
            if($_FILES['photoe']['tmp_name']!==""){
                $nomphotoe=sha1($nome.time());
                //Upload de la photo
                $tmpe = $_FILES['photoe']['tmp_name'];
                $fichiere= $_FILES['photoe']['name'];
                $extensione=strrchr($fichiere,'.');
                @move_uploaded_file($tmpe,$dossiere.$nomphotoe.$extensione);
                // Enlever le fichier temporaire chargé
                @unlink($tmpe); //effacer le fichier temporaire
                $photoe=$nomphotoe.$extensione;
            }
            $etape = new Etape(0,(int)$addc->idc, $_POST['nome'], $photoe, $_POST['descriptione'], $_POST['debut'], $_POST['fin'], $_POST['lieurencontre']);
            $adde = json_decode(DaoEtape::getDaoEtape()->MdlE_Enregistrer($etape));
            if($adde->OK){
                $journee = new Journee(0,(int)$adde->ide, $_POST['datej'], $_POST['descriptionj']);
                $addj = json_decode(DaoJournee::getDaoJournee()->MdlJ_Enregistrer($journee));
                if($addj->OK){
                    $activite = new Activite(0,(int)$addj->idj, $_POST['noma'], $_POST['tempsdebut'], $_POST['tempsfin'], $_POST['descriptiona']);
                    $adda = json_decode(DaoActivite::getDaoActivite()->MdlA_Enregistrer($activite));
                }
            }
        }
        return json_encode($addc);
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
            case "deconnecter" :
                return $this->CtrA_Deconnexion();
        }
        // Retour de la réponse au client
       
    }

    function CtrA_Deconnexion(){
        
        $result=array();
        $result['OK'] = true;
        $result['msg'] = "Deconnexion reussi";
        $result['location'] = "../../index.php";
        session_unset();
        session_destroy();
        return json_encode($result);
    }
}
?>