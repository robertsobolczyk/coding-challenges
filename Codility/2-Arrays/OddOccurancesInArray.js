// Score: 100%, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
function solution(A) {
  let result = 0;
  for (let element of A) {
    result ^= element
  }
  return result
}


// Score: 55%
function slowSolution(A) {
  for(let element of A){
    const occurrences = A.filter(n => n === element);
    if(occurrences.length === 1){
      return element;
    }
  }
}
