var numberArray = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var rotationIndex = 0;
var maxSumFoundAfterArrayRotation = function (arrayNum) {
    var arrSum = 0, currentSum = 0, maxSum = 0;
    var i, j;
    for (i = 0; i < arrayNum.length; i++) {
        arrSum += arrayNum[i];
        currentSum += i * arrayNum[i];
    }
    maxSum = currentSum;
    for (j = 1; j < arrayNum.length; j++) {
        currentSum += arrSum - arrayNum.length * arrayNum[arrayNum.length - j];
        rotationIndex++;
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
};
console.log("Maximum sum found after ".concat(rotationIndex, " : ").concat(maxSumFoundAfterArrayRotation(numberArray)));
