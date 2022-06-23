import React from 'react';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

function ToDo({ text, id, onBtnClick }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={onBtnClick} >DEL</button>
            </Link>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(parseInt(ownProps.id)))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);
