let validerFormEnreg = () => {
    let etat = true;
    //const regExpPass = new RegExp('[A-Za-z0-9_\$#\.]{5,10}$');
    const pass = document.getElementById('pass').value;
    const cpass = document.getElementById('cpass').value;
    if(pass !== cpass){
        etat = false;
        document.getElementById('msgPass').innerHTML = "Mots de passe ne sont pas égaux !";
        setInterval(() => {
            document.getElementById('msgPass').innerHTML = "";
        },3000);
    } //else {//OK, égaux
    //     if(!regExpPass.test(pass)){
    //          etat = false;
    //         document.getElementById('msgPass').innerHTML = "Mot de passe non conforme";
    //     }
    
    return etat;
}

let lister = () => {
    document.getElementById('formLister').submit();
}

let deconnecter = () => {
    document.getElementById('dc').submit();
}