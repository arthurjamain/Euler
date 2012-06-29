var bint = require('bignum'),
    r = bint(1),
    rr = 0;

for(var i = 1; i < 100 ; i++) {
  r = r.mul(i);
}
console.log(r.toString());
r=r.toString().split('');
for(var k in r) {
  rr+=parseInt(r[k]);
}

console.log('Result : ' + rr);