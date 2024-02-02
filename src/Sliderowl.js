import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Nav, NavDropdown, Card, Form, Navbar, Row, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaStar } from "react-icons/fa";

import './App.css';
import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const slider1 = {
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 1,



        },
        // breakpoint from 480 up
        480: {
            items: 1,

        },
        // breakpoint from 768 up
        768: {
            items: 2,

        },
        1000: {
            items: 3,
        },
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,

    }
};

function Sliderowl() {


    return (
        <>

            <section className='section-padding bg-darkk  Sliderowl icard' >
                <Container>


                    <div class="block-contents text-sm-center ">
                        <div class="section-title">
                            <h2>Key Trading Features ansh for Success</h2>
                        </div>
                    </div>

                    <Row>

                        <Col>
                            <OwlCarousel className='owl-theme'  {...slider1} dots={false} loop margin={10} nav>
                                <div class='item'>

                                    <Col className=' '>

                                        <div className='features-card-item text-center '>

                                            <div className='icon h-50 w-50 rounded-circle'>
                                                <img src={require(`./image/man.jpeg`)}></img>

                                            </div>
                                            <h3>l need the element to resemble a link, use a button and change it with appropriate styles. Learn more: http</h3>
                                            <p>$9374034 loren15

                                            </p>

                                            <div className=" f-icon ">
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-facebook-f"></i>
                                                    <FaStar></FaStar>

                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-twitter"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-google"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-instagram"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <FaStar></FaStar>

                                            </div>


                                        </div>

                                    </Col>
                                </div>

                                <div class='item'>

                                    <Col className=' '>

                                        <div className='features-card-item text-center '>

                                            <div className='icon h-50 w-50 rounded-circle'>
                                                <img src={require(`./image/man1.jpeg`)}></img>

                                            </div>
                                            <h3>l need the element to resemble a link, use a button and change it with appropriate styles. Learn more: http</h3>
                                            <p>$9374034 loren15

                                            </p>

                                            <div className=" f-icon ">
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-facebook-f"></i>
                                                    <FaStar></FaStar>

                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-twitter"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-google"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-instagram"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <FaStar></FaStar>

                                            </div>


                                        </div>

                                    </Col>
                                </div>

                                <div class='item'>

                                    <Col className=' '>

                                        <div className='features-card-item text-center '>

                                            <div className='icon h-50 w-50 rounded-circle'>
                                                <img src={require(`./image/man2.jpeg`)}></img>

                                            </div>
                                            <h3>l need the element to resemble a link, use a button and change it with appropriate styles. Learn more: http</h3>
                                            <p>$9374034 loren15

                                            </p>

                                            <div className=" f-icon ">
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-facebook-f"></i>
                                                    <FaStar></FaStar>

                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-twitter"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-google"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-instagram"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <FaStar></FaStar>

                                            </div>


                                        </div>

                                    </Col>
                                </div>

                                <div class='item'>

                                    <Col className=' '>

                                        <div className='features-card-item text-center '>

                                            <div className='icon h-50 w-50 rounded-circle'>
                                                <img src={require(`./image/man3.jpeg`)}></img>

                                            </div>
                                            <h3>l need the element to resemble a link, use a button and change it with appropriate styles. Learn more: http</h3>
                                            <p>$9374034 loren15

                                            </p>

                                            <div className=" f-icon ">
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-facebook-f"></i>
                                                    <FaStar></FaStar>

                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-twitter"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-google"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-instagram"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <FaStar></FaStar>

                                            </div>


                                        </div>

                                    </Col>
                                </div>

                                <div class='item'>

                                    <Col className=' '>

                                        <div className='features-card-item text-center '>

                                            <div className='icon h-50 w-50 rounded-circle'>
                                                <img src={require(`./image/man3.jpeg`)}></img>

                                            </div>
                                            <h3>l need the element to resemble a link, use a button and change it with appropriate styles. Learn more: http</h3>
                                            <p>$9374034 loren15

                                            </p>

                                            <div className=" f-icon ">
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-facebook-f"></i>
                                                    <FaStar></FaStar>

                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-twitter"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-google"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <a href="" class="text-white me-4">
                                                    <i class="fab fa-instagram"></i>
                                                    <FaStar ></FaStar>
                                                </a>
                                                <FaStar></FaStar>

                                            </div>


                                        </div>

                                    </Col>
                                </div>

                            </OwlCarousel>;
                        </Col>






                    </Row>

                </Container>
            </section>




        </>
    )

}
export default Sliderowl

