//string methods

//length, slice, substring, search

const usName="say your name please otherwise we can't let you to enter";
let leng=usName.length;
console.log(leng);

let slice=usName.slice(0,14);
console.log(slice);

let subst=usName.substring(14,21);
console.log(subst);
let subst1=usName.substring(21);
console.log(subst1);
let search=usName.search("pl");
console.log(search);

console.log(slice + subst);



//indexOf, lastIndex, includes

let wellcome="dear clients we are very happy to see our clients here and our clients always right. ";

let cle="clients";

let count=0;
let index=wellcome.indexOf(cle);
while(index!==-1){
    count++;
    index=wellcome.indexOf(cle , index +1);
}
console.log(count);

let length=wellcome.length();
console.log(length);
let lastIndex=wellcome.lastIndexOf("clients");
console.log(lastIndex);



let str = 'We are so Sad and the World is in peril';
let substr = 'L';
console.log(str.length);
let index = str.toUpperCase().lastIndexOf(substr);

console.log(index); 


let aboutClass = "third class is one of the best & we like it";

console.log(aboutClass.includes('&'));

//endsWith, endStart, padEnd, padStart

const title = 'Anna and Karo climbed to the Hill';

// console.log(title.slice(9));
// console.log(title.startsWith('Anna'));
// console.log(title.startsWith('Karo'));
// console.log(title.startsWith('Karo', 9));
// console.log(title.startsWith('climbed', 14));

console.log(title.endsWith('climbed', 21));
console.log(title.endsWith('Karo', 13));
console.log(title.endsWith('Hill'));
console.log(title.endsWith('climbed'));


let trim = '    I wish that the word changed    ';
let result = trim.trim();
let result_1=trim.trimStart();
let result_2=trim.trimEnd();

console.log(trim.trimStart());

console.log(result);
console.log({result});
console.log({result_1});
console.log({result_2});

let pad="dear my ";
let padEnd =pad.padEnd(15, "friends");
console.log(padEnd);



let pad="dear my ";
let padStart =pad.padStart(16, "friends ");
console.log(padStart);


//contact, replace, replaceAll

const hi= "hello all my dear";

let addHi=hi.concat('', ' colleagues');

console.log(addHi);


const worker= 'Karo Karapetyan is a good worker ';
const newWorker = worker.replace('Karo Karapetyan' ,'Syuzana Hakobyan');
console.log(newWorker);


let say='his beauty  and his mood will surprise you';
let newSay=say.replace(/his/g, 'her');
console.log(newSay);

let tryIt="there are two good students anna and karo";
let tryReplace=/anna|karo/gi;

let tryNewReplace=tryIt.replace(tryReplace,(op)=>{
    console.log({op});
    return op.toUpperCase();
});
console.log(tryNewReplace);


let strStr= "Oh, it's too hard  overcome, it's too hard  win, it's too hard love";
console.log(strStr.replaceAll("it's too hard", "it's enough easy"));

console.log(strStr.charAt(13));



//Methods of Number


let num=896;
num.toString();
console.log(num);
console.log((100+num).toString());

//parseInt

let x='20.9';
let x_1=parseInt(x);
console.log(x_1);


let people= '7 boys';
let boys=parseInt(people);
console.log(boys);

let girl='girle 15';
let girles=parseInt(girl);
console.log(girles);

 
//parseFloat

let y='55.7';
let y_1=parseFloat(y);
console.log(y_1);

let output='5.10  4.45';
let result=parseFloat(output);
console.log(output);


let x = '2.49 3.99';
let num = parseFloat(x);
console.log(num)  ; 

let girl='girle 15';
let girles=parseFloat(girl);
console.log(girles);


let fix=5.693;
console.log(fix.toFixed(0));
console.log(fix.toFixed(1));
console.log(fix.toFixed(2));
console.log(fix.toFixed(3));
console.log(fix.toFixed(4));
console.log(fix.toFixed(6));


let prec=85.25;
console.log(prec.toPrecision());
console.log(prec.toPrecision(5));
console.log(prec.toPrecision(1));
console.log(prec.toPrecision(2));
console.log(prec.toPrecision(3));
console.log(prec.toPrecision(4));
console.log(prec.toPrecision(6));


let num=50.05;
let num_1=num.valueOf();
console.log(num_1);




let num_3=Number.MAX_VALUE;
console.log(num_3);

let num_3=Number.MIN_VALUE;
console.log(num_3);

let num_3=Number.NEGATIVE_INFINITY;
console.log(num_3);

let num_3=Number.POSITIVE_INFINITY;
console.log(num_3);


//Array Methods

let array=["Ani", "Armen", "Syuzi", "Susan"];

let array1=["Albina", "Karen", "Ghukas", "Armen"];

console.log(array.concat(array1));


let fruites=["tandz", "xndzor", "apelsin", "Mandarin"]
console.log(fruites.length);
const pushEl= fruites.push("mrger");
console.log(pushEl);
console.log(fruites);

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

for (const color of cmyk) {
  colors.push(color);
}

console.log(colors);


let numbers=[ 30, 40, 50, 60,70,80];
const addNumb=numbers.unshift(10, 20,);
console.log(numbers);

let numbers1=[ 30, 40, 50, 60,70,80];
const pop=numbers1.pop();
const shift=numbers1.shift();
console.log(numbers1);

let fruites1=["tandz", "xndzor", "apelsin", "Mandarin"]
const splice=fruites1.splice(3,4);
console.log(fruites1);


let numbers = [1,2,3,4,5];
let newNumbers = numbers.slice(0,3);
console.log(newNumbers);


let scores=[100, 150, 200, 250, 300, 350, 400, 450, 500];
console.log(scores.indexOf(400));
console.log(scores.lastIndexOf(400));


let banks=[{
name:'ACBA',
credit:500
},
{
name:'AMERIA',
credit:700

},
{
    name:'HSBC',
   credit:300
},
{
    name:'VTB',
     credit:800
}];
console.log(banks.find(b=>b.credit>500));


const products=[

    {
        type:'computer',
      price:2000
    },
    {
        type:'laptop',
      price:2590
    },
    {
        type:'phone',
        price:1999
    },

];
const index=products.findIndex(p=>p.price>2100);
console.log(index);


const num_1=[65, 75, 95, 105, 20, 3];
const newNum=num_1.map(multipy);

function multipy(a){
    return a * 2;
}

console.log(newNum);
console.log(num_1);


const pupiles=[
    {
        name:"Anna",
        mark:10
    },
    {
        name:"Karo",
        mark:15
    },
    {
        name:"Ani",
        mark:5
    },
    {
        name:"Ghukas",
        mark:20
    }
];

let bestPupile=pupiles.filter(function(p){
    return p.mark >10
});
console.log(bestPupile);


let savingMoney = [
    {
      year: 'first',
      bank: 2,
      each: 300,
    },
    {
      year: 'second',
      bank: 3,
      each: 150,
    },
    {
      year: 'third',
      bank: 2,
      each: 350,
    },
  ];

  let totalSaving = savingMoney.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.bank * currentValue.each;
  }, 0);

  console.log(totalSaving);


  const tiv = [4, 7, 3];

let sum = tiv.reduceRight(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
});

console.log(`Result:${sum}`);

//every
const tiv1 = [-4, -7, -3];

const res =tiv1.every(function(t){
   return t<0;
});
console.log(res);



const students=["Lilit", "Karen", "Albina", "Armen"];

let understand=students.some(function(s){
  return s="Albina";
});
console.log(understand);


let marks = [4, 5, 7, 9, 10, 2];

const range = {
    min: 8,
    max: 10
};

let result = marks.some(function (e) {
    return e >= this.min && e <= this.max;
}, range);

console.log(result);





const students1=["Lilit", "Karen", "Albina", "Armen"];

students1.sort();
console.log(students1);




let counts = [
  15, 5, 70, 36, 98
];

counts.sort((a, b) => a - b);

console.log(counts);


let savingMoney1 = [
  {
    year: 'first',
    bank: 2,
    each: 300,
  },
  {
    year: 'second',
    bank: 3,
    each: 150,
  },
  {
    year: 'third',
    bank: 2,
    each: 350,
  },
];


savingMoney1.sort(function (x, y) {
  return x.salary - y.salary;
});

console.table(savingMoney1);


let marks1 = [4, 5, 7, 9, 10, 2];
marks1.forEach(function(m){
  console.log(m);
  
});


let girlesSt=["Lilit",  "Albina","Anna","Syuz", "Liana" ];
let boysSt=["Karo", "Armen", "Ghukas", "Karen"];

// let contactArrays=[].concat(girlesSt, boysSt);
// console.log(contactArrays);

// let spread=[...girlesSt, ...boysSt];
// console.log(spread);



let girlesSt_1=["Lilit",  "Albina","Anna","Syuz", "Liana" ];
let join=girlesSt_1.join(' ,');
console.log(join);



let girlesSt1=Array.of("Lilit",  "Albina","Anna","Syuz", "Liana" );
console.log(girlesSt1.length);
console.log(girlesSt1);


const insertNumbers=[5,7,10,[20, 98, 36,[100, 89, 45]]];

const flatNumbers =insertNumbers.flat();
console.log(flatNumbers);

const numbersInsert = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers1 = numbersInsert.flat(Infinity);

console.log(flatNumbers1);

const incArray=[10,5,78,100,89,150];

console.log(incArray.copyWithin(2,5));

console.log(incArray.includes(100));
console.log(Array.isArray(incArray));
console.log(incArray.toString());
console.log(incArray.valueOf());
console.log(incArray.copyWithin(2,4));
console.log(incArray.shift());
console.log(incArray.reverse());
console.log(incArray.shift());
console.log(incArray.toString());