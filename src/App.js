
import './App.css';
import {useState} from 'react';
import List from './List';

function App() {
  const[currentItem, setCurrentItem]= useState("")
  const[itemList, updateItemList]= useState([])
  const onChangeHandler = (e) =>{
    setCurrentItem(e.target.value)
  }

  const addItemToList = ()=>{
    updateItemList([...itemList, {item:currentItem, key:new Date().getDate() }])
    setCurrentItem("");
  }
  
  return (
    <div className="App">
      <h1>To-Do</h1>
      <div className="wrapper">
        <div className="input-wrapper">
          <input placeholder="Add item" value={currentItem} onChange={onChangeHandler}/>
          <button onClick={addItemToList}>+</button>
        </div>
        <List itemL= {itemList}/>
      </div>
    </div>
  );
}

export default App;
