// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

console.log(1, solution([]));
console.log(1, solution([]));
console.log(1, solution([2]));
console.log(2, solution([1]));
console.log(6, solution([1,2,3,4,5]));
console.log(2, solution([1,3,4,5]));

function solution(A) {

  if(A.length === 0) {
    return 1;
  }

  A.sort((a, b) => a - b);

  if(A[0] !== 1) {
    return 1;
  }

  for(let i = 0; i < A.length; i++) {

    if(i !== A.length - 1) {

      if(A[i] + 1 !== A[i + 1]){
        return A[i] + 1;
      }

    } else {
      return A[i] + 1;
    }

  }
}
