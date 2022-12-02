<?php

class Activite {
    private $ida;
    private $idj;
    private $noma;
    private $tempsdebut;
    private $tempsfin;
    private $descriptiona;

    function __construct(int $ida, int $idj, string $noma, int $tempsdebut, string $tempsfin, string $descriptiona) {
        $this->ida = $ida;
        $this->idj = $idj;
        $this->noma = $noma;
        $this->tempsdebut = $tempsdebut;
        $this->tempsfin = $tempsfin;
        $this->descriptiona = $descriptiona;
    }

    function getIda():int {
        return $this->ida;
    }
    function getIdj():int {
        return $this->idj;
    }
    function getNom():string {
        return $this->noma;
    }
    function getTempsDebut():string {
        return $this->tempsdebut;
    }
    function getTempsFin():string {
        return $this->tempsfin;
    }
    function getDescriptiona():string {
        return $this->descriptiona;
    }

    function setIdj($idj):void {
        $this->idj = $idj;
    }
    function setNom($noma):void {
        $this->noma = $noma;
    }
    function setTempsDebut($tempsdebut):void {
        $this->tempsdebut = $tempsdebut;
    }
    function setTempsFin($tempsfin):void {
        $this->tempsfin = $tempsfin;
    }
    function setDescriptiona($descriptiona):void {
        $this->descriptiona = $descriptiona;
    }
}
?>