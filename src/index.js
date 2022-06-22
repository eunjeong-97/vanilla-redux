import { createStore } from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// 코드최적화를 위해 action을 변환해주는 함수를 만든다 (action creator)
// 보통 reducer보다 위에 작성한다
const addToDo = text => {
  return { type: ADD_TODO, text }; // 액션을 반환한다
};

const deleteToDo = id => {
  return { type: DELETE_TODO, id };// 액션을 반환한다
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // return state.push(action.text) 처럼 직접 수정하면 안된다
      // 대신 새로운 array를 만들어서 교체해주면 된다
      // 데이터를 삭제하기 위해 id값을 추가했다
      // 새로 생성된 toDo가 맨앞에 오도록 하려면 이런 순서로
      return [{ text: action.text, id: Date.now() }, ...state]
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

// 데이터저장
const addTodo = text => {
  // store.dispatch({ type: ADD_TODO, text }); // 액션생성자 사용안함
  store.dispatch(addToDo(text)); // 액션생성자 사용
}

// 데이터삭제
const deleteTodo = e => {
  const id = e.target.parentNode.id; // 지우려는 id값
  // store.dispatch({type:DELETE_TODO, id}); // 액션생성자 사용하지 않고
  store.dispatch(deleteToDo(id)); // 액션생성자 사용함
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  addTodo(toDo);
};

form.addEventListener('submit', onSubmit);

// 리페인팅 작업

const paintTodo = () => {
  const toDos = store.getState();
  ul.innerText = ''; // ul 모두를 리페인팅하지 않도록
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

