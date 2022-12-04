<?php
    require_once(__DIR__."/../modele/connexion/ConnexionM.php");
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

 class ControleurAdmin { 
    static private $instanceCtr = null;
    private function __construct(){

    }

     // Retourne le singleton du modèle 
	static function  getControleurAdmin():ControleurAdmin{
		if(self::$instanceCtr == null){
			self::$instanceCtr = new ControleurAdmin();  
		}
		return self::$instanceCtr;
	}
    function CtrA_EnregistrerE(){
        $dossiere="serveur/ressources/images/images_etapes/";
        $photoe="avatar.png";
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
        $etape = new Etape(0,$_POST['idc'], $_POST['nome'], $photoe, $_POST['descriptione'], $_POST['debut'], $_POST['fin'], $_POST['lieurencontre']);
        return DaoEtape::getDaoEtape()->MdlE_Enregistrer($etape);
    }

    function CtrA_EnregistrerJ(){
        $journee = new Journee(0,$_POST['ide'], $_POST['datej'], $_POST['descriptionj']);
        return DaoJournee::getDaoJournee()->MdlJ_Enregistrer($journee);  
    }

    function CtrA_EnregistrerA(){
        $activite = new Activite(0,$_POST['idj'], $_POST['noma'], $_POST['tempsdebut'], $_POST['tempsfin'], $_POST['descriptiona']);
        return DaoActivite::getDaoActivite()->MdlA_Enregistrer($activite);
        
    }

	function CtrA_Enregistrer(){
        
        $dossierc="serveur/ressources/images/images_circuits/";
        $photoc="avatar.png";
        $nomc = $_POST['nomc'];
        if($_FILES['photoc']['tmp_name']!==""){
            $nomphotoc=sha1($nomc.time());
            //Upload de la photo
            $tmpc = $_FILES['photoc']['tmp_name'];
            $fichierc= $_FILES['photoc']['name'];
            $extensionc=strrchr($fichierc,'.');
            @move_uploaded_file($tmpc,$dossierc.$nomphotoc.$extensionc);
            // Enlever le fichier temporaire chargé
            @unlink($tmpc); //effacer le fichier temporaire
            $photoc=$nomphotoc.$extensionc;
        }
        $circuit = new Circuit(0, $_POST['nomc'], $photoc, $_POST['descriptionc'], $_POST['etat'],0);
        $addc = json_decode(DaoCircuit::getDaoCircuit()->MdlC_Enregistrer($circuit));
        if($addc->OK){
            $dossiere="serveur/ressources/images/images_etapes/";
            $photoe="avatar.png";
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

    function CtrA_updateC(){
        $dossierc="serveur/ressources/images/images_circuits/";
        $photoc= $_POST['photocold'];
        $nomc = $_POST['nomc'];
        if($_FILES['photoc']['tmp_name']!==""){
            $nomphotoc=sha1($nomc.time());
            //Upload de la photo
            $tmpc = $_FILES['photoc']['tmp_name'];
            $fichierc= $_FILES['photoc']['name'];
            $extensionc=strrchr($fichierc,'.');
            @move_uploaded_file($tmpc,$dossierc.$nomphotoc.$extensionc);
            // Enlever le fichier temporaire chargé
            @unlink($tmpc); //effacer le fichier temporaire
            $photoc=$nomphotoc.$extensionc;
        }
        $circuit = new Circuit($_POST['idc'], $_POST['nomc'], $photoc, $_POST['descriptionc'], $_POST['etat'],0);
        return DaoCircuit::getDaoCircuit()->MdlC_update($circuit);
         
    }

    function CtrA_updateE(){
        $dossiere="serveur/ressources/images/images_etapes/";
        $photoc= $_POST['photoeold'];
        $nomc = $_POST['nome'];
        if($_FILES['photoe']['tmp_name']!==""){
            $nomphotoe=sha1($nomc.time());
            //Upload de la photo
            $tmpe = $_FILES['photoe']['tmp_name'];
            $fichiere= $_FILES['photoe']['name'];
            $extensione=strrchr($fichiere,'.');
            @move_uploaded_file($tmpe,$dossiere.$nomphotoe.$extensione);
            // Enlever le fichier temporaire chargé
            @unlink($tmpe); //effacer le fichier temporaire
            $photoe=$nomphotoe.$extensione;
        }
        $etape = new Etape($_POST['ide'],$_POST['idc'], $_POST['nome'], $photoe, $_POST['descriptione'], $_POST['debut'], $_POST['fin'], $_POST['lieurencontre']);
        return DaoEtape::getDaoEtape()->MdlE_update($etape);  
    }

    function CtrA_updateJ(){
        $journee = new Journee($_POST['idj'], $_POST['ide'], $_POST['datej'], $_POST['descriptionj']);
        return DaoJournee::getDaoJournee()->MdlJ_update($journee);
         
    }
    function CtrA_updateA(){
        $activite = new Activite($_POST['ida'], $_POST['idj'], $_POST['noma'], $_POST['tempsdebut'], $_POST['tempsfin'], $_POST['descriptiona']);
        return DaoActivite::getDaoActivite()->MdlA_update($activite);
         
    }

    function CtrA_updateM(){
        $connexionM = new ConnexionM($_POST['idm'], "", "", $_POST['etat'], "");
        return DaoConnexionM::getDaoConnexionM()->MdlCM_update($connexionM);
         
    }

    function CtrA_get($idc){
        return DaoCircuit::getDaoCircuit()->MdlC_get($idc); 
    }

    function CtrA_getE($ide){
        return DaoEtape::getDaoEtape()->MdlE_get($ide); 
    }
    function CtrA_getJ($idj){
        return DaoJournee::getDaoJournee()->MdlJ_get($idj); 
    }
    function CtrA_getA($ida){
        return DaoActivite::getDaoActivite()->MdlA_get($ida); 
    }

    function CtrA_getM($idm){
        return DaoConnexionM::getDaoConnexionM()->MdlCM_get($idm); 
    }

    function CtrA_getAll(){
        return DaoCircuit::getDaoCircuit()->MdlC_getAll(); 
    }
    function CtrA_getAllE($idc){
        return DaoEtape::getDaoEtape()->MdlE_getAll($idc); 
    }
    function CtrA_getAllJ($ide){
        return DaoJournee::getDaoJournee()->MdlJ_getAll($ide); 
    }
    function CtrA_getAllA($idj){
        return DaoActivite::getDaoActivite()->MdlA_getAll($idj); 
    }
    function CtrA_removeC($idc){
        return DaoCircuit::getDaoCircuit()->MdlC_remove($idc); 
   }
   function CtrA_removeE($ide){
    return DaoEtape::getDaoEtape()->MdlE_remove($ide); 
    }
    function CtrA_removeJ($idj){
        return DaoJournee::getDaoJournee()->MdlJ_remove($idj); 
    }
    function CtrA_removeA($ida){
        return DaoActivite::getDaoActivite()->MdlA_remove($ida); 
    }

    function CtrA_getAllMembre(){
        return DaoConnexionM::getDaoConnexionM()->MdlCM_getAllMembre(); 
    }

    function CtrA_Actions(){
        $action=$_POST['action'];
        switch($action){
            case "enregistrer" :
                return  $this->CtrA_Enregistrer(); 
            case "modifierC" :
                return  $this->CtrA_updateC(); 
            case "enleverC" :
                $input=$_POST['input'];
                return  $this->CtrA_removeC($input);
            case "enleverE" :
                $input=$_POST['input'];
                return  $this->CtrA_removeE($input);
            case "enleverJ" :
                $input=$_POST['input'];
                return  $this->CtrA_removeJ($input);
            case "enleverA" :
                $input=$_POST['input'];
                return  $this->CtrA_removeA($input);
            case "listerC" :
                return $this->CtrA_getAll();
            case "deconnecter" :
                return $this->CtrA_Deconnexion();
            case "enregistrerE" :
                return  $this->CtrA_EnregistrerE();
            case "enregistrerJ" :
                return  $this->CtrA_EnregistrerJ();
            case "enregistrerA" :
                return  $this->CtrA_EnregistrerA();
            case "chargerC" :
                $input=$_POST['input'];
                return  $this->CtrA_get($input);
            case "chargerE" :
                $input=$_POST['input'];
                return  $this->CtrA_getE($input);
            case "chargerJ" :
                $input=$_POST['input'];
                return  $this->CtrA_getJ($input);
            case "chargerA" :
                $input=$_POST['input'];
                return  $this->CtrA_getA($input);
            case "chargerM" :
                $input=$_POST['input'];
                return  $this->CtrA_getM($input);
            case "modifierE" :
                return  $this->CtrA_updateE();
            case "modifierJ" :
                return  $this->CtrA_updateJ();
            case "modifierA" :
                return  $this->CtrA_updateA();
            case "modifierM" :
                return  $this->CtrA_updateM();
            case "listerE" :
                $input=$_POST['input'];
                return $this->CtrA_getAllE($input);
            case "listerJ" :
                $input=$_POST['input'];
                return $this->CtrA_getAllJ($input);
            case "listerA" :
                $input=$_POST['input'];
                return $this->CtrA_getAllA($input);
            case "listerMembre" :
                return $this->CtrA_getAllMembre();
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