var i = 2520;
while(true) {
  var d = true;
  for(var k = 2; k < 20; k++)
    d=(i%k==0)?d:false;
  if(d)
    break;
  i+= 10;
}

console.log('Result : '+i);