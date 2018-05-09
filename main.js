// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));

//console.log("Hello,world!")
/*
function isLeapYear(n){
    if(n % 400 === 0){
        return true
    }
    if(n % 100 === 0){
        return false
    }
    if(n % 4 === 0){
        return true
    }
  return false
    
}
console.log("2008:"+isLeapYear(2008));*/

/*
function fibonacci (n){
    var f0=0;
    var f1=1;
    var f2,i;
    if (n===0){
        return 0
    }
    if (n===1){
        return 1
    }
    for(i=2;i<=n;i++){
        f2=f0+f1;
        f0=f1;
        f1=f2;
    }
    return f2;
}*/

/*
const fibonacci = require ('./lib/fibonacci')
var len = 20;
for (; len--;){
    console.log(fibonacci (len));
}*/

const anagrams = require ('./lib/anagrams')
console.log(anagrams("a"));


