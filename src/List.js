import React from 'react'
import './List.css'
function List(props) {
    const deleteItem= (key)=>{
       const newList=  props.itemL.filter{itemObj=>{
            return itemObj.key !== key
        }}
    }
    console.log(props)
    return (
        <div>

            {
            props.itemL.map((itemObj)=>{
               return (<div className="item">
                   <p>{itemObj.item}</p> 
                   <button onClick={()=>{deleteItem(itemObj.key)}}>x</button>
                   </div>);
            })
        }
            
        </div>
    );
}

export default List
