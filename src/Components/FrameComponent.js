import React, { Component } from 'react';
import Interest from './InterestComponent';
import Menu from './MenuComponent';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/frame.css';

class Frame extends Component  {
   /* constructor(props) {
        super(props)            
    
        
    } */
    
    render(){
        return(
            <div className='main frame-bound'>
                <Container>
                    <Row>
                        <Col xs={12} className="main">
                            <h1>Pick A Subject of Interest</h1>
                        </Col>
                        <Col id='main-frame' className='main'>
                            <Interest />
                            <Menu />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Frame;