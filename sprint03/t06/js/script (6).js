console.log(`Enter 'exit' to exit.`)
let value = 1;
while (true) {
    let input_number = prompt(`Previous result: ${value}. Enter a new number:`);
    if (+input_number){
        value += (+input_number);
    }
    else{
    console.error('Invalid number!');
    }
    if (input_number === 'exit'){
    break;
    }
    if (value > 10000){
    value = 1;   
    } 
}