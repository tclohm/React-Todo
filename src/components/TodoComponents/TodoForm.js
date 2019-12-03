import React from "react";
import "./Todo.css";


const TodoForm = props => {
	return (
		<form className="form-wrapper">
			<input className="form-input" type="text" name="task" placeholder="todo" value={props.task} onChange={props.handleChanges} />
			<button className="add-btn" onClick={props.handleAdd}>Add Todo</button>
			<button className="clear-btn" onClick={props.handleClear}>Clear Completed Tasks</button>
		</form>
	);
};

export default TodoForm;