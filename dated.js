function addZero(d){
    return (d<10)? '0'+d :d;
}
const days=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function getTime(t=new Date()){
    let Y=t.getFullYear();
    let M=addZero( t.getMonth()+1);
    let D=addZero(t.getDate());
    let d= days[t.getDay()];
    let h=addZero(t.getHours());
    let m=addZero(t.getMinutes());
    
    console.log(Y,M, D, d, h,m);
    return `${Y}.${M}.${d} ${h} : ${m} (${d})`;
}
console.log(getTime());


//



let d=new Date();
function formatTitleTime(d){
    
    const day=d.getDay();
    const dayTitle=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    
    const date=(d.getDate()).toString().padStart(2, '0');
    const month=d.getMonth();

    const monthTitle=['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year=d.getFullYear();
    const hour=(d.getHours()).toString().padStart(2, '0');
    const minute=(d.getMinutes()).toString().padStart(2, '0');


    return ` ${dayTitle[day]}, ${date}, ${monthTitle[month]}, ${year}, ${hour}:${minute}`;
}
console.log(formatTitleTime(d));


//
let time={
    title:"New post",
    content: "Post Content",
    date: new Date('2023-02-25  22:33').toISOString()
 }
 console.log(time.date);
 console.log(new Date (time.date).toLocaleString());
 console.log(time.date.toLocaleString());
 let jsonTime=  JSON.stringify(time);
 console.log(jsonTime);
 let timeFormJson=JSON.parse(jsonTime);
 console.log(timeFormJson.date);


 //

 let d1=new Date();
  let interestingType={
        era:'short',
        year:'numeric',
        month:'2-digit',
        day:'numeric',
        weekday:'short',
        timezone:'UTC',
        hour:'numeric',
        minute:'numeric',
        //second:'numeric',
    };
    
    
    console.log ( d1.toLocaleString('en-US', interestingType));
    

    //gtnel orer@

let date1=new Date("02/06/2023");
let date2=new Date("02/20/2023");

let differTime= date2.getTime()-date1.getTime();
let differDays=differTime/(1000*3600*24);
console.log(`different of days: ${differDays}`);



//get and set 

const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDay());
console.log(date.getDate());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString());
console.log(date.toDateString());



const date = new Date();
console.log(date.getHours());

//set

const dateSet=new Date();
dateSet.setFullYear(2021);
dateSet.setMonth(7);
dateSet.setDate(1);
dateSet.setHours(14);
dateSet.setMinutes(45);
console.log(dateSet);


// toiso
let d=new Date('01/01/2023 10:15');
console.log(d);
console.log(d.toISOString());

d=new Date('2023-01-01T06:15:00.000Z');
console.log(d);



