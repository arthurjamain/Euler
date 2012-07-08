var fs = require('fs'),
    f = [];
var nbNodes = 0;

// sum
function sum(n) {
  var i = 0;
  for(var k = 1; k <= n ; k ++) {
    i+=k;
    console.log(k);
  }
  return n;
}

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
          val: ns[j]
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
  this.val = opt.val;
  return this;
}


var t = fs.readFileSync('18-resource', 'utf8');
var l = t.split('\n');
var graph = new graph(l);

console.log(graph);

var pyramid = [];
