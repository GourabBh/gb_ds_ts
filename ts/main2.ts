const searchIndex = (
  nums: number[],
  target: number,
  start: number,
  end: number
): number => {
  if (start > end) {
    return -1;
  }
  let mid: number = start + parseInt(String((end - start) / 2));
  if (target == nums[mid]) {
    return mid;
  }

  if (nums[start] == nums[mid] && nums[end] == nums[mid]) {
    start++;
    end--;
    return searchIndex(nums, target, start, end);
  } else if (nums[start] <= nums[mid]) {
    if (target >= nums[start] && target <= nums[mid]) {
      return searchIndex(nums, target, start, mid - 1);
    }
    return searchIndex(nums, target, mid + 1, end);
  } else {
    if (target >= nums[mid] && target <= nums[end]) {
      return searchIndex(nums, target, mid + 1, end);
    }
    return searchIndex(nums, target, start, mid - 1);
  }
};

const numberArr = [3, 3, 1, 2, 3, 3];
const tget = 2;

console.log(
  `Element ${tget} in [${numberArr}] found at index ${searchIndex(
    numberArr,
    tget,
    0,
    numberArr.length - 1
  )}`
);

const minElement = (arr: number[], start: number, end: number): number => {
  if (start > end) {
    return arr[0];
  }
  if (start == end) {
    return arr[start];
  }

  let mid: number = start + parseInt(String((end - start) / 2));
  if (mid < end && arr[mid + 1] < arr[mid]) {
    return arr[mid + 1];
  }
  if (mid > start && arr[mid] < arr[mid - 1]) {
    return arr[mid];
  }
  if (arr[mid] < arr[end]) {
    return minElement(arr, start, mid - 1);
  }
  return minElement(arr, mid + 1, end);
};

console.log(
  `Min elment in [${[5, 6, 7, 1, 2, 3, 4]}] is ${minElement(
    [5, 6, 7, 1, 2, 3, 4],
    0,
    [5, 6, 7, 1, 2, 3, 4].length - 1
  )}`
);
