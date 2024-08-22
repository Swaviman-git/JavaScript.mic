console.log(null > 0);      //false
console.log(null == 0)      //false
console.log(null >= 0);     //true

console.log(undefined > 0);     //undefined <,>,<=,>= 0 (always False)

console.log("2" == 2)       //true
console.log("2" === 2)      //false (checks strictly)

let valueOfANumber = undefined
let valueOfANumber1;        //both are same(undefined)

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2)     //false

const bigNumber = 78468704555540786487n         //BigInt
