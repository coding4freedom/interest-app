import { Card, CardImg, CardTitle, CardBody} from 'reactstrap';
import React, { Component } from 'react';
import pokeImg from '../img/pokemon.PNG';
import { POKEMON } from '../interest/pokemon';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/frame.css';

/* this component should load a interest and store the  */
function RenderCard({ subject }) {
    const name = subject.map(sub => ( sub.poke ));
    return (
        <div>
            <Card style={{ height: '10rem' }}>
                <CardBody>
                    <CardTitle tag="h4">{name}</CardTitle>
                </CardBody>
                <CardImg
                    bottom
                    width="100%"
                    src={pokeImg}
                    alt={name} />
            </Card>
        </div>
    );
}

class Interest extends Component {    

    constructor(props) {
        super(props)
    
        this.state = {
            options: [
                { none: ''},
                { poke: 'POKEMON'}
            ],
            pokemon: POKEMON           
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