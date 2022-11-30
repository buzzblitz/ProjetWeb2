<?php

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
    function getIdj():int {
      return $this->idj;
    }

    function setIde($ide):void {
      $this->ide = $ide;
    }

    function getIde():int {
      return $this->ide;
    }

    function setDatej($datej):void {
      $this->datej = $datej;
    }

    function getDatej():string {
      return $this->datej;
    }

    function setDescriptionj($descriptionj):void {
      $this->descriptionj = $descriptionj;
    }

    function getDescriptionj():string {
      return $this->descriptionj;
    }
  
    function setListeActivites($listeActivites):void {
      $this->listeActivites = $listeActivites;
    }
    
    function getListeActivites():array {
      return $this->listeActivites;
    }
  
    function ajouterActivites($Activite) {
      array_push($this->listeActivites,$Activite);
    }
    
  }

?>