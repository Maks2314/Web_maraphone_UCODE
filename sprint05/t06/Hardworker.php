<?php 
    class HardWorker 
    {
        private $name, $age, $salary;

        public function setName(string $name)
        {
            $this->name = $name;
        }
        public function getName()
        {
            return $this->name;
        }
        
        public function setAge($age)
        {
            if ($age >= 1 && $age <= 100) {
                $this->age = $age;
                return true;
            }
            else return false;
        }

        public function getAge()
        {
            return $this->age;
        }

        public function setSalary($salary)
        {
            if ($salary >= 100 && $salary <= 10000) {
                $this->salary = $salary;
                return true;
            }
            else return false;
        }
        public function getSalary()
        {
            return $this->salary;
        }

        public function toArray() {
            $arr = array();
            $arr[name] = $this->name;
            $arr[age] = $this->age;
            $arr[salary] = $this->salary;
            return $arr;
            //return arr('name' => $this->name, 'age' => $this->age, 'salary' => $this->salary,);
        }
    }
    /*<?php


    Task 06 (test.php)
    Task name: HardWorker

include'HardWorker.php';

$Bruce= new HardWorker();

$Bruce->setName("Bruce");

echo $Bruce->getName() . "\n";

$Bruce->setAge(50);
$Bruce->setSalary(1500);

print_r($Bruce->toArray());

$Bruce->setName("Linda");
$Bruce->setAge(140);

print_r($Bruce->toArray());
?>*/
?>