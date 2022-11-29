<?php
namespace Model;

class Journee {
    // Properties
    private $idj;
    private $ide;
    private $datej;
    private $descriptionj;
    private $listeActivites = array();

    //Constructor
    function __construct(int $idj, int $ide, string $datej, string $descriptionj) {
      $this->idj = $idj;
      $this->ide = $ide;
      $this->datej = $datej;
      $this->descriptionj = $descriptionj;
    }
  
    // Methods
    function getIdj() {
      return $this->idj;
    }

    function setIde($ide) {
      $this->ide = $ide;
    }

    function getIde() {
      return $this->ide;
    }

    function setDatej($datej) {
      $this->datej = $datej;
    }

    function getDatej() {
      return $this->datej;
    }

    function setDescriptionj($descriptionj) {
      $this->descriptionj = $descriptionj;
    }
    
    function getDescriptionj() {
      return $this->descriptionj;
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
    
  }

?>