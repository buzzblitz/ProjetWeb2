<?php
namespace Model;

class Journee {
    // Properties
    private $idj;
    private $ide;
    private $descriptionj;
    private $datej;
    private $listeActivites = array();

    //Constructor
    function __construct(int $idj, int $ide, string $descriptionj, string $datej, $listeActivites) {
      $this->setIdj($idj);
      $this->ide = $ide;
      $this->description = $descriptionj;
      $this->datej = $datej;
      $this->listeActivites = $listeActivites;
    }
  
    // Methods
    function setIdj($idj) {
      $this->idj = $idj;
    }
    function getIdj() {
      return $this->idj;
    }

    function setIde($ide) {
      $this->ide = $ide;
    }
    function getIde() {
      return $this->ide;
    }

    function setDescriptionj($descriptionj) {
      $this->descriptionj = $descriptionj;
    }
    function getDescriptionj() {
      return $this->descriptionj;
    }

    function setDatej($datej) {
      $this->datej = $datej;
    }
    function getDatej() {
      return $this->datej;
    }
  
    function setListeActivites($listeActivites) {
      $this->listeActivites = $listeActivites;
    }
    function getListeActivites() {
      return $this->listeActivites;
    }
  
    function ajouterActivites($Activite) {
      array_push($this->listeActivites,$Activite);
    }
    function supprimerActivites($Activite) {
      if (($key = array_search($Activite, $listeActivites)) !== false) {
        unset($listeActivites[$key]);}
    }
  }

?>