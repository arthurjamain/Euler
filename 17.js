/**WIP**/
var m = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    b = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    o = ['hundred', 'thousand'],
    r = 0,
    d = new Date();

String.prototype.fulltrim=function(){return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');}
String.prototype.trim=function(){return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');};

for(var i = 1 ; i <= 1000 ; i ++) {
  var string = '';
  if(i < 20) {
    string += b[i];
  }
  else {
    var is = i+'';

    if(is.length > 3) {
      if(i % 1000 == 0) {
        string += 'one'+o[1];
        r += string.length;
        console.log(string);
        break;
      }
    }


    if(is.length > 2) {
      var j = parseInt(is.substr(is.length - 3, 1));
      string += b[j]+''+o[0];
    }

    if(is.length > 2 && i%100 != 0) {
      string += 'and';
    }

    var dozens = is.substr(is.length - 2, 2);
    if(dozens > 10 && dozens%10 == 0) {
      var j = parseInt(dozens.substr(0, 1));
      string += m[j];
    }
    else {
      var pid = parseInt(dozens);
      if(pid < 20) {
        if(pid == 0) {
          pid = parseInt(dozens.substr(1, 1))
        }
        string += b[pid];
      }
      else {
        var j = parseInt(dozens.substr(0, 1)),
            k = parseInt(dozens.substr(1, 1));
        string += m[j] + '' + b[k];
      }
    }
  }
  r += string.length;
  console.log(string, string.length);
}
console.log('Result (false) : ' + r);
console.log('Elapsed: '+(new Date() - d)+'ms');