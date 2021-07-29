import React, { useState, useEffect } from "react"
import { useHistory, withRouter } from "react-router-dom"
import axios from "axios"
import loginIcon from "../images/icons8-test-account-100.png"
import UIimage from "../images/Password reset.svg"
import { Link } from "react-router-dom"

const Login = props => {
	const [loading, setLoading] = useState(false)
	const email = useFormInput("")
	const password = useFormInput("")
	const role = useFormInput("")
	const [error, setError] = useState(null)

	const history = useHistory()

	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			history.push("/dashboard")
		}
	})

	// handle button click of login form
	const handleLogin = () => {
		setError(null)
		setLoading(true)
		axios
			.post("http://localhost:8080/login", { email: email.value, password: password.value, role: role.value })
			.then(response => {
				setLoading(false)
				localStorage.setItem("user-info", JSON.stringify(response))
				props.history.push("/dashboard")
			})
			.catch(error => console.log(error))
	}

	return (
		<div className="login container mt-5">
			<div className="row">
				<div className="col col-lg-4 col-md-6 col-sm-12" style={{ margin: "150px 0px" }}>
					<img className="icon-image mx-auto" src={loginIcon} alt="login icon"></img>
					<h3>Please Log In</h3>
					<form>
						<div class="form-group">
							<input type="email" {...email} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
						</div>
						<div class="form-group">
							<input type="password" {...password} class="form-control" id="password" placeholder="Password"></input>
						</div>
						<div class="form-group">
							<input type="text" {...role} class="form-control" id="role" placeholder="Role"></input>
						</div>
						{error && (
							<>
								<small style={{ color: "red" }}>{error}</small>
								<br />
							</>
						)}
						<br />
						<input type="button" className="btn btn-primary btn-lg btn-block" value={loading ? "Loading..." : "Login"} onClick={handleLogin} disabled={loading} />
						<br />
						<br />
						<div className="text-left mt-3">
							<Link to="#">
								<small className="reset">Password Reset</small>||
							</Link>
							<Link to="#">
								<small className="reset col-ml-2">Quick Recover</small>
							</Link>
						</div>
					</form>
				</div>
				<div className="col col-lg-8 col-md-6 col-sm-12">
					<img className="img-fluid" style={{ maxWidth: "100%" }} src={UIimage} alt="UIimage"></img>
				</div>
			</div>
		</div>
	)
}

const useFormInput = initialValue => {
	const [value, setValue] = useState(initialValue)

	const handleChange = e => {
		setValue(e.target.value)
	}
	return {
		value,
		onChange: handleChange
	}
}

export default withRouter(Login)
