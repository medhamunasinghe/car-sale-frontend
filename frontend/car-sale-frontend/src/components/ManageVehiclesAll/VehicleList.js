import React, { useState, useEffect, useMemo, useRef } from "react"
import { Link, withRouter } from "react-router-dom"
import { useTable } from "react-table"
import VehicleDataService from "../../services/ServiceVehicles"

const VehicleList = props => {
	const [vehicles, setVehicles] = useState([])
	const vehiclesRef = useRef()

	vehiclesRef.current = vehicles

	useEffect(() => {
		retrieveVehicles()
	}, [])

	const retrieveVehicles = () => {
		VehicleDataService.getAll()
			.then(response => {
				setVehicles(response.data)
				console.log(response.data)
			})
			.catch(e => {
				console.log(e)
			})
	}

	const openVehicle = rowIndex => {
		const id = vehiclesRef.current[rowIndex].id

		props.history.push("/manage-vehicles-all/vehicle/" + id)
	}

	const deleteVehicle = rowIndex => {
		const id = vehiclesRef.current[rowIndex].id

		VehicleDataService.remove(id)
			.then(response => {
				props.history.push("/manage-vehicles-all/vehicle")

				let newVehicles = [...vehiclesRef.current]
				newVehicles.splice(rowIndex, 1)

				setVehicles(newVehicles)
			})
			.catch(e => {
				console.log(e)
			})
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
				Header: "Buying Price",
				accessor: "buyingPrice"
			},
			{
				Header: "Body Type",
				accessor: "bodyType"
			},
			{
				Header: "Commission Value",
				accessor: "commissionValue"
			},
			{
				Header: "Service Charges",
				accessor: "serviceCharges"
			},
			{
				Header: "Year of Register",
				accessor: "yearOfRegister"
			},
			{
				Header: "Year of Manufacture",
				accessor: "yearOfManufac"
			},
			{
				Header: "Actions",
				accessor: "actions",
				Cell: props => {
					const rowIdx = props.row.id
					return (
						<div>
							<span onClick={() => openVehicle(rowIdx)}>
								<i className="far fa-edit action mr-2"></i>
							</span>

							<span onClick={() => deleteVehicle(rowIdx)}>
								<i className="fas fa-trash action"></i>
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
		data: vehicles
	})

	return (
		<div className="list row">
			<div className="input-group mb-3">
				<div className="col-md-8">
					<Link to="/manage-vehicles-all/add-vehicles" style={{ padding: "10px", margin: "5px 0 5px", backgroundColor: "Green", color: "#fff" }}>
						Add Vehicle
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

export default withRouter(VehicleList)
