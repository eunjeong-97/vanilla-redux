import { createStore } from 'redux';
const ADD = 'ADD';
const DELETE = 'DELETE';

export const addToDo = text => {
    return { type: ADD, text };
}

export const deleteToDo = id => {
    return { type: DELETE, id };
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            break;
    }
}
const store = createStore(reducer);

store.subscribe();

export const actionCreators = { addToDo, deleteToDo };

export default store;

// 액션타입, 액션생성자, 리듀서 등과 같은 많은 코드를 사용하는것이 불편해서
// Redux toolkit을 사용하기도 한다 (지름길이 있는 package)
// 적은양의 코드로 리덕스 사용가능
