import React, { Component } from 'react';

class Pokemon extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Pokemon',
            image: "../img/pokemon.png",
        };       
    }
    
    render(){
        return(
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}

export default Pokemon;