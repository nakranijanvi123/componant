import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Nav, NavDropdown, Form, Navbar, Row, Container } from 'react-bootstrap';
import './App.css';
import React from 'react';



function Icard() {


    return (
        <>

            <section className='section-padding bg-darkk icard' >
                <Container>

                    {/* <div className='nice-arrow-icon d-none d-xl-block'>
                   
                        <img src={require(`./image/star.png`)}></img>
                    </div> */}
                    <div class="block-contents text-sm-center ">
                        <div class="section-title">
                            <h2>Key Trading Features ansh for Success</h2>
                        </div>
                    </div>

                    <Row>
                  

                        <Col className=' col-12 col-lg-4 col-md-6'>

                            <div className='features-card-item '>

                                <div className='icon'>
                                    <img src={require(`./image/card1.png`)}></img>

                                </div>
                                <h3>Indicators for Trade Success</h3>
                                <p>Trade success indicators: price, market,risk management ,volume and many more.</p>

                            </div>

                        </Col>
                        <Col className=' col-12 col-lg-4 col-md-6'>

                            <div className='features-card-item '>

                                <div className='icon'>
                                    <img src={require(`./image/card2.png`)}></img>

                                </div>
                                <h3>Indicators for Trade Success</h3>
                                <p>Trade success indicators: price, market,risk management ,volume and many more.</p>

                            </div>

                        </Col>
                        <Col className=' col-12 col-lg-4 col-md-6'>

                            <div className='features-card-item '>

                                <div className='icon'>
                                    <img src={require(`./image/card3.png`)}></img>

                                </div>
                                <h3>Indicators for Trade Success</h3>
                                <p>Trade success indicators: price, market,risk management ,volume and many more.</p>

                            </div>

                        </Col>


                    </Row>

                </Container>
            </section>




        </>
    )

}
export default Icard

