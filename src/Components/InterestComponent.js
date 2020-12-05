import { Card, CardImg, CardTitle, CardBody} from 'reactstrap';
import React, { Component } from 'react';
import pokeImg from '../img/pokemon.PNG';
import { POKEMON } from '../interest/pokemon';

/* this component should load a interest and store the  */
function RenderCard({ subject }) {
    const name = subject.map(sub => ( sub.poke ));
    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
            </CardBody>
            <CardImg src={pokeImg} alt={name}/>
        </Card>
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