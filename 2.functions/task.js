// Задание 1
"use strict";
function getArrayParams(arr) {
  let min = arr[0],
      max = arr[0],
      sum = 0,
      avg;
  for (let i = 0; i < arr.length; i = i + 1) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    };
      sum = sum + arr[i];
  };
      avg = +(sum / arr.length).toFixed(2);
   return { min: min, max: max, avg: avg };
};

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i];
  };
   return sum;
};

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
   for (let i = 0; i < arrOfArr.length; i = i + 1) {
    const funcResult = func(arrOfArr[i]);
    if (max < funcResult) {
      max = funcResult;
    };
   };
   return max;
};

// Задание 3
function worker2(arr) {
  let max = arr[0],
      min = arr[0];
  for (let i = 0; i < arr.length; i = i + 1) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
      min = arr[i];
    };
  };
  return Math.abs(max - min);
};