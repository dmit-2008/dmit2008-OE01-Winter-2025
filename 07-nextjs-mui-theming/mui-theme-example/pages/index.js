import styles from '../styles/Home.module.css'

// material ui imports.
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            <Typography variant="h2" component="h2">
              MUI Example
            </Typography>
            <Typography variant="body1" component="p">
              You can perhaps see why this is a popular package.
            </Typography>
          </Box>
        </Container>

      </main>
    </div>
  )
}
