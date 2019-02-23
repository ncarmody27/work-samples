import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class editOrg extends Component {
	render(){
		return(
		<div>
			<p>Logged in as (user name) <NavLink to="/LogOut">Log Out</NavLink></p>
			<h2>Edit Organisation</h2>
			<form>
				<label>Name:
				<input type="text" name="name"/>
				</label><br/>
				<label>Hourly rate: $
				<input type="text" name="rate"/>
				</label><br/>
				<button>Update</button>
			</form><br/>
			<a>Delete</a>	
		</div>
		)
	}
}
export default editOrg
