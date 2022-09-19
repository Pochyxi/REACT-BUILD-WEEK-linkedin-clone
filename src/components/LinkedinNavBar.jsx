import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BsLinkedin,
  BsBriefcaseFill,
  BsPersonCircle,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { AiOutlineSearch} from "react-icons/ai";
import { MdSupervisorAccount, MdNotifications } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";


const LinkedinNavbar = () => {
  const [formToggle, setFormToggle] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Navbar className="NavBarLinkedin" bg="light">
      <Container fluid className="NavBarLinkedin">
        <Navbar.Brand>
          <BsLinkedin className="NavBarLogo" />{" "}
        </Navbar.Brand>
          <Nav
            className=" NavBarLinkedin my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex NavbarForm w-100">

              <Form.Control
                style={{ width: "100%"}}
                onBlur={() => setFormToggle(false)}
                className={formToggle ? " d-lg-block w-100 " : "d-none d-lg-block me-2  "}
                type="search"
                placeholder= "Cerca"
                aria-label="Search"
              />
            </Form>
            {
              !formToggle && (
                <>
            <Nav.Link>
            <AiOutlineSearch
             className="NavBarAllLogo d-lg-none d-block"
             onClick={() => setFormToggle(true)}
             /> <span className="NavBarSpan text-center  d-lg-none d-block">Cerca</span>
            </Nav.Link>
            <Nav.Link className="text-center">
              <div><ImHome3 className="NavBarAllLogo" /> <span className="NavBarSpan text-center">Home</span></div>
            </Nav.Link>
            <Nav.Link className="text-center">
              <div><MdSupervisorAccount className="NavBarAllLogo" /> <span className="NavBarSpan text-center">Rete</span></div>
            </Nav.Link>
            <Nav.Link className="text-center">
              <div><BsBriefcaseFill className="NavBarAllLogo" /> <span className="NavBarSpan text-center">Lavoro</span></div>
            </Nav.Link>
            <Nav.Link className="text-center">
              <div><TbMessageCircle className="NavBarAllLogo" /> <span className="NavBarSpan text-center">Messaggistica</span></div>
            </Nav.Link>
            <Nav.Link className="text-center">
              <div><MdNotifications className="NavBarAllLogo" /> <span className="NavBarSpan text-center">Notifiche</span></div>
            </Nav.Link>
            <NavDropdown
              title={<div className="d-flex flex-column"><BsPersonCircle className="NavBarAllLogo" /> <span className="NavBarSpan text-center">Notifiche</span></div>}
              id="navbarScrollingDropdown"
            > 
              <NavDropdown.Item href="#action3">
                <Button variant="outline-primary">Visualizza Profilo</Button>
              </NavDropdown.Item>
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
                  <li>{'Account per la pubblicazione di offerte'.substring(0, 15) + '...' }</li>
                </ul>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Esci</NavDropdown.Item>
            </NavDropdown>
            <Button
              variant="none"
              onClick={handleShow}
            >
              <div><BsGrid3X3GapFill className="NavBarAllLogo" /> <span className="NavBarSpan text-center">Lavoro</span></div>
            </Button>
              </>
              )
            }


            <Offcanvas show={show} onHide={handleClose}  placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p className="mb-0">
                  This is content within an <code>.offcanvas-lg</code>.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>

      </Container>
    </Navbar>
  );
};

export default LinkedinNavbar;
