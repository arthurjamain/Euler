var x = 0,
    y = 0,
    r = 0;

for(x = 999; x > 99; x--) {
  for(y = 999; y > 99; y--) {
    var s = (x*y)+'',
        ss1 = '',
        ss2 = '';

    if(s.length%2 == 0){
      ss1 = s.substr(0, s.length/2);
      ss2 = s.substr(s.length/2, s.length/2).split('').reverse().join('');
    }
    else {
      ss1 = s.substr(0, Math.round(s.length/2)-1);
      ss2 = s.substr(Math.round(s.length/2)+1, Math.round(s.length/2)-1).split('').reverse().join('');
    }
    if(ss1 == ss2)
      r=(s>r)?s:r;
  }
}

console.log(r);