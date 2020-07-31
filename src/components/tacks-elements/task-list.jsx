import React from 'react';

import Task from "./task-uniq";
import Form from "../../ui/form";
import useGenericTask from "../../services/hooks/useGenericTask";


const TaskList = () => {
	const {tasks, toggleValidateTask, deleteTask} = useGenericTask()

	return (
		<>
			{
				tasks.map(({id, completed, task}) => (
					<Task
						key={id}
						completed={completed}
						id={id} task={task} deleteTask={deleteTask}
						toggleValidateTask={toggleValidateTask}
					/>)
				)
			}
		</>
	);
};

export default TaskList;