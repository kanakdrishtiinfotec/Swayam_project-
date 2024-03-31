import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCategory from './SelectedCategory';


const NavItems = () => {

    const [searchInput, setSearchInput]= useState("");
    const [filterProduct,setFilterProduct]= useState(productData);

// console.log(productData);

// search function

const handleSearch = e =>{
 const searchTerm = e.target.value;
 setSearchInput(searchTerm);

//  filtering products based on search

const filtered = productData.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()));
setFilterProduct(filtered);
}

  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
        <Row>
            <Col xs="auto"><SelectedCategory select={"all"}/></Col>
          <Col xs="auto">
            
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={searchInput}
              onChange={handleSearch}
            />
            
          </Col>
          <Col xs="auto">
            <Button type="submit"><i className='icofont-search'></i></Button>
          </Col>
        </Row>
      </Form>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <div className="container">
      
               
                   {
                searchInput &&  <select className='lab-ul'>
                  {
                     searchInput && filterProduct.map((product, i)=> <option key={i}>
                     <Link to={`/shop/${product.id}`}>{product.name}</Link>
                 </option>)

                  }

                      
               </select>
                   }
           </div>
    </div>
  )
}

export default NavItems
