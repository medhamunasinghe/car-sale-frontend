import React, { useState, useEffect } from "react"
import VehicleDataService from "../../services/ServiceVehicles"
import { AgGridColumn, AgGridReact } from "ag-grid-react"
import "ag-grid-enterprise"
import "@ag-grid-community/core/dist/styles/ag-grid.css"
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css"

import { CSVLink } from "react-csv"

const Report = () => {
	const [gridApi, setGridApi] = useState(null)
	const [gridColumnApi, setGridColumnApi] = useState(null)
	const [rowData, setRowData] = useState([])

	const headers = [
		{ label: "Vehicle Id", key: "id" },
		{ label: "Vehicle Number", key: "vehicleNumber" },
		{ label: "Model", key: "model" },
		{ label: "Commission Value", key: "commissionValue" },
		{ label: "Service Charges", key: "serviceCharges" },
		{ label: "Buying Price", key: "buyingPrice" },
		{ label: "Sold Price", key: "soldPrice" }
	]

	const csvReport = {
		filename: "Report.csv",
		headers: headers,
		data: rowData
	}

	useEffect(() => {
		VehicleDataService.getAll()
			.then(response => {
				setRowData(response.data)

				console.log(response.data.buyingPrice)
			})
			.catch(e => {
				console.log(e)
			})
	}, [])

	// function calculateTransactionProfit() {
	// 	let transactionProfit = 0

	// 	rowData.forEach(row => {
	// 		console.log(row.buyingPrice)
	// 		if (row.buyingPrice === 0) {
	// 			transactionProfit = row.soldPrice - (row.buyingPrice + row.serviceCharges)
	// 			setRowData({ transactionProfit: this.transactionProfit })
	// 		} else {
	// 			transactionProfit = row.commissionValue
	// 			setRowData({ transactionProfit: this.transactionProfit })
	// 		}
	// 	})
	// }

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
				<div style={{ margin: "10px 0" }}>
					<CSVLink {...csvReport}>Export to CSV</CSVLink>
				</div>
				<div className="ag-theme-alpine ag-style">
					<AgGridReact defaultColDef={{ flex: 1 }} rowHeight={60} rowData={rowData}>
						<AgGridColumn field="id" headerName="Vehicle Id" sortable={true} filter={true} cellClass="vertical-middle" />
						<AgGridColumn field="vehicleNumber" headerName="Vehicle Number" sortable={true} filter={true} cellClass="vertical-middle" />
						<AgGridColumn field="model" headerName="Model" sortable={true} filter={true} cellClass="vertical-middle" />
						<AgGridColumn field="commissionValue" aggFunc={sumAggFunction} headerName="Commission Value" sortable={true} filter={true} cellClass="vertical-middle" />
						<AgGridColumn field="serviceCharges" aggFunc={sumAggFunction} headerName="Service Charges" sortable={true} filter={true} cellClass="vertical-middle" />
						<AgGridColumn field="buyingPrice" aggFunc={sumAggFunction} headerName="Buying Price" sortable={true} filter={true} cellClass="vertical-middle" />
						<AgGridColumn field="soldPrice" aggFunc={sumAggFunction} headerName="Sold Price" sortable={true} filter={true} cellClass="vertical-middle" />
					</AgGridReact>
				</div>
			</div>
		</div>
	)
}

function sumAggFunction(params) {
	let sum = 0
	params.values.forEach(value => (sum += value))
	return sum
}

export default Report
