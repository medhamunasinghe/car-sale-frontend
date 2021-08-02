import React, { Component } from "react"
import axios from "axios"

class InquiryForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inquirerName: "",
			inquirerEmail: "",
			inquirerTitle: "",
			inquiryBody: ""
		}
	}

	render() {
		return (
			<div className="App">
				<form id="contact-form" className="inquiry-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" className="form-control" value={this.state.inquirerName} onChange={this.onNameChange.bind(this)} />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.inquirerEmail} onChange={this.onEmailChange.bind(this)} />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputSubject">Subject</label>
						<input type="text" className="form-control" value={this.state.inquirerTitle} onChange={this.onTitleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea className="form-control" rows="5" value={this.state.inquiryBody} onChange={this.onMessageChange.bind(this)} />
					</div>
					<button type="submit" className="btn btn-primary submit">
						Submit
					</button>
				</form>
			</div>
		)
	}

	onNameChange(event) {
		this.setState({ inquirerName: event.target.value })
	}

	onEmailChange(event) {
		this.setState({ inquirerEmail: event.target.value })
	}

	onTitleChange(event) {
		this.setState({ inquirerTitle: event.target.value })
	}

	onMessageChange(event) {
		this.setState({ inquiryBody: event.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()

		axios({
			method: "POST",
			url: "http://localhost:8080/inquiry/submit",
			data: this.state
		}).then(response => {
			if (response.data.status === "success") {
				console.log("Message Sent.")
				this.resetForm()
			} else if (response.data.status === "fail") {
				console.log("Message failed to send.")
			}
		})

		this.setState({ inquirerName: "", inquirerEmail: "", inquirerTitle: "", inquiryBody: "" })
	}
}

export default InquiryForm
