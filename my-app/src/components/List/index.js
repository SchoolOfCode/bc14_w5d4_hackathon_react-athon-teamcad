import React from 'react';

export default function List(prop) {

    return  (
    <div>
        <h1>To Do List:</h1>
         {prop.todoList.map((item, index) => (
        <div index={index}>
        <ul>
          <li>{item}</li>
        </ul>
        <button onClick={() => prop.removeFunction(index)}>Delete</button>
        </div>
        ))}
    </div>
    );
}

/* 
questions:

How do we group the list 🤩

do we need to create a prop or do we need to add an event handler?

what do we want out button function to do?





*/