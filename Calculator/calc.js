//변수 만들기
let numOne = '';
let numTwo = '';
let operator = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (event) => {
  if(!operator){ //비어있다.
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if(!numTwo){//비어있지 않다.
    $result.value = '';
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};

//버튼마다 동작을 함수로 표현


// 달라지는 부분은 매개변수로 만들어라 (number)=>매개변수!
// 매개변수로 변경 후 중복되는 부분을 처리해준다.
document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  if(numOne){
    operator = op;
    $operator.value = op;
  } else {
    alert('숫자를 먼저 입력하세요!');
  }
}
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if(numTwo) {
    switch(operator){
      case '+' :
        $result.value = Number(numOne) + Number(numTwo);
        break;
      case '-' :
        $result.value = numOne - numTwo;
        break;
      case '*' :
        $result.value = numOne * numTwo;
        break;
      case '/' :
        $result.value = numOne / numTwo;
        break;
      default :
        break;
    } 
    $operator.value ='';
    numOne = $result.value;
    operator = '';
    numTwo = '';
  }else{
    alert('숫자를 먼저 입력하세요.');
  }
});
document.querySelector('#clear').addEventListener('click', () => {
  numOne = '';
  operator = '';
  numTwo = '';
  $operator.value = '';
  $result.value = '';
});
