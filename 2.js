var i = 2,
    j = 1,
    sum = 2;
console.log("j");
while(i < 4000000) {
  var k = i;
  i += j;
  j = k;

  console.log(i+'\n');

  if(!(i%2))
    sum += i;
}

console.log('Result : '+sum);