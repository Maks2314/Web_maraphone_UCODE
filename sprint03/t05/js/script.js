let guestList = new WeakSet();
let arr = [
    guest1 = {
        name:'Maks'
    },
    guest2 = {
        name:'Vlad'
    },
    guest3 = {
        name:'Igor'
    },
    guest4 = {
        'Vlad':'Vlad'
    }
    ];
    guestList.add(guest1);
    guestList.add(guest2);
    guestList.add(guest3);
    guestList.add(guest4);
    let menu = new Map();
    menu.set('Okroshka',1.33);
    menu.set('Oatmeal',1.26);
    menu.set('Olivie', 2.2);
    menu.set('Pizza', 2.5);
    menu.set('Port steak',8.1);
    menu.set('Chicken kebab',6.8);
    let bankVault = new Set();
    client1={
        id:1,
        fullName:'Maks Bunin',
        card:102030405
    }
    client2={
        id:2,
        fullName:'Vlad Bunin',
        card:506070809
    }
    client3={
        id:3,
        fullName:'Igor Bunin',
        card:100102030
    }
    bankVault.add(client1);
    bankVault.add(client2);
    bankVault.add(client3);
    let coin = new WeakMap();
    const coin1 = {
        value:1
    };
    const coin2 = {
        value:5
    };
    const coin3 = {
        value:10
    };
    const coin4 = {
        value:20
    };
    const coin5 = {
        value:25
    };
    const coin6 = {
        value:40
    };
    const coin7 = {
        value:50
    };
    coin.set(coin1,'1 cent');
    coin.set(coin2,'5 cents');
    coin.set(coin3,'10 cents')
    coin.set(coin4,'15 cents');
    coin.set(coin5,'20 cents') 
    coin.set(coin6,'30 cents')
    coin.set(coin7,'35 cents');
let fullName=prompt('Enter your name');
let check = false;
for(let i = 0; i < arr.length ; i++){
    if(arr[i].name === fullName && guestList.has(arr[i])){
    alert("You are on the guest list, welcome to visit us");
    check = true;
    }
}
if(!check){ 
    let answer = prompt(`${fullName}, unfortunately you are not on the guest list`);
}
else{
    let decision = prompt('Write the dish you want to choose. Today we have Okroshka,Oatmeal,Olivie, Port steak, Chicken kebab');
    while(!menu.has(decision)){
        decision = prompt(`We don't have this dish on the manu yet,please choose another dish`);
    }
    if(decision == 'yes'){
        let allMenu = "";
        for(let food of menu){
            allMenu += `${food}$\n`;
        }
        alert(`${allMenu}`);
    }
    else if(menu.has(decision)){
        alert(`${decision} ${menu.get(decision)} $`);
    }
}
function forSet(bankVault){
    var cr = prompt("Type your credential number: ");
    for(const c of bankVault){
        if(c.card === +cr){
            alert(`Client:\nID: ${c.id}\nFull Name: ${c.fullName}\nBank Card: ${c.card}`);
        }
    }
}
forSet(bankVault);
alert(`coin1:\n${coin1.value}\ncoin2:\n${coin2.value}\ncoin1:\n${coin3.value}\ncoin2:\n${coin4.value}coin1:\n${coin5.value}\ncoin2:\n${coin6.value}\ncoin1:\n${coin7.value}\n`)