

class Vehicle{
    _doorCount = 4
    _wheels = 10
    _quality='good'
    door=0;
    constructor(typeOfCar, speed){
        this.type=typeOfCar;
        this._speed=speed;
        
    } 
    countDoor(door){
        if (door < this._doorCount){
            this.door = this._doorCount
            throw new Error('this car is not good');
        }else{
            return this.door = door;
        } 
    }

    wheelAttrition(wheel){
        if(wheel < this._wheels){
            this.wheel = this._wheels
            throw new Error('these wheels are more attritoned, need to change');
        }else{
            return this.wheel =wheel;
        }
    }
    qualityEstimate(estim){
        if(this._quality !== 'good' ){
            this._quality =estim;
        }else{
            this._quality = 'bad';
            throw new Error ('not buy this car it has not good qualit');
        }
    }



    immanencyOfV(){
        return `There are diferent types of vehicles and we interduce these immanencies  ${this._speed}, ${this._countOfDoor}, ${this._wheel}`;
    }

    set door(val){
        this.countDoor =val ;
    }
    get door(){
        try {
            this.countDoor(this._doorCount);
        }catch (error){
            console.log(error);
        }return this._doorCount;
    }
    set attr (arg) {
        this.wheelAttrition =arg;
    }
    get attr(){
        try{
            this.wheelAttrition(this._wheels);
        }catch(error){
            console.log(error);
        }return this._wheels;
    }
    set estimate (arg){
        this.qualityEstimate=arg;
    }
    get estimate(){
        try{
            this.qualityEstimate(this._quality);
        }catch(error){
            console.log(error);
        }return this._quality;
    }
    
}


class Bus extends Vehicle{
    #brand;
    newBus=true;
    
    constructor(message){
        super('Bus', 100, 2, 4);
       this.#brand='BMW';
       this.message=message;
       this.name='old bus';
       
        
    }
busError(value){
    if(value == false){
        throw new Error ('no need to sit that old bus');
    }
}


busVehicle(){
    return ` Vechiles is : ${this.type}, speed is: ${this._speed}, count of doors: ${this._doorCount}, wheels attretion is: ${this._wheels}, and brand:${this.#brand} `;
}
    
}
class Jeep extends Error{
    constructor(message) {
        super(message);
        this.name = 'Error name';
        
    }
    
}
function jeepError(){
    throw new Jeep (` it is not good jeep`);
}

class VechilErr extends Error{
    constructor(message){
        super(message);
        this.name='vechilre Error';
    }
    
}
function testError(){
    throw new VechilErr ('oh, Error');
}

try {
    testError();
}
catch(err){
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}
finally{
    console.log('finally');
}



const vehicle = new Vehicle();
//console.log(vehicle.countDoor(2));
console.log(vehicle.qualityEstimate('good'));

const bus=new Bus();
try{
    bus.busError('false');
    console.log('it is good bus');
}catch(err){
    console.log(err.name);
    console.log(err.message);
    //throw new Error (`miss this bus it is not good`);
}finally{
    console.log(`it is better to go in car`);
}

let jeep = new Jeep();

try{
    jeepError();
}
catch(err){
    console.log(err.message);
}finally{
    console.log(err.name)
}

//console.log(bus.busVehicle());