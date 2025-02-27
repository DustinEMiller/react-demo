import React, {Component} from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import Auxillary from '../../../hoc/Auxillary'
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus()
        this.inputElementRef.current.focus();
        console.log(this.context)
    }

   render() {
        return (
            <Auxillary>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type = "text"
                    onChange = {this.props.changed}
                    value = {this.props.name}
                />
            </Auxillary>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.person);