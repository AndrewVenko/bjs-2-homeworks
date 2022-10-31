"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  // Вычисление дескриминанта
  let d = Math.pow(b,2) - 4 * a * c;
  // Проверка дискриминанта и нахождение корней
  if (d > 0) {
    arr[0] = Math.trunc(((-b + Math.sqrt(d)) / (2 * a)) * 100) / 100;
    arr[1] = Math.trunc(((-b - Math.sqrt(d)) / (2 * a)) * 100) / 100;
  } else if (d === 0) {
    arr[0] = Math.trunc((-b / (2 * a)) * 100) / 100;
  };
  return arr; // array
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;
  // Проверка на соотвествие числовому формату
  if (Number.isNaN(parseInt(percent))) {
    alert('Параметр \"percent\" содержит неправильные значения ' + `${percent}`);
  } else {
    percent = parseInt(percent);
  };
  if (Number.isNaN(parseInt(contribution))) {
    alert('Параметр \"contribution\" содержит неправильные значения ' + `${contribution}`);
  } else {
    contribution = parseInt(contribution);
  };
  if (Number.isNaN(parseInt(amount))) {
    alert('Параметр \"amount\" содержит неправильные значения ' + `${amount}`);
  } else {
    amount = parseInt(amount);
  };
  // Расчет тела кредита и срока в месяцах
  let bodyCredit = amount - contribution;
  let dateTo = new Date(2022, 9, 31);
  let amountMonths = date.getMonth() - dateTo.getMonth() + (12 * (date.getFullYear() - dateTo.getFullYear()));
  // Расчет платежей и общей суммы
  let percentBid = (percent / 100) / 12;
  for (let i = 0; i < amountMonths; i = i + 1) {
    let payment = bodyCredit * (percentBid + (percentBid / ((Math.pow((1  + percentBid),  amountMonths)) - 1)));
    totalAmount = totalAmount + payment;
  };
  totalAmount = Math.trunc(totalAmount * 100) / 100;
  return totalAmount;
};
