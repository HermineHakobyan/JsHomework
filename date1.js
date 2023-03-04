

function Date(year, month,  day, date, hours, minutes, seconds, millisecond){
    if(!year){
        this.year=2023;
    }
    if(!month && typeof year=== 'number'){
        this.year=1970;
        this.second=year;
    }
    this._year=year;
    this._month=month;
    this._day=day;
    this._date=date;
    this._hour=hours;
    this._minute=minutes;
    this._second=seconds;
    this._millisecond=millisecond;
    this._monthsDay=[31,28, 31,30,31,30,31,31,30,31,30,31];
    this._monthTitle=['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this._dayTitle=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        this.getCurrentYear=function(){
            return this.year;
        };
        this.getMonth=function(){
            if(month<10){
                return `0${this.month}`;
            }else{
                return this._month;
            }
            
        };

        this.getDay=function(){
            if(day<10){
                return '0' + day;
            }else{
                return this._day;
            }
            
        };

        this.monthDays=function(value){
            while(value>this.monthDays[this._date]){
                this._month(this.monthsDay()+1);
                value-=this._monthDays[this._date];
            }
            this._date=value;
        };
        

        Object.defineProperty(this, 'year',{
            get:()=>{
                return this._year;
            },
            set:(value)=>{
                this._year=value;
            }
        })
        Object.defineProperty(this, 'month',{
            get:()=>{
                return this._monthTitle[this._month];
            },
            set:(value)=>{
                this._year+=Math.floor(value/11);
                this._month=value % 11;
            }
        });
        Object.defineProperty(this, 'day',{
            get:()=>{
                return this._dayTitle[this._day];
            },
            set:(value)=>{
                this._month+=Math.floor(value/30);
                this._day=value%30;
            }

        });

        Object.defineProperty(this, 'date',{
            get:()=>{
                return this._monthsDay[this._date];
            },
            set:(value)=>{
                this._day+=Math.floor(value/30);
                this._date=value % 30;
            }

        })

        Object.defineProperty(this,'hour',{
            get:()=>{
                return this._hour;
            },
            set:(value) =>{
                this._day+=Math.floor(value/24);
                this._hour=value % 24;
            }
        });

        Object.defineProperty(this,'minute',{
            get:()=>{
                return this._minute;
            },
            set:(value) =>{
                this._hour +=Math.floor(value/60);
                this._minute=value % 60;
            },
           
        });
        Object.defineProperty(this, 'second',{
                get:()=>{
                    return this._second;
                },
                set:(value)=>{
                    this._minute+=Math.floor(value/60);
                    this._second=value % 60;
                }
        });
        Object.defineProperty(this, 'millisecond',{
            get:()=>{
                return this._millisecond;
            },
            set:(value)=>{
                this._second+=Math.floor(value/1000);
                this._millisecond=value % 1000;

            }
        });

        this.toReturnAll=function(){
            return `Year: ${this.year}, month: ${this.month} , day:${this.day}, daysOfMonth:${this.date}, hour:${this.hour}, minute:${this.minute},  second:${this.second}, millisecond:${this.millisecond} `;

        };
        

}

let date= new Date(2023, 11, 6, 03, 15, 60, 45,40);
console.log(date.toReturnAll());





