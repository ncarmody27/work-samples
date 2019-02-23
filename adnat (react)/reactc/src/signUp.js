import React, {Component } from "react"
import {NavLink} from "react-router-dom"

class SignUp extends Component {
	render(){
		return(
		<div>
			<h2>Sign Up</h2>
			<form>
				<label>Name
				<input type="text" name="name"/>
				</label>
				<br/>
				<label>Email
				<input type="text" name="email"/>
				</label>
				<br/>
				<label>Password (6 characters minimum)
				<input type="text" name="password"/>
				</label>
				<br/>
				<label>Password Confirmation
				<input type="text" name="password_confim"/>
				</label>
				<br/>
				<button>Sign Up</button>
			</form>
			<br/>
			<NavLink to="/Login">Login</NavLink>	
		</div>
		)
	}
}
export default SignUp

