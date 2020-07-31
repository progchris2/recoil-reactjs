import { useState } from 'react';
import { useRecoilState } from "recoil";
import { tasksState } from "../../store";

/**
 *
 * @param items
 * @param id
 * @return {{clone: *, index: (*|number)}}
 */
const cloneIndex = (items, id) => ({
	clone: items.map(item => ({...item})),
	index: items.findIndex(item => item.id === id)
})

/**
 *
 * @return {{handleSubmit: handleSubmit, handleChange: handleChange, toggleValidateTask: toggleValidateTask, text: string, deleteTask: deleteTask, tasks: *}}
 */
const useGenericTask = () => {
	const [text, setText] = useState("");
	const [tasks, setTasks] = useRecoilState(tasksState);

	return {
		tasks,
		text,
		handleChange: (e) => {
			e.preventDefault();
			setText(e.target.value);
		},
		handleSubmit: (e) => {
			e.preventDefault();
			if (text.length > 0) {
				setTasks(oldTasks => [
					{
						completed: false,
						task: text,
						id: new Date().valueOf() + Math.random()
					},
					...oldTasks
				]);
				setText("");
			}
		},
		toggleValidateTask: (id) => {
			const {clone, index} = cloneIndex(tasks, id)
			if (index !== -1) {
				clone[index].completed = !clone[index].completed
			}
			setTasks(clone)
		},
		deleteTask: (id) => {
			const {clone, index} = cloneIndex(tasks, id)
			if (index !== -1) {
				clone.splice(index, 1)
			}
			setTasks(clone)
		}
	};
};

export default useGenericTask;
