<?php
namespace Model;

class Circuit {
  // Properties
  private $nom;
  private $photoc;
  private $listeEtapes = array();

  // Methods
  function set_name($nom) {
    $this->nom = $nom;
  }
  function get_name() {
    return $this->nom;
  }

  function set_photo($photoc) {
    $this->photoc = $photoc;
  }
  function get_photo() {
    return $this->photoc;
  }

  function set_listeEtapes($listeEtapes) {
    $this->listeEtapes = $listeEtapes;
  }
  function get_listeEtapes() {
    return $this->listeEtapes;
  }

  function ajouterEtape($Etape) {
    array_push($this->listeEtapes,$Etape);
  }
  function supprimerEtape($index) {
    unset($this->listeEtapes[$index]);
  }
}
?>