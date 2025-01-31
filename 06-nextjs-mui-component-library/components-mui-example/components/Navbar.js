
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// we're creating the custom component that will contain the mui navbar
export default function Navbar() {
  // take a look here https://mui.com/material-ui/react-app-bar/#basic-app-bar
  // for the docs we're using some of the pieces here.
  return <AppBar>
    <Toolbar>
      {/* I want you to look as an h6 but use a div to render */}
      <Typography
        variant="h6"
        component="div"
      >
        Intro to MUI
      </Typography>
    </Toolbar>
  </AppBar>
}