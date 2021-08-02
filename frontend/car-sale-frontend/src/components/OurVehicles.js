import React, { Component } from "react"
import CardUI from "./Card/CardUI"
import axios from "axios"

class OurVehicles extends Component {
	constructor(props) {
		super(props)
		this.state = {
			vehicles: [],
			image: []
		}
	}

	componentDidMount() {
		axios
			.get("http://localhost:8080/vehicles")
			.then(response => response.data)
			.then(data => {
				this.setState({ vehicles: data })
				this.setState({
					image: "data:image/jpeg;base64, + data"
				})
				console.log(this.state.data)
			})
			.catch(function (ex) {
				console.log("Response parsing failed. Error:", ex)
			})
	}

	renderChildren(context) {
		return (
			<div className="container-fluid d-flex justify-content-center">
				<div className="row">
					{this.state.vehicles.map(vehicles => (
						<div className="col-md-4">
							<CardUI imgsrc={vehicles.image} vehicleNumber={vehicles.vehicleNumber} model={vehicles.model} sellingPrice={vehicles.sellingPrice} mileage={vehicles.mileAge} registerYear={vehicles.yearOfRegister} transmission={vehicles.transmission} />
						</div>
					))}
				</div>
			</div>
		)
	}
	render() {
		return this.renderChildren()
	}
}

export default OurVehicles
