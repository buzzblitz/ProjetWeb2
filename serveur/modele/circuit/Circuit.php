<?php
declare (strict_types=1);

namespace Model;

class Circuit {
  // Properties
  private $idc;
  private $nomc;
  private $photoc;
  private $descriptionc;
  private $etat;
  private $listeEtapes = array();


  function __construct(int $idc, string $nomc, int $photoc, string $descriptionc, string $etat, array $listeEtapes) {
    $this->idc = $idc;
    $this->nomc = $nomc;
    $this->photoc = $photoc;
    $this->descriptionc = $descriptionc;
    $this->etat = $etat;
    $this->listeEtapes = $listeEtapes;
}

  // Methods
  function get_idc():int {
    return $this->idc;
  }

  function set_nom($nomc):void {
    $this->nomc = $nomc;
  }
  function get_nom():string {
    return $this->nomc;
  }

  function set_photo($photoc):void {
    $this->photoc = $photoc;
  }
  function get_photo():string {
    return $this->photoc;
  }

  function set_description($descriptionc):void {
    $this->descriptionc = $descriptionc;
  }
  function get_description():string {
    return $this->descriptionc;
  }

  function set_etat($etat):void {
    $this->etat = $etat;
  }
  function get_etat():string {
    return $this->etat;
  }

  function set_listeEtapes($listeEtapes):void {
    $this->listeEtapes = $listeEtapes;
  }
  function get_listeEtapes():array {
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