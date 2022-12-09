<?php
        require_once(__DIR__."/../modele/membre/Membre.php");   
        require_once(__DIR__."/../modele/connexion/ConnexionM.php");   
        
        require_once(__DIR__."/../modele/membre/DaoMembre.php");
        require_once(__DIR__."/../modele/connexion/DaoConnexionM.php");
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
    function CtrM_getAll_M(){
        return DaoCircuit::getDaoCircuit()->MdlC_getAll_M(); 
   }

   function CtrM_get($idc){
    return DaoCircuit::getDaoCircuit()->MdlC_get($idc); 
  }
  function CtrM_Profile_get($idc){
    $tmp =  json_decode(DaoConnexionM::getDaoConnexionM()->MdlCM_Profile_get($idc));
    $tmp2 = json_decode(DaoMembre::getDaoMembre()->MdlM_Profile_get($idc));
        $tmp2->connexion = $tmp->connexion;
        return  json_encode($tmp2);

}

  function CtrM_detailler($idc){
    global $list;
    $circuit = json_decode(DaoCircuit::getDaoCircuit()->MdlC_get($idc));
    if($circuit->OK){
        $etapes = json_decode(DaoEtape::getDaoEtape()->MdlE_getAll($idc));
            if ($etapes->OK) {
                foreach ($etapes->listeEtapes as $etape) {
                    $journees = json_decode(DaoJournee::getDaoJournee()->MdlJ_getAll($etape->ide));
                    if ($journees->OK) {
                        foreach ($journees->listeJournees as $journee) {
                            $activites = json_decode(DaoActivite::getDaoActivite()->MdlA_getAll($journee->idj));
                            $list['OK'] = $activites->OK;
                            $list['msg'] = "Recuperation reussi de details";
                            $list['circuit'] = $circuit->circuit;
                            $list['listeEtapes'] = $etapes->listeEtapes;
                            $list['listeJournees'] = $journees->listeJournees;
                            $list['listeActivites'] = $activites->listeActivites;
                    }
                }
            }
        }
    }
    return json_encode($list);
  }

  function CtrM_detaillerC($idc){
    return DaoEtape::getDaoEtape()->MdlE_getAll($idc);
  }

  function CtrM_detaillerE($ide){
    return DaoJournee::getDaoJournee()->MdlJ_getAll($ide);
  }

  function CtrM_detaillerJ($idj){
    return DaoActivite::getDaoActivite()->MdlA_getAll($idj);
  }

  function CtrM_updateM(){
    $dossierm="serveur/ressources/images/images_membres/";
    $photoc= $_POST['photomcold'];
    $nom = $_POST['nom'];
    if($_FILES['photom']['tmp_name']!==""){
        $nomphotom=sha1($nom.time());
        //Upload de la photo
        $tmpc = $_FILES['photom']['tmp_name'];
        $fichierm= $_FILES['photom']['name'];
        $extensionc=strrchr($fichierm,'.');
        @move_uploaded_file($tmpc,$dossierm.$nomphotom.$extensionc);
        // Enlever le fichier temporaire chargé
        @unlink($tmpc); //effacer le fichier temporaire
        $photoc=$nomphotom.$extensionc;
    }
    $pass = $_POST['passOriginal'];
    if($_POST['pass'] != "" && $_POST['cpass'] != "" && $_POST['pass'] == $_POST['cpass']){
            $pass = $_POST['pass'];
    }
    $membre = new Membre($_POST['idm'], $_POST['prenom'], $_POST['nom'], "", $_POST['sexe'], "", $photoc);
    $timo = json_decode(DaoMembre::getDaoMembre()->MdlM_update($membre));
    if($timo->OK){
       $connexionM = new ConnexionM($_POST['idm'], "", $pass, 'A', 'M');
       return DaoConnexionM::getDaoConnexionM()->MdlCM_update_profile($connexionM);
    }
     
}

    function CtrM_Actions(){
        $action=$_POST['action'];
        switch($action){
            case "charger" :
                $input=$_POST['input'];
                return  $this->CtrM_get($input); 
            case "deconnecter" :
                return $this->CtrM_Deconnexion();
            case "afficherPageProfil" :
                $input=$_POST['input'];
                return  $this->CtrM_Profile_get($input);
            case "lister" :
                return $this->CtrM_getAll_M(); 
            case "detailler" :
                $input=$_POST['input'];
                return  $this->CtrM_detailler($input);
            case "detaillerC" :
                $input=$_POST['input'];
                return  $this->CtrM_detaillerC($input);
            case "detaillerE" :
                $input=$_POST['input'];
                return  $this->CtrM_detaillerE($input);
            case "detaillerJ" :
                $input=$_POST['input'];
                return  $this->CtrM_detaillerJ($input);
             
            case "modifier" :
                return  $this->CtrM_updateM(); 
        }
        // Retour de la réponse au client
       
    }
    function CtrM_Deconnexion(){
        
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