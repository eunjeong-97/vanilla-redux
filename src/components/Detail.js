import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// == 방법1: useParams()와 mapStateToProps의 state 전체리턴 == 
// mapStateToPops에서 {toDos: state}객체를 리턴했기 때문에 
// Detail의 prop에서 toDos를 꺼내서 state에 접근이 가능하다
// 이렇게 하면 toDos(state)와 id를 이용하면 됨
function Detail({ toDos }) {
    const { id } = useParams();
    return <h1>Detail</h1>
}

// 이런식으로 mapStateToProps함수를 선언해서 state전체를 리턴하면
// state로부터 가져온 id를 이용해서 ToDo의 Detail을 볼 수도 있다.

function mapStateToProps(state, ownProps) {
    console.log(ownProps);
    return { toDos: state };
}

export default connect(mapStateToProps)(Detail);


// ==== 방법2:ownProps 활용 ====
function Detail2({ toDo }) {
    // 이렇게 작성한다면 새로고침을 할 때 state전체가 사라지기 때문에 에러를 발생한다
    // 즉, id로 추가했던 ToDo가 존재하지 않게 된다
    return <h1>{toDo.text}</h1>

    // 이렇게 작성하면 위에서 발생한 에러가 나오지 않는다
    // 
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
        </>
    )
}

function mapStateToProps2(state, ownProps) {
    const { match: { params: { id } } } = ownProps; // 이런식으로 찾는거는 콘속을 통해 찾으면 된다
    return { toDo: state.find(toDo => toDo.id === parseInt(id)) }
}

export default connect(mapStateToProps2)(Detail2);