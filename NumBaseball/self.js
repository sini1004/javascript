const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let n = 0; n < 9; n += 1) {
  numbers.push(n + 1);
}