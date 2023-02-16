const wordAnagrams= "angel, bored, dusty, night, sadder, arc, cat, ekbow, peach, save, glean, robed, study, thing, dreads, car, act, below, cheap. vase";

 let word=wordAnagrams.split(", ");
 for(let i=0; i<word.length; i++){
    let words=word[i];
    let letter=words.split('').sort().join('');
    for(let j=0; j<word.length; j++){
        if(i===j){
            continue;
        }
        let nextWord=word[j];
        if(letter===nextWord.split('').sort().join('')){
            console.table(words + " " + nextWord);
        }
    }

 }



 const anagarmsWords = ["angel", "bored", "dusty", "night", "sadder", "arc", "cat", "ekbow", "peach", "save", "glean", "robed", "study", "thing", "dreads", "car", "act", "below", "cheap", "vase"],
    map = [];


let trywords = anagarmsWords.map( function( word ){
  return word.split('').sort().join('');
});


trywords.forEach( function ( trywords, index){
  map[trywords] = map[trywords] || [];
  map[trywords].push(anagarmsWords[index] );
});


Object.keys( map ).forEach( function( trywords , index  ){
  let result = map[trywords];
  if( result.length > 1 ){
    console.log( index + ". " + result.join(' ') );
  }
});






function checkAnagram(a, b) {
    var array = {};
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        let res = a.charCodeAt(i) - 97;
        array[res] = (array[res] || 0) + 1;
    }
 
    for (let j = 0; j < b.length; j++) {
        let res = b.charCodeAt(j) - 97;
        if (!array[res]) {
            return false;
        }
        array[res]--;
    }
    return true;
}
console.log(checkAnagram('abc', 'cba'));







  let isAnagram=function(str1, str2){
    let sorted1=str1.split('').sort().join('').toLowerCase();
    let sorted2=str2.split('').sort().join('').toLowerCase();
    return (sorted1===sorted2);
  }
  console.log(isAnagram("angel", "glean"));


  function buildCharObject(str){
    const charObj={};
    str=str.toLowerCase().replace(/[^\w]/g);
    for(let char of str){
        charObj[char]=charObj[char]+1 || 1;
    }
    return charObj;
  }
  function anagram(strA, strB){
    const aCharObj=buildCharObject(strA);
    const bCharObj=buildCharObject(strB);

    if(Object.keys(aCharObj).length !==Object.keys(bCharObj).length){
        return false;
    }
    for(let char in aCharObj){
        if(aCharObj[char]!==bCharObj[char]){
            return false;
        }
    }
    return true;
  }

console.log(buildCharObject("angel", "glean"));


  


  const anagram2=(a,b)=>[...a.toLowerCase()].sort().toString()=== [...b.toLowerCase()].sort().toString();

  console.log(anagram2("angel", "gleak"));



  