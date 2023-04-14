import './App.css';
import {React, useState} from 'react';
import List from './components/List';
import Input from './components/Input';

function App() {
  
  const [listOfTodos, setlistOfTodos] = useState(); 
  
  return (
    <div className="App">
      <Input></Input>
      <List></List>
    </div>
  );
}

export default App;
