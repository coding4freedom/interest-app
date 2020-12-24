import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pokeImg from '../img/pokemon.PNG'; 
import { POKEMON } from '../interest/pokemon';
import '../css/frame.css';

/* this component should load a interest and store the  */

/* function RenderCard({ subject }) {
    const card = subject.map(sub => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Card>
                            <CardBody>
                                <CardTitle>{sub.title}</CardTitle>
                            </CardBody>
                            <CardImg src={sub.img} alt={sub.title}/>
                        </Card>
                    </div>
                </div>
            </div>
        );
    })
    return(
        <React.Fragment>
            {card}
        </React.Fragment>
        );
} */
// the problem is 5 items are being returned in the array all undefined except the title and img
function RenderCard( {subject} ){
    const title = subject.filter(sub => {
        return 'title' in sub
    })[0].title;
    
    let img = subject.filter( sub => {
        return'img' in sub
    })[0].img;
    // console.log(img);
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>{title}</CardTitle>
                        </CardBody>
                        <CardImg src={img} alt={title} />
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