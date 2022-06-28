import { createStore } from 'redux';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';


// createSlice는 action, reducer 모두 생성해준다
// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload),
// });

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

// const store = configureStore({ reducer });
const store = configureStore({ reducer: toDos.reducer });

store.subscribe();

// console.log(toDos.actions); action 제공하는거 확인가능
// export const actionCreators = { addToDo, deleteToDo };
export const { add, remove } = toDos.actions;

export default store;
