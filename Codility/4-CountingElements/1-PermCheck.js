console.log(1, solution([4, 1, 3, 2]));
console.log(0, solution([5, 1, 3, 2]));
console.log(0, solution([4, 1, 3]));
console.log(0, solution([1]));
console.log(0, solution([2]));
console.log(1, solution([1, 2]));
console.log(0, solution([2, 3, 4]));
console.log(0, solution([90071992547409911]));

function solution(A) {
  let count = A.length;
  let sum = (count * (count + 1)) / 2;
  let tap = [];
  for (let i = 0; i < count; i++) {
    sum -= A[i];
    if (tap[A[i]]) {
      return 0;
    }
    tap[A[i]] = true;
  }
  return sum === 0 ? 1 : 0;
}

// Score: 58%
function solutionB(A) {
  const add = (a, b) => a + b;
  const count = A.length;
  const sum = (count * (count + 1)) / 2;
  const sum2 = A.reduce(add, 0);
  return sum === sum2 && count > 1 ? 1 : 0;
}

// Score: 75%
function solutionC(A) {

  if (A.length === 1) {
    return 0;
  }

  A.sort((a, b) => a - b);

  if (A[0] !== 1) {
    return 0;
  }

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] + 1 !== A[i + 1]) {
      return 0;
    }
  }

  return 1;
}
