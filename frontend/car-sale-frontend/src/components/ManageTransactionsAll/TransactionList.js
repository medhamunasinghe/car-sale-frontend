import React, { useState, useEffect, useMemo, useRef } from "react"
import { Link, withRouter } from "react-router-dom"
import { useTable } from "react-table"
import VehicleDataService from "../../services/ServiceVehicles"

const TransactionList = props => {
	const [transactions, setTransactions] = useState([])
	const transactionsRef = useRef()

	transactionsRef.current = transactions

	useEffect(() => {
		retrieveTransactions()
	}, [])

	const retrieveTransactions = () => {
		VehicleDataService.getAll()
			.then(response => {
				setTransactions(response.data)
				console.log(response.data)
			})
			.catch(e => {
				console.log(e)
			})
	}

	const openTransaction = rowIndex => {
		const id = transactionsRef.current[rowIndex].id

		props.history.push("/manage-transactions-all/transaction/" + id)
	}

	const columns = useMemo(
		() => [
			{
				Header: "Id",
				accessor: "id"
			},
			{
				Header: "Vehicle Number",
				accessor: "vehicleNumber"
			},
			{
				Header: "Model",
				accessor: "model"
			},
			{
				Header: "Sold Price",
				accessor: "soldPrice"
			},
			{
				Header: "Actions",
				accessor: "actions",
				Cell: props => {
					const rowIdx = props.row.id
					return (
						<div>
							<span onClick={() => openTransaction(rowIdx)}>
								<i className="far fa-edit action mr-2"></i>
							</span>
						</div>
					)
				}
			}
		],
		[]
	)

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data: transactions
	})

	return (
		<div className="list row">
			<div className="input-group mb-3">
				<div className="col-md-8">
					<Link to="/manage-transactions-all/add-transaction" style={{ padding: "10px", margin: "5px 0 5px", backgroundColor: "Green", color: "#fff" }}>
						Add Transaction
					</Link>
				</div>
			</div>
			<div className="col-md-12 list">
				<table className="table table-striped table-bordered" {...getTableProps()}>
					<thead>
						{headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<th {...column.getHeaderProps()}>{column.render("Header")}</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row, i) => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map(cell => {
										return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									})}
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default withRouter(TransactionList)
