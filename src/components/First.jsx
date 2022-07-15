import { Component } from "react";


const darkMode = {
    backgroundColor: "black",
    color: "ghostwhite",
    padding: "5px"
}

const lightMode = {
    backgroundColor: "ghostwhite",
    color: "black",
    padding: "5px"
}

const buttonStyle1 = {
    width: "80px",
    height: "40px",
    backgroundColor: "darkgray",
    borderColor: "gray",
    fontSize: "30px",
    borderRadius: "10px",
}

const buttonStyle2 = {
    width: "80px",
    height: "40px",
    backgroundColor: "red",
    color: "black",
    fontSize: "30px",
    borderRadius: "10px",
    borderColor: "white"
}

class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            light: true
        }
    }

    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div style={this.state.light ? lightMode : darkMode}>
                <h2>Name: {lastName}, {firstName}</h2>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {hairColor}</h3>
                <button style={this.state.light ? buttonStyle1 : buttonStyle2} onClick={ () => {this.setState({light: !this.state.light})}}>{ this.state.light ? "On" : "Off" }</button>
            </div>
        );
    }
}

export default First;