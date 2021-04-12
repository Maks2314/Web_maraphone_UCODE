let input = document.getElementById("text");
function addToStorage() {
    let date = new Date();
    date.getTime();
    let days = date.getDate();
    let months = date.getMonth();
    let years = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let i = 0;
    while(localStorage.getItem(`input_${i}`)) { 
        i++; 
    }
    if(input.value != "") { 
        localStorage.setItem(`input_${i}`, ` -->  ${input.value} [${days}.${months}.${years} ${hour}:${min}:${sec}]`);
        document.getElementById("history").innerHTML += localStorage.getItem(`input_${i}`) + '<br>';
    }
}// add elements
function loadStorage() {
    i = 0;
    if(!localStorage.getItem(`input_${i}`)) {
        document.getElementById("history").innerHTML = '';
    } else {
        while(localStorage.getItem(`input_${i}`)) {
            document.getElementById("history").innerHTML += localStorage.getItem(`input_${i}`) + '<br>';
            i++;
        }
    }
}// add storage
function clearStorage() {
    localStorage.clear();
    loadStorage();
}// clear elements