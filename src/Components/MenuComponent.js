import React, { Component } from 'react';
import { OPTIONS } from '../interest/options';

function RenderMenu( {interests} ) {
    return (
        <div>
            <form>
                <select value='select'>
                    {interests.map( interest => (
                        <option value={interest.value} >
                            {interest.label}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    )
}

class Menu extends Component {
    constructor(props){
        super(props)

        this.state = {
            options: OPTIONS
        }
    }

    render() {
        return (
            <div>
                <RenderMenu interests={this.state.options} />
            </div>
        )
    }
}

export default Menu;
