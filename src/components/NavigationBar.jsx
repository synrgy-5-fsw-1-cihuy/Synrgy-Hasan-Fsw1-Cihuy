import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand='lg'
        style={{ backgroundColor: '#cfd4ed' }}
      >
        <Container>
          <Navbar.Brand href='#home'>
            <img src='./assets/img/logo_binar_purple.svg' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto' style={{ marginLeft: 520 }}>
              <Nav.Link href='#services '>Services</Nav.Link>
              <Nav.Link href='#why-us'>Why Us</Nav.Link>
              <Nav.Link href='#testimonial'>Testimonial</Nav.Link>
              <Nav.Link href='#faq'>FAQ</Nav.Link>
            </Nav>
            <Button className='btn' style={{ backgroundColor: '#73ca5c' }}>
              Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
