// import React hooks 
const { useEffect, useState } = React

const List = () => {
  // hook used to create a state variable and its updater function that updates the state
  const [list, setList]= useState([])
  const [item, setItem]= useState("")
  
  // track state of input field
  function handleChange() {
    setItem(event.target.value);
  }
 
  // add item to list
  function handleAdd() {
    // create a new list based on the old list and the new item
    const newList = list.concat({ item });
    setList(newList);

    setItem("") // reset input field
  }

  return (
    <div className="list">
      <h1>To-Do List</h1>

      <div>
        <label htmlFor="item">Enter To-Do Item: </label>
        <input id="item" type="text" value={item} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      {
        list.map(todo => <p key={todo}>{todo}</p>)
      }
    </div>
  )


}

// renders first argument into the DOM element passed in as second argument
ReactDOM.render(
  <List />,
  document.getElementById('root')
)