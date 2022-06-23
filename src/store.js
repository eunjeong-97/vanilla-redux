import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             break;
//     }
// }

// 첫번재 인자 initialState
// action.type이 해당 타입이면 함수 실행
// toolkit으로 할땐 새로운 state를 만드는 대신 mutate(수정)이 가능하다
// 왜냐하면 immer아이머 안에서 툴킷이 실행되는데, 아래 코드의 경우
// 리덕스 툴킷은 {text: action.payload, id: Date.now()}을 state에 뭔가 추가하고 싶다는걸 알아서
// return [{ text: action.payload, id: Date.now() }, ...state] 작업을 대신해준다
// 즉, 리덕스툴킷은 state를 직접적으로 수정해주거나 새로운 state를 반환해준다
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        // 다만 여기서는 state를 반환하면 작동이 되지 않는다. 
        // 만약 state를 mutate한다면 return하면 안된다!
        state.push({ text: action.payload, id: Date.now() });
    },
    // 이렇게 쓰면 filter된 배열을 반환한다는 뜻! : 위의 코드(함수를 실행한다)와 다른 의미를 가진다
    // filter는 새로운 array를 반환하기 때문에 바로 return해준다
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload),
});

const store = createStore(reducer);

store.subscribe();

export const actionCreators = { addToDo, deleteToDo };

export default store;
