var checkPrime = function(n) {
    var factors = 0;

    for(var j = 0 ; j < n ; j++) {
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

var target = 600851475143;
var max = 775147; // sqrt(target)
var biggest = 0;

for(var i = max; i > 0 ; i--) {
  if(target%i == 0) {
    if(checkPrime(i)) {
      biggest = i;
      break;
    }
  }
}

console.log("Biggest prime factor : "+biggest);
