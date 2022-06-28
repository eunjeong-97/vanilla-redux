import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

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

const store = configureStore({ reducer: toDos.reducer });

store.subscribe();

export const { add, remove } = toDos.actions;

export default store;

/*
createAction
액션이름과 액션생성자 함수를 쓰는대신 createAction()함수를 통해 자동적으로 어떤 type의 action을 생성했다.
내가 주는 값은 payload 값으로 저장

createReducer
swtich문을 쓰는 대신 new State를 return하거나 기존의 state를 mutate시킴
redux toolfit은 immer.js와 함께 뒤에서 작동되기 때문에 기존의 state를 mutate를 시킬 수 있다

configureStore
redux developer tool을 어떻게 사용하는지 

createSlice
action와 reducer를 모든것을 한번에 캡슐화
전달하는 옵션에 name, initialState, reducers, state, action 등등...
여기서도 immer.js을 사용해서 기존의 state를 mutate할 수 있다
이 slice에서 action와 reducer를 꺼내서 사용하면 된다
*/