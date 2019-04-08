console.log(1, solution([3, 1, 2, 4, 3]));
console.log(1, solution([3, 1, 1]));
console.log(1, solution([1, 2]));

// Inspired by https://gist.github.com/jeanlescure/797eef515cfa4a05830b

function solution(A) {

  const add = (a, b) => a + b;
  const pickLowestDiff = (a, b, index) => (index > 0) ? ((a < b) ? a : b) : b;
  const subtractions = [];
  const maxIndex = A.length - 1;

  let sumRight = [...A].splice(1).reduce(add, 0);
  let sumLeft = 0;

  for (let i = 0; i < maxIndex; i++) {
    sumLeft += A[i];
    subtractions.push(Math.abs(sumLeft - sumRight));
    if (i + 1 <= maxIndex) {
      sumRight -= A[i + 1];
    }
  }

  return subtractions.reduce(pickLowestDiff, 0);
}
