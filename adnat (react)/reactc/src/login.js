import React, {Component} from "react"
import {NavLink} from "react-router-dom"

const API = 'http://localhost:3000'
class Login extends Component {
	constructor(props){
		super(props)
		this.state = {email: '', password: '', sessionID: ''}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}
	handleInputChange(event){
		const target = event.target
		const value = target.value
		const name = target.name
		
		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		alert(`Email: ${this.state.email} Password: ${this.state.password}`)	
		event.preventDefault();
		let data=JSON.stringify()

	
		fetch(API + '/auth/login', {
			method: "POST",
		 	headers: {"Content-Type": "application/json"}, 
			accept:'application/JSON',
			mode: "no-cors",
			body: JSON.stringify({email:'barney@gmail.com', password:'12345678'})
		})
		.then(res => {res.json()
			console.log(res)})
		
		.catch(err => console.log(err))
			}

	componentDidMount(){
	}
	render(){
		return(
		<div>
			<h2>Login</h2>
			<form onSubmit={this.handleSubmit}>
				<label>Email:
				<input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
				</label><br/>
				<label>Password:
				<input type="text" name="password" value={this.state.password}  onChange={this.handleInputChange} />
				</label><br/>
				<input type="submit" value="Login" />
			</form><br/>
			<NavLink to="/SignUp">Sign Up</NavLink><br/>
			<a>Forgot Password?</a>
<p>Session Id: {this.state.sessionId}</p>		
</div>
		)
	}
	
}
export default Login

