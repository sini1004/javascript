
const candidate = Array(45).fill().map((value, index) => index + 1); // map : key, value 는 중복 불가

const shuffle = [];

while(candidate.length > 0) {
  const random = Math.floor(Math.floor() * candidate.length); //랜덤으로 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

console.log(shuffle);