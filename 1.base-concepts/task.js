"use strict";
function solveEquation(a, b, c) {
  const arr = [];
  // Вычисление дискриминанта
  const discriminant = Math.pow(b,2) - 4 * a * c;
  // Проверка дискриминанта и нахождение корней
  if (discriminant > 0) {
    arr[0] = +((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    arr[1] = +((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
  } else if (discriminant === 0) {
    arr[0] = +(-b / (2 * a)).toFixed(2);
  };
  return arr; // array
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;
  // Проверка на соотвествие числовому формату
  if (Number.isNaN(parseInt(percent))) {
    return totalAmount = 'Параметр \"percent\" содержит неправильные значения ' + `${percent}`;
  } else {
    percent = parseInt(percent);
  };
  if (Number.isNaN(parseInt(contribution))) {
    return totalAmount = 'Параметр \"contribution\" содержит неправильные значения ' + `${contribution}`;
  } else {
    contribution = parseInt(contribution);
  };
  if (Number.isNaN(parseInt(amount))) {
    return totalAmount = 'Параметр \"amount\" содержит неправильные значения ' + `${amount}`;
  } else {
    amount = parseInt(amount);
  };
  // Расчет тела кредита и срока в месяцах
  const bodyCredit = amount - contribution;
  const dateTo = new Date();
  const amountMonths = date.getMonth() - dateTo.getMonth() + (12 * (date.getFullYear() - dateTo.getFullYear()));
  // Расчет платежей и общей суммы
  const percentBid = (percent / 100) / 12;
  for (let i = 0; i < amountMonths; i = i + 1) {
    let payment = bodyCredit * (percentBid + (percentBid / ((Math.pow((1  + percentBid),  amountMonths)) - 1)));
    totalAmount = totalAmount + payment;
  };
  totalAmount = +totalAmount.toFixed(2);
  return totalAmount;
};
