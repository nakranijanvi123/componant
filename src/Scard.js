

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Nav, NavDropdown, Form, Navbar, Row, Container } from 'react-bootstrap';
import './App.css';

function Scard() {



    return (
        <>

            <section className=' scard section-padding bg-lite'>
                <Container>

                    <Row>


                        <Col className=' col-12 col-xl-3 col-lg-6 col-md-6 '>

                            <div className='features-card-item text-center '>

                                <div className='icon'>
                                    <img src={require(`./image/scard.png`)}></img>

                                </div>
                                <h3>Indicators  Success</h3>
                                <p>$9374034</p>

                            </div>

                        </Col>
                        <Col className=' col-12 col-xl-3 col-lg-6 col-md-6 '>

                            <div className='features-card-item text-center '>

                                <div className='icon'>
                                    <img src={require(`./image/scard1.png`)}></img>

                                </div>
                                <h3>Indicators  Success</h3>
                                <p>$9374034</p>

                            </div>

                        </Col>

                        <Col className=' col-12 col-xl-3 col-lg-6 col-md-6 '>

                            <div className='features-card-item text-center '>

                                <div className='icon'>
                                    <img src={require(`./image/scard2.png`)}></img>

                                </div>
                                <h3>Indicators  Success</h3>
                                <p>$9374034</p>

                            </div>

                        </Col>

                        <Col className=' col-12 col-xl-3 col-lg-6 col-md-6 '>

                            <div className='features-card-item text-center '>

                                <div className='icon'>
                                    <img src={require(`./image/scard3.png`)}></img>

                                </div>
                                <h3>Indicators  Success</h3>
                                <p>$9374034</p>

                            </div>

                        </Col>





                    </Row>

                </Container>
            </section>


        </>
    )

}

export default Scard