import { Component } from "react";

class First extends Component {
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <>
                <h2>Name: {lastName}, {firstName}</h2>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {hairColor}</h3>
            </>
        );
    }
}

export default First;