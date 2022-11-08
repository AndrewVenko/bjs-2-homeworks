function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) {
    return result = false;
  } else if (arr1.length === arr2.length) {
    let resultComparison = getComparison(arr1, arr2);
    if (resultComparison === false) {
      return result = false;
    } else {
      result = true;
    };
  };
  return result; // boolean
}

function getComparison(arr1, arr2) {
  let resultComparison;
  for (let i = 0; i < arr1.length; i = i + 1) {
    if (arr1[i] !== arr2[i]) {
        return resultComparison = false;
    } else if (arr1[i] === arr2[i]) {
      resultComparison = true;
    };
  };
  return resultComparison;
};

function advancedFilter(arr) {
  let resultArr = arr.filter(element => element % 3 === 0).filter(element => element > 0).map(element => element * 10);
  return resultArr; // array
}
