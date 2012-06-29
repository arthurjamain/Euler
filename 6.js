var r = 0,
    r2 = 0;

for(var i = 0 ; i <= 100 ; i++) {
  r += i;
  r2 += i*i;
}

console.log('Result : ' + (r * r - r2));