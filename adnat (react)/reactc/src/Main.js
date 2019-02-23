import React, {Component} from "react"
import {Route,
	NavLink,
	HashRouter
} from "react-router-dom"

import Login from "./login"
import SignUp from "./signUp"
import User from "./user"

import "./index.css";

class Main extends Component {
	render(){
		return (
			<HashRouter>
			<div>
				<h1>Adnat Rostering</h1>
				<ul className="header">
					<li><NavLink to="/Login">Login</NavLink></li>
					<li><NavLink to="/SignUp">Sign Up</NavLink></li>
				<li><NavLink to="/User">User</NavLink></li>
					</ul>
				<div className="content">
					<Route path="/Login" component={Login}/>
					<Route path="/SignUp" component={SignUp}/>
					<Route path="/User" component={User}/>
				</div>
			</div>
			</HashRouter>
		)
	}
}

export default Main

