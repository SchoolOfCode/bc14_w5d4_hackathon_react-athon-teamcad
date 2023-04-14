import React from 'react';

export default function List(prop) {

    return  (
    <div>
        <h1>To Do's List:</h1>
        <ul>
            <li>{prop.input}</li>
        </ul>
        <button>Delete</button>
    </div>
    );
}