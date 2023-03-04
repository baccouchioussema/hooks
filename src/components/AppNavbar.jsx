import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const AppNavbar = ({setSearchName , setSearchRating}) => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">oussema</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Typography  style ={{padding:'10px' , marginLeft:'100px'}}component="legend">Controlled </Typography>
<Rating style ={{padding:'10px'}}
  name="simple-controlled"
  onChange={(e)=>setSearchRating(e.target.value)}
 
/>
            
      
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearchName(e.target.value)}
              
            />
            <Button variant="outline-success">Search</Button>
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </div>
  )
}

export default AppNavbar
