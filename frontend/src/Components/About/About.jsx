import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import {
    Button
} from 'reactstrap';
import './About.css';

const About = () => {
    return (
        <div >
            <Container fluid className = "about">
                <Row className = "center">
                    <h4>
                        All right reserved to Alex Nguyen | Gettysburg College Class of 2022.
                    </h4>
                </Row>
                <Row className = "center">
                    <Col md = {{span: 8, mdOffset: 2}}>
                        This is Col
                    </Col>
                    <Col md = {{span: 4}}>
                        This is another col
                    </Col>
                </Row>
            </Container>    
        </div>
    );
};

export default About;