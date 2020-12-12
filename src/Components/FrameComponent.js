import React, { Component } from 'react';
import Interest from './InterestComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/frame.css';

class Frame extends Component  {
   /* constructor(props) {
        super(props)            
    
        
    } */
    
    render(){
        return(
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h1>Pick A Subject of Interest</h1>
                        </div>
                        <div className='col' id='main-frame'>
                            <Interest />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Frame;