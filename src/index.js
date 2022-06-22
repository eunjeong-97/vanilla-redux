import { createStore } from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [];
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
  // createToDo(toDo);
  // 새로 HTML요소를 만들기보단 dispatch해줄 것이다
  // 만약 리듀서에게 state의 상태말고도 데이터를 전달하고 싶다면 아래와 같이 추가로 전달하면 된다
  // 직접적으로 변경하는 mutate state 변수를 사용하면 안된다 
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener('submit', onSubmit);