import { createStore } from 'redux';

const add = decument.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === 'AOO') return count + 1;
  if (action.type === 'MINUS') return count - 1;
  return count;
};
// countStore을 콘솔로 확인해보면,
// dispatch, getState, subscribe를 확인할 수 있는데
// subscribe는 state의 변화를 감지한다
const countStore = createStore(countModifier);

const handleAdd = () => countStore.dispatch({ type: 'ADD' });
const handleMinus = () => countStore.dispatch({ type: 'MINUS' });

// action.type을 굳이 대문자로 안해도되긴한다
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

// state의 변화를 감지하면 onChange함수를 실행한다
const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

