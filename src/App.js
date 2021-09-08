import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import List from './List';

function App() {
  const[currentItem, setCurrentItem]= useState(null)
  const[itemList, updateItemList]= useState([""])
  const onChangeHandler = (e) =>{
    setCurrentItem(e.target.value)
  }

  const addItemToList = ()=>{
    updateItemList([...itemList, {item:currentItem, key:Date.now()}])
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
        <List itemlist= {itemList}/>
      </div>
    </div>
  );
}

export default App;
