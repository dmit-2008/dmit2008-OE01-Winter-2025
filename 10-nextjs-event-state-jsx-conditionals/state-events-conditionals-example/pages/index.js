import { useState } from 'react'

import Head from 'next/head'

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { MOVIE_LIST } from '../utils/movies'

export default function Home() {
  // i want you create the stateful values in the form
  // and make the text field controlled.
  // As a note I try to put all of my
  // react hook calls at the top of the
  // component definition.
  const [search, setSearch] = useState("")
  const [year, setYear] = useState("")

  // we're going to make this stateful
  // so that it can change.
  const [movies, setMovies] = useState(MOVIE_LIST)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`year: ${year}`)
    console.log(`search: ${search}`)
  }

  /*
    to filter movies we'll need:
    - search value
    - handler for the form submission
    - temporary array
      - set movies
        - filtered
  */

  return (
    <div>
      <Head>
        <title>Our Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <Container>
          <Typography variant="h2" component="h2" style={{textAlign: "center"}}>
            Movies
          </Typography>
          <form
            style={{width: '100%'}}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {/* make this controlled
                let's make a online function
                to update the state */}
                <TextField
                  id="search-field"
                  label="title..."
                  variant="standard"
                  sx={{width: '100%'}}
                  value={search}
                  onChange={
                    (event) => {
                      setSearch(event.target.value)
                    }
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="year-field"
                  label="year"
                  variant="standard"
                  sx={{width: '100%'}}
                  type="number"
                  value={year}
                  onChange={(event)=> {
                    setYear(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  variant="contained"
                >Filter</Button>
              </Grid>
              <Grid item xs={10}>
                {/* Add the error message here*/}
              </Grid>
            </Grid>
          </form>
          <List sx={{width: `100%`}}>
          { movies.map((movieData, index)=> {
              return <ListItem key={index}>
                <ListItemText>
                  <Typography variant="p" component="div">
                    {movieData.name} ({movieData.year})
                  </Typography>
                </ListItemText>
              </ListItem>
            })
          }
          </List>
        </Container>
      </main>
    </div>
  )
}
