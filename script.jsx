// import React hooks 
const { useEffect, useState } = React

const List = () => {
  // hook used to create a state variable and its updater function that updates the state
  const [list, setList]= useState([])
  const [item, setItem]= useState("")
  
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timerID)
  }, [])

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Item ${item}`)
  }

  return (
    <div className="list">
      <h1>To-Do List</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter To-Do Item: 
          <input
            type="text"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
        </label>
        <input type="submit" value="Add" />
      </form>

      {
        list.map(item => <p key={item}>{item}</p>)
      }
    </div>
  )


}

// renders first argument into the DOM element passed in as second argument
ReactDOM.render(
  <List />,
  document.getElementById('root')
)