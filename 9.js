var a = 0,
    b = 0,
    c = 0,
    triplets = [];

for(c = 1000; c > 0; c--) {
  for(b = c-1; b > 0; b--) {
    for(a = b-1; a > 0; a--) {
      if((a + b + c) == 1000) {
        triplets.push({a: a, b: b, c: c});
      }
    }
  }
}

for(var i in triplets) {
  var t = triplets[i];
  if(t.a*t.a + t.b*t.b == t.c*t.c)
    console.log('Result : '+(t.a*t.b*t.c));
}
