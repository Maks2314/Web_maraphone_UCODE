<?php
class Avenger {
    public $name, $alias, $gender, $age, $power, $hp = array();
    public function __construct($name, $alias, $gender, $age, $power, $hp) {
        $this->name = $name;
        $this->alias = $alias;
        $this->gender = $gender;
        $this->age = $age;
        $this->power = $power;
        $this->hp = $hp;
    }
    public function __toString() {
        return "name: $this->name\ngender: $this->gender\nage: $this->age\n";
    }
    public function __invoke() {
        echo strtoupper($this->alias)."\n";
        for($i = 0; $i < count($this->power); $i++)  
            echo $this->power[$i]."\n";    
        echo "\n";
    }
}
class Team {
    public $id, $avengers = array();
    public function __construct($id, $arr) {
        $this->id = $id;
        $this->avengers = $arr;
    }
    public function battle($damage): void {
        for($i = 0; $i < count($this->avengers); $i++){
            $this->avengers[$i]->hp -= $damage;
        }
    }
    public function calculate_losses($cloned_team): void {
        $count = 0;
        for($i = 0; $i < count($this->avengers); $i++){
            if($this->avengers[$i]->hp <= 0){
                $count++;
            }
        }
        if($count == 0){
            echo "We haven't lost anyone in this battle!\n";
        }
        else{
            echo "In this battle we lost $count Avenger(s).\n";
        }
    }
}    

/*$arr = array();
$arr[0] = new Avenger("Tony Stark", "Iron Man", "man", 38,["intelligence", "durability", "magnetism"], 120);
$arr[1] = new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,["agility", "martial arts"], 75);
$arr[2] = new Avenger("Carol Danvers", "Captain Marvel", "woman", 27,["durability", "flight", "interstellar travel"], 95);
$team = new Team(1, $arr);
echo"Battle 1\n";
$cloned_team = clone $team;
$damage = 25;
$team->battle($damage);
$team->calculate_losses($cloned_team);
echo"\nBattle 2\n";
$cloned_team = clone $team;
$damage = 80;
$team->battle($damage);
$team->calculate_losses($cloned_team);
*/
?>