a1 = [...new Array(10000000)].map((e)=>e =  Math.round(Math.random()*666))
a2 = [...new Array(10000000)].map((e)=>e =  Math.round(Math.random()*999))
console.time('Concat');
a3 = a1.concat(a2)
console.timeEnd('Concat');
console.time('Spread');
a4 = [...a1, ...a2]
console.timeEnd('Spread');

a1 = [...new Array(10000000)].map((e)=>e =  Math.round(Math.random() * (126 - 33)) + 33)
s1 = a1.map((e)=>String.fromCharCode(e)).join('')
console.time('Array.from');
Array.from(s1)
console.timeEnd('Array.from');
console.time('Split');
s1.split('')
console.timeEnd('Split');
