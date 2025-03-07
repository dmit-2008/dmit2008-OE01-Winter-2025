import Head from "next/head";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Home() {
  return (
    <div>

      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" color="inherit" noWrap>
            We Love Quotes
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Typography variant="h5" align="center" color="text.primary" paragraph>
              But for now, it's just a static quote.
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              align="center"
              color="text.secondary"
              gutterBottom
            >
              - Oliver Antoniu
            </Typography>

            <Box
             display="flex"
             justifyContent="center"
             sx={{
              pt: 5,
             }}
            >
              <Button
                variant="contained"
              >
                Get New Quote
              </Button>
            </Box>

          </Box>
        </Container>
      </main>

    </div>
  );
}
