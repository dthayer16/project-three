import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';
import axios from 'axios';

class SignExpanded extends Component {

	state = {
		email: "",
		password: "",
	}

	componentDidMount() {
		this.setState({ flexState: !this.state.flexState });
	}

	isFinished = () => {
		this.setState({ animIsFinished: true });
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};


	handleSubmit = (e) => {
		e.preventDefault();

		if (this.props.type === 'signIn') {
			let userInfo = {
				name: this.state.name,
				trips: this.state.trips,
				email: this.state.email,
				password: this.state.password
			}

			axios.post("/v1/signin", userInfo)
				.then(({ data }) => {
					localStorage.setItem("userId", data.userId);
					localStorage.setItem("name", data.name);


					if (data.token !== null) {
						//set token in local storage
						localStorage.setItem("token", data.token);
						//new axios call to "/api/save" send req.body = {origin: ..., destination: ....}
						var currentTrip = {
							origin: localStorage.getItem("origin"),
							destination: localStorage.getItem("destination"),
							userId: localStorage.getItem("userId")
						}

						if (currentTrip.origin != null && currentTrip.destination != null) {
							axios.post("/v1/api/save", currentTrip)
								.then((data2) => {
									this.setState({
										origin: "",
										destination: "",
									})

								})
						}
						let path = `/`;
						this.props.history.push(path);
					} else {
						alert("Bad signin. Try again!");
					}
				})
				.catch(err => console.log(err));
		}

		if (this.props.type === 'signUp') {
			let userInfo = {
				// naƒ
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			}

			axios.post("/v1/signup", userInfo)
				.then(({ data }) => {
					this.setState({
						name: "",
						email: "",
						password: ""
					})
					if (data.token.user) {
						this.props.history.push("/")

					} else {
						console.log(
							"not working")
					}
					alert("Successfully Registered, Please Sign In!");
				})
				.catch(err => console.log(err));
		}
	}

	render() {
		return (
			<Motion style={{
				flexVal: spring(this.state.flexState ? 8 : 1)
			}} onRest={this.isFinished}>
				{({ flexVal }) =>
					<div className={this.props.type === 'signIn' ? 'signInExpanded' : 'signUpExpanded'} style={{
						flexGrow: `${flexVal}`
					}}>
						<Motion style={{
							opacity: spring(this.state.flexState ? 1 : 0, { stiffness: 300, damping: 17 }),
							y: spring(this.state.flexState ? 0 : 50, { stiffness: 100, damping: 17 })
						}} >
							{({ opacity, y }) =>
								<form className='logForm' style={{
									WebkitTransform: `translate3d(0, ${y}px, 0)`,
									transform: `translate3d(0, ${y}px, 0)`,
									opacity: `${opacity}`
								}}>
									<h2>{this.props.type === 'signIn' ? 'SIGN IN' : 'SIGN UP'}</h2>
									<Input
										id="name"
										type="text"
										name="name"
										value={this.state.name}
										onChange={this.handleInputChange}
										placeholder="NAME" />
									<Input
										id="email"
										type="text"
										name="email"
										value={this.state.email}
										onChange={this.handleInputChange}
										placeholder="EMAIL" />
									<Input
										id="password"
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleInputChange}
										placeholder="PASSWORD" />
									<SubmitButton type={this.props.type} clickListenerFn={this.handleSubmit}></SubmitButton>
									<a href="url" className='forgotPass'>{this.props.type === 'signIn'}</a>
									<a href="url" className='forgotPass'>{this.props.type === 'signUp'}</a>
								</form>
							}
						</Motion>
					</div>
				}
			</Motion>
		);
	}
}

SignExpanded.propTypes = {
	type: PropTypes.string
};

export default SignExpanded;