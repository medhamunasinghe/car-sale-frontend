import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import VehiclesDataService from "../../services/ServiceVehicles"
import httpimage from "../../http-image"

const AddVehicle = () => {
	let history = useHistory()
	const [selectedFile, setSelectedFile] = useState()
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
		commissioned: false,
		serviceCharges: null,
		sellingPrice: null,
		soldPrice: null
	}
	const [vehicle, setVehicle] = useState(initialVehicleState)
	const [saved, setSaved] = useState(false)

	const handleInputChange = event => {
		const { name, value } = event.target
		setVehicle({ ...vehicle, [name]: value })
	}

	const saveVehicle = () => {
		var data = {
			vehicleNumber: vehicle.vehicleNumber,
			model: vehicle.model,
			mileAge: vehicle.mileAge,
			bodyType: vehicle.bodyType,
			transmission: vehicle.transmission,
			passengerTotal: vehicle.passengerTotal,
			noOfOwners: vehicle.noOfOwners,
			color: vehicle.color,
			yearOfRegister: vehicle.yearOfRegister,
			yearOfManufac: vehicle.yearOfManufac,
			VIN: vehicle.VIN,
			buyingPrice: vehicle.buyingPrice,
			commissionValue: vehicle.commissionValue,
			commissioned: vehicle.commissioned,
			serviceCharges: vehicle.serviceCharges,
			sellingPrice: vehicle.sellingPrice,
			soldPrice: vehicle.soldPrice
		}

		VehiclesDataService.create(data)
			.then(response => {
				setVehicle({
					vehicleNumber: response.data.vehicleNumber,
					model: response.data.model,
					mileAge: response.data.mileAge,
					bodyType: response.data.bodyType,
					transmission: response.data.transmission,
					passengerTotal: response.data.passengerTotal,
					noOfOwners: response.data.noOfOwners,
					color: response.data.color,
					yearOfRegister: response.data.yearOfRegister,
					yearOfManufac: response.data.yearOfManufac,
					VIN: response.data.VIN,
					buyingPrice: response.data.buyingPrice,
					commissionValue: response.data.commissionValue,
					commissioned: response.data.commissioned,
					serviceCharges: response.data.serviceCharges,
					sellingPrice: response.data.sellingPrice,
					soldPrice: response.data.soldPrice
				})
				setSaved(true)
				console.log(response.data)
			})
			.catch(e => {
				console.log(e)
			})
	}

	const newVehicle = () => {
		setVehicle(initialVehicleState)
		setSaved(false)
	}

	return (
		<div className="submit-form">
			{saved ? (
				<div style={{ marginTop: "100px", width: "1000px", height: "900px" }}>
					<h4>Vehicle Saved successfully!</h4>
					<button className="btn btn-success" onClick={newVehicle}>
						Add
					</button>
				</div>
			) : (
				<div style={{ marginTop: "100px" }}>
					<div className="form-group">
						<label htmlFor="vehicleNumber">Vehicle Number</label>
						<input type="text" className="form-control" id="vehicleNumber" required value={vehicle.vehicleNumber} onChange={handleInputChange} name="vehicleNumber" />
					</div>

					<div className="form-group">
						<label htmlFor="model">Model</label>
						<input type="text" className="form-control" id="model" required value={vehicle.model} onChange={handleInputChange} name="model" />
					</div>

					<div className="form-group">
						<label htmlFor="mileAge">Mileage</label>
						<input type="text" className="form-control" id="mileAge" required value={vehicle.mileAge} onChange={handleInputChange} name="mileAge" />
					</div>

					<div className="form-group">
						<label htmlFor="bodyType">Body Type</label>
						<input type="text" className="form-control" id="bodyType" required value={vehicle.bodyType} onChange={handleInputChange} name="bodyType" />
					</div>

					<div className="form-group">
						<label htmlFor="transmission">transmission</label>
						<input type="text" className="form-control" id="transmission" required value={vehicle.transmission} onChange={handleInputChange} name="transmission" />
					</div>

					<div className="form-group">
						<label htmlFor="passengerTotal">Passenger Total</label>
						<input type="text" className="form-control" id="passengerTotal" required value={vehicle.passengerTotal} onChange={handleInputChange} name="passengerTotal" />
					</div>

					<div className="form-group">
						<label htmlFor="noOfOwners">No.of Owners</label>
						<input type="text" className="form-control" id="noOfOwners" required value={vehicle.noOfOwners} onChange={handleInputChange} name="noOfOwners" />
					</div>

					<div className="form-group">
						<label htmlFor="color">color</label>
						<input type="text" className="form-control" id="color" required value={vehicle.color} onChange={handleInputChange} name="color" />
					</div>

					<div className="form-group">
						<label htmlFor="yearOfRegister">Year of Register</label>
						<input type="text" className="form-control" id="yearOfRegister" required value={vehicle.yearOfRegister} onChange={handleInputChange} name="yearOfRegister" />
					</div>

					<div className="form-group">
						<label htmlFor="yearOfManufac">Year of Manufacture</label>
						<input type="text" className="form-control" id="yearOfManufac" required value={vehicle.yearOfManufac} onChange={handleInputChange} name="yearOfManufac" />
					</div>

					<div className="form-group">
						<label htmlFor="VIN">Engine Number</label>
						<input type="text" className="form-control" id="VIN" required value={vehicle.VIN} onChange={handleInputChange} name="VIN" />
					</div>

					<div className="form-group">
						<label htmlFor="buyingPrice">Buying Price</label>
						<input type="text" className="form-control" id="buyingPrice" required value={vehicle.buyingPrice} onChange={handleInputChange} name="buyingPrice" />
					</div>

					<div className="form-group">
						<label htmlFor="commissioned">Commissioned or Not</label>
						<input type="text" className="form-control" id="commissioned" required value={vehicle.commissioned} onChange={handleInputChange} name="commissioned" />
					</div>

					<div className="form-group">
						<label htmlFor="commissionValue">Commission Value</label>
						<input type="text" className="form-control" id="commissionValue" required value={vehicle.commissionValue} onChange={handleInputChange} name="commissionValue" />
					</div>

					<div className="form-group">
						<label htmlFor="serviceCharges">Service Charges</label>
						<input type="text" className="form-control" id="serviceCharges" required value={vehicle.serviceCharges} onChange={handleInputChange} name="serviceCharges" />
					</div>

					<div className="form-group">
						<label htmlFor="sellingPrice">Selling Price</label>
						<input type="text" className="form-control" id="sellingPrice" required value={vehicle.sellingPrice} onChange={handleInputChange} name="sellingPrice" />
					</div>

					<div className="form-group">
						<label htmlFor="soldPrice">Sold Price</label>
						<input type="text" className="form-control" id="soldPrice" required value={vehicle.soldPrice} onChange={handleInputChange} name="soldPrice" />
					</div>

					<button onClick={saveVehicle} className="btn btn-success" style={{ margin: "5px 0" }}>
						Save
					</button>
					<button onClick={() => history.goBack()} className="btn btn-danger" style={{ margin: "5px" }}>
						Back
					</button>
				</div>
			)}
		</div>
	)
}

export default AddVehicle
