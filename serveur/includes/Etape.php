<?php
namespace Model;

class Etape {
    // Properties
    private $nom;
    private $debut;
    private $duree;
    private $hotel;
    private $photoe;
    private $listeActivites = array();
  
    // Methods
    function set_name($nom) {
      $this->nom = $nom;
    }
    function get_name() {
      return $this->nom;
    }

    function set_debut($debut) {
      $this->debut = $debut;
    }
    function get_debut() {
      return $this->debut;
    }

    function set_duree($duree) {
      $this->duree = $duree;
    }
    function get_duree() {
      return $this->duree;
    }

    function set_hotel($hotel) {
      $this->hotel = $hotel;
    }
    function get_hotel() {
      return $this->hotel;
    }
  
    function set_photo($photoe) {
      $this->photoe = $photoe;
    }
    function get_photo() {
      return $this->photoe;
    }
  
    function set_listeActivites($listeActivites) {
      $this->listeActivites = $listeActivites;
    }
    function get_listeActivites() {
      return $this->listeActivites;
    }
  
    function ajouterActivites($Activite) {
      array_push($this->listeActivites,$Activite);
    }
    function supprimerActivites($index) {
      unset($this->listeActivites[$index]);
    }
  }

?>