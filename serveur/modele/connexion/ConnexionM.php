<?php

namespace Model;

class ConnexionM {
  private $idm;
  private $courriel;
  private $pass;
  private $etat;
  private $role;

    //Constructor
    function __construct(int $idm, string $courriel, string $pass, string $etat, string $role) {
      $this->idm = $idm;
      $this->courriel = $courriel;
      $this->pass = $pass;
      $this->etat = $etat;
      $this->role = $role;
    }
  
    // Methods

  function getIdm():int {
      return $this->idm;
  }
  function getCourriel():string {
      return $this->courriel;
  }
  function getPass():string {
      return $this->pass;
  }
  function getEtat():string {
      return $this->etat;
  }
  function getRole():string {
    return $this->role;
  }

  function setIdm():void {
    $this->idm = $idm;
  }
  function setCourriel($courriel):void {
      $this->courriel = $courriel;
  }
  function setPass($pass):void {
      $this->pass = $pass;
  }
  function setEtat($etat):void {
      $this->etat = $etat;
  }
  function setRole($role):void {
    $this->role = $role;
  }
    
  }

?>