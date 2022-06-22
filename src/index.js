import { createStore } from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // return state.push(action.text) 처럼 직접 수정하면 안된다
      // 대신 새로운 array를 만들어서 교체해주면 된다
      // 데이터를 삭제하기 위해 id값을 추가했다
      return [...state, { text: action.text, id: Date.now() }]
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const createToDo = toDo => {
  const li = document.createElement('li');
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  // redux 공식문서를 보면 state는 single source of true이고, read-only이기 때문에 직접 변경하면 안된다 store.getcurrent()+1 같이 하면 안된다!!
  // store를 바꿀 유일한 방법은 dispatch에 action을 보내는 것이다
  // state를 수정하는 대신 새로운 state를 반환하면 된다
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener('submit', onSubmit);