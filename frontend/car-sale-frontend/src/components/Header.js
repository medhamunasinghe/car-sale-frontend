import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/logo.jpeg"
import loginIcon from "../images/icons8-test-account-100.png"

class Header extends React.Component {
	render() {
		return (
			<header id="header" className="fixed-top d-flex align-items-center">
				<div className="container d-flex align-items-center justify-content-between">
					<div className="logo">
						<h1 className="text-light">
							<Link to="/">
								<img src={logo} alt="logo"></img>
							</Link>
						</h1>
					</div>

					<nav id="navbar" className="navbar">
						<ul>
							<li>
								<Link className="nav-link scrollto active" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto" to="/about">
									About
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto" to="/our-vehicles">
									Our Vehicles
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto" to="/contact">
									Contact
								</Link>
							</li>
							<li>
								<Link className="getstarted scrollto" to="/login">
									<img src={loginIcon} alt="loginIcon" style={{ width: "30px", height: "30px" }}></img>
								</Link>
							</li>
						</ul>
						<i className="bi bi-list mobile-nav-toggle"></i>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header
