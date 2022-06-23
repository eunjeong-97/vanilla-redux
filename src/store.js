import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// export const addToDo = text => {
//     return { type: ADD, text };
// }

// export const deleteToDo = id => {
//     return { type: DELETE, id };
// }

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = (state = [], action) => {
    switch (action.type) {
        // addToDo나 deleteToDofmf 콘솔로 확인하면 함수지만 .type로 확인하면 텍스트이다
        // console.log(addToDo(), deleteToDo()) 같이 함수자체를 호출해버리면 액션이 나온다
        // {type: 'ADD', payload: undefined }, {type:'DELETE', payload: undefined}
        case addToDo.type: // ADD대신
            // action도 text속성을 가지는것이 아니라 payload속성값을 가지게 된다
            // {type:'ADD', payload: 'HELLO'}
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type: // DELETE대신
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            break;
    }
}
const store = createStore(reducer);

store.subscribe();

export const actionCreators = { addToDo, deleteToDo };

export default store;
