import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Nav, NavDropdown, Form, Navbar, Row, Container } from 'react-bootstrap';
import './App.css';
import React from 'react';

import img18 from './image/sliderhbg.png';


function Slider() {


    return (
        <>


            <div>
                <div className='slider hero-1' style={{ width: '100%', backgroundImage: `url(${img18})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>

                    <Container>





                        <Row>


                            <Col className='s1c1 col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0'>

                                <div className='sider-con  '>

                                    <h1>Trade Smarter, Not Harder</h1>

                                    <p className=''>Our trading platform helps you access real-time data, expert insights, and advanced tools to make
                                        informed decisions and
                                        maximize profits
                                    </p>

                                    <Button className='custom-btn text-sm-center  ' >Warning</Button>{' '}

                                </div>
                            </Col>
                            
                             <Col className='s1c2 col-xl-5 col-md-8  col-12 col-sm-12 '>

                                <div className='sider-img '>

                                    <img src={require(`./image/bule.png`)} ></img>



                                </div>
                            </Col>   

                            {/* <Col className='s1c2 col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0'>
                                <div className="hero-mobile bule w-sm-100  mt-xl-0">

                                <img src={require(`./image/bule.png`)} ></img>

                                </div>

                            </Col> */}


                        </Row>

                    </Container>

                </div>
            </div>



        </>
    )

}
export default Slider

