

class Flower{
    static amount=0;
    constructor(quantity, price){
        this.quantity=quantity;
        this.price=price;
        Flower.amount=this.quantity * this.price;

    }

    flowers(){
        //console.log( 'We soon will gether beautiful flowers');
        return this.quantity * this.price;
    }
}
class Bouqet_1 extends Flower{
    constructor(roseBouqet){
        super(50, 1500);
        this.roseBouqet=roseBouqet;
       
    }

    firstBouqet(){
        //console.log(`This bouqet with defferent color roses`, this.roseBouqet + `your lover person will be satisfaid`);
        return `This bouqet with defferent color roses ${this.roseBouqet}  your lover person will be satisfaid`;
        
    }
}
class Bouqet_2 extends Flower{
    constructor(interesting){
        super(23,1100);
        this.interesting=interesting;
        
    }
    secondBouqet(){
        console.log(this.interesting + 'these Tulipes make your day wondeful');
    }
}
class Bouqet_3 extends Flower{
    constructor(snowdrop){
        super(35,250);
        this.snowdrop=snowdrop;
        
    }
    thirdBouqet(){
        console.log(this.snowdrop + `when you buy snowdrops you fell that spring is came`);
    }
}
class Bouqet_4 extends Flower{
    constructor(blossom){
        super(35,600);
        this.blossom=blossom;
        
    }
    fourthBouqet(){
        console.log(this.blossom +  'everthing are blossom and it  means spring comes');
    }
}
class Bouqet_5 extends Flower{
    constructor(expansive){
        super(65,1750);
        this.expansive=expansive;
        
    }
    fithBouqet(){
        return `${this.expansive}, and you will improve health`;
    }
}

const myFB= new Bouqet_1(`price is ${Flower.amount}`);
console.log(myFB.flowers());
//console.log(myFB.firstBouqet());
console.log(JSON.stringify(myFB.flowers()));
const secBouq=new Bouqet_2(11,12);
console.log(secBouq.flowers());
secBouq.secondBouqet();
const myfiveB= new Bouqet_5(`it's our luxurry bouqet  and price is ${Flower.amount}`);
console.log( myfiveB);
console.log( myfiveB.flowers());




//ayl tarberak
// let bouqet=[
//     {
//         firtsF:'Rose',
//         secondF:'Tulip',
//         thirdF:'Lilac',
        
//     },
//     {
//         firtsF:'Chamomile',
//         secondF:'Violet',
//         thirdF:'calla'
//     },
//     {
//         firtsF:'Gladiolus',
//         secondF:'Iris',
//         thirdF:'Lily'
//     }
// ];
// let firstbouqet=[];
// bouqet.forEach(function(val, i){
//     firstbouqet[i]=val.firtsF;
    
// });
// console.log(`First bouqet has so beautiful flowers as`, firstbouqet);

// let secondBouqet=bouqet.map(function(val,i){
//     return val.secondF;
// });
// console.log(`Second bouqet costs 10000dram and there are `, secondBouqet);

// let thirdBouqet=bouqet.map(function(val,i){
//     return val.thirdF;
// });
// console.log(`This bouqet uniq and you can buy it`, thirdBouqet);

//

//2



class Vehicle{
    constructor(typeOfCar, speed, countOfDoor, wheel){
        this.type=typeOfCar;
        this._speed=speed;
        this._countOfDoor=countOfDoor;
        this._wheel=wheel;
        
    }

    immanencyOfV(){
        return `There are diferent types of vehicles and we interduce these immanencies  ${this._speed}, ${this._countOfDoor}, ${this._wheel}`;
    }
}

class Bus extends Vehicle{
    #brand
    constructor(){
        super('Bus', 100, 2, 4);
       this.#brand='BMW';
        
    }
busVehicle(){
    return ` Bus speed is: ${this._speed}, count of doors: ${this._countOfDoor}, wheels: ${this._wheel}, and brand:${this.#brand} `;
}
    
}

class Jeep extends Vehicle{
    #brand
    #color
    constructor(){
        super("Jeep",250,4,4);
        this.#brand='Mercedes';
        this.#color='blue';
    }
    jeepcar(){
        return `My car's sppeed is:${this._speed}, count of Doors: ${this._countOfDoor}, whells:${this._wheel},brand:${this.#brand}, color :${this.#color}`;
    }
}

class Truck extends Vehicle{
    #size
    constructor(){
        super('Truck', 150, 2, 6);
        this.#size='big';
    }
    truckFunc(){
        return `This is big Truck and  sppeed is:${this._speed}, count of Doors: ${this._countOfDoor}, whells:${this._wheel},size:${this.#size}`;
    }
}
const bus=new Bus();
console.log(bus.busVehicle());
const jeep=new Jeep();
console.log(jeep.jeepcar());
const truck=new Truck();
console.log(truck.truckFunc());



//3

    class ArrayS extends Array {
        get sum(){
            let sum=0;
            let array=this.forEach(elem => sum += !isNaN(elem)? +elem : 0);
            return sum;
        }

    }
    let a=new ArrayS(35, -4, 'h','3', 14, -5, 'hi', {});
    console.log(a.sum);

    //4

const str = 'In the course of an average lifetime, while sleeping you might eat around 70 assorted insects and 10 spiders, or more.';
String.prototype.toUpper=function(){
    const arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    return arr.join(" ");
}
console.log(str.toUpper());


