import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ContactUs.css';
import contactImg from '../../Assets/img/contact.svg';
// import swal from 'sweetalert'
import Fade from 'react-reveal/Fade';
import { Button } from '@mui/material';
import Layout from '../../components/Layout/Layout';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        // swal("Thank You!", "We appreciate you contacting us!", "success");
    }
    return (
      <Layout>
        <section id="contact">
            <Col md={11} className="mx-auto">
                <Row>
                    <Col md={6}>
                        <Fade duration={2000} left>
                            <form onSubmit={handleSubmit} className="contactForm">
                                <h4 className="miniTitle">CONTACT US</h4>
                                <h5 className="sectionTitle">GET IN TOUCH</h5>
                                <Row>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Name" type="text" required/>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Email" type="email" required/>
                                    </Col>
                                    <Col md={12}>
                                        <input placeholder="Subject" type="text" required/>
                                    </Col>
                                    <Col md={12}>
                                        <textarea placeholder="Your Message..." required></textarea>
                                    </Col>
                                </Row>
                                <Button variant="contained"  className="branBtn" type="submit">Submit Now</Button>
                            </form>
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade duration={2000} right>
                            <img src={`${contactImg}`} alt="" className="img-fluid"/>
                        </Fade>
                    </Col>
                </Row>
            </Col>
        </section>
        </Layout>
    );
};

export default Contact;