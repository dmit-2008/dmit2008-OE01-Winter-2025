// to use state in react I need to import it first
import {useState} from "react"

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
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
  }


  return (
    <div>
      <Navbar title={"Our First State Example"} />
      <Container
        maxWidth="md"
        component="main"
        sx={{mt: 10}}
      >
        <form>
          {/* refer to https://mui.com/material-ui/react-grid2/ */}
          <Grid container spacing={2}>
            {/* one for the textfield */}
            <Grid size={10}>
              {/* make our text field "controlled"
              with the stateful of todoValue */}
              <TextField
                variant="outlined"
                label="The thing todo"
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
