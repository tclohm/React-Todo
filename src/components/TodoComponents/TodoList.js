// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

import "./Todo.css";

const TodoList = (props) => {

	return (
		<div className="todo-list">
			{(props.tasks.length === 0) ?

				<h6>No Tasks</h6>

				:

				props.tasks.map(task => (

				<Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted} />

			))}
		</div>
	);
};

export default TodoList;