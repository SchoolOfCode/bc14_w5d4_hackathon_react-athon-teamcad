import React from 'react';

export default function List(prop) {

    return  (
    <div>
        <h1>To Do's List:</h1>
         {prop.todoList.map((item) => (
        <div>
        <ul>
          <li>{item}</li>
        </ul>
        <button>Delete</button>
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