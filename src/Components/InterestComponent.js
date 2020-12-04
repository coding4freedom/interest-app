import { Card, CardImg, CardTitle} from 'reactstrap';
import React, { Component } from 'react'
import { POKEMON } from '../interest/pokemon';

/* this component should load a interest and store the  */
function RenderCard(){
    return(
        <Card>
            <CardBody>
                <CardTitle></CardTitle>
            </CardBody>
            <CardImg />
        </Card>
    );
}

class Interest extends Component {    

    constructor(props) {
        super(props)
    
        this.state = {
            options: [
                { interest: ''},
                { interest: 'POKEMON'}
            ],
            pokemon: POKEMON           
        }
    
        this.handleEvent = this.handleEvent.bind(this)
    }
    

    render() {
        return (
            <>
                
            </>
        );
    }
}

export default Interest;