let beginRange = +prompt('Enter the start of the range(1...)');
let endRange = +prompt('Enter end of range(...100)');

checkDivision(beginRange, endRange);

function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        let description = " - "
        if (i % 2 === 0) {
            description = " is even"
        }
        if (i % 10 === 0) {
            description = description.concat(", a multiple of 10")
        }
         if (i % 3 === 0 && i % 2 !== 0) {
            description = " is a multiple of 3"
        }
        else if (i % 3 === 0) {
            description = description.concat(", a multiple of 3")
        }
        console.log(i + description + "\n")
    }
}