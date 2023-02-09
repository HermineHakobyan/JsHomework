
function Bags(price, color,quantity="25"){
    this.price=price;
    this.color=color;
    this.quantity=quantity;
    this.lowPrice=10000;
    
}

function Jewelry(price, type){
    this.price=price;
    this.type=type;

}

function Silver (price,weight){
    this.price=price;
    this.weight=weight;
}
function Shop(brand){
    if(!new.target){
        console.log("it isn't  brand");
    }
    this.brand=brand;
    this.isOpen=true;
    this.bags=[];
    this.jewelries=[];
    this.silver=[];   
    
    

    this.bagAssortment= function(price, color, quantity){
        const bag = new Bags(price, color, quantity);
        //bag.lowerPrice(45000);
        this.bags[this.bags.length]= bag;

    };
    this.JewelryAssortment=function(price, type){
        const jew=new Jewelry(price, type);
        this.jewelries[this.jewelries.length]=jew;
    };
    this.silverAssortment=function(price, weight){
        const sil=new Silver(price, weight);
        this.silver[this.silver.length]=sil;
    }
}


let Hermani=new Shop("our barnd's name is Hermani");
console.log(Hermani);

Hermani.bagAssortment(25000, "red", 10);
Hermani.bagAssortment(50000, "black and white", 15);
console.log(Hermani.bags);
Hermani.JewelryAssortment("10000-25000", "no brand");
Hermani.JewelryAssortment("30000-65000", "famous brands");
console.log(Hermani.jewelries);
Hermani.silverAssortment(25000, 60);
console.log(Hermani.silver);
