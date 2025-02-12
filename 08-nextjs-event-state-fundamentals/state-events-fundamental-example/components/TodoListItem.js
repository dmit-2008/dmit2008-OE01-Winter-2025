// create this.
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
// we need to get all of the mui/react imports
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';

// what are the props we'll need for this component
export default function TodoListItem({
  deleteItemHandler, index, todo
}) {
  // note deleteItemHandler is being passed through
  // the ListOfTodos component.
  // there is a better way called useContext to
  // make so that you have pass it in as a prop.
  // we'll talk about that later.


  // this notation below is a fragment
  // it's a little bit of a different feel
  return <>
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          onClick={() => {
            deleteItemHandler(index)
          }}
        >
          {/* above i'm using a technique to pass in
          the existing index into a handler without
          directly calling it, because it's in a function */}
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={todo}
        secondary={`index: ${index}`}
      />
    </ListItem>
    <Divider />
  </>
}