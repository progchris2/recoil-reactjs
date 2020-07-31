import React, {memo} from 'react';
import PropTypes from "prop-types";
import { CheckCircle, Circle, Trash } from "../../ui/icons";

/**
 *
 * @type {function({id?: *, completed?: *, task: *, toggleValidateTask: *, deleteTask: *}): JSX.Element}
 */
const Task = ({id, completed, task, toggleValidateTask, deleteTask}) => (
		<div className="col-12 task">
			<div className="col-11">
				<div className="row">
					<div className="col-12 p-0 block-1">
						<div className="col-1 m-0 pl-2 circle" onClick={() => toggleValidateTask(id)}>
							{!completed ? <Circle /> : <CheckCircle />}
						</div>
						<div className="col-8 m-0 p-0">{task}</div>
					</div>
				</div>
			</div>
			<div className="col-1 m-0 text-right trash"  onClick={() => deleteTask(id)}><Trash /></div>
		</div>
);

export default memo(Task);

Task.propTypes = {
	id: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired,
	task: PropTypes.string.isRequired,
	toggleValidateTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired
}

