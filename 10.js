var checkPrime = function(n) {
  var factors = 0;

  for(var j = 1 ; j < Math.round(Math.sqrt(n))+1 ; j++) {
    if(n%j == 0) {
      factors++;
      if(factors > 1) {
        break;
      }
    }
  }
  if(factors == 1) {
    return true;
  }
  return false;
}

var i = 0,
    p = 0,
    d = new Date().getTime();

for(i = 2 ; i < 2000000 ; i++) {
  if(checkPrime(i))
    p+=i;
}
d = new Date().getTime() - d;

console.log(p, d+'ms');