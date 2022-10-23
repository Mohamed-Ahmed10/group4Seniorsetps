import React, {Component} from "react";

class EditState extends Component {
    state = {
        course: "React",
        counter: 0,
        user : false
    };

    editCourse = () => {
        this.state.course === "React"
            ? this.setState({course: "Javascript"})
            : this.setState({course: "React"});

        // this.state.course = "Javascript" ERROR
        console.log(this)
    };
    increase = () => {
        this.setState({counter: this.state.counter + 1});
    };
    decrease = () => {
        this.setState({counter: this.state.counter - 1});
    };
    handleSubmit = (event)=>
    {
        event.preventDefault()
    }

    render() {
        return (
            <div className="editState">
                {this.state.course} <br />
                <button onClick={this.editCourse}>Change</button>
                <hr />
                <h1
                    className={
                        this.state.counter > 0
                            ? "positive"
                            : this.state.counter < 0
                            ? "negative"
                            : ""
                    }
                >
                    {this.state.counter}
                </h1>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>

                <hr />
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" name="test" />
                    <input type="submit" value="OK" />
                </form>

                <hr />
                    {
                        this.state.user &&
                            <div>Hello user</div>
                    }
            </div>
        );
    }
}

export default EditState;
