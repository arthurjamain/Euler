var r = 0,
    b = 0,
    t = new Date(),
    loop = true;

while(loop) {

  b += r;

  if(b%2 == 0) {
    var d = 1;
    
    for(var k = b/2; k > 0; k--) {
      //console.log(k, b, b%k);
      if(!(b%k)) {
        d++;

        if((500 - d > k))
          break;
      }
    }
    if(d > 500)
      break;
    
  }

  r++;
}

console.log('Result : ' + b);
console.log('Elapsed : ' + (new Date() - t) + 'ms');