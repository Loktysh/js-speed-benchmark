a1 = [...new Array(10000000)].map((e)=>e =  Math.round(Math.random()*666))
a2 = [...new Array(10000000)].map((e)=>e =  Math.round(Math.random()*999))
console.time('Concat');
a3 = a1.concat(a2)
console.timeEnd('Concat');
console.time('Spread');
a4 = [...a1, ...a2]
console.timeEnd('Spread');
