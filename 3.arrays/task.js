'use strict';
function compareArrays(arr1, arr2) {
  let result;
  return result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]); // boolean
};

function advancedFilter(arr) {
  let resultArr = arr.filter(element => element % 3 === 0).filter(element => element > 0).map(element => element * 10);
  return resultArr; // array
};