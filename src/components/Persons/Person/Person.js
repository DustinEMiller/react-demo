import React, {Component} from 'react';
import Radium from 'radium';

import Auxillary from '../../../hoc/Auxillary'
import classes from './Person.module.css';

class Person extends Component {
   render() {
        return (
            <Auxillary>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    type = "text"
                    onChange = {this.props.changed}
                    value = {this.props.name}
                />
            </Auxillary>
        )
    }
};

export default Radium(Person);