function concat(...args) {
    start.count = 0;
    function start() {
        let str = prompt("Enter string: ", "");
        if (str === null)
        return args[0];
        start.count++;
        return args[0].concat(" ", str);
    }
    if (arguments.length == 1)
        return start;
    if (arguments.length == 2) {
        return args[0].concat(" ", args[1]);
    }
}