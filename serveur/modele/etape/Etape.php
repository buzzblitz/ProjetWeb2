<?php
namespace Model;

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
    function getIde() {
      return $this->ide;
    }

    function setIdc($idc) {
      $this->idc = $idc;
    }

    function getIdc() {
      return $this->idc;
    }

    function setNom($nome) {
      $this->nome = $nome;
    }

    function getNom() {
      return $this->nome;
    }

    function setPhotoe($photoe) {
      $this->photoe = $photoe;
    }

    function getPhotoe() {
      return $this->photoe;
    }

    function setDescriptione($descriptione) {
      $this->descriptione = $descriptione;
    }

    function getDescriptione() {
      return $this->descriptione;
    }

    function setDebut($debut) {
      $this->debut = $debut;
    }

    function getDebut() {
      return $this->debut;
    }

    function setFin($fin) {
      $this->fin = $fin;
    }

    function getFin() {
      return $this->fin;
    }

    function setLieurencontre($lieurencontre) {
      $this->lieurencontre = $lieurencontre;
    }

    function getLieurencontre() {
      return $this->lieurencontre;
    }
  
    function setListeJournes($listeJournes) {
      $this->listeJournes = $listeJournes;
    }

    function getListeJournes() {
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