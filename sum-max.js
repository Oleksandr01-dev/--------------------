function max(matrix) {
    let maximum = -Infinity;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > maximum) {
                maximum = matrix[i][j];
            }
        }
    }

    return maximum;
}

console.log(max([[3, 8, 1], [5, 2, 7]])); 
console.log(max([[-5, -2], [-9, -4]])); 