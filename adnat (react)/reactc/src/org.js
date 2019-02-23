import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class Org extends Component {
	render(){
		return(
		<div>
			<p>Logged in as (user name) <NavLink to="/LogOut">Log Out</NavLink></p>
			<h2>(Organisation Name)</h2>
			<a>View Shifts</a>
			<a>Edit</a>
			<a>Leave</a>
		</div>
		)
	}
}
export default Org
