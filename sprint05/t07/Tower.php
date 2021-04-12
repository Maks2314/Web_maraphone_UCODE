<?php
include "Building.php";

class Tower extends Building{
    protected $elevator;
    protected $arc_Capacity; 
    protected $height;

    public function hasElevator() {
        return $this->elevator;
    }

    public function setElevator(bool $elevator) {
        $this->elevator = $elevator;
    }

    public function setArcCapacity(int $arc_Capacity) {
        $this->arc_Capacity = $arc_Capacity;
    }

    public function getArcCapacity() {
        return $this->arc_Capacity;
    }

    public function getHeight() {
        return $this->height;
    }

    public function setHeight(float $height) {
        $this->height = $height;
    }

    public function getFloorHeight(): float {
        return $this->height / $this->getFloors();
    }

    public function toString() : string {
        $props = ["Elevator : " . (($this->elevator) ? "+" : "-"),
            "Are reactor capacity : " . $this->arc_Capacity,
            "Height : " . $this->height,
            "Floor height : " . $this->getFloorHeight(),
        ];
        $str = parent::toString();
        foreach ($props as $p)
            $str = $str . $p . "\n";
        return parent::toString() . $str;
    }
}
/*require_once(__DIR__ . "/Building.php");
require_once(__DIR__ . "/Tower.php");
$StarkTower = new Tower(93, "Different", "Manhattan, NY");
$StarkTower->setElevator(true);
$StarkTower->setArcCapacity(70);
$StarkTower->setHeight(1130);
echo $StarkTower->toString();*/
?>