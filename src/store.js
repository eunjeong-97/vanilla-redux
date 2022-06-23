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

// === 무슨말이지?? ===
// store의 변화가 감지되엇을때 리렌더링되기를 원한다
// react는 모든 것을 다시 render해주지 않는다 변화가 된부분만 리렌더링해준다
store.subscribe();

export default store;