const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; //[1,2,3,4,5,6,7,8,9]
for(let i = 0; i < 9; i += 1){ 
  numbers.push(i + 1);
}
const answer = []; 
for (let i = 0; i < 4; i += 1){ //4번 반복
  const index = Math.floor(Math.random() * (numbers.length)); //0~8정수 (numbers.length) 말고 9입력 시 undefined 나옴
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) {
  if(input.length !== 4){
    return alert('4자리 숫자를 입력하세요.');
  }
  if(new set(input).size !== 4){
    return alert('중복되지 않게 입력하세요.');
  }
  if(tries.includes(input)){
    return alert('이미 시도한 값이에요.');
  }
  return true;
} //검사하는 코드

$form.addEventListener('submit', (event) => { //event매개변수로
  event.preventDefault(); //기본 동작 막기 (대표:a태그, form태그)
  const value = $input.value;
  $input.value = '';
  checkInput(value);
});