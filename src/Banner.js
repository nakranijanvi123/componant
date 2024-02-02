import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Nav, NavDropdown, Form, Navbar, Row, Container } from 'react-bootstrap';
import './App.css';
import React from 'react';

import img18 from './image/sliderhbg.png';


function Banner() {


    return (
        <>


            <div>
                <div className='slider hero-1' style={{ width: '100%', backgroundImage: `url(${img18})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>

                    <Container>





                        <Row>

                            <Col>  </Col>
                            <Col className='pb-5' > 
                            <h1 className='pb-5'> Trading </h1>
                             </Col>
                            <Col>  </Col>
                                                     
                      


                        </Row> 

                    </Container>

                </div>
            </div>



        </>
    )

}
export default Banner

