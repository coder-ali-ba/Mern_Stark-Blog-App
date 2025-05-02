import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IKImage } from 'imagekitio-react';
import Image from './image';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 w-100 h-25">
          <Container fluid >
            <Navbar.Brand href="#">
           
                {/* <IKImage urlEndpoint='https://ik.imagekit.io/alilia1212/' path='/layers-icon-on-white-background-free-vector.jpg' style={{
                  width : '40px',
                  height : "40px"
                }} /> */}

                <Image />
               <span>Blog</span>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image />
              
               <span>Blog</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-5 gap-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Trending</Nav.Link>
                  <Nav.Link href='#action3'>Most Popular</Nav.Link>
                  <Nav.Link href='#action4'>About</Nav.Link>
                  
                </Nav>
                <Nav>
                   <Button variant="info">LogIn</Button>
                </Nav>
             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


     
    </>
  );
}

export default OffcanvasExample;