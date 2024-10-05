const Matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

function diagonalDifference(matrix) {
    let primaryDiagonal = 0, secondaryDiagonal = 0;
    let primarySteps = [], secondarySteps = [];

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - i - 1];
        primarySteps.push(matrix[i][i]);
        secondarySteps.push(matrix[i][matrix.length - i - 1]);
    }

    const primarySum = primarySteps.join('+');
    const secondarySum = secondarySteps.join('+');

    console.log(`Diagonal pertama: ${primarySum} = ${primaryDiagonal}`);
    console.log(`Diagonal kedua: ${secondarySum} = ${secondaryDiagonal}`);

    const difference = Math.abs(primaryDiagonal - secondaryDiagonal);
    console.log(`Selisih dua diagonal: ${primaryDiagonal} - ${secondaryDiagonal} = ${difference}`);

    return difference;
}

diagonalDifference(Matrix);
