import './App.css';
import {React, useState} from 'react';
import List from './components/List';
import Input from './components/Input';

function App() {
  
  const [listOfTodos, setlistOfTodos] = useState([]); 

  const [userInput, setuserInput] = useState('');

  const handleInputChange = (event) => {
    setuserInput(event.target.value);
  };

  const [updatedUserInput, setupdatedUserInput] = useState(userInput);

  const handleButtonClick = (event) => {
    setlistOfTodos((prevList) => [...prevList, userInput]); // Add the new item to the previous list of items
    setupdatedUserInput(''); // Clear the input field
  };

  /* Get the text to be added to a list item when button is clicked -
  
  create a function in the app.js (Parent) that takes in an onClick event so when the button is 
  clicked, the text is added to a list item.

  write function skeleton 

  create buttons state

  pass the function down to the Input



  
  */

  
  return (
    <div className="App">
      <Input buttonClick={handleButtonClick} inputFunction={handleInputChange} ></Input>
      <List todoList={listOfTodos} input={userInput}></List>
    </div>
  );
}

export default App;
