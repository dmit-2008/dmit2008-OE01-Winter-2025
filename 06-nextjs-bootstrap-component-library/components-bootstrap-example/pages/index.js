// taking a look at the documentation
// I want you to add a container
// add a row and column
// add an h1 that says using react bootstrap.

// if you go take a look at https://react-bootstrap.netlify.app/docs/layout/grid/#container
// documentation you will how to use this react container.
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <h1>Learning about React Bootstrap</h1>
          <p>Here we learned how to add the bootstrap and css to the <code>_app.js</code> in pages</p>
          <Row>
            <Col>
              <h2>A List of component librares</h2>
            </Col>
            <Col>
              <h2>Some more functionality</h2>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
