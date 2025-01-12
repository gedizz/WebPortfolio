import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// bg="dark" data-bs-theme="dark"
function RouterNav() {
  return (
    <Navbar className="justify-content-between" expand="sm" bg="light" data-bs-theme="light"> 
      <Container>

        <Navbar.Brand><Nav.Link as={Link} to="/" title="Home">RecipeManager</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="tabs">
            <Nav.Item>
              <Nav.Link as={Link} to="/" title="Home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as={Link} to="/recipe-list" title="Recipe List">Recipe List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/add-recipe" title="Add Recipe">Add Recipe</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <Form.Check type="switch" id="dark-switch" label="Dark Mode"/>
          </Form>
        </Navbar.Collapse>
        

      </Container>
    </Navbar>
    
  );
}

export default RouterNav;