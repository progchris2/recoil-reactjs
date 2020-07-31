import React from "react";
import PropTypes from "prop-types";

export const Circle = ({color="currentColor", size=1}) => {
	return (
		<svg width={`${size}em`} height={`${size}em`} viewBox="0 0 16 16" className="bi bi-circle" fill={color}
		     xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
		</svg>
	);
}

export const CheckCircle = ({color="currentColor", size=1}) => {
	return (
		<svg width={`${size}em`} height={`${size}em`} viewBox="0 0 16 16" className="bi bi-check2-circle" fill={color}
		     xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd"
			      d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
			<path fillRule="evenodd"
			      d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
		</svg>
	);
}

export const Trash = ({color="red", size=1 }) => {
	return (
		<svg width={`${size}em`} height={`${size}em`} viewBox="0 0 16 16" className="bi bi-trash" fill={color}
		     xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
			<path fillRule="evenodd"
			      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
		</svg>
	)
}

Circle.propTypes = Trash.propTypes = CheckCircle.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number
}


