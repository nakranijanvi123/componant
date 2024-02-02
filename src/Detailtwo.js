

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Nav, NavDropdown, Form, Navbar, Row, Container } from 'react-bootstrap';
import './App.css';

function Detailtwo() {



    return (
        <>

            <section className=' Detailtwo section-padding bg-darkk'>
                <Container>

                
                    <Row className='align-items-center'>

                      

                        <div class="col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5">
                            <div class="block-contents ms-xl-3 mt-5 mt-lg-0">
                                <div class="section-title " >
                                    <span className='title-con'>Discover Our Trading Benefits</span>
                                </div>
                                <div className='slider'>

                                <p class="" >Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores voluptates accusamus ex facilis nobis soluta ipsum, iste voluptas</p>
                                <p class="wow fadeInUp" > Consectetur adipisicing elit. Eveniet,
                                    soluta pariatur facilis ullam corrupti placeat adipisci quisquam, ipsa, officiis amet ut deserunt?</p>
                           


                                </div>
                               <a href="#" class="custom-btn mt-4">Get Started</a>
                            </div>
                        </div>

                        <div class="col-xl-5 pe-lg-0 col-lg-5 col-12">
                            <div class="block-img dolr"  >
                                <img src={require(`./image/dolr2.png`)}></img>

                            </div>
                        </div>

                    </Row>


                </Container>
            </section>


        </>
    )

}

export default Detailtwo