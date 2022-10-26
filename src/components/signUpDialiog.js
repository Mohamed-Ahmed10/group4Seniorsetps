import React from "react";
function FancyBorder(props) {
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    state = {login: ""};

    handleChange = (e) => {
        this.setState({login: e.target.value});
    };

    handleSignUp = () => {
        alert(`Welcome aboard, ${this.state.login}!`);
    };
    render() {
        return (
            <Dialog
                title="Mars Exploration Program"
                message="How should we refer to you?"
            >
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialog>
        );
    }
}

export default SignUpDialog;
