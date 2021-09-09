import React from 'react'
import './List.css'
function List(props) {
    console.log(props)
    return (
        <div>

            {
            props.itemL.map((itemObj)=>{
               return (<div className="item">
                   <p>{itemObj.item}</p> 
                   <button>x</button>
                   </div>);
            })
        }
            
        </div>
    );
}

export default List
