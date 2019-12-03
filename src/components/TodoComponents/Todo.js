import React from "react";
import "./Todo.css";

const Todo = props => {

	const handleClick = (event) => {
		props.toggleCompleted(props.task.id);
	}

	return (
		<div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
			<p>{props.task.task}</p>
			{ props.task.completed ?
				<i class="fas fa-check fa-7x"></i>
				:
				<i></i>
			}
		</div>
	);
};

export default Todo;