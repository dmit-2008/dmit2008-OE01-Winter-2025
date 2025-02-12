// build this form
// think of what props you'll need.
import {useState} from 'react'
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';

// we're going to pass this state down
// so that this component can update the state
// of the parent component.
export default function AddTodoForm({
  todoList, setTodoList
}) {

  // take the stateful value for the form
  // into the add todo form
  const [todoValue, setTodoValue] = useState("")

  const updateTodoValue = (event) => {
    setTodoValue(event.target.value)
  }

  // hook into the submit on the form
  const submitHandler = (event) => {
    // prevent the form from submitting.
    event.preventDefault()
    // let's take a look at hte todovalue
    console.log("Submitted")
    console.log(`the value is ${todoValue}`)

    // we'll do some validation

    // I'm going to make a copy of the todo list
    // with the new value and then set that list.
    const tempTodoList = [todoValue, ...todoList]
    console.log(tempTodoList)
    // let's set the state and you'll see the rerender
    // the entire list
    setTodoList(tempTodoList)
    // we're going to reset the value of our
    // todoValue
    setTodoValue("")
  }
  return <Grid container spacing={2}>
    <form
      onSubmit={submitHandler}
    >
      <Grid size={10}>
        {/* make our text field "controlled"
        with the stateful of todoValue */}
        <TextField
          variant="outlined"
          label="Enter new todo"
          fullWidth
          sx={{
            contrastText: "blue"
          }}
          onChange={updateTodoValue}
          value={todoValue}
        />
        {/* full width prop essentially
        extends the textfield to the end of the grid */}
      </Grid>
      {/* one for the button */}
      <Grid size={2}>
        <Button
          type="submit"
          variant="contained"
          size="large"
        >
          Add Todo
        </Button>
      </Grid>

    </form>
  </Grid>
}