<?php
    function checkDivision($startRange = 1, $endRange = 60) : void{
        for($i = $startRange; $i <= $endRange; $i++){
            $res = "The  number ";
            $check = false;
            $res .= $i;
            if($i % 2 == 0){
                $res .= "is divisible by 2";
                $check = true;
            }
            if($i % 3 == 0){
                if($check){
                    $res .= ",";
                }
                $res .= "is divisible by 3";
                $check = true;
            }
            if($i % 10 == 0){
                if($check){
                    $res .= ",";
                }
                $res .= "is divisible by 10";
                $check = true;
            }
            if(!$check){
                $res .= " - ";
            }
            $res .= "\n";
            echo($res);
        }
    }
/*
        Task 02 (test.php)
        Task name: Range
    

    include 'index.php';

    echo "*** Range is 3 - 7 checkDivision(3,7) ***\n";
    checkDivision(3,7);

    echo "\n*** Range is 58 - ... checkDivision(58) ***\n";
    checkDivision(58);

    echo "\n*** Range is ... - ... checkDivision() ***\n";
    checkDivision();
*/
?>
