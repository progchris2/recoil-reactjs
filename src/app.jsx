import React from 'react';

import { TaskList } from "./components";
import Form from "./ui/form";
import useGenericTask from "./services/hooks/useGenericTask";

const App = () => {
	const {text, handleChange, handleSubmit} = useGenericTask()

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-3 m-auto text-center">
					todo list
				</div>
			</div>
			<div className="row">
				<div className="col-6 m-auto">
					<div className="col-12 tasks-list">
						<div className="row">
							<div className="col-10 m-auto">
								<Form  handleChange={handleChange} handleSubmit={handleSubmit} value={text}/>
							</div>
						</div>
						<div className="row">
							<TaskList/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

