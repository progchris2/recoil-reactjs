import React, { memo }  from "react";
import PropTypes from "prop-types";


/**
 * generic form
 * @return {JSX.Element}
 * @constructor
 */
const Form = ({handleChange, value, handleSubmit}) => (
	<form onSubmit={handleSubmit}>
		<input id="input" type="text" value={value} onChange={handleChange}/>
		<button type="submit">Ajouter</button>
	</form>
);

export default memo(Form);

Form.propTypes = {
	value: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired
}
