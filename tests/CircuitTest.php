<?php
class CircuitTest extends \PHPUnit\Framework\TestCase{
    public function testajouterEtapes(){
        $unEtape = new Etape();
        $unCircuit = new Circuit();
        
        $unCircuit->ajouterEtape($unEtape);
        $this->assertEquals(1,count($unCircuit->get_listeEtapes()));
    }
    public function testset_name(){
        $unCircuit = new Circuit();
        $unNom = "unNom";
        $unCircuit->set_name($unNom);
        $this->assertEquals("unNom",$unCircuit->get_name());
    }
    

}

?>