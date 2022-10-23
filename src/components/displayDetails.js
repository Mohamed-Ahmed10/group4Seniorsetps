import React, {Component} from "react";

export class DisplayDetails extends Component {
    state = {
        courses: [
            {name: "HTML", track: "Frontend" , order : 1},
            {name: "JS", track: "Frontend" , order : 2},
            {name: "React", track: "Frontend" , order : 3},
        ],
    };
    myName = "Mohamed";
    render() {
        return (
            <div>
                DisplayDetails
                <div>{this.myName}</div>
                <h2>{this.state.courses[1].name}</h2>
                <ol>
                    {this.state.courses.map(course =>
                        (
                            <li key={course.order}>
                                <div>{course.name}</div>
                                <div>{course.track}</div>
                            </li>
                        ))}
                </ol>
            </div>
        );
    }
}

export default DisplayDetails;
