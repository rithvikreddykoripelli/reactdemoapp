import React, {Component} from 'react';
import Details from './Details';

class DetailsState extends Component {
    constructor() {
        super();
        this.state = {   
                name: 'Rithvik',
                company: 'Accolite'
        }
    }

    render() {
        return (
            <Details name={this.state.name} company={this.state.company}/>
        )
    }
}

export default DetailsState;