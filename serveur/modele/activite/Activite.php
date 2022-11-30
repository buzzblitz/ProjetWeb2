<?php

class Activite {
    private $ida;
    private $idj;
    private $nom;
    private $tempsDebut;
    private $tempsFin;
    private $descriptiona;

    function __construct(int $ida, int $idj, string $nom, int $tempsDebut, string $tempsFin, string $descriptiona) {
        $this->ida = $ida;
        $this->idj = $idj;
        $this->nom = $nom;
        $this->tempsDebut = $tempsDebut;
        $this->tempsFin = $tempsFin;
        $this->descriptiona = $descriptiona;
    }

    function getIda():int {
        return $this->ida;
    }
    function getIdj():int {
        return $this->idj;
    }
    function getNom():string {
        return $this->nom;
    }
    function getTempsDebut():string {
        return $this->tempsDebut;
    }
    function getTempsFin():string {
        return $this->tempsFin;
    }
    function getDescriptiona():string {
        return $this->descriptiona;
    }

    function setIdj($idj):void {
        $this->idj = $idj;
    }
    function setNom($nom):void {
        $this->nom = $nom;
    }
    function setTempsDebut($tempsDebut):void {
        $this->tempsDebut = $tempsDebut;
    }
    function setTempsFin($tempsFin):void {
        $this->tempsFin = $tempsFin;
    }
    function setDescriptiona($descriptiona):void {
        $this->descriptiona = $descriptiona;
    }
}
?>