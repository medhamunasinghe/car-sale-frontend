import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import VehiclesDataService from "../../services/ServiceVehicles"

const AddTransaction = () => {
	let history = useHistory()
	const initialTransactionState = {
		id: null,
		vehicleNumber: "",
		model: "",
		soldPrice: null
	}
	const [transaction, setTransaction] = useState(initialTransactionState)
	const [saved, setSaved] = useState(false)

	const handleInputChange = event => {
		const { name, value } = event.target
		setTransaction({ ...transaction, [name]: value })
	}

	const saveTransaction = () => {
		var data = {
			id: transaction.id,
			vehicleNumber: transaction.vehicleNumber,
			model: transaction.model,
			soldPrice: transaction.soldPrice
		}

		VehiclesDataService.update(transaction.id, transaction.soldPrice)
			.then(response => {
				setTransaction({
					id: response.data.id,
					vehicleNumber: response.data.vehicleNumber,
					model: response.data.model,
					soldPrice: response.data.soldPrice
				})
				setSaved(true)
				console.log(response.data)
			})
			.catch(e => {
				console.log(e)
			})
	}

	const newTransaction = () => {
		setTransaction(initialTransactionState)
		setSaved(false)
	}

	return (
		<div className="submit-form">
			{saved ? (
				<div style={{ marginTop: "100px", width: "1000px", height: "900px" }}>
					<h4>Transaction Saved successfully!</h4>
					<button className="btn btn-success" onClick={newTransaction}>
						Add
					</button>
				</div>
			) : (
				<div style={{ marginTop: "100px" }}>
					<div className="form-group">
						<label htmlFor="id">Vehicle Id</label>
						<input type="text" className="form-control" id="id" required value={transaction.id} onChange={handleInputChange} name="id" />
					</div>

					<div className="form-group">
						<label htmlFor="vehicleNumber">Vehicle Number</label>
						<input type="text" className="form-control" id="vehicleNumber" required value={transaction.vehicleNumber} onChange={handleInputChange} name="vehicleNumber" />
					</div>

					<div className="form-group">
						<label htmlFor="model">Vehicle Model</label>
						<input type="text" className="form-control" id="model" value={transaction.model} onChange={handleInputChange} name="model" />
					</div>

					<div className="form-group">
						<label htmlFor="soldPrice">Sold Price</label>
						<input type="text" className="form-control" id="soldPrice" value={transaction.soldPrice} onChange={handleInputChange} name="soldPrice" />
					</div>

					<button onClick={saveTransaction} className="btn btn-success" style={{ margin: "5px 0" }}>
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

export default AddTransaction
