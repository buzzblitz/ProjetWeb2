<?php
declare (strict_types=1);

class Film {
    private $idf;
    private $titre;
    private $duree;
    private $realisateur;
    private $pochette;

    function __construct(int $idf, string $titre, int $duree, string $realisateur, string $pochette) {
        $this->idf = $idf;
        $this->titre = $titre;
        $this->duree = $duree;
        $this->realisateur = $realisateur;
        $this->pochette = $pochette;
    }

    function getIdf():int {
        return $this->idf;
    }
    function getTitre():string {
        return $this->titre;
    }
    function getDuree():int {
        return $this->duree;
    }
    function getRealisateur():string {
        return $this->realisateur;
    }
    function getPochette():string {
        return $this->pochette;
    }

    function setIdf($idf):void {
        $this->idf = idf;
    }
    function setTitre($titre):void {
        $this->titre = $titre;
    }
    function setDuree($duree):void {
        $this->duree = $duree;
    }
    function setRealisateur($realisateur):void {
        $this->realisateur = $realisateur;
    }
    function setPochette($pochette):void {
        $this->pochette = $pochette;
    }
}
?>