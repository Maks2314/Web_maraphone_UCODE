let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum); // will return 1.08

let sum1 = total1(1, 0.3);
sum1 = total1(1, 0.4, sum1);
sum1 = total1(1, 0.88, sum1);
console.log(sum1); // will return 1.58

let sum2 = total2(1, 0.4);
sum2 = total2(1, 0.5, sum2);
sum2 = total2(1, 0.98, sum2);
console.log(sum2); // will return 1.88
