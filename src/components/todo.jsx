import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoText: "", //Use this if using an input field that someone can type into
    todoList: [],
  };
  render() {
    return (
      <div className="todo">
        <div>
          <input
            type="text"
            value={this.state.todoText} // This is how you get what the user inputs in the input field
            onChange={this.onTextChanged} //Use this if using value={this.state.todoText}
            placeholder="Todo Text"
          ></input>
          <button onClick={this.addTodo} className="btn btn-primary">
            Add
          </button>
        </div>

        <div className="list">
          {this.state.todoList.map((t) => (
            <div className="item">{t}</div>
          ))}
          <hr></hr>
          {this.getTodoCount()}
        </div>
      </div>
    );
  }

  getTodoCount = () => {
    let count = this.state.todoList.length;
    if (count === 1) {
      return <label>We have {count} element in the list</label>;
    }
    return <label>We have {count} elements in the list</label>;
  };

  onTextChanged = (event) => {
    this.setState({ todoText: event.target.value }); //Use this if using value={this.state.todoText}
  };

  addTodo = () => {
    if (this.state.todoText) {
      let todoList = [...this.state.todoList, this.state.todoText]; //Making a copt of the array in state using spread operator //push the todoList to the todoText
      this.setState({
        todoList: todoList,
        todoText: "",
      }); // adds to the array and clears the text in the input
      // this.setState({ todoList, todoText: "" }); does the same as above because the property and variable names are the same
      console.log("adding", this.state.todoText);
    }
  };
}
export default Todo;
