<?php 
    class StrFrequency {
        public function __construct($string) {
            $this->string = $string;
        }
        public function letterFrequencies()
        {
            $letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $arr = array();
            for($i = 0; $i < strlen($letter); $i++) {
                $count = 0;
                for($j = 0; $j < strlen($this->string); $j++)
                    if(strtoupper($this->string[$j]) === $letter[$i])
                        $count++;
                if($count > 0)
                    $arr[$letter[$i]] = $count;
            }
            return $arr;
        }
        public function wordFrequencies()
        {
            $str = strtoupper($this->string); 
            $words = str_word_count($str, 1);
            $arr = array();
            foreach($words as $word1) {
                $counter = 0;
                foreach ($words as $word2) {
                    if ($word1 === $word2)
                        $counter++;
                }
                $word1 = preg_replace('/[\W]/', '', $word1);
                $arr[$word1] = $counter;
            }
            return $arr;
        }
        public function reverseString()
        {
            $result = preg_replace('/[\W\d]/', ' ', strrev($this->string));
            return $result;
        }
    }
    /*<?php
        Task 05 (test.php)
        Task name: StrFrequency
include 'index.php';
function test($string)
{
    $obj = new StrFrequency($string);
    $symbol = $obj->letterFrequencies();
    echo "Letters in " . $string . "\n";
    foreach ($symbol as $k => $v) {
        echo "Letter ". $k . " is repeated " . $v . " times\n";
    }     
    $symbol = $obj->wordFrequencies();
    echo "Words in " . $string . "\n";
    foreach ($symbol as $k => $v) {
        echo "Word ". $k . " is repeated " . $v . " times\n";
    }
    echo "Reverse the string: " . $string . "\n";
    echo $obj->reverseString() . "\n";
    }
    test("Face it, Harley-- you and your Puddin' are kaput!");
    echo "*************\n";
    test(" Test test 123 45 !0 f HeLlO wOrLd ");
    echo "*************\n";
    test("");
?>*/
?>