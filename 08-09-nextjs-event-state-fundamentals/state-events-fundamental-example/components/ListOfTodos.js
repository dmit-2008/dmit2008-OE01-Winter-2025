// I want you to create a components
// with the same name as the file
// I want you to think about
// what props you'll need
// to render the entire list of
// todos from this index.js
// export and use this.

// import fragment
// we need to get all of the mui/react imports
import List from '@mui/material/List';

import TodoListItem from './TodoListItem';
// let's create our component here.

// as props we're passing down the stateful value of
// todolist but we're also passing down the deleteItemHandler
// which is a function!
export default function ListOfTodos({todoList, deleteItemHandler}) {

  return <List>
    {/* we're going to change SAMPLE_TODOS
    to our state value todoList */}
    { todoList.map((todo, index)=> {
      // I need to return a single
      // jsx node.
      // note the console.log is for
      // learning purposes only and should be
      // removed when doing an assignment or code
      // (no console.logs in your jsx.)
      // console.log(`my todo here: ${todo}`)
      // I'm using the todo in the list
      // item because it exists.
      // let's create a delete button.
      // go take at mui see if you can
      // create this button.

      // return my newly created TodoList Item
      return <TodoListItem
        key={index}
        todo={todo}
        index={index}
        deleteItemHandler={deleteItemHandler}
      />
    })}
  </List>
}