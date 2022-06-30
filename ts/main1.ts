const findPivot = (nums: number[]): number => {
  let start = 0,
    end = nums.length - 1;
  let mid: number;
  while (start <= end) {
    mid = start + parseInt(String((end - start) / 2));
    if (mid < end && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (mid > start && nums[mid] < nums[mid - 1]) {
      return mid - 1;
    } else if (nums[start] >= nums[mid]) {
      end = mid - 1;
    } else if (nums[start] <= nums[mid]) {
      start = mid + 1;
    }
  }
  return -1;
};

const findPivotWithDuplicateElements = (nums: number[]): number => {
  let start = 0,
    end = nums.length - 1;
  let mid: number;
  while (start <= end) {
    mid = start + parseInt(String((end - start) / 2));
    if (nums[start] == nums[mid] && nums[end] == nums[mid]) {
      if (nums[start] > nums[start + 1]) {
        return start;
      }
      start++;
      if (nums[end] < nums[end - 1]) {
        return end - 1;
      }
      end--;
    } else if (
      nums[start] < nums[mid] ||
      (nums[start] == nums[mid] && nums[mid] > nums[end])
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const binarySearch = (
  nums: number[],
  target: number,
  start: number,
  end: number
): number => {
  while (start <= end) {
    let mid: number = start + parseInt(String((end - start) / 2));
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const search = (nums: number[], target: number): number => {
  const isDup: boolean = true;
  let pivot;
  if (isDup) {
    pivot = findPivotWithDuplicateElements(nums);
  } else {
    pivot = findPivot(nums);
  }
  if (pivot == -1) {
    return binarySearch(nums, target, 0, nums.length - 1);
  }
  if (target == nums[pivot]) {
    return pivot;
  }
  if (target >= nums[0]) {
    return binarySearch(nums, target, 0, pivot - 1);
  }
  return binarySearch(nums, target, pivot + 1, nums.length - 1);
};

const nums = [2, 2, 3, 9, 2, 2, 2];
const target = 3;
console.log(`${target} in [${nums}] is at index ${search(nums, target)} `);
