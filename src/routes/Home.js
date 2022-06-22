import React, { useState } from "react";

function Home() {
    const [text, setText] = useState('');
    function onChange(e) {
        setText(e.taget.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setText('')
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

export default Home;