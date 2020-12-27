import React, { Component } from 'react';

function RenderMenu( {interests} ) {
    return (
        <div>
            <form>
                <select>
                    {interests.map( interest => (
                        <option key={interest} value={interest} >
                            {interest}
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
            interests: ['Select A Interest', 'pokemon']
        }
    }

    render() {
        return (
            <div>
                <RenderMenu interests={this.state.interests} />
            </div>
        )
    }
}

export default Menu;
