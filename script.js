'use strict';

// Targetting Elements
const labelMonth = document.querySelector('.month');
const labelBalance = document.querySelector('.balance');
const labelTotalIncome = document.querySelector('.total-income');
const form = document.querySelector('form');
const labelTotalExpenses = document.querySelector('.total-expenses');
const sign = document.querySelector('.sign');
const description = document.querySelector('.desc');
const amount = document.querySelector('.amount');

// EventListeners
sign.addEventListener('click', function () {
  sign.value === '+'
    ? form.classList.remove('debit')
    : form.classList.add('debit');
});
