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

export default store;

// store.getState(); 현재의 state 정보를 가지고 온다