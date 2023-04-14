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
    setupdatedUserInput(''); 
  };

  function removeElement(index) {
    setlistOfTodos((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList; 
    });
  };
  

  
  return (
    <div className="App">
      <Input buttonClick={handleButtonClick} inputFunction={handleInputChange} ></Input>
      <List todoList={listOfTodos} input={userInput} removeFunction={removeElement}></List>
    </div>
  );
}

export default App;
