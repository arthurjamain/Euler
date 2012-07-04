var r = 0,
    t = new Date();
for(var k = 999999; k > 0; k--) {
  var d = k;
  var i = 0;
  while(d != 1) {
    if(d%2 == 0) {
      d = d/2;
    }
    else {
      d = d*3 + 1
    }
    i++;
  }

  if(i > r) {
    r = i;
    r2 = k;
  }
}
console.log('Result : ' + r2);
console.log('Elapsed : ' + (new Date() - t) + 'ms');