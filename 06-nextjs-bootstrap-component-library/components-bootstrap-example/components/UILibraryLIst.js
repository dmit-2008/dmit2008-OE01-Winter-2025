// is I want you to use the following array
// I want you to create a component with name as the file
// I want to use a react bootstrap list group and list item
// render these as links.

// imports always go to the top
import ListGroup from 'react-bootstrap/ListGroup';
// imports are always in the order of most generic to most specific
// top framework imports
// middle third party imports
// bottom your custom imports.


const UI_LIBRARY_LIST = [
	{
		name: "MUI",
		url: "https://mui.com/"
	},
	{
		name: "React Bootstrap (the one we're looking at)",
		url: "https://react-bootstrap.github.io/"
	},
	{
		name: "Ant Design",
		url: "https://ant.design/docs/react/introduce"
	},
	{
		name: "Semantic UI",
		url: "https://react.semantic-ui.com/"
	}
]

export default function UILibraryList() {
  return <ListGroup>

  </ListGroup>
}