import { createStore } from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = text => {
  return { type: ADD_TODO, text };
};

const deleteToDo = id => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]
    case DELETE_TODO:
      // 배열형태의 state를 직접적으로 변경하면 안되기 때문에 filter() 메서드를 통해 새로운 배열을 만들어서 반환
      return state.filter(toDo => toDo !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

const addTodo = text => {
  store.dispatch(addToDo(text));
}

const deleteTodo = e => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  addTodo(toDo);
};

form.addEventListener('submit', onSubmit);


const paintTodo = () => {
  const toDos = store.getState();
  ul.innerText = '';
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.querySelector('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', deleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
  })
}

store.subscribe(paintTodo);

