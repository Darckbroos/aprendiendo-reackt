import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
   // myAge = 10

    constructor(props){
        super(props);
        this.state={
           // age: this.myAge
           age: 29
        }

    }

    render() {
        return (
            <div>
                <h1>
                    soy flaite y la{ this.props.name }
                </h1>
                <h2>
                    La edad es : { this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () =>{
    //    this.myAge ++;
       this.setState((prevState) => (
       {
        age: prevState.age +1
        }
       ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
