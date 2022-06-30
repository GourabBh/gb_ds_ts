const peakIndexOfMountainArray = (arr) => {
  var start = 0;
  var end = arr.length - 1;

  while (start < end) {
    mid = start + parseInt((end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

arr = [2, 14, 10, 9, 8, 6, 2, 1];
console.log('Peak index of mountain array: ', peakIndexOfMountainArray(arr));
