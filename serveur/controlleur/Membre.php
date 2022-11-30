<?php

class Membre {
  private $idm;
  private $prenom;
  private $nom;
  private $courriel;
  private $sexe;
  private $daten;
  private $photom;

    //Constructor
    function __construct() {
      /*setIdm($idm);
      setPrenom($prenom);
      setNom($nom);
      setCourriel($courriel);
      setSexe($sexe);
      setDaten($daten);
      setPhotom($photom);*/
    }
  
    // Methods

  function getIdm():int {
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

  function setIdm($idm):void {
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