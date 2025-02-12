// to use state in react I need to import it first
import {useState} from "react"

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
// all of the list imports we'll need for the list.
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import Navbar from "@/components/Navbar";

// make a form
// that use a text field
// and a button
// uses grid version 2 to put it side to side.
// all from mui except for the form.

// and if you're done this where's the state.

export default function Home() {
  // I want you to do two things.

  // I want you to find a list in MUI
  // and I want you to list all of the SAMPLE_TODOS
  // display the text, and add a divider from mui.
  const SAMPLE_TODOS = [
    "explain more about state",
    "get annoyed brightspace",
    "complain to students about my qualms",
    "tell them about meetups",
  ]
  // make the list stateful using SAMPLE_TODOS
  // as the default value.
  // add the new todo in the form.

  // let's add this stateful
  const [todoList, setTodoList] = useState(SAMPLE_TODOS)

  // create a stateful value and hook it up
  // to the text field
  // below take a look at the TextFieldComponent
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

    // I'm going to make a copy of the todo list
    // with the new value and then set that list.
    const tempTodoList = [todoValue, ...todoList]
    console.log(tempTodoList)
    // we're going to reset the value of our
    // todoValue
    setTodoValue("")
  }


  return (
    <div>
      <Navbar title={"Our First State Example"} />
      <Container
        maxWidth="md"
        component="main"
        sx={{mt: 10}}
      >
        {/* listen to the submit event. */}
        <form
          onSubmit={submitHandler}
        >
          {/* refer to https://mui.com/material-ui/react-grid2/ */}
          <Grid container spacing={2}>
            {/* one for the textfield */}
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
            {/* Create our list! (the full row) */}
            <Grid size={12}>
              {/* make a list from mui */}
              <List>
                {/* we're going to change SAMPLE_TODOS
                to our state value todoList */}
                { todoList.map((todo, index)=> {
                  // I need to return a single
                  // jsx node.
                  // note the console.log is for
                  // learning purposes only and should be
                  // removed when doing an assignment or code
                  // (no console.logs in your jsx.)
                  console.log(`my todo here: ${todo}`)
                  // I'm using the todo in the list
                  // item because it exists.
                  return <ListItem key={index}>
                    <ListItemText
                      primary={todo}
                      secondary={`index: ${index}`}
                    />
                  </ListItem>
                })}
              </List>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

/*
Discussion on how to close components
Rule of thumb is if you're not using the "children"
prop in your component defintion.
  you'll use
  <ComponentName />

If you are using children then you can close it with
the opening and closing tag of the component

  <ComponentName>
    shtuff
  </ComponentName>

The reason why you write it like this is because
You want to make sure that anything within the
opening and closing tags are rendered and/or handled.
*/
