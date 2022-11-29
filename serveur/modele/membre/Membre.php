<?php
declare (strict_types=1);
namespace Model;

class Membre {
  private $idm;
  private $prenom;
  private $nom;
  private $courriel;
  private $sexe;
  private $daten;
  private $photom;

    //Constructor
    function __construct(string $prenom, string $nom, string $courriel, string $sexe, string $daten, string $photom) {
      $this->prenom = $prenom;
      $this->nom = $nom;
      $this->courriel = $courriel;
      $this->sexe = $sexe;
      $this->daten = $daten;
      $this->photom = $photom;
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