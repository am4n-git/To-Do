import React from 'react'

function List(props) {
    console.log(props)
    return (
        <div>
            {props.itemList.map(itemObj=>{
               return (<p>{itemObj.item}</p>);
            })
        }
            
        </div>
    );
}

export default List
