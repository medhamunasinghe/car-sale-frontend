import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import VehicleDataService from "../../services/ServiceVehicles"

const Transaction = props => {
	let history = useHistory()
	const initialTransactionState = {
		id: null,
		soldPrice: null
	}
	const [currentTransaction, setCurrentTransaction] = useState(initialTransactionState)
	const [message, setMessage] = useState("")

	const getTransaction = id => {
		VehicleDataService.get(id)
			.then(response => {
				setCurrentTransaction(response.data)
				console.log(response.data)
			})
			.catch(e => {
				console.log(e)
			})
	}

	const { id } = useParams()

	useEffect(() => {
		getTransaction(id)
	}, [id])

	const handleInputChange = event => {
		const { name, value } = event.target
		setCurrentTransaction({ ...currentTransaction, [name]: value })
	}

	const updateTransaction = () => {
		VehicleDataService.update(currentTransaction.id, currentTransaction.soldPrice)
			.then(response => {
				console.log(response.data)
				setMessage("The transaction was updated successfully!")
			})
			.catch(e => {
				console.log(e)
			})
	}

	return (
		<div style={{ marginTop: "100px" }}>
			{currentTransaction ? (
				<div className="edit-form">
					<h4>Update Transaction</h4>
					<form>
						<div className="form-group">
							<label htmlFor="id">Vehicle Id</label>
							<input type="text" className="form-control" id="id" name="id" value={currentTransaction.id} onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<label htmlFor="soldPrice">Sold Price</label>
							<input type="text" className="form-control" id="soldPrice" name="soldPrice" value={currentTransaction.soldPrice} onChange={handleInputChange} />
						</div>
					</form>

					<button type="submit" className="btn btn-success" onClick={updateTransaction} style={{ margin: "5px" }}>
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
				</div>
			)}
		</div>
	)
}

export default Transaction
