function findMaxRec(A, n)
{
     
    if (n == 1)
        return A[0];
         
        return Math.max(A[n - 1],
        findMaxRec(A, n - 1));
}
 

let A = [ 1,-1,0,2,-2,3,-3,4,-4 ];
let n = A.length;

console.log(findMaxRec(A,n))