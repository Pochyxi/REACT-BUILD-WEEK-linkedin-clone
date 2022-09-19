import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsLinkedin, BsBriefcaseFill, BsPersonCircle } from 'react-icons/bs'
import { ImHome3} from 'react-icons/im'
import { MdSupervisorAccount, MdNotifications } from 'react-icons/md' ;
import { TbMessageCircle } from 'react-icons/tb'
import Offcanvas from 'react-bootstrap/Offcanvas';

 const LinkedinNavbar = () => {
  return (
    <Navbar bg="light" >
    <Container> 
      <Navbar.Brand><BsLinkedin className='NavBarLogo'/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
          <Nav.Link><ImHome3 className='NavbarAllLogo'/></Nav.Link>
          <Nav.Link><MdSupervisorAccount className='NavbarAllLogo'/></Nav.Link>
          <Nav.Link><BsBriefcaseFill className='NavbarAllLogo'/></Nav.Link>
          <Nav.Link><TbMessageCircle className='NavbarAllLogo'/></Nav.Link>
          <Nav.Link><MdNotifications className='NavbarAllLogo'/></Nav.Link>
          <NavDropdown title={<BsPersonCircle className='NavBarAllLogo'/>}  id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3"><Button variant='outline-primary'>Visualizza Profilo</Button></NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              <h6>Account</h6>
              <ul>
              <li>Impostazioni e privacy</li>
              <li>Guida</li>
              <li>Lingua</li>
              </ul>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
            <h6>Gestisci</h6>
              <ul>
              <li>Post e Attività</li>
              <li>Account per la pubblicazione di offerte</li>
              </ul>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action6">
              Esci
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default LinkedinNavbar;