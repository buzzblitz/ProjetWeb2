<?php

class Membre {
  public $idm;
  public $prenom;
  public $nom;
  public $courriel;
  public $sexe;
  public $daten;
  public $photom;

    //Constructor
    public function __construct($idm) {
      $this->idm = 1;
      /*$this->prenom = $prenom;
      $this->nom = $nom;
      $this->courriel = $courriel;
      $this->sexe = $sexe;
      $this->daten = $daten;
      $this->photom = $photom;*/
    }

    
  
    // Methods

  function get_idm() {
      return $this->idm;
  }
  function getPrenom():string {
      return $this->prenom;
  }
  function getNom():string {
      return $this->nom;
  }
  function getCourriel():string {
      return $this->courriel;
  }
  function getSexe():string {
      return $this->sexe;
  }
  function getDaten():string {
      return $this->daten;
  }

  function getPhotom():string {
    return $this->photom;
  }

  function set_idm($idm) {
      $this->idm = $idm;
  }
  function setPrenom($prenom):void {
      $this->prenom = $prenom;
  }
  function setNom($nom):void {
      $this->nom = $nom;
  }
  function setCourriel($courriel):void {
      $this->courriel = $courriel;
  }
  function setSexe($sexe):void {
      $this->sexe = $sexe;
  }
  function setDaten($daten):void {
      $this->daten = $daten;
  }

  function setPhotom($photom):void {
    $this->photom = $photom;
  }
    
}

?>