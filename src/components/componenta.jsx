import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Componentb from './componentb';



class Componenta extends Component {

    render() {
        return (
            <div>
                <h3>
                    Name: {this.props.name}
                </h3>
                <h3>
                    Last Name: {this.props.lastname}
                </h3>
                <h3>
                    Email: {this.props.email}
                </h3>
                <h3>
                    Status: <Componentb></Componentb>
                </h3>
            </div>
        );
    }
}


Componenta.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    conected : PropTypes.bool
};


export default Componenta;
