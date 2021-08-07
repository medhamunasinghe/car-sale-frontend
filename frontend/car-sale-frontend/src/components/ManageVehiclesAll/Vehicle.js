import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import VehicleDataService from "../../services/ServiceVehicles"

const Vehicle = props => {
	let history = useHistory()
	const initialVehicleState = {
		vehicleNumber: "",
		model: "",
		mileAge: null,
		bodyType: "",
		transmission: "",
		passengerTotal: null,
		noOfOwners: null,
		color: "",
		yearOfRegister: null,
		yearOfManufac: null,
		VIN: "",
		buyingPrice: null,
		commissionValue: null,
		commissioned: null,
		serviceCharges: null,
		sellingPrice: null,
		soldPrice: null
	}
	const [currentVehicle, setCurrentVehicle] = useState(initialVehicleState)
	const [message, setMessage] = useState("")

	const getVehicle = id => {
		VehicleDataService.get(id)
			.then(response => {
				setCurrentVehicle(response.data)
				console.log(response.data)
			})
			.catch(e => {
				console.log(e)
			})
	}

	const { id } = useParams()

	useEffect(() => {
		getVehicle(id)
	}, [id])

	const handleInputChange = event => {
		const { name, value } = event.target
		setCurrentVehicle({ ...currentVehicle, [name]: value })
	}

	const updateVehicle = () => {
		VehicleDataService.update(currentVehicle.id, currentVehicle)
			.then(response => {
				console.log(response.data)
				setMessage("The vehicle was updated successfully!")
			})
			.catch(e => {
				console.log(e)
			})
	}

	const deleteVehicle = () => {
		VehicleDataService.remove(currentVehicle.id)
			.then(response => {
				console.log(response.data)
				props.history.push("/vehicles")
			})
			.catch(e => {
				console.log(e)
			})
	}

	return (
		<div style={{ marginTop: "100px" }}>
			{currentVehicle ? (
				<div className="edit-form">
					<h4>Update Vehicle</h4>
					<form>
						<div className="form-group">
							<label htmlFor="vehicleNumber">Vehicle Number</label>
							<input type="text" className="form-control" id="vehicleNumber" name="vehicleNumber" value={currentVehicle.vehicleNumber} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="model">Model</label>
							<input type="text" className="form-control" id="model" name="model" value={currentVehicle.model} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="mileAge">Mileage</label>
							<input type="text" className="form-control" id="mileAge" name="mileAge" value={currentVehicle.mileAge} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="bodyType">bodyType</label>
							<input type="text" className="form-control" id="bodyType" name="bodyType" value={currentVehicle.bodyType} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="transmission">Transmission</label>
							<input type="text" className="form-control" id="transmission" name="transmission" value={currentVehicle.transmission} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="passengerTotal">Passenger Total</label>
							<input type="text" className="form-control" id="passengerTotal" name="passengerTotal" value={currentVehicle.passengerTotal} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="noOfOwners">No. of Owners</label>
							<input type="text" className="form-control" id="noOfOwners" name="noOfOwners" value={currentVehicle.noOfOwners} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="color">Color</label>
							<input type="text" className="form-control" id="color" name="color" value={currentVehicle.color} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="yearOfRegister">Year of Register</label>
							<input type="text" className="form-control" id="yearOfRegister" name="yearOfRegister" value={currentVehicle.yearOfRegister} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="yearOfManufac">Year of Manufacture</label>
							<input type="text" className="form-control" id="yearOfManufac" name="yearOfManufac" value={currentVehicle.yearOfManufac} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="VIN">Engine Number</label>
							<input type="text" className="form-control" id="VIN" name="VIN" value={currentVehicle.VIN} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="buyingPrice">Buying Price</label>
							<input type="text" className="form-control" id="buyingPrice" name="buyingPrice" value={currentVehicle.buyingPrice} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="commissioned">Comissioned or not</label>
							<input type="text" className="form-control" id="commissioned" name="commissioned" value={currentVehicle.commissioned} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="commissionValue">Commission Value</label>
							<input type="text" className="form-control" id="commissionValue" name="commissionValue" value={currentVehicle.commissionValue} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="serviceCharges">Service Charges</label>
							<input type="text" className="form-control" id="serviceCharges" name="serviceCharges" value={currentVehicle.serviceCharges} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="sellingPrice">Selling Price</label>
							<input type="text" className="form-control" id="sellingPrice" name="sellingPrice" value={currentVehicle.sellingPrice} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="soldPrice">Sold Price</label>
							<input type="text" className="form-control" id="soldPrice" name="soldPrice" value={currentVehicle.soldPrice} onChange={handleInputChange} />
						</div>
					</form>

					<button className="btn btn-danger" onClick={deleteVehicle} style={{ margin: "5px 0" }}>
						Delete
					</button>

					<button type="submit" className="btn btn-success" onClick={updateVehicle} style={{ margin: "5px" }}>
						Update
					</button>

					<button onClick={() => history.goBack()} className="btn btn-danger" style={{ margin: "5px 0" }}>
						Back
					</button>
					<p>{message}</p>
				</div>
			) : (
				<div style={{ marginTop: "100px" }}>
					<br />
					<p>Please click on a Vehicle...</p>
				</div>
			)}
		</div>
	)
}

export default Vehicle
