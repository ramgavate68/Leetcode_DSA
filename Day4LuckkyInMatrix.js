let matrix = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
];

const luckyInMat = (mat) => {
  let lucky = [];
  for (let i = 0; i < mat.length; i++) {
    let crow = mat[i];
    let minVal = Math.min(...crow);
    let colIndex = crow.indexOf(minVal);
    let isLucky = true;
    for (let j = 0; j < mat.length; j++) {
      if (mat[j][colIndex] > minVal) {
        isLucky = false;
        break;
      }
    }
    if (isLucky) {
      lucky.push(minVal);
    }
  }

  return lucky;
};

const res = luckyInMat(matrix);
console.log(res);
