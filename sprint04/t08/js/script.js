let output_text = document.getElementById("output");
let phone_number = document.getElementById("phone");
let input_word = document.getElementById("word");
let text_input = document.getElementById("text");
let word_count = document.getElementById("count");
let word_replace = document.getElementById("replace");
let date = new Date();
date.setTime(date.getTime() + (60 * 1000));
function tophone_Number() {
    let phone_ct = getCookie("phone_ct");
    let temp = input_word.value.trim();
    if (temp.match(/^\d{10}$/g)) { 
        output_text.value = `${temp.slice(0,3)}-${temp.slice(3,6)}-${temp.slice(6,10)}`;
    }// branch throgh - 
    else { 
        output_text.value = "Invalid phone number."; 
    }
    document.cookie = `phone_ct=${++phone_ct};expires=${date.toGMTString()};path=/`;// output 
}// function number
function wordCount() {
    let wcount_cnt = getCookie("wcount_cnt");
    let word = input_word.value.trim();
    let text = text_input.value.trim().replace("\n", " ");
    let textArr = text.split(" ");
    let word_cnt = 0;
    if(text != "") {
        for(let i = 0; i < textArr.length; ++i) {
            if(word == textArr[i]) {
                 word_cnt++; 
            }
        }
    }
    output_text.value = `${word_cnt}`;
    document.cookie = `wcount_cnt=${++wcount_cnt};expires=${date.toGMTString()};path=/`;// output 
}// function word count
function wordReplace() {
    let wreplace_cnt = getCookie("wreplace_cnt");
    let word = input_word.value.trim();
    let text = text_input.value.trim().replace("\n", " ");
    let textArr = text.split(" ");
    let count = 0;;
    let result = "";
    if(text != "") {
        for(let i = 0; i < textArr.length; ++i) {
            if(textArr[i] == "") { 
                count--; 
            }
            count++;
        }
        for(let i = 0; i < count; ++i) {
            result += `${word} `;
        }
    }
    output_text.value = `${result}`;
    document.cookie = `wreplace_cnt=${++wreplace_cnt};expires=${date.toGMTString()};path=/`;// output 
}// function word replace
function getCookie(cname) {
    let name = `${cname}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let pi = decodedCookie.split(';');
    for(let i = 0; i < pi.length; i++) {
        let b = pi[i];
        while (b.charAt(0) == ' ') {
            b = b.substring(1);
        }
        if (b.indexOf(name) == 0) {
            return b.substring(name.length, b.length);
        }
    }
    return "";
}
function showCookie() {
    let phone_Number = getCookie("phone_ct");
    if(!phone_Number) {
        phone_number.innerHTML = 0;
    }
    else { 
        phone_number.innerHTML = phone_Number;
    }
    let wordCountNum = getCookie("wcount_cnt");
    if(!wordCountNum) {
        word_count.innerHTML = 0;
    }
    else { 
        word_count.innerHTML = wordCountNum; 
    }
    let wordReplaceNum = getCookie("wreplace_cnt");
    if(!wordReplaceNum) { 
        word_replace.innerHTML = 0; 
    }
    else {
         word_replace.innerHTML = wordReplaceNum; 
    }
}