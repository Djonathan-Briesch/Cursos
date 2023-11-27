const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for(1)
const s4 = Symbol.for("Bruno")

console.log(s3);
console.log(s4);
console.log(s3 === s4);
console.log(Symbol.keyFor(s3));
console.log(parseInt(Symbol.keyFor(s3)) + 1);