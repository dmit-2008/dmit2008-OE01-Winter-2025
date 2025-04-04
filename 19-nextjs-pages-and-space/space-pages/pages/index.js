import Head from 'next/head'
import { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import AgencyCard from '@components/AgencyCard';
import NavBar from '@components/NavBar';

import { getAgencies } from '@api/agencies'


export default function Home() {

  const [agencies, setAgencies] = useState([])

  useEffect(() => {
    getAgencies("").then((data) => {
      console.log(data)
      setAgencies(data.results)
    })
  }, [])


  return (
    <div>
      <Head>
        <title>Spaaaaaaace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar />

        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">

          <Typography variant="h3">
            Space Agencies
          </Typography>

          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {agencies.map((agency) => {
              return <AgencyCard
                key={agency.id}
                id={agency.id}
                imageUrl={agency.image_url}
                name={agency.name}
                abbreviation={agency.abbrev}
                description={agency.description}
              />
            })}
          </Box>

        </Container>

    </div>
  )
}
