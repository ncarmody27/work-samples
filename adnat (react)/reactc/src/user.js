import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class User extends Component {
	render(){
		return(
		<div>
			<p>Logged in as (user name) <NavLink to="/LogOut">Log Out</NavLink></p>
			<p>(message if not part of org)You aren't a member of any organisations<br/>
			Join an existing one or create a new one</p>
			<h2>Organisations</h2>
			<ul>
			<li>(List of Organisations)</li>
			</ul>
			<h2>Create Organisations</h2>
			<form>
				<label>Name:
				<input type="text" name="name"/>
				</label><br/>
				<label>Hourly rate: $
				<input type="text" name="rate"/>
				</label><br/>
				<button>Create and Join</button>
			</form><br/>	
		</div>
		)
	}
}
export default User
