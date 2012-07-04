/* 
So we've got 40 moves to make to attain the goal.
20 of them have to be down (D), the other 20 right (R).
A more readable representation is: DDDRRRRDDRDRR whatever.

The 40 moves can be rearranged to form 40! combinations of
D and R. To describe this : We can switch the position of
each of the letters in the string 40! times.

Except some of these moves are identical in our case. 
This is because there are only two words in our 
vocabulary : D or R. Sometimes, switching two letters of 
random indices in the string will thus have no effect at
all.

The twenty moves can individually be rearranged to form 
the exact same combination 20! times for each direction.

We will have to multiply these two to take into account
all of our permutations which will have no effect at all.

20!*20! is what we need to weed out the identical 
occurencies from our total of possible permutations.
It's squared because we're in a square grid.

So in the end, we start with the total number of permutations
and we divide it by the number of void permutations.
Why divide ? Because fuck you, that's why.
Because we cannot simply remove a combination from the
lot, it has drawbacks. Inherent combinations.

So yeah, total number of forward moves needed in a rectangle
would be :

r = m! / (w! * h!)

*/

var w = 20, h = 20, m = w + h;

var f = [],
    r = 0,
    d = new Date();

r = fp(m)/(fp(w)*fp(h));

d = new Date() - d;

console.log('Result : ' + r, 'Elapsed : ' + d + 'ms');

function fp(n) {
  if (n==0 || n==1)
    return 1;
  if(f[n]>0)
    return f[n];
  else
    return f[n]=fp(n-1)*n;
}