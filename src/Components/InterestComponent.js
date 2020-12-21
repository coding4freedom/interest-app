import { Card, CardImg, CardTitle, CardBody} from 'reactstrap';
import React, { Component } from 'react';
import pokeImg from '../img/pokemon.PNG';
import { POKEMON } from '../interest/pokemon';
import "bootstrap/dist/css/bootstrap.min.css";
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

function RenderCard( {subject} ){
    const title = subject.map( sub => {
        return sub.title
    });

    let img = subject.map( sub => {
        return sub.img
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card>
                        <CardBody>
                            <CardTitle>{title}</CardTitle>
                        </CardBody>
                        <CardImg src={img} alt={title} />
                    </Card>
                </div>
            </div>
        </div>
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