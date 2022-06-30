const numberArray: number[] = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const maxSumFoundAfterArrayRotation = (arrayNum: number[]): number => {
  let arrSum = 0,
    currentSum = 0,
    maxSum = 0;
  let i: number, j: number;
  for (i = 0; i < arrayNum.length; i++) {
    arrSum += arrayNum[i];
    currentSum += i * arrayNum[i];
  }
  maxSum = currentSum;
  for (j = 1; j < arrayNum.length; j++) {
    currentSum += arrSum - arrayNum.length * arrayNum[arrayNum.length - j];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

console.log(
  `Maximum sum found : ${maxSumFoundAfterArrayRotation(numberArray)}`
);
