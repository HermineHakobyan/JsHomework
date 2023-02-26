let soldierPlayer={
    playerName:'user',
    life:5,
    health:'100%',
    damaged:'0%',
    weapon:0,
    country:'Armenia',
    situation(){
        console.log("It's just start sir");
    }
}

const firstPlayer={
    playerName:'John',
    weapon:5,
};

const secondPlayer={
    health:'50%',
    country:'USA'

};

firstPlayer.__proto__ =soldierPlayer;
secondPlayer.__proto__=soldierPlayer;


console.log(`Hello I am the first Player my name is ${firstPlayer.playerName} my damaged is ${firstPlayer.damaged} and I have ${firstPlayer.weapon} weapon, my health is ${firstPlayer.health}`);
console.log(`Hello I am the second player, I am from ${secondPlayer.country} I have ${secondPlayer.weapon} weapon and I have ${secondPlayer.life}`);

firstPlayer.situation();


//second way proto

Object.setPrototypeOf(firstPlayer, soldierPlayer);
console.log(firstPlayer.country);
console.log(`Hello I am the first Player my name is ${firstPlayer.playerName} my damaged is ${firstPlayer.damaged} and I have ${firstPlayer.weapon} weapon, my health is ${firstPlayer.health}`);
firstPlayer.situation();
const thirdPlayer=Object.create(soldierPlayer);
console.log(`I am third player my playerName is ${thirdPlayer.playerName}, I have ${thirdPlayer.life} lifes, I am from ${thirdPlayer.country}`);


