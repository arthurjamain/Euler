var fs = require('fs'),
    f = [];
var nbNodes = 0;

// object representing the whole graph
function graph (lines) {
  this.nodes = [];
  // Lines of the triangle
  for(var k in lines) {
    // If we're not on the last line
    if(lines[parseInt(k)+1]) {
      var ns = lines[k].split(' ');
      var nl = lines[parseInt(k)+1].split(' ');

      if(k == 0) {

        var opt = {
          n1: 1,
          n2: 2,
          index: nbNodes,
          val: ns[0]
        };
        this.nodes.push(new node(opt));
        nbNodes++;
      }
      else {
        // nodes per line
        for(var j in ns) {
          var rn1 = nbNodes + ns.length;
          var rn2 = rn1 + 1;
          var opt = {
            n1: rn1,
            n2: rn2,
            index: nbNodes,
            val: ns[j]
          };
          this.nodes.push(new node(opt));
          nbNodes++;
        }
      }
    }
    else {
      var ns = lines[k].split(' ');
      for(var j in ns) {
        var opt = {
          n1: -1,
          n2: -1,
          index: nbNodes,
          val: parseInt(ns[j], 10)
        };
        this.nodes.push(new node(opt));
        nbNodes++;
      }
    }
  }

  return this;
}

// Contains its two potential successor indices
var node = function(opt) {
  this.n1 = opt.n1;
  this.n2 = opt.n2;
  this.index = opt.index;
  this.val = parseInt(opt.val, 10);
  return this;
}

function sumnaturals(n)
{
    var i;
    var sum = 0;
    for(i = 1;i <= n; i++){
        sum = sum + i;}
    return (sum);
}

var t = fs.readFileSync('18-resource', 'utf8');
var l = t.split('\n');
var g = new graph(l);
var c = 0;
// For each line starting second from bottom
for (var i = 14 ; i > 0 ; i--) {

  var start = sumnaturals(i - 1);
  var threshold = (start + i);

  for (var j = start ; j < threshold ; j++) {
    c++;
    var n = g.nodes[j];
    var n1 = g.nodes[n.n1];
    var n2 = g.nodes[n.n2];

    if (!n1.sum || !n2.sum) {
      n1.sum = n1.val;
      n2.sum = n2.val;
    }

    var biggest = n1.sum < n2.sum ? n2 : n1;

    n.sum = biggest.sum + n.val;
    n.descendant = biggest.index;

  }

}

console.log(g.nodes[0]);
console.log(c + ' iterations');



