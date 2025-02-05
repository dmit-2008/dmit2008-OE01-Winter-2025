// in this file I want you to
// create a component
// has a form
// and a text field
import TextField from '@mui/material/TextField'
// a check box with a label
// a button
// to use this in the index.js

export default function SimpleForm() {
  // if I wanted to add padding on the form would it style or sx
  // since form is not a "mui" element you need to use the style obj.
  return <form
    style={{marginTop: "10px"}}
  >
    <TextField
      id="outlined-basic"
      label="Our first text field"
      variant="outlined"
    />

  </form>
}