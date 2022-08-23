const array = [1, 3984, 4, 73, 6, 857, 92, 837, 95];

// Create a function that takes in a target' value and an array to search to the value.

// The input array must is unordered

const linearSearch = (arr, target) => {
  for (num of arr) {
    if (target === num) {
      return true;
    }
  }
  return false;
};

const result = linearSearch(array, 5); //false
const found = linearSearch(array, 92); //true

console.log(result);
console.log(found);
