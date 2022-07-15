import { Component } from "react";

class LightSwitch extends Component {
    constructor(props) {
        super(props);
        LightSwitch = () => {
            if( this.state.position === "On") {
                this.setState({ position: "Off"});
            } else {
                this.setState({ position: "On"});
            }
        }
    }

    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button>Flip Switch</button>
            </fieldset>
        );
    }
}

export default LightSwitch;