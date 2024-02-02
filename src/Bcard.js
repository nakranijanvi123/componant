import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Nav, NavDropdown, Card, Form, Navbar, Row, Container } from 'react-bootstrap';
import './App.css';
import React from 'react';



function Bcard() {


    return (
        <>

            <section className='section-padding bg-darkk Bcard' >
                <Container>

                    <div class="block-contents text-sm-center ">
                        <div class="section-title">
                            <h2>Key Trading Features ansh for Success</h2>
                        </div>
                    </div>

                    {/* <Row>
                  

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
                                    <img src={require(`./image/card1.png`)}></img>

                                </div>
                                <h3>Indicators for Trade Success</h3>
                                <p>Trade success indicators: price, market,risk management ,volume and many more.</p>

                            </div>

                        </Col>
                        <Col className=' col-12 col-lg-4 col-md-6'>

                            <div className='features-card-item '>

                                <div className='icon'>
                                    <img src={require(`./image/card1.png`)}></img>

                                </div>
                                <h3>Indicators for Trade Success</h3>
                                <p>Trade success indicators: price, market,risk management ,volume and many more.</p>

                            </div>

                        </Col>


                    </Row> */}

                    <Row>
                    

                            <div class="col-md-6 col-xl-4 col-12">
                                <div class="single-news-card bcardd" >
                                    <div class="news-thumb">
                                        {/* <img src="assets/img/blog/1.jpg" alt="blog-img"> */}
                                        <img src={require(`./image/bcard.jpeg`)} alt="blog-img"></img>

                                    </div>
                                    <div class="contents">
                                        <div class="post-meta d-flex">
                                            <div class="post-cat">
                                                <a href="news.html">Trends</a>
                                            </div>
                                            <div class="post-date">
                                                <span>Apr. 7, 2024</span>
                                            </div>
                                        </div>
                                        <h4><a href="news-details.html">Trending Trading To Empower Strategies, Make Decisions</a>
                                        </h4>

                                        <a href="news-details.html" class="read-more-link">read more <i class="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4 col-12">
                                <div class="single-news-card bcardd" >
                                    <div class="news-thumb">
                                        {/* <img src="assets/img/blog/1.jpg" alt="blog-img"> */}
                                        <img src={require(`./image/bcard1.jpeg`)} alt="blog-img"></img>

                                    </div>
                                    <div class="contents">
                                        <div class="post-meta d-flex">
                                            <div class="post-cat">
                                                <a href="news.html">Trends</a>
                                            </div>
                                            <div class="post-date">
                                                <span>Apr. 7, 2024</span>
                                            </div>
                                        </div>
                                        <h4><a href="news-details.html">Trending Trading To Empower Strategies, Make Decisions</a>
                                        </h4>

                                        <a href="news-details.html" class="read-more-link">read more <i class="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-4 col-12">
                                <div class="single-news-card bcardd" >
                                    <div class="news-thumb">
                                        {/* <img src="assets/img/blog/1.jpg" alt="blog-img"> */}
                                        <img src={require(`./image/bcard2.jpeg`)} alt="blog-img"></img>

                                    </div>
                                    <div class="contents">
                                        <div class="post-meta d-flex">
                                            <div class="post-cat">
                                                <a href="news.html">Trends</a>
                                            </div>
                                            <div class="post-date">
                                                <span>Apr. 7, 2024</span>
                                            </div>
                                        </div>
                                        <h4><a href="news-details.html">Trending Trading To Empower Strategies, Make Decisions</a>
                                        </h4>

                                        <a href="news-details.html" class="read-more-link">read more <i class="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                      
                    </Row>

                </Container>
            </section>




        </>
    )

}
export default Bcard

