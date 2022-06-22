import { createStore } from 'redux';

const add = decument.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer
// 현재상태의 application과 함께 호출되는 함수이다.
// 만약 현재상태강 없을경우 0으로 지정되게 했다.
// reducer가 return하는 값은 application의 state가 된다
// 따라서 reducer는 현재 state와 action과 함께 불려진다(호출된다)
// dispatch가 리듀서를 불러서 현재 state와 객체형태의 action을 전달한다 (커뮤니케이션하는 방법)
// action에는 type이란 키값이 무조건 있어야한다
// 만약 state의 변화를 감지하고 싶다면 해당 store를 subscribe를 하면 된다
const countModifier = (count = 0, action) => {
  // if (action.type === 'AOO') return count + 1;
  // if (action.type === 'MINUS') return count - 1;
  // return count;

  // swtich문을 사용하는것이 더 편하다
  // action.type을 문자열로 하면 오타가 발생할 수 있어 작동이 안될수도 있기 때문에 변수로 사용하는 것이 좋다
  // 만약 변수명을 오타내면 자바스크립트가 에러를 발생할것이기 때문에 안전하다!
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const handleAdd = () => countStore.dispatch({ type: 'ADD' });
const handleMinus = () => countStore.dispatch({ type: 'MINUS' });

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

