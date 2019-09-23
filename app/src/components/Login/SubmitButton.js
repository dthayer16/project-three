import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowForward } from 'react-icons/md';

const SubmitButton = (props) => {

	let socialNets = null;

	if (props.type === 'signIn') {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	} else {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	}
	return (
		<div className={'submitButton'}>
			{socialNets}
			<button onClick={(e) => props.clickListenerFn(e)} className={props.type === 'signIn' ? 'submitSignIn' : 'submitSignUp'}><MdArrowForward /></button>
		</div>
	);
}

SubmitButton.propTypes = {

	type: PropTypes.string

};

export default SubmitButton;