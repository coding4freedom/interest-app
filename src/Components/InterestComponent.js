import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pokeImg from '../img/pokemon.PNG'; 
import { POKEMON } from '../interest/pokemon';
import '../css/frame.css';

/* this component should load a interest and store the  */


function RenderCard( {subject} ){
    const title = subject.filter(sub => {
        return 'title' in sub
    })[0].title; // this line is the part we struggled on once we have the condition met we want to point to first item thru []
    
    let img = subject.filter( sub => {
        return'img' in sub
    })[0].img;
    // console.log(img);
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='card-size'>
                        <CardBody className='main'>
                            <CardTitle>{title}</CardTitle>
                        </CardBody>
                        <CardImg src={img} alt={title} className='card-img' />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


class Interest extends Component {    

    constructor(props) {
        super(props)
    
        this.state = {
            options: [
                { none: '' },
                { title: 'POKEMON' },
                { interest: POKEMON },
                { featured: true },
                { img: pokeImg }
            ]                               
        }
    
        //this.handleEvent = this.handleEvent.bind(this)
    }
    

    render() {
        return (
            <div>
                <RenderCard subject={this.state.options} />
            </div>
        );
    }
}

export default Interest;