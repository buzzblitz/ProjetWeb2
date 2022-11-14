<?php
class CircuitTest extends \PHPUnit\Framework\TestCase{
    public function testajouterEtapes(){
        $unEtape = new Model\Etape;
        $unCircuit = new Model\Circuit;
        
        $unCircuit->ajouterEtape($unEtape);
        $this->assertEquals(1,count($unCircuit->get_listeEtapes()));
    }
    public function testset_name(){
        $unCircuit = new Model\Circuit;
        $unNom = "unNom";
        $unCircuit->set_name($unNom);
        $this->assertEquals("unNom",$unCircuit->get_name());
    }
    

}

?>