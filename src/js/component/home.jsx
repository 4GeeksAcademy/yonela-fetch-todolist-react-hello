import React, { useState } from 'react';
import TaskForm from './taskform';
import TaskList from './tasklist';

const Home = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks([...tasks, task]);
	};

	const removeTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div className="app-container">
			<div className="form-container">
				<div className="heading">Tareas de Yonela</div>
				<TaskForm addTask={addTask} />
				<TaskList tasks={tasks} removeTask={removeTask} />
			</div>
		</div>
	);
};

export default Home;
