import React from 'react';
import { actionCreators } from '../store';

function ToDo({ text, onBtnClick }) {
    return (
        <li>
            {text} <button onClick={onBtnClick} >DEL</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    // console.log(ownProps); {text: text, id: id}
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(parseInt(ownProps.id)))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);

// DEL버튼을 눌렀을 때 store.dispatch({type:DEL, id})를 호출하면 되긴한데
// mapDispatchToProps()에서 만든 addToDo를 활용하면 된다
// ToDo 컴포넌트는 오로지 dispatch만 신경쓴다
// 왜냐하면 ToDo에서 reducer에게 메시지를 보내길 원한다
// ToDo에서는 state에 대해 신경쓰지 않는다
// 그래서 connect()함수를 사용한다