import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IKImage } from 'imagekitio-react';
import Image from './image';
import { Link, Links } from 'react-router-dom';
import { SignedOut , SignInButton, SignOutButton , SignedIn , UserButton  } from '@clerk/clerk-react';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 w-100 h-25">
          <Container fluid >
            <Navbar.Brand href="#">
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
                  <Link href="#action1" to="/">Home</Link>
                  <Link  href="#action2" to="/">Trending</Link>
                  <Link href='#action3' to="/">Most Popular</Link>
                  <Link href='#action4' to="/">About</Link>
                  
                </Nav>
                <SignedOut>
                   <Link to='/Login'>   
                     <button>LogIn</button>                 
                   </Link>
                </SignedOut>
                <SignedIn>
                <UserButton />
                </SignedIn>
             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


     
    </>
  );
}

export default OffcanvasExample;