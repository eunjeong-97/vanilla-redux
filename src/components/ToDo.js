import React from 'react';
import { Link } from 'react-router-dom';
import { remove } from '../store';

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
        onBtnClick: () => dispatch(remove(parseInt(ownProps.id)))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);
