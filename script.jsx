// import React hook 
const { useState } = React

const List = () => {
  // hook used to create a state variable and its updater function that updates the state
  const [list, setList] = useState([])
  const [taskInput, setTaskInput] = useState("")
  const [checked, setChecked] = useState([])
  
  // track state of input field
  function handleChange() {
    setTaskInput(event.target.value)
  }
 
  // add item to list
  function handleAdd() {
    // create a new list based on the old list and the new task
    const newTask = {
      taskName: taskInput,
    }
    
    const newList = list.concat(newTask)
    setList(newList)

    setTaskInput("") // reset input field
  }

  // change completion status of a task
  const handleCheck = (position) => {
    const updatedChecked = checked.map((condition, index) =>
      index === position ? !condition : condition
    )

    setChecked(updatedChecked)
  }

  return (
    <div className="to-do">
      <div className="input">
        <h1>To-Do List</h1> 

        <label htmlFor="item">Enter To-Do Item: </label>
        <input id="item" type="text" value={taskInput} onChange={handleChange} />
        <button type="button add" onClick={handleAdd}>
          Add
        </button>
      </div>
      
      <div className="list">
        {list.map((taskInput, index) => (
          <div className="item">
          <label className="check" key={index}>
            <input 
              type="checkbox"
              checked={checked[index]}
              onChange={() => handleCheck(index)}
            />
            <span>{taskInput.taskName}</span>
          </label>
          </div>
        ))}
      </div>

    </div>
  )

}

// renders first argument into the DOM element passed in as second argument
ReactDOM.render(
  <List />,
  document.getElementById('root')
)