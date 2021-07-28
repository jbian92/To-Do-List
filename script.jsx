// import React hooks 
const { useEffect, useState } = React

const List = () => {
  // hook used to create a state variable and its updater function that updates the state
  const [list, setList]= useState([])
  const [itemInput, setItemInput]= useState("")
  
  // track state of input field
  function handleChange() {
    setItemInput(event.target.value);
  }
 
  // add item to list
  function handleAdd() {
    // create a new list based on the old list and the new item
    
    const newItem = {
      itemName: itemInput,
      // isSelected: false,
    };
    
    const newList = list.concat(newItem);
    setList(newList);

    setItemInput("") // reset input field
  }

  return (
    <div>
      <div className="input">
        <h1>To-Do List</h1> 

        <label htmlFor="item">Enter To-Do Item: </label>
        <input id="item" type="text" value={itemInput} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      
      <div className="list">
        {
          list.map((itemInput, index) =>
            <li key={index}>{itemInput.itemName}</li>)
        }
      </div>

    </div>
  )

}

// renders first argument into the DOM element passed in as second argument
ReactDOM.render(
  <List />,
  document.getElementById('root')
)