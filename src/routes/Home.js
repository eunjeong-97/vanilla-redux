import React, { useState } from "react";
import { actionCreators } from "../store";

import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
    const [text, setText] = useState('');

    function onChange(e) {
        setText(e.taget.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText('')
    }
    return (
        <>
            <h1>TO DO</h1>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder="wirte" onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{toDos.map((toDo, index) => <ToDo key={index}{...toDo} />)}</ul>
        </>
    )
}

function mapStateToProps(state) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


