import React from 'react';
import './Navigation.css';
import {Row, Col, Container, Image, ButtonGroup} from 'react-bootstrap';
import {Button, Card, CardText, CardTitle} from 'reactstrap';

const imgPath = "/assets/img.jpg";

const Navigation = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md = {{span: 3}} className = "center">
                        <Image src = {imgPath} alt = "avatar" className = "image"/>
                    </Col>
                    <Col md = {{span: 4}} className = "center">
                        <h1 style = {{color: '#ffffff', marginTop: 50}}>
                            {"Stock Price Predktar"}
                        </h1>
                    </Col>
                    <Col md = {{span: 5}} className = "center">
                        <ButtonGroup justified>
                            <Button href="https://www.google.com" color = "success" style = {{color: 'white', margin: 20}}>Nhộng</Button>
                            <Button href="https://www.pornhub.com" color = "success" style = {{color: 'white', margin: 20}}>Béo</Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md = {{span: 6}} className = "center">
                        <Card body inverse className = "card">
                            <CardTitle><h3 style = {{color: '#ffffff'}}>Real-time Stock Price</h3> </CardTitle>
                            <CardText style = {{color: '#ffffff'}}>See data of stock price market. Joint Stock Companies, Cryptocurrencies.</CardText>
                            <Button style = {{marginTop: 20, marginLeft: 20}}> Let's gooo =))</Button>
                        </Card>
                    </Col>
                    <Col md = {{span: 6}} className = "center">
                        <Card body inverse className = "card">
                            <CardTitle><h3 style = {{color: '#ffffff'}}>Predik the stock price!!!</h3> </CardTitle>
                            <CardText style = {{color: '#ffffff'}}>This AI machine will predict stock price in the short term based on companies historicla data</CardText>
                            <Button style = {{marginTop: 20, marginLeft: 20}}>Let's go, yay =))</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Navigation;