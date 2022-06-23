import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload),
});

// configureStore()함수는 미들웨어와 함께 store를 생성한다
// const store = configureStore(reducer);라고 코드를 작성하면 Redux development tools 확장프로그램이 켜지지 않지만
// const store = configureStore({reducer}); 라고 코드를 작성하면 Redux development tools 확장프로그램이 켜진다
const store = configureStore({ reducer });

store.subscribe();

export const actionCreators = { addToDo, deleteToDo };

export default store;
