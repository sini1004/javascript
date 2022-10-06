const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = []; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let n = 0; n < 9; n += 1) {
  numbers.push(n + 1);
}
const answer = []; // [3, 1, 4, 6]
for (let n = 0; n < 4; n += 1) { // 네 번 반복
  const index = Math.floor(Math.random() * numbers.length); // 0~8 정수 
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) { // 3146,   314,  3144
  if (input.length !== 4) { // 길이는 4가 아닌가
    return alert('4자리 숫자를 입력해 주세요.'); //alert값의 기본은 undefined
  }
  if (new Set(input).size !== 4) { // 중복된 숫자가 있는가
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (tries.includes(input)) { // 이미 시도한 값은 아닌가
    return alert('이미 시도한 값입니다.');
  }
  return true;
} // 검사하는 코드


$form.addEventListener('submit', (event) => { //event매개변수로
  event.preventDefault(); //기본 동작 막기 (대표:a태그, form태그)
  const value = $input.value;
  $input.value = '';
  if(!checkInput(value)){ //input값 검사 코드
    return;
  }
   //입력값 문제없음
   //join() : 배열을 문자열로 변환
  if(answer.join('') === value){
    $logs.textContent = '홈런!';
    return;
  }
  if(tries.length >= 9){
    const message = document.createTextNode(`패배!! 정답은 ${answer.join('')}`);
    $logs.appendChild(message); 
    //appendChild: 노드객체만 받을 수 있음. (한번에 하나의 노드만 추가)
    //append : 노드객체, DOMString 사용 가능
    return;
  }

  //몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  for(let i = 0; i < answer.length; i++){
    const index = value.indexOf(answer[i]);
    if(index > -1){ //일치하는 숫자 발견
      if(index === i) { //자릿수도 동일
        strike += 1;
      }else { //숫자만 동일
        ball += 1;
      }
    } 
  }
  $logs.append(`${value} : ${strike}스트라이크 ${ball}볼`, document.createElement('br'));
  tries.push(value);ss
});
