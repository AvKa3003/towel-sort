function towelSort(matrix) {
  if (!arguments.length) return [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let line = matrix[i];
    if (i % 2 != 0) {
      line = line.reverse();
    }
    for (let item of line) {
      result.push(item);
    }
  }
  return result;
}

console.log(towelSort([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));

module.exports = towelSort;