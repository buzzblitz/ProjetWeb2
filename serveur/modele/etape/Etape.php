<?php

class Etape {
    // Properties
    private $ide;
    private $idc;
    private $nome;
    private $photoe;
    private $descriptione;
    private $debut;
    private $fin;
    private $lieurencontre;
    private $listeJournes = array();

    function __construct(int $ide, int $idc, string $nome, string $photoe, string $descriptione, string $debut, string $fin, string $lieurencontre) {
      $this->ide = $ide;
      $this->idc = $idc;
      $this->nome = $nome;
      $this->photoe = $photoe;
      $this->descriptione = $descriptione;
      $this->debut = $debut;
      $this->fin = $fin;
      $this->lieurencontre = $lieurencontre;
    }

    // Methods
    function getIde():int {
      return $this->ide;
    }

    function setIdc($idc):void {
      $this->idc = $idc;
    }

    function getIdc():int {
      return $this->idc;
    }

    function setNom($nome):void {
      $this->nome = $nome;
    }

    function getNom():string {
      return $this->nome;
    }

    function setPhotoe($photoe):void {
      $this->photoe = $photoe;
    }

    function getPhotoe():string {
      return $this->photoe;
    }

    function setDescriptione($descriptione):void {
      $this->descriptione = $descriptione;
    }

    function getDescriptione():string {
      return $this->descriptione;
    }

    function setDebut($debut):void {
      $this->debut = $debut;
    }

    function getDebut():string {
      return $this->debut;
    }

    function setFin($fin):void {
      $this->fin = $fin;
    }

    function getFin():string {
      return $this->fin;
    }

    function setLieurencontre($lieurencontre):void {
      $this->lieurencontre = $lieurencontre;
    }

    function getLieurencontre():string {
      return $this->lieurencontre;
    }
  
    function setListeJournes($listeJournes):void {
      $this->listeJournes = $listeJournes;
    }

    function getListeJournes():array {
      return $this->listeJournes;
    }
  
    function ajouterJournes($Journes) {
      array_push($this->listeJournes,$Journes);
    }
    
    function supprimerJournes($Journes) {
      unset($this->listeJournes[$Journes]);
    }
    
  }

?>