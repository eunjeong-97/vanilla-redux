import { createStore } from 'redux';

const add = decument.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// store: state를 저장하는 저장소를 만든다
// state: applocation에서 변경되는 데이터
// reducer: state를 수정하는 함수, 리턴하는것이 중요하다
const countModifier = (state = 0) => {
  // state 수정: 이 함수에서만 state수정이 가능하다
  console.log(state); // countModifier를 initialState로 불러온다: default 0
  return 'hello'; // 뭐든지 여기서 반환하는것은 애플리케이션에 있는 데이터
};
const countStore = createStore(countModifier); // createStore함수는 reducer를 받으려 한다
console.log(countStore.getState()); // 0

// let count = 0; // 이 애플리케이션에서 변경되는 data

// // 값 업데이트: 리페인트
// const updateText = () => {
//   number.innerText = count;
// }

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };
// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
