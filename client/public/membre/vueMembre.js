let montrerVue = (action, donnees) => {

    switch(action){
        case "enregistrer"  :
            if(donnees.OK){
                window.location.href= donnees.location;
             }else{
                 msg="Problème+pour+enregistré+le+membre.";
                 console.log(msg);
                 window.location.href="index.php"; 
             }
             break;
        case "modifier"     :
            if(donnees.OK){
                window.location.href= donnees.location;
             }else{
                 msg="Problème+pour+modifier+le+membre.";
                 console.log(msg);
                 window.location.href="index.php"; 
             }
             break;
        case "charger"      :
            if(donnees.OK){
                afficherModifier(donnees.circuit);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
        break;
        case "enlever"      :
            if(donnees.OK){
                afficherMessage(donnees.msg);
            }else{
                afficherMessage("Problème côté serveur. Essaiez plus tard!!!"); 
            }
        break;
        case "lister"       :
            if(donnees.OK){
                listerCircuits(donnees.listeCircuits);
            }else{
                afficherMessage(donnees.msg); 
            }
        break;
        case "deconnexion"  :
            if(donnees.OK){
                window.location.href= donnees.location;   
            }else{
                console.log(donnees.msg); 
            }
            break;

    }


}