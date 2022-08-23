const array = [1, 4, 6, 73, 92, 95, 837, 857, 3984];

const binarySearch = (arr, target) => {
  let first = 0;
  let last = arr.length - 1; // last index

  while (last >= first) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) {
      return true;
    } else {
      if (target < arr[mid]) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    }
  }
  return false;
};

const result = binarySearch(array, 6);
console.log(result);
