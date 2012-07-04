/**WIP**/
var m = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    b = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    o = ['hundred', 'thousand'],
    r = 0,
    d = new Date();

for(var i = 1 ; i <= 1000 ; i ++) {
  if(i < 20) {
    r += b[i].length;
    console.log(b[i]);
  }
  else {
    var is = i+'';
    

    if(is.length > 3) {
      if(i % 1000 == 0) {
        r += 'one'.length;
        r += o[1].length;
        console.log('one', o[1]);
        break;
      }
    }


    if(is.length > 2) {
        var j = parseInt(is.substr(is.length - 3, 1))
        r += b[j].length;
        r += o[0].length;
      console.log(b[j],o[0]);
    }



    var dozens = is.substr(is.length - 2, 2);
    if(dozens > 10 && dozens%10 == 0) {
      var j = parseInt(dozens.substr(0, 1));
      r += m[j].length;
      console.log(m[j]);
    }
    else {
      var pid = parseInt(dozens);
      if(pid < 20) {
        if(pid == 0) {
          pid = parseInt(dozens.substr(1, 1))
        }
        r += b[parseInt(dozens)].length;
        console.log(b[pid]);
      }
      else {
        var j = parseInt(dozens.substr(0, 1)),
            k = parseInt(dozens.substr(1, 1));
        r += b[k].length;
        r += m[j].length;
        console.log(m[j], b[k]);
      }
    }
  }
}
console.log(r);