import { createStore } from 'redux';

const add = decument.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// state인 count를 action과 함께 수정한다
// action은 redux에서 fucntion을 부를 때 쓰는 두번째 parameter/argument이다
// reducer와 소통하는 방법이다 : count에 +1 을 할지 -1을 할지
// 초기상태의 action을 콘솔롣그로 확인하면 {type: '~~~~~대충이상한문자'}라고 나온다
const countModifier = (count = 0, action) => {
  // ADD 액션을 전달하면 +1 
  if (action.type === 'AOO') {
    return count + 1; // 반환되는 값은 현재 state가 된다
  }
  // MINUS 액션을 전달하면 -1
  if (action.type === 'MINUS') {
    return count - 1;
  }
  // 아무런 액션을 받지 않은 처음에는 0으로 바뀜
  return count;
};


// 애플리케이션에서 data를 수정할 수 있는 함수는 reducer이다
// 그래서 reducer바깥에서 reducer와 커뮤니케이션을 해야하는데 
// 이러한 커뮤니케이션을 하기 위해서는 reducer에게 action을 보내면 된다

const countStore = createStore(countModifier);

// dispatch를 통해 reducer에 action전달하면 리덕스가 reducer불러옴
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });

console.log(countStore.getState());
