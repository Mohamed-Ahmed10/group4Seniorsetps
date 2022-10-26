import React, {Component, useEffect, useState} from "react";
const CompareFunction = () => {
    const [course, setCourse] = useState("");

    const changeCourse = (event) => {
        setCourse(event.target.value);
    };

    useEffect(() => {
        console.log("Function component rendered");
    }, []);

    useEffect(() => {
        if (course === "") return;
        console.log("Function  component changed");
        if(course.length === 8) alert("OK ")
    }, [course]);

    useEffect(() => {
        return () => {
            console.log("Function component removed");
        };
    }, []);

    return (
        <div>
            <label>Function component : </label>
            <input type="text" onChange={changeCourse} />
            <br />
            {course}
        </div>
    );
};

class CompareClass extends Component {
    state = {course: ""};

    componentDidMount() {
        console.log("Class component rendered");
    }
    componentDidUpdate() {
        console.log("Class component changed");
    }
    componentWillUnmount() {
        console.log("Class component removed");
    }
    handleCourse = (event) => {
        this.setState({course: event.target.value});
    };
    render() {
        return (
            <div>
                <label>Class component : </label>
                <input value={this.state.course} onChange={this.handleCourse} />
                <br />
                {this.state.course}
            </div>
        );
    }
}

export {CompareFunction, CompareClass};
