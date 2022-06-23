import React, { useState } from "react";
import { actionCreators, actionCreators } from "../store";

function Home(props) {
    const [text, setText] = useState('');
    console.log(props);
    // mapStateToProps함수를 통해 redux store에 있는 toDos에 접근이 가능하고
    // mapDispatchToProps함수를 통해 redux store의 state를 변경할 수 있는 dispatch를 사용할 수 있다
    // 이러한 dispatch를 사용하기 위해서는 actions creator가 필요하다
    // const { toDos, dispatch } = props; 
    const { toDos, addToDo } = props;

    function onChange(e) {
        setText(e.taget.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setText('')
        // dispatch(addToDo(text)); addToDo(text)가 action creator
        addToDo(e.target.value);
    }
    return (
        <>
            <h1>TO DO</h1>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder="wirte" onChange={onChange} />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    )
}

function mapStateToProps(state) {
    return { state };
}

// component가 store.dispatch()처럼 dispatch 동작도 할 수 있게 해줌
// connect()함수의 두번째 인자

function mapDispatchToProps(dispatch, ownProps) {
    // return {dispatch}; // redux store의 state를 변경할 수 있는 dispatch를 리턴함으로써 여기서 바로 컴포넌트에 props 안에 전달할 redux store의 state를 변경할 수 있게 된다 
    // 바로 dispatch를 사용해서 전달할 props를 변경할 수 있지만, 함수를 만들어서 사용하는것이 더 좋다
    return {
        //addToDo함수를 만들어서 리턴한다
        // text argument가 필요하고, 이 함수를 실행하면 dispatch를 호출한다
        // 이렇게 함수를 만듬으로써 dispatch를 Home컴포넌트에서 사용하지 않으면서 props를 만들 것이다

        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// 만약 mapState는 필요없고 dispatch는 필요한경우 mapStateToProps자리를 null이라 하면 된다
// export default connect(null, mapDispatchToProps)(Home);


// redux store의 state를 component와 연결하는 방법
// 1. store.getState()
// 2. mapStateToProps(Component)


