import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavigationPanel from '../components/Login/NavigationPanel';	
import Modal from '../components/Login/Modal';

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}

	handleSubmit = (e) => {
		this.setState({ mounted: false });
		e.preventDefault();
	}

	render() {
		const { mounted } = this.state;

		let child;

		if (mounted) {
			child = (
				<div className="App_test">
					<NavigationPanel/>
					<Modal onSubmit={this.handleSubmit} history={this.props.history} />
				</div>
			);
		}

		return (
			<div className="App">
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default Register;
