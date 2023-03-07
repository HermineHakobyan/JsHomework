class MakeDate{
    constructor(year=1970, month = 1, day = 0,  hour =0, minute = 0, second = 0 ){
        this._year=year;
        this._month=month;
        this._day=day;
        this._hour=hour;
        this._minute=minute;
        this._second=second;
        this._monthTitle=['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this._dayTitle=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    }
    
    get getYear(){
        return this._year;
    }
    get getMonth(){
        return this._month;
    }
    get monthTitle(){
        return this._monthTitle[this.month];
    }
    set setMonth(value){
        this._year+=Math.floor(value/12);
                this._month=value % 12;
    }
    
    get getDay(){
        return this._day;
    }
    get getDayTitle(){
        return this._dayTitle[this._day];
    }
    
    set setDay(value){
        this._month+=Math.floor(value/30);
        this._day=value % 30;
    }
    
    get getHour(){
        return this._hour;
        
    }
    set setHour(value){
        this._day+=Math.floor(value/24);
        this._hour=value % 24;
    }
    get getMinutes(){
        return this._minute;
    }
    set setMinutes(value){
        this._hour+=Math.floor(value/60);
        this._minute=value % 60;
    }
    get getSeconds(){
        return this._second;
    }
    set setSecond(value){
        this._second+=Math.floor(value/60);
        this._second=value % 60;
    }
    
    
    get run(){
        return `year:${this.year}, month:${this.monthTitle}  day:${this.day}, weekOfDay:${this.dayTitle}, hour:${this.hour}, minute:${this.minute}, second:${this.second}`;
    }

}
let date = new MakeDate();
date.year = 2022;
date.month = 10;
date.day=8;
date.dayTitle=5;
date.hour = 14;
date.minute = 15;
date.second = 30;
console.log(date.run);