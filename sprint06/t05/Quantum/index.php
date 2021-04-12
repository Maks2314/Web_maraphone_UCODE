<?php
namespace Space\Quantum;
use \DateTime;
function calculate_time() : array {
    $past = new DateTime("1939-01-01");
    $current = new DateTime("now");
    $days = $past->diff($current)->format("%a") / 7;
    $quantumYears = floor($days / 365);
    $quantumMonths = floor(($days % 365) / 30);
    $quantumDays = floor(($days % 365) % 30);
    return [$quantumYears, $quantumMonths, $quantumDays];
} 
?>