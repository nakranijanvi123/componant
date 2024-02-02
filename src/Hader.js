

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Form, Navbar, Container } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';

function Hader() {



    return (
        <>

            <div className='bg-dark'>

                <Container>

                    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                        <Container fluid>
                            <Navbar.Brand href="#"><img src={require(`./image/logo.png`)}></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll text-white" className='text-white'>
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <li class="nav-item">
                                     <Link class="nav-link" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                     <Link class="nav-link" to="/about">About</Link>
                                    </li>
                                    <li class="nav-item">
                                     <Link class="nav-link" to="/blog">Blog</Link>
                                    </li>
                                    <li class="nav-item">
                                     <Link class="nav-link" to="/Services">service</Link>
                                    </li>
                                    <li class="nav-item">
                                     <Link class="nav-link" to="/Contact">Contact</Link>
                                    </li>
                               
                               

                                 

                                </Nav>
                                <Form className="d-flex">
                                    <Nav.Link href="#action1" className='text-white me-4 mt-2'>lOGIN</Nav.Link>

                                    <Button variant="warning">Warning</Button>{' '}
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Container>


            </div>


        </>
    )

}

export default Hader