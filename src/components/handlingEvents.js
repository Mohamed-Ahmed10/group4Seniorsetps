import React, {Component} from "react";

export default class HandlingEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultUsername: "",
            defaultChecked: "1",
            defaultSelect: "css",
        };
        this.handleUsername = this.handleUsername.bind(this);
    }

    handleUsername(event) {
        this.setState({defaultUsername: event.target.value});
    }
    handleCourse = (event) => {
        this.setState({defaultChecked: event.target.value});
    };
    handleSelect = (e) =>
    {
        this.setState({defaultSelect : e.target.value})
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={this.state.defaultUsername}
                    onChange={this.handleUsername}
                />{" "}
                <br /> <br />
                {this.state.defaultUsername}
                <hr />
                <input
                    onChange={this.handleCourse}
                    type="radio"
                    id="react"
                    value="1"
                    name="course"
                    defaultChecked={this.state.defaultChecked === "1"}
                />
                <label htmlFor="react">React</label> <br />
                <input
                    onChange={this.handleCourse}
                    type="radio"
                    id="js"
                    value="2"
                    name="course"
                    defaultChecked={this.state.defaultChecked === "2"}
                />
                <label htmlFor="js">Javascript</label>
                <hr />
                <select name="" id="" value={this.state.defaultSelect} onChange={this.handleSelect}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                </select>
                <hr />
                {this.props.outside}
            </div>
        );
    }
}
