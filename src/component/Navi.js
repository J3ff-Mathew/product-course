import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navi() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Products</Nav.Link>
                    <Nav.Link as={Link} to="/course">Courses</Nav.Link>
                    <Nav.Link as={Link} to="/enquiry">Enquiries</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
