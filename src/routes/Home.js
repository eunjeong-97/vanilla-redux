import React, { useState } from "react";

// mapStateToProps함수에서 ownProps를 사용한다는것은
// Home 컴포넌트가 받은 props를 가져와서 쓴다는것인데 props인자를 받지 않으면 사용할 수 없게 된다
function Home(props) {
    const [text, setText] = useState('');
    console.log(props); // react-router로부터 받은 props가 있고, mapStateToProps함수를 통해 redux store의 state를 받게 된다
    console.log(props.toDos); // redux의 toDos state에 접근
    function onChange(e) {
        setText(e.taget.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setText('')
    }
    // redux state로부터 정보를 가지고 와야한다
    return (
        <>
            <h1>TO DO</h1>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder="wirte" onChange={onChange} />
                <button>Add</button>
            </form>
            {/* toDos를 렌더링하는 부분: 그래서 Home.js에서는 store로부터 state를 가지고 올 수 있어야 한다 */}
            <ul></ul>
        </>
    )
}

// mapStateToProps: redux store와 내가 사용할 컴포넌트와 연결하는 방법
// 여기서 ownProps는 Home컴포넌트가 (react-router로부터) 받은 props이다
// mapStateToProps()를 사용한다는것은 redux store로부터 무언가를 가져오고 싶고
// 그리고나서 컴포넌트의 props에 넣어서 사용하고 싶다는 뜻이다
// function mapStateToProps(state, ownProps) {
function mapStateToProps(state) { // ownProps를 사용하지 않으니까 생략
    // redux store로부터 state를 가지고 온다
    console.log(state, ownProps); // return을 하지 않으면 에러를 발생시킨다
    // return { sexy: true }; 이렇게 리턴값을 지정하고 Home컴포넌트의 props를 살펴보면, sexy props이 생긴것을 확인할 수 있다
    return { state }; // state접근!
    // 왜냐하면 connect()는 Home으로 보내는 props에 추가될 수 있게 허용해주기 때문이다
    // 그래서 내가 뭔든 리턴하면 component의 prop에 추가될 것이다
}

// store를 dispatch를 할지, store에서 getState()를 할지 생각해야 한다
// connect(): 컴포넌트를 action과 연결해준다, state와 dispatch를 인자로 가진다 
// mapStateToProps()를 통해서 store로부터 state를 가져올 것이다
// mapStateToProps(): redux store로부터 받은 state, 컴포넌트의 props 2개의 arguments와 함게 호출된다, 
export default connect(mapStateToProps)(Home);