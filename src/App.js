import React, { useState } from 'react'
import './App.css';

function App() {

  const [value , setValue] = useState()
  const [data , setData] = useState([])
  const addData = () => {
    setData((oldItems) => {
      return [...oldItems , value]
      
    })
    setValue(' ')
  }

  const deleteItems = (index) =>{
    console.log(index.target.parentElement.remove())
  }

  return (
    <>
    <div className="main-div">
      <div className="center-name">
        <br />
        <h1>TODO LIST</h1>
        <br />
        <input type="text" onChange={ (item) => setValue(item.target.value)} placeholder="Add Items" value={value} />
        <button onClick={addData}> + </button>

        <ol>
          {data.map((itemVal , index) => {
            return (
              <>
              <div className="todo-list">
              <i onClick={deleteItems} className="fas fa-times-circle"></i>
              <li>{itemVal}</li>
              </div>
              </>
             )
          })}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
