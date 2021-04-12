<?php
function total(float $addCount, float $addPrice, float $currentTotal = 0) : float {
    $result = $addCount * $addPrice + $currentTotal;
    return $result;
}
/*<?php


    Task 04 (test.php)
    Task name: Total price


include'index.php';

$basket_total = total(1, 0.1);
$basket_total = total(1, 0.2,  $basket_total);

echo "\nPrice of order is $basket_total\n";

$basket_total = total(3, 1.4,  $basket_total);

echo "\nPrice of order is $basket_total\n";
?>
*/
?>