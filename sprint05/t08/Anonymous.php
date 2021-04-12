<?php
    function get_anonymous($name, $alias, $affiliation)
    {
        return new class ($name, $alias, $affiliation) {
            public function __construct($name, $alias, $affiliation) {
                $this->name = $name;
                $this->alias = $alias;
                $this->affiliation = $affiliation;
            }

            public function getName(){
                return $this->name;
            }

            public function setName(string $name){
                $this->name = $name;
            }
            
            public function getAlias(){
                return $this->alias;
            }

            public function setAlias(string $alias){
                $this->alias = $alias;
            }

            public function getAffiliation(){
                return $this->affiliation;
            }

            public function setAffiliation(string $affiliation){
                $this->affiliation = $affiliation;
            }
        };
    }
    /*
    <?php
    /*
        Task 08 (test.php)
        Task name: Anonymous
    
require_once(__DIR__ . "/Anonymous.php");
$mandarin = get_anonymous("Unknown", "Mandarin", "Ten Rings");
print(implode("\n", array("name" => $mandarin->getName(),
    "alias" => $mandarin->getAlias(), "affiliation" => $mandarin->getAffiliation())));
?>
*/
?>
