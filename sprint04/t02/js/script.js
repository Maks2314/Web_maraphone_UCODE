let head = ["Name", "Strength", "Age"];
let heroes = [
    { name: `Thor`, strength: 95, age: 1000},
    { name: `Captain America`, strength: 98, age: 137 },
    { name: `Hulk`, strength: 90, age: 49 },
    { name: `Captain Marvel`, strength: 99, age: 26 },
    { name: `The Eternals`, strength: 90, age: 5000000 },
    { name: `Spider-Man`, strength: 85, age: 16 },
    { name: `Thanos`, strength: 99, age: 1000 },
    { name: `Black Panther`, strength: 76, age: 53 },
    { name: `Deadpool`, strength: 89, age: 800 }
]//our heroes 
let sort = {
    byName: false,
    byStrength: false,
    byAge: false
}
let notified = document.querySelector('#notified')
notified.innerHTML = "sort by Name, order: ASC"
function createTable(heroesArr) {
    let placeholder = document.getElementById("placeholder");
    let tbl = document.createElement("table");
    tbl.appendChild(createHeader());
    for (let i = 0; i < 9; i++) {
        let row = document.createElement("tr");
        insertCell(`${heroesArr[i].name}`, row);
        insertCell(`${heroesArr[i].strength}`, row);
        insertCell(`${heroesArr[i].age}`, row);
        tbl.appendChild(row);
    }
    placeholder.innerHTML="";
    placeholder.appendChild(tbl);
}// funtion create table 
function insertCell(str, row) {
    let cell = document.createElement("td");
    cell.innerText = str;
    row.appendChild(cell);
}//insert cell function
function createHeader() {
    let row = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        let cell = document.createElement("th");
        cell.innerText = head[i];
        if (i === 0)
            cell.setAttribute("onclick", "byName()");
        else if (i === 1) {
            cell.setAttribute("onclick", "byStrength()");
        }
        else {
            cell.setAttribute("onclick", "byAge()");
        }
        row.appendChild(cell);
    }
    return row;
}// creating a title
function byName() {
    if (sort.byName === false) {
        heroes.sort((a, b) => a.name > b.name ? 1 : -1);
        sort.byName = true;
        sort.byStrength = false;
        sort.byAge = false;
        notified.innerHTML = "sort by Name, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.name < b.name ? 1 : -1);
        sort.byName = false;
        sort.byStrength = false;
        sort.byAge = false;
        notified.innerHTML = "sort by Name, order: DESC"
    }
    createTable(heroes);
}// sorting by Name
function byStrength() {
    if (sort.byStrength === false) {
        heroes.sort((a, b) => a.strength > b.strength ? 1 : -1);
        sort.byName = false;
        sort.byStrength = true;
        sort.byAge = false;
        notified.innerHTML = "sort by Strength, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.strength < b.strength ? 1 : -1);
        sort.byName = false;
        sort.byStrength = false;
        sort.byAge = false;
        notified.innerHTML = "sort by Strength, order: DESC"
    }
    createTable(heroes)
}// sorting by Strength
function byAge() {
    if (sort.byAge === false) {
        heroes.sort((a, b) => a.age > b.age ? 1 : -1);
        sort.byName = false;
        sort.byStrength = false;
        sort.byAge = true;
        notified.innerHTML = "sort by Age, order: ASC"
    }
    else {
        heroes.sort((a, b) => a.age < b.age ? 1 : -1);
        sort.byName = false;
        sort.byStrength = false;
        sort.byAge = false;
        notified.innerHTML = "sort by Age, order: DESC"
    }
    createTable(heroes)
}// sorting by Age
createTable(heroes);