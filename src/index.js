
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(arguments.length === 0) return [];

for(let i = 0; i < matrix.length; i++) {
  if(i % 2 == 0) {
    matrix[i].forEach((item,index,array) => arr.push(item))
  } else {
    for(let j = (matrix[i].length)-1; j >= 0; j--) {
      arr.push(matrix[i][j])
    }
  } 
  }
  return arr;
}
