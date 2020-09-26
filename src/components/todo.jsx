import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./../store/actions/index";

class Todo extends Component {
  state = {
    todoText: "", //Use this if using an input field that someone can type into
    //the local state deletes if you leave the page / store doesn't wipe the information until you reload the page
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
          {this.props.todo.map((
            t //reading from the store
          ) => (
            <div className="item">{t}</div>
          ))}
          <hr></hr>
          {this.getTodoCount()}
        </div>
      </div>
    );
  }

  getTodoCount = () => {
    let count = this.props.todo.length; //reading from the store
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
      //Making a copt of the array in state using spread operator //push the todoList to the todoText
      this.props.addTodo(this.state.todoText); //add this to push to the store
      this.setState({
        todoText: "",
      }); // adds to the array and clears the text in the input

      console.log("adding", this.state.todoText);
    }
  };
}
const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};
export default connect(mapStateToProps, { addTodo })(Todo);
