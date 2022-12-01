<?php

class Circuit {
  // Properties
  private $idc;
  private $nomc;
  private $photoc;
  private $descriptionc;
  private $etat;
  private $prix;
  private $listeEtapes = array();


  function __construct(int $idc, string $nomc, int $photoc, string $descriptionc, string $etat, int $prix) {
    $this->idc = $idc;
    $this->nomc = $nomc;
    $this->photoc = $photoc;
    $this->descriptionc = $descriptionc;
    $this->etat = $etat;
    $this->prix = $prix;
}

  // Methods
  function getIdc():int {
    return $this->idc;
  }

  function setNom($nomc):void {
    $this->nomc = $nomc;
  }
  function getNom():string {
    return $this->nomc;
  }

  function setPhoto($photoc):void {
    $this->photoc = $photoc;
  }
  function getPhoto():string {
    return $this->photoc;
  }

  function setDescription($descriptionc):void {
    $this->descriptionc = $descriptionc;
  }
  function getDescription():string {
    return $this->descriptionc;
  }

  function setEtat($etat):void {
    $this->etat = $etat;
  }
  function getEtat():string {
    return $this->etat;
  }

  function setPrix($prix):void {
    $this->prix = $prix;
  }
  function getPrix():int {
    return $this->prix;
  }

  function setListeEtapes($listeEtapes):void {
    $this->listeEtapes = $listeEtapes;
  }
  function getListeEtapes():array {
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