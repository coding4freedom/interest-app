import React, { Component } from 'react';
import '../css/frame.css';

class Frame extends Component  {
    constructor(props) {
        super(props)            
    
        
    }
    
    render(){
        return(
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h1>Pick A Subject of Interest</h1>
                        </div>
                        <div className='col' id='main-frame'>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Frame;