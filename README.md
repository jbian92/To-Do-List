# To-Do List
This is a simple "To-Do List" application in React built during Execute Big's Tech Roulette Week 4. 

## Demo

## Challenges Faced
### Displaying the Added To-Do Tasks
- **Problem**: While trying to display the user's tasks on the screen, I ran into several errors.
- **Solution**:
  - **ERROR 1 - Each child in a list should have a unique "key" prop**: After looking through the React documentation on lists and keys, I realized that my **map()** function was missing a **key** prop. After trying out different keys, I was able to get rid of this error by using the index of each task as its key. The order of the tasks do not change, so I thought using the index as the key was suitable.
    ```
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
    ```
  - **ERROR 2 - Script error**: I struggled whenever I received a script error because the error message was not specific enough for me to easily pinpoint what line(s) of code is causing the error. After experiencing more of these script errors, I found a good strategy to help narrow down the possible sources of error:
    - looking carefully at my code, line by line
    - commenting out code that may be the cause of the error, such as code I'm not completely confident in, and then seeing whether or not the script error goes away

### Handling Multiple Checkboxes
- **Problem**: When any one checkbox is checked off, all checkboxes become checked off. The different checkboxes are not independent of each other.
- **Solution**: With a single checkbox, I only had the **checked** state and changed the state of the checkbox based on that.
  ```
  const [checked, setChecked] = useState(false)
  ```
  However, this didn't work for multiple checkboxes. First, I thought about calling multiple **useState** Hooks for each checkbox, but a new state variable would need to be created for each task the user inputs and thus would be repetitive. After thinking through and trying other possible solutions, I eventually decided to create an array whose elements indicate the state of each checkbox. 
  ```
  const [checked, setChecked] = useState([])
  ```
  By using the index of each task in the state variable **list** as the index in **checked**, I was able to create multiple checkboxes and have them working as independent checkboxes. 

## Execute Big's Tech Roulette Week 4
- Learned the basic concepts and fundamental ideas of React and JSX.
- Used the React documentation and related resources to build a to-do list. 
