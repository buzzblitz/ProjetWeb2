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
    function set_ide($ide) {
      $this->ide = $ide;
    }
    function get_ide() {
      return $this->ide;
    }
    function set_idc($idc) {
      $this->idc = $idc;
    }
    function get_idc() {
      return $this->idc;
    }
    function set_nom($nome) {
      $this->nome = $nome;
    }
    function get_nom() {
      return $this->nome;
    }

    function set_photoe($photoe) {
      $this->photoe = $photoe;
    }
    function get_photoe() {
      return $this->photoe;
    }

    function set_descriptione($descriptione) {
      $this->descriptione = $descriptione;
    }
    function get_descriptione() {
      return $this->descriptione;
    }

    function set_debut($debut) {
      $this->debut = $debut;
    }
    function get_debut() {
      return $this->debut;
    }

    function set_fin($fin) {
      $this->fin = $fin;
    }
    function get_fin() {
      return $this->fin;
    }

    function set_lieurencontre($lieurencontre) {
      $this->lieurencontre = $lieurencontre;
    }
    function get_lieurencontre() {
      return $this->lieurencontre;
    }
  
    function set_listeJournes($listeJournes) {
      $this->listeJournes = $listeJournes;
    }
    function get_listeJournes() {
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