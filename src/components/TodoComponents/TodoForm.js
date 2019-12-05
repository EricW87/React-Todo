import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
    }

    changeHandler = event => {
        this.setState({ task: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addItem(this.state.task);
        this.setState({ task: "" });
    };

    render() {
        return (
            <div className="forms">
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.changeHandler}
                    />
                    <button type="submit">Add</button>
                </form>
                <button onClick={() => this.props.clearCompleted()}>Clear Completed</button>
            </div>
        );
    }
};

export default TodoForm;